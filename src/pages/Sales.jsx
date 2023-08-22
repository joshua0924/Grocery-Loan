import React, { useState } from 'react';
import { DatePicker, Card, Button, Typography, Row, Col } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from './Transactions.module.css';
import './net.css'
import SalesReport from './SalesReport';
dayjs.extend(customParseFormat);
const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const Sales = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const [todayClicked, setTodayClicked] = useState(true);
  const [weekClicked, setWeekClicked] = useState(false);
  const [monthClicked, setMonthClicked] = useState(false);

  const handleClick = (button) => {
    if (button === 'today') {
      setTodayClicked(true);
      setWeekClicked(false);
      setMonthClicked(false);
    } else if (button === 'week') {
      setTodayClicked(false);
      setWeekClicked(true);
      setMonthClicked(false);
    } else if (button === 'month') {
      setTodayClicked(false);
      setWeekClicked(false);
      setMonthClicked(true);
    }
  };

  const { Text } = Typography;
  return (
    <>

      <Row justify="center">
        <Col xs={24} sm={12} lg={16}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Col span={18} style={{ marginRight: '2%' }}>
              <DatePicker
                id={styles["input123"]}
                style={{
                  width: '60%',
                  height: 48,
                  background: '#5250B4',
                  borderRadius: '10px',
                  font: 'Poppins',
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
                defaultValue={dayjs("01/01/2023", dateFormatList[0])}
                format={dateFormatList[0]}
              />
            </Col>
            <Col span={6}>
              <Button
                style={{
                  width: '100%',
                  height: 48,
                  background: '#5250B4',
                  borderRadius: '10px',
                  font: 'Poppins',
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
            </Col>
          </div>
        </Col>
      </Row>
      <Card style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        background: '#F9F9FF',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        borderRadius: '24px',
        width: '80%',
        height: 'auto',
        margin: '50px auto',
        padding: '30px',
        boxSizing: 'border-box'
      }}>
        <Row justify="center" align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Button
              onClick={() => handleClick('today')}
              style={{
                display: 'flex',
                height: '40px',
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: todayClicked ? '#F9F9FF' : '#A9A9CC',
                background: todayClicked ? '#5250B4' : 'none',
                borderRadius: '20px',
                margin: '0 auto 16px'
              }}
            >
              &nbsp; Today
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              onClick={() => handleClick('week')}
              style={{
                display: 'flex',
                height: '40px',
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: weekClicked ? '#F9F9FF' : '#A9A9CC',
                background: weekClicked ? '#5250B4' : 'none',
                borderRadius: '20px',
                margin: '0 auto 16px'
              }}
            >
              &nbsp;Next week
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              onClick={() => handleClick('month')}
              style={{
                display: 'flex',
                height: '40px',
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '50px',
                color: monthClicked ? '#F9F9FF' : '#A9A9CC',
                background: monthClicked ? '#5250B4' : 'none',
                borderRadius: '20px',
                margin: '0 auto 16px'
              }}
            >
              This Month
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}  align="middle">
          <Col span={24} md={12}>
            <div style={{
              marginTop: '30px',
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '28px',
              color: '#30304D',
              textAlign: 'left',
              marginBottom: '20px'
            }}>
              <span>{today}</span>
            </div>

            <div style={{ textAlign: 'left' }}>
              <Text style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 20,
                color: '#30304D'
              }}>Sales Report</Text>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24} md={12} style={{ marginTop: 40 }}>
            <SalesReport />
          </Col>
          <Col xs={24} md={12} style={{ marginTop: 40 }}>
            <h2 style={{
              font: '20px',
              padding: 20,
              textAlign: 'left',
              marginLeft: 30,
              marginBottom: 5
            }}>Details</h2>
            
              <Col xs={20} md={10} style={{ marginLeft: 50, marginBottom: 10 }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dddddd',
                  padding: 20,
                  textAlign: 'center',
                  background: 'linear-gradient(258.36deg, #25B054 1.29%, #1A5C61 97.24%)',
                  borderRadius: 10,
                  width:'100%',
                  height: 100,
                }}>
                  <h2 className="net-income-month">TOTAL SALES</h2>
                  <p className="net-income-amount">₱1,327</p>
                </div>
              </Col>
              <Col xs={20} md={10} style={{ marginLeft: 50,  marginBottom: 10 }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dddddd',
                  padding: 20,
                  textAlign: 'center',
                  background: 'linear-gradient(258.36deg, #FFAA2C 1.29%, #C73C11 97.24%)',
                  borderRadius: 10,
                  height: 100,
                }}>
                  <h2 className="net-income-month">TRANSACTIONS</h2>
                  <p className="net-income-amount">7</p>
                </div>
              </Col>
              <Col xs={20} md={10} style={{ marginLeft: 50,  marginBottom: 10 }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dddddd',
                  padding: 20,
                  textAlign: 'center',
                  background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
                  borderRadius: 10,
                  height: 100,
                }}>
                  <h2 className="net-income-month">TOTAL EXPENSES</h2>
                  <p className="net-income-amount">₱1,327</p>
                </div>
              </Col>
            
          </Col>
        </Row>

      </Card>
    </>
  );
};
export default Sales;
