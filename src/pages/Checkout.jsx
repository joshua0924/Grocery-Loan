import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCart, decreaseCart,
  getOne,
} from '../reducers/productSlice';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row, Card, Typography, Table, InputNumber, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { TbCircle1Filled, TbCircle2Filled, TbChevronRight } from "react-icons/tb";
const StyledHeader = styled.header`
  background-image: linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%);
  border-bottom: 0.5px solid #656565;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 24px;
  border: 0.5px solid #9494b2;

  &:focus {
    outline: none;
    border-color: #9494b2;
    box-shadow: 0 0 0 2px #e6f7ff;
  }
`;
const Checkout = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const { product, cartItems } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [tenderedAmount, setTenderedAmount] = useState(0);
  const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.markup_price), 0);
  const change = tenderedAmount - totalPrice;
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(increaseCart(product));
  };
  const handleTenderedAmountChange = (value) => {
    setTenderedAmount(value);
  };
  useEffect(() => {
    dispatch(getOne());
  }, [product, dispatch]);
  return (
    <>
      <StyledHeader>
        <Row justify="start" style={{ marginTop: '10px', marginLeft: '5px' }}>
          <Button style={{ background: '#DBDFFD' }}>
            <Link to="/purchase">
              <LeftOutlined style={{ color: '#1A2163' }} />
            </Link>
          </Button>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', font: "Poppins", fontWeight: 'bold', marginLeft: '10px', fontSize: '20px', marginTop: '1px' }}>MAKE PURCHASE</p>
        </Row>
      </StyledHeader>
      <Row justify='start' style={{ marginLeft: '25px' }}>
  <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={6}>
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <Link to='/cart'>
        <h3 style={{
          display: 'flex',
          alignItems: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '25px',
          lineHeight: '50px',
          color: '#3B3A82',
          textDecoration: 'none',
        }}>
          <TbCircle1Filled style={{ color: '#3B3A82' }} /> &nbsp; Payment
        </h3>
      </Link> &nbsp;
      &nbsp; &nbsp; <TbChevronRight /> &nbsp;
      <Link to='/cartreceipt'>
        <h3 style={{
          display: 'flex',
          alignItems: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '25px',
          lineHeight: '50px',
          color: '#D6D6E5',
          textDecoration: 'none',
        }}>
          <TbCircle2Filled style={{ color: '#D6D6E5' }} /> &nbsp; Receipt
        </h3>
      </Link>
    </div>
  </Col>
</Row>

    <div style={{
      marginLeft: '25px',
      textAlign: 'left',
      font: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '25px',
      lineHeight: '48px',
      color: '#6A6A80',
    }}>
      {`${today}`}
    </div>
 

    <Row justify="center" style={{ marginTop: "30px" }}>
  <Col xs={24} sm={24} md={18} lg={18} xl={18}>
    <Card style={{ maxWidth: "1000px" }}>
      <Typography.Title level={1} style={{ color: "black", textAlign: "left" }}>
        Your Order
      </Typography.Title>
      <Table
        dataSource={cartItems || [{}]}
        style={{ maxWidth: "900px", marginTop: "20px" }}
        pagination={false}
      >
        <Table.Column
          title=""
          dataIndex="image"
          key="image"
          render={(text, record) => (
            <img
              alt={record.image}
              src={ (`data:image/jpeg;base64, ${record.buffer_file}`) || "https://picsum.photos/50/50/"}
              width={50}
              height={50}
            />
          )}
        />
        <Table.Column title="" dataIndex="product_name" key="title" />
        <Table.Column
          title=""
          dataIndex="markup_price"
          key="markup_price"
          style={{ fontWeight: "bold" }}
          render={(text) => <span>₱{text}</span>}
        />
        <Table.Column
          title=""
          dataIndex="quantity"
          key="cartQuantity"
          render={(text, record) => (
            <>
              <Button
                style={{ borderColor: "gray" }}
                onClick={() => handleDecreaseCart(record)}
              >
                -
              </Button>
              &nbsp; {record.quantity} &nbsp;
              <Button
                style={{ borderColor: "black" }}
                onClick={() => handleIncreaseCart(record)}
              >
                +
              </Button>
            </>
          )}
        />
      </Table>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Typography.Text style={{ fontWeight: "bold" }}>
            Total: ₱{totalPrice.toFixed(2)}
          </Typography.Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography.Text style={{ fontWeight: "bold" }}>
            Tendered Amount:
          </Typography.Text>
          <InputNumber min={0} onChange={handleTenderedAmountChange} style={{ width: "160px" }} />
        </div>
        <Typography.Text style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          Please enter customer tendered amount
        </Typography.Text>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography.Text style={{ fontWeight: "bold" }}>Change:</Typography.Text>
          <Typography.Text style={{ fontWeight: "bold" }}>₱{change.toFixed(2)}</Typography.Text>
        </div>
        <Button
          style={{
            background:
              "linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "15px",
            textAlign: "center",
            color: "#E8E8E8",
            display: "block",
            marginTop: "50px",
            height: "40px",
            width: "135px",
            alignSelf: "flex-end",
          }} type="primary">CONFIRM</Button>
        </div>
        </Card>
     </Col>
     </Row>

    </>
  );
};
export default Checkout;
