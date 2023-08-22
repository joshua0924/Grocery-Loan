import { Card, Table, Button, InputNumber, Row, Col } from 'antd';
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Link } from 'react-router-dom';
const Payment = () => {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.products);
    const [tenderedAmount, setTenderedAmount] = useState(0);
    const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    const change = tenderedAmount - totalPrice;
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const handleTenderedAmountChange = (value) => {
        setTenderedAmount(value);
    };
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Row gutter={[16, 16]} justify="center" align="middle">
                <Col>
                    <Link to='/makeorders'>
                        <h3 style={{
                            display: 'flex',
                            alignItems: 'center',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '50px',
                            color: '#D6D6E5'
                        }}>
                            <TbCircle1Filled style={{ color: '#D6D6E5' }} /> &nbsp; Make orders
                        </h3>
                    </Link>
                </Col>
                <Col>
                    <TbChevronRight style={{ fontSize: '25px', color: '#D6D6E5' }} />
                </Col>
                <Col>
                    <Link to='/payment'>
                        <h3 style={{
                            display: 'flex',
                            alignItems: 'center',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '50px',
                            color: '#3B3A82'
                        }}>
                            <TbCircle2Filled style={{ color: '#3B3A82' }} /> &nbsp; Payment
                        </h3>
                    </Link>
                </Col>
                <Col>
                    <TbChevronRight style={{ fontSize: '25px', color: '#D6D6E5' }} />
                </Col>
                <Col>
                    <Link to='/receipt'>
                        <h3 style={{
                            display: 'flex',
                            alignItems: 'center',
                            font: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '50px',
                            color: '#D6D6E5'
                        }}>
                            <TbCircle3Filled style={{ color: '#D6D6E5' }} /> &nbsp; Receipt
                        </h3>
                    </Link>
                </Col>
            </Row>

            <Row align="middle" gutter={[16, 16]}>
                <Col style={{ marginLeft: '35%' }}>
                    <div style={{
                        textAlign: 'left',
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '48px',
                        color: '#6A6A80',
                    }}>
                        {`${today}`}
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={24} sm={24} md={16} lg={12} xl={8}>
                    <Card style={{ backgroundColor: '#FFFFFF', }}>
                        <Table dataSource={cartItems} style={{ maxWidth: '150%', margin: '20px 0' }}>
                            <Table.Column title="" key="image" render={(text, record) => (
                                <img alt={record.time} src={record.image} width={50} />
                            )} />
                            <Table.Column title="" dataIndex="title" key="title" />
                            <Table.Column
                                title=""
                                dataIndex="price"
                                key="price"
                                style={{ fontWeight: 'bold' }}
                                render={(text) => (
                                    <span>
                                        ₱{text}
                                    </span>
                                )}
                            />
                            <Table.Column
                                title=""
                                key="cartQuantity"
                                render={(text, record) => (
                                    <>
                                        x{record.quantity}
                                    </>
                                )}
                            />
                            <Table.Column
                                title=""
                                key="cartTotal"
                                render={(text, record) => (
                                    <>
                                        &#8369;{record.quantity * record.price}
                                    </>
                                )}
                            />
                            <Table.Column
                                key='action'
                                render={(text, record) => (
                                    <Button
                                        style={{ color: '#3B3A82' }}
                                        type='link'
                                        danger

                                    >

                                    </Button>
                                )}
                            />
                        </Table>
                        <Divider />
                        <Row justify="end" style={{ marginBottom: '24px' }}>
                            <Col xs={24} md={12}>
                                <div style={{
                                    font: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    lineHeight: '48px',
                                    color: '#38384D',
                                    textAlign: 'right'
                                }}>
                                    TOTAL:  ₱{totalPrice.toFixed(2)}
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <div style={{ textAlign: 'left', font: 'Poppins', fontWeight: 500, fontSize: '18px', lineHeight: '42px', color: '#555566' }}>
                                    Tendered Amount:
                                    <div style={{ font: 'Poppins', fontWeight: 400, fontSize: '14px', lineHeight: '48px', color: '#9494B3' }}>
                                        Please enter customer tendered amount
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                <InputNumber
                                    style={{ left: 140, border: '1px solid #A9A9CC', borderRadius: '12px', height: '40px', width: '50%', alignItems: 'center', textAlign: 'center', font: 'Poppins', fontWeight: 600, fontSize: '14px', lineHeight: '42px' }}
                                    placeholder="₱0.00"
                                    min={0}
                                    onChange={handleTenderedAmountChange}
                                />
                            </Col> </Row>
                            <Row gutter={[16, 16]} justify="space-between">
                                <Col xs={24} md={12}>
                                    <div style={{ textAlign: 'left', fontWeight: 500, fontSize: '18px', lineHeight: '42px', color: '#555566' }}>
                                        Change:
                                    </div>
                                </Col>
                                <Col xs={24} md={12}>
                                    <div style={{ textAlign: 'right', fontWeight: 600, fontSize: '18px', lineHeight: '48px', color: '#38384D' }}>
                                        ₱{change.toFixed(2)}
                                    </div>
                                </Col>
                            </Row>
                       
                            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
            }}>
              <Link to='/receipt'>
                <Button style={{
                  background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
                  borderRadius: '50px',
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '25px',
                  textAlign: 'center',
                  color: '#E8E8E8',
                  height: '40px',
                  width: '135px'
                }} type="primary">CONFIRM</Button>
              </Link>
            </div>
                    </Card>
                </Col>
            </Row>

        </>
    );
};
export default Payment;
