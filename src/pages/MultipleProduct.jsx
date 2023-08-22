import { Card, Typography, Row, Col, Button, Divider, Table } from "antd";
import { FileAddOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { upload_CSV } from "../reducers/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Papa from 'papaparse';

function MultipleProduct() {
    const [data, setData] = useState([]);
    const [file, setFile] = useState([]);

    function handleUpload(file) {
        if (file) {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    setData(results.data);
                },
            });
            setFile(file)
        }
    };

    const dispatch = useDispatch();

    const csvProps = {
        accept: '.csv',
        beforeUpload: (file) => {
            const isCSV = file.type === 'text/csv';
            if (!isCSV) {
                message.error('You can only upload CSV files!');
                return false;
            }
            handleUpload(file);
            return false;
        },
    };

    const columns = [
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Product Name
                </span>
            ),
            dataIndex: 'product_name',
            key: 'product_name',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Original Price
                </span>
            ),
            dataIndex: 'original_price',
            key: 'original_price',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Markup Price
                </span>
            ),
            dataIndex: 'markup_price',
            key: 'markup_price',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Category
                </span>
            ),
            dataIndex: 'product_category',
            key: 'product_category',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Expiration Date
                </span>
            ),
            dataIndex: 'expiration_date',
            key: 'expiration_date',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Quantity
                </span>
            ),
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Variation
                </span>
            ),
            dataIndex: 'variation',
            key: 'variation',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
        {
            title: (
                <span
                    style={{
                        font: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#3B3A82',
                        justifyContent: 'center',
                    }}
                >
                    Updated By
                </span>
            ),
            dataIndex: 'updated_by',
            key: 'updated_by',
            align: 'center',
            render: (text) => (
                <span style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '36px',
                    color: '#38384D',
                }}>{text}</span>
            )
        },
    ];


    return (
        <div style={{ padding: '20px' }}>
            <Row justify="center" style={{ marginBottom: '40px' }}>
                <Col xs={24} sm={24} md={12} style={{ marginBottom: '20px' }}>
                    <Card style={{ maxWidth: '800px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
                        <Typography.Title level={2} style={{ font: "Poppins", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "48px", textAlign: "center", color: "#30304D" }}>
                            CREATE MULTIPLE PRODUCTS
                        </Typography.Title>
                        <Typography.Text style={{ font: 'Poppins', fontStyle: 'normal', fontWeight: 700, fontSize: '22px', display: 'flex', color: '#30304D', marginLeft: '50px' }}>
                            Upload CSV
                        </Typography.Text>
                        <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px' }} />
                        <Card bordered={true} style={{ width: '100%', margin: '20px auto', textAlign: 'center' }}>
                            <Upload {...csvProps}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FileAddOutlined style={{ color: '#53B8F1', fontSize: '5em' }} />
                                </div>
                                <br />
                                <Typography.Title level={4} style={{ color: '#53B8F1', margin: 0 }}>Select a CSV file to upload</Typography.Title>
                                <Typography.Text style={{ color: '#7F7F99' }}>or drag and drop here</Typography.Text>
                            </Upload>
                        </Card>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={20} lg={18} xl={16} style={{ margin: '10px' }}>
                    {data.length > 0 && (
                        <Card
                            style={{
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                                borderRadius: '10px'
                            }}
                        >
                            <Typography.Title level={4} style={{ color: '#30304D' }}>
                                Preview
                            </Typography.Title>
                            <div style={{ overflowX: 'auto' }}>
                                <Table
                                    dataSource={data}
                                    columns={columns}
                                    pagination={false}
                                    scroll={{ x: true }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                                <Button
                                    onClick={() => {
                                        const bodyFormData = new FormData();
                                        bodyFormData.append('file', file);
                                        dispatch(upload_CSV(bodyFormData));
                                    }}
                                    style={{
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
                                        width: '150px'
                                    }}
                                >
                                    ADD PRODUCTS
                                </Button>
                            </div>
                        </Card>
                    )}
                </Col>
            </Row>
        </div>

    );
}

export default MultipleProduct;    
