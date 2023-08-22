import React from 'react';
import { Row, Col, Card, Typography } from 'antd'
import { Line } from '@ant-design/charts';

import './net.css'
const data = [
    { month: 'SEP 2022', netIncome: 0 },
    { month: 'OCT 2022', netIncome: 0 },
    { month: 'NOV 2022', netIncome: 1 },
    { month: 'DEC 2022', netIncome: 2 },
    { month: 'JAN 2023', netIncome: 5 },
    { month: 'FEB 2023', netIncome: 31 },
];
const NetIncome = () => {
    const config = {
        data,
        xField: 'month',
        yField: 'netIncome',
        height: 400,
        title: {
            text: 'Net Income Per Month',
        },
        color: 'rgba(27, 89, 248, 1)',
        lineStyle: {
            lineWidth: 8, // Add a lineWidth property to set the width of the line chart
        },
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Card style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                background: '#F9F9FF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '24px',
                width: '60%',
                marginTop: '1%',
                textAlign: 'center'
            }}>
                <Row justify="center" align="middle">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card style={{
                            backgroundColor: '#FFFFFF',
                            background: '#F9F9FF',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                            borderRadius: '24px',
                            width: '100%',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px 10px' // added padding to adjust for mobile screens
                        }}>
                            <Typography.Text
                                style={{
                                    font: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '1.5rem',
                                    color: '#3B3A82',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                    top: 15,
                                    alignItems: 'center'
                                }}
                            >
                                NET Income
                            </Typography.Text>
                            <Line
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    margin: '0 auto',
                                    maxWidth: '500px', // added max-width to limit chart size on large screens
                                    justifyContent: 'center',
                                    marginTop: 50,
                                }}
                                {...config}
                            />

                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div style={{
                            marginTop: 50,
                            backgroundColor: '#ffffff',
                            border: '1px solid #dddddd',
                            padding: 20,
                            textAlign: 'center',
                            background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #9E1EB3 97.24%)',
                            borderRadius: 10,
                            width: '100%',
                            height: 'auto',
                        }}>
                            <h2 className="net-income-month" style={{ fontSize: '1.25rem' }}>NET Income</h2>
                            <p className="net-income-amount" style={{ fontSize: '1.5rem', margin: '10px 0' }}>₱31</p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>

    );
};
export default NetIncome;
