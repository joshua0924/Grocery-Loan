import React from 'react';
import { DatePicker, Table, Button, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined, RightOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Transactions = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const columns = [
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Time</span>,
      key: 'time',
      dataIndex: 'time',
      render: (time) => <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '36px',
        color: '#3B3A82',
      }}>{new Date(time).toLocaleTimeString()}</span>
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Order</span>,
      dataIndex: 'title',
      key: 'productname',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{record.title}</span>
      ),
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Price </span>,
      dataIndex: 'price',
      key: 'price',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`(₱${text})`}</span>
      ),
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Quantity</span>,
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <span style={{
          display: 'flex',
          justifyContent: 'center',
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`X${Math.floor(Math.random()) + 1}`}</span>
      ),
    },
    {
      title: <span style={{
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '17px',
        lineHeight: '33px',
        display: 'flex',
        alignItems: 'center',
        color: '#3B3A82'
      }}>Total</span>,
      key: 'total',
      render: (text, record) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{`₱${record.price * record.quantity}`}</span> // add bold font weight to total
      ),
    },
    {
      key: 'action',
      render: (text) => (
        <Button style={{ color: '#3B3A82' }} type="link" >
          <RightOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>

      <div style={{
        width: '100%', // Updated width for mobile screens
        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '2em', // Updated font size using relative unit
        color: '#30304D',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
      }}>
        <span>
          {today}
        </span>
      </div>

      <br />
      <Row justify="center">
        <Col xs={24} lg={16}>
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center', marginTop: '10px' }}>
            <DatePicker
              id={styles["input123"]}
              style={{
                width: '50%', // Updated width for mobile screens
                height: 48,
                background: '#5250B4',
                borderRadius: '10px',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 13,
                lineHeight: 27,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                justifyContent: 'center',
              }}
              suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
              defaultValue={dayjs("01/01/2023", dateFormatList[0])}
              format={dateFormatList[0]}
            />
            <Button
              style={{
                width: '50%', // Updated width for mobile screens
                height: 48,
                background: '#5250B4',
                borderRadius: '10px',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 15,
                lineHeight: 27,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                justifyContent: 'center',

              }}
            >
              EXPORT
            </Button>
          </div>
        </Col>
      </Row>

      <br></br>

      <Table
  id="receipt-info"
  style={{
    backgroundColor: '#FFFFFF',
    width: '75%', // Updated width for mobile screens
    background: '#F9F9FF',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }}
  columns={columns}
  rowKey="id"
  pagination={false}
  scroll={{ x: true }} // Added horizontal scrolling on small screens
/>




    </>
  );
};
export default Transactions;
