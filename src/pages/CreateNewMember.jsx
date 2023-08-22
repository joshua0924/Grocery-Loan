import { Card, Typography, Input, Form, Row, Col, Button, } from "antd";
import React from 'react';
import { EyeTwoTone } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";
import { createUser } from '../reducers/usersAPI';
import { useDispatch } from 'react-redux';
import TextInput from "../componets/TextInput";
import TextInput2 from "../componets/TextInput2";
const CreateNewMember = () => {
  const params = useParams()
  const { Text } = Typography;
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const headingStyle = {
    font: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "48px",
    textAlign: "center",
    color: "#30304D",
  };


  return (
    <Row justify="center" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Card style={{ height: 'max-content', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', border: '1px solid #ccc', borderRadius: '10px', width: 'max-content' }}>
          <Form
            form={form}
            onFinish={({ confirmPassword, ...values }) => {
              const {
                batch,
                first_name,
                middle_name,
                last_name,
                email,
                username,
                password,
              } = values;
              dispatch(
                createUser({
                  batch,
                  first_name,
                  middle_name,
                  last_name,
                  email,
                  username,
                  password,
                })
              );
            }}
          >
            <Form.Item>
              <h2 style={headingStyle}>{(params?.isUpdate) ? "UPDATE MEMBER" : "CREATE NEW MEMBER"}</h2>
              <Row gutter={16}>
                <Col span={12}>
                  <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 30,
                    display: 'flex',
                    color: '#1A2163',
                    marginLeft: '10px'
                  }}>Fill out information</Typography.Text>
                  <Text
                    style={{
                      font: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "27px",
                      textAlign: "left",
                      color: "#9494B2",
                    }}
                  >
                    Please fill out new member information below
                  </Text>
                </Col>
                <Col span={12}>
                  <Text
                    style={{
                      font: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "48px",
                      textAlign: "center",
                      color: "#3B3A82",
                    }}
                  >
                    BATCH
                  </Text>
                  < TextInput
                    name="batch"
                    placeholder="Batch"
                  />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'flex',
                    color: '#1A2163'
                  }}>FIRST NAME</Typography.Text>
                  < TextInput
                    name="first_name"
                    placeholder="First Name"
                  />
                </Col>
                <Col span={12}>
                  <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'flex',
                    color: '#1A2163',
                  }}>MIDDLE NAME</Typography.Text>
                  < TextInput
                    name="middle_name"
                    placeholder="Middle Name"
                  />
                </Col>
              </Row>
              <br />
              <Row gutter={16}>
                <Col span={24}>
                  <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'flex',
                    color: '#1A2163'
                  }}>LAST NAME</Typography.Text>
                  < TextInput2
                    name="last_name"
                    placeholder="Last Name"
                  />
                </Col>
              </Row>
              <br />
              <Row gutter={16}>
                <Col span={24}>
                  <Typography.Text style={{
                    font: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'flex',
                    color: '#1A2163'
                  }}>USERNAME</Typography.Text>
                  < TextInput2
                    name="username"
                    placeholder="Username"
                  />
                </Col>
              </Row>
              <Col span={24}>
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163'
                }}>EMAIL</Typography.Text>
                < TextInput2
                  name="email"
                  placeholder="Email"
                />
              </Col>
              <br />
              <Row gutter={16}>
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'flex',
                  color: '#1A2163',
                  marginLeft: '10px'
                }}>CREATE PASSWORD</Typography.Text>
              </Row>
              <Row gutter={16}>
                <Typography.Text style={{
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 15,
                  display: 'flex',
                  color: '#9494B2',
                  marginLeft: '10px'
                }}>Create a strong password with a mix of letters, numbers and symbols.</Typography.Text>
              </Row>
              <br />
              <Row gutter={16}>
                <Col span={12}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password
                        id="password"
                        name="password"
                        placeholder="Password"
                        style={{
                          borderRadius: '30px',
                          font: 'Poppins',
                          boxSizing: 'border-box',
                          border: '2px solid #A9A9CC',
                          height: '50px',
                          width: '400px',
                        }}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                        type="password"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: 'Please confirm your password!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      style={{
                        borderRadius: '30px',
                        font: 'Poppins',
                        boxSizing: 'border-box',
                        border: '2px solid #A9A9CC',
                        height: '50px',
                        width: '400px',
                      }}
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
                      type="password"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{
                display: 'flex',
                right: 65,
                color: '#3B3A82',
                borderRadius: 50,
              }}>
                <Link to='/clients'><Button style={{
                  background: '#FFFFFF',
                  border: '4px solid #5250B4',
                  borderRadius: '50px',
                  font: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '25px',
                  textAlign: 'center',
                  color: '#5250B4',
                  display: 'block',
                  marginTop: '30px',
                  marginLeft: '5px',
                  marginRight: '535px',
                  height: '40px',
                  width: '145px'
                }} type="primary">CANCEL</Button></Link>
                <Button
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
                    display: 'block',
                    marginTop: '30px',
                    marginLeft: '0px',
                    height: '40px',
                    width: '135px'
                  }} type="primary" htmlType="submit">ADD MEMBER</Button>
              </div>
            </Form.Item>
          </Form>
        </Card >
      </Col>
    </Row>
  );
};
export default CreateNewMember;