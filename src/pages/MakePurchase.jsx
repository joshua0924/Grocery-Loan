import React from 'react';
import { Button, Row, Col } from 'antd';
import image from '../pages/image.png';
import { Link } from 'react-router-dom';
function MakePurchase() {
  return (
    <>
      <div style={{
        position: 'absolute',
        left: '20%',
        marginTop: '20px',
        width: '50%',
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '35px',
        color: '#3B3A82',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <span>
          Make Purchase
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }}>
        <img
          src={image}
          alt="scan"
          style={{
            maxWidth: '100%',
            marginTop: '110px',
            marginBottom: '20px',
            width: '665px', height: 'auto', left: '50%', 
          }}
        />
      </div>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button
            style={{
              width: '100%',
              height: '100px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '27px',
              color: '#38384D',
              borderRadius: '24px',
            }}
          >
            <Link to="/make">Manual Purchase</Link>
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>

          <Button
            style={{
              width: '100%',
              height: '100px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '27px',
              color: '#38384D',
              borderRadius: '24px',
            }}
          >
            <Link to='/makeorders'>Scan QR Code  </Link>
          </Button>

        </Col>
      </Row>
    </>
  );
}
export default MakePurchase;
