import { DatePicker, Card, Table, Button, Modal, Divider, Row, Col } from 'antd';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { getUserlogs, getUserlogsDate } from '../reducers/usersAPI';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const User = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.userlogs);


  const handleDateChange = (date) => {
    const [start, end] = date.map((date) => date.format("YYYY-MM-DD"));
    dispatch(getUserlogsDate({ start, end }));
  };

  const showModal = (record) => {
    setSelectedRow(record);
    setVisible(true);
  };
  const handleOk = () => {
    setSelectedRow(null);
    setVisible(false);
  };
  const handleCancel = () => {
    setSelectedRow(null);
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getUserlogs());
  }, [dispatch]);
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
      dataIndex: 'time',
      key: 'time',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Date</span>,
      dataIndex: 'date',
      key: 'date',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>User ID</span>,
      dataIndex: 'user_id',
      key: 'user_id',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>First Name</span>,
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Last Name</span>,
      dataIndex: 'last_name',
      key: 'last_name',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '36px',
          color: '#3B3A82',
        }}>{text}</span>
      )
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
      }}>Actions</span>,
      key: 'actions',
      render: (record) => (
        <EyeOutlined onClick={() => showModal(record)} style={{ fontSize: '24px', color: '#3B3A82' }} />
      ),
    },
  ];


  const handlePrint = () => {
    const receiptElement = document.getElementById('receipt-info');
    const printWindow = window.open('', 'Print', 'height=600,width=800');
    printWindow.document.write(receiptElement.innerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };


  return (
    <>
      <div style={{

        font: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '28px',
        color: '#30304D',
        textAlign: 'center',
        margin: 'auto',
        padding: '20px 0'
      }}>
        <span>{today}</span>
      </div>

      <Row justify="center">
  <Col xs={24} lg={8}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <RangePicker
        id="input123"
        style={{
          width: '100%',
          height: 48,
          maxWidth: 400,
          margin: '0 auto',
          background: '#5250B4',
          borderRadius: '10px',
          font: 'Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 27,
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          justifyContent: 'center',
        }}
        suffixIcon={<CalendarOutlined style={{ color: '#FFFFFF' }} />}
        defaultValue={[dayjs('01/01/2023', dateFormatList[0]), dayjs('01/01/2023', dateFormatList[0])]}
        onChange={handleDateChange}
      />
    </div>
  </Col>
  <Col xs={24} lg={8}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onClick={handlePrint}
        style={{
          width: '50%',
          height: 48,
          maxWidth: 400,
          margin: '0 auto',
          background: '#5250B4',
          borderRadius: '10px',
          font: 'Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 18,
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
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <Card id="receipt-info"
          style={{

            justifyContent: 'center',
            maxWidth: '100%',
            alignItems: 'center',
            width: 1000,
            background: '#F9F9FF',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            borderRadius: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }}>
            <Table columns={columns} dataSource={user} scroll={{ x: 'max-content', y: 'auto' }} />
          </div>
        </Card>
        <Modal
          title=""
          open={visible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
              marginBottom: '0px'
            }}>
              ACTIVITY
            </p>
          </div>
          <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px', marginTop: '0px' }} />
          <p style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            color: '#30304D',
            marginBottom: '0px'
          }}>{selectedRow && selectedRow.first_name}  {selectedRow && selectedRow.last_name}</p>
          <p style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            color: '#656565',
            marginTop: '0px'
          }}>
            <br>
            </br>UserID: {selectedRow && selectedRow.user_id}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '27px',
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
            }}>
              {selectedRow && selectedRow.date} | {selectedRow && selectedRow.time} : {selectedRow && selectedRow.activity}
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default User;