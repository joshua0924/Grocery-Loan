import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import QRCode from 'qrcode.react';
import scanImage from './scan.png';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const h1Styles = {
  font: 'Poppins',
  color: '#3B3A82',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '45px'
};
const h2Styles = {
  font: 'Poppins',
  color: '#30304D',
  textAlign: 'left',
  marginBottom: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '42px',
};
function ScanQrCode() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [qrCodeValue] = useState('');
  const showModal = () => {
    setIsModalVisible(true);
    setProductDetails({
      name: 'Sample Product',
      price: '$10.00',
      description: 'This is a sample product description',
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div style={{
        position: 'absolute',
        left: '20%',
        marginTop: '10px',
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
          Scan Qr Code
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }}>
        <img
          src={scanImage}
          alt="scan"
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '80px'
          }}
        />
      </div>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button
            onClick={showModal}
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
            View Product Details
          </Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link to='/makeorders'>
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
              Make Orders
            </Button>
          </Link>
        </Col>
      </Row>
      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width={900}
        style={{  alignItems: 'center', justifyContent: 'center' }}
      >

        <div style={{
          display: 'flex',
          alignItems: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '12px',
          lineHeight: '30px',
          color: '#9494B3',
        }}>
          <h3 style={{ color: '#9494B2', font: 'Poppins', cursor: 'pointer' }} onClick={handleCancel}>Scan QR Code</h3>
          &nbsp; <FaAngleRight />  &nbsp;
          <h3>View Product Details</h3>
        </div>
        <Row>
          <Col xs={24} md={12}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <QRCode value={qrCodeValue} />
              <h2 style={{ marginTop: '20px' }}>{productDetails.name}</h2>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ padding: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)', background: '#F9F9FF', borderRadius: '24px', height: '475px' }}>
              <h1 style={h1Styles}>Details:</h1>
              <h1 style={h2Styles}>Price:</h1>
              <h1 style={h2Styles}>Category:</h1>
              <h1 style={h2Styles}>Expiration Date:</h1>
              <h1 style={h2Styles}>Quantity:</h1>
              <h1 style={h2Styles}>Created by:</h1>
              <h1 style={h2Styles}>Updated at:</h1>
              <h1 style={h2Styles}>Updated by:</h1>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
export default ScanQrCode;

