import { Card, Typography, Row, Col, Table, Button, Divider, } from "antd";
import { FileAddOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { upload_CSV } from "../reducers/usersAPI";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Papa from 'papaparse';

function Batch() {
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
                    Batch
                </span>
            ),
            dataIndex: 'batch',
            key: 'batch',
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
                    First Name
                </span>
            ),
            dataIndex: 'first_name',
            key: 'first_name',
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
                    Middle Name
                </span>
            ),
            dataIndex: 'middle_name',
            key: 'middle_name',
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
                    Last Name
                </span>
            ),
            dataIndex: 'last_name',
            key: 'last_name',
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
                    Email
                </span>
            ),
            dataIndex: 'email',
            key: 'email',
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
                    Username
                </span>
            ),
            dataIndex: 'username',
            key: 'username',
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
                    Password
                </span>
            ),
            dataIndex: 'password',
            key: 'password',
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

        <Row justify="center" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Col xs={24} md={20} lg={16} xl={12} style={{ margin: '10px' }}>
                <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
                    <Typography.Title level={2} style={{ font: "Poppins", fontStyle: "normal", fontWeight: 700, fontSize: "24px", lineHeight: "48px", textAlign: "center", color: "#30304D" }}>
                        CREATE MULTIPLE MEMBERS
                    </Typography.Title>
                    <Typography.Text style={{ font: 'Poppins', fontStyle: 'normal', fontWeight: 700, fontSize: 22, display: 'flex', color: '#30304D', marginLeft: '50px' }}>
                        Upload CSV
                    </Typography.Text>
                    <Divider style={{ borderColor: '#D6D6E5', borderWidth: '.5px' }} />
                    <Card bordered={true} style={{ margin: '20px auto', textAlign: 'center' }}>
                        <Upload {...csvProps}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FileAddOutlined style={{ color: '#53B8F1', fontSize: 100 }} />
                            </div>
                            <br />
                            <Typography.Title level={4} style={{ color: '#53B8F1', margin: 0 }}>Select a CSV file to upload</Typography.Title>
                            <Typography.Text style={{ color: '#7F7F99' }}>or drag and drop here</Typography.Text>
                        </Upload>
                    </Card>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={20} lg={16} xl={14} style={{ margin: '10px auto' }}>
                {data.length > 0 && (
                    <Card style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
                        <Typography.Text style={{ font: 'Poppins', fontStyle: 'normal', fontWeight: 700, fontSize: 22, display: 'flex', color: '#30304D' }}>Preview</Typography.Text>
                        <Table
                            dataSource={data}
                            columns={columns}
                            pagination={false}
                            scroll={{ x: 'max-content' }}
                            style={{ marginTop: '20px' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                            <Button onClick={() => {
                                const bodyFormData = new FormData();
                                bodyFormData.append('file', file);
                                dispatch(upload_CSV(bodyFormData))
                            }} style={{
                                margin: '0 auto', background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
                                borderRadius: '50px',
                                font: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '15px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                color: '#E8E8E8',
                                display: 'block',
                                height: '40px',
                                width: '150px'
                            }}>ADD MEMBERS</Button>
                        </div>
                    </Card>
                )}
            </Col>

        </Row>

    );
}
export default Batch;
