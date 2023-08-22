import { useDispatch, useSelector } from 'react-redux';
import {
    getOne,
} from '../reducers/productSlice';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Row, Card, Typography, Table, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { TbCircle1Filled, TbCircle2Filled, TbChevronRight } from "react-icons/tb";
import { updateReceiptNumber } from '../reducers/receiptSlice';
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
const CheckRec = () => {
    const now = new Date();
    const currentDateTime = now.toLocaleString(); // e.g. "3/14/2023, 3:30:15 PM"
    const { product, cartItems } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [tenderedAmount] = useState(0);
    const totalPrice = cartItems.reduce((acc, product) => acc + (product.quantity * product.markup_price), 0);
    const change = tenderedAmount - totalPrice;
    const receiptNumber = useSelector(state => state.receipt.receiptNumber);
    useEffect(() => {
        dispatch(getOne(), updateReceiptNumber());
    }, [product, dispatch]);

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
                                color: '#D6D6E5',
                                textDecoration: 'none',
                            }}>
                                <TbCircle1Filled style={{ color: '#D6D6E5' }} /> &nbsp; Payment
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
                                color: '#3B3A82',
                                textDecoration: 'none',
                            }}>
                                <TbCircle2Filled style={{ color: '#3B3A82' }} /> &nbsp; Receipt
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
                {`${currentDateTime}`}
            </div>

            <Row justify="center" style={{ marginTop: "30px" }}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Card id="receipt-info" style={{ maxWidth: '1000px' }}>
                        <Typography.Title level={1} style={{ color: "black", textAlign: "left" }} > ₱{totalPrice.toFixed(2)} Payment</Typography.Title>
                        <Table dataSource={cartItems || [{}]} style={{ maxWidth: "900px", marginTop: "20px" }}>
                            <Table.Column title="" key="image" render={(text, record) => (
                                <img alt={record.image} src={(`data:image/jpeg;base64, ${record.buffer_file}`) || "https://picsum.photos/50/50/"} width={50} height={50} />
                            )} />
                            <Table.Column title="" dataIndex="product_name" key="title" />
                            <Table.Column
                                title=""
                                dataIndex="markup_price"
                                key="markup_price"
                                style={{ fontWeight: 'bold' }}
                                render={(text) => (
                                    <span>
                                        ₱{text}
                                    </span>
                                )}
                            />
                            <Table.Column title="" dataIndex="quantity" key="cartQuantity" render={(text, record) => (
                                < >
                                    x{record.quantity}
                                </>
                            )} />
                            <Table.Column title="" key="cartQuantity" render={(text, record) => (
                                < >
                                    &#8369;{record.quantity * record.markup_price}
                                </>
                            )} />
                        </Table>
                        <br /><br />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Total: ₱{totalPrice.toFixed(2)}</Typography.Text>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Tendered Amount:</Typography.Text>
                                <Typography.Text style={{ width: '200px', textAlign: 'right', }} > {tenderedAmount}</Typography.Text>
                            </div>
                            <Typography.Text style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>Please enter customer tendered amount</Typography.Text>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Change:</Typography.Text>
                                <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>₱{change.toFixed(2)}</Typography.Text>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold' }}>Cash:</Typography.Text>
                                <div style={{ textAlign: 'right', width: '200px' }}>
                                    <Typography.Text>{tenderedAmount}</Typography.Text>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            {`${currentDateTime}`}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography.Text style={{ font: 'Poppins', fontWeight: 'bold', color: 'red' }}>Receipt #{receiptNumber}</Typography.Text>
                        </div>
                        <br />
                        <br />
                        <Row justify="space-between" align="middle">
                            <Col xs={12} sm={12} md={8}>
                                <Button
                                    onClick={handlePrint}
                                    style={{
                                        background: "#FFFFFF",
                                        border: "4px solid #5250B4",
                                        borderRadius: "50px",
                                        font: "Poppins",
                                        fontStyle: "normal",
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                        textAlign: "center",
                                        color: "#5250B4",
                                        height: "40px",
                                        width: "100%",
                                        maxWidth: "145px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    PRINT
                                </Button>
                            </Col>
                            <Col xs={12} sm={12} md={8} style={{ textAlign: "right" }}>
                                <Button
                                    style={{
                                        background:
                                            "linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)",
                                        borderRadius: "50px",
                                        font: "Poppins",
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "15px",
                                        lineHeight: "25px",
                                        textAlign: "center",
                                        color: "#E8E8E8",
                                        height: "40px",
                                        width: "100%",
                                        maxWidth: "135px",
                                        marginBottom: "10px",

                                    }}
                                    type="primary"
                                >
                                    CONFIRM
                                </Button>
                            </Col>
                        </Row>



                    </Card>
                </Col></Row>

        </>
    );
};
export default CheckRec;
