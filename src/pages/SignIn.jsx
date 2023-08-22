import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import logo from "../pages/logo.png";
import signin from "../pages/signin.jpg";
import { EyeTwoTone } from '@ant-design/icons';
import { loginUser } from '../reducers/usersAPI';

const SignInPage = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginUser(values))
      .then(() => {
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh' /* Adjust the height as needed */
    }}>
      <Card style={{ width: '884px', height: '779px', flexShrink: '0', background: '#3B3A82', borderRadius: '30px', boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}>
        <br></br>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: "48px", font: "Poppins" }}>GROCERY LOAN</h2>
        <h2 style={{ textAlign: 'left', color: 'white', fontSize: "42px", font: "Poppins", marginLeft: '170px', marginBottom: '20px' }}>Welcome!</h2>

        <Form name="signin" onFinish={onFinish}>
          <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "18px", font: "Poppins", marginLeft: '170px',  }}>Username</label>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input name="username" placeholder="Username" style={{ borderRadius: '30px', border: "1px solid #9494B", width: '507px', height: '74px', marginLeft: '170px' }} type="username" />
          </Form.Item>

          <label style={{ textAlign: 'left', color: '#F9F9FF', fontSize: "18px", font: "Poppins", marginLeft: '170px' }}>Password</label>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              name="password"
              placeholder="Password"
              style={{
                borderRadius: '30px', font: 'Poppins',
                border: "1px solid #9494B", width: '507px', height: '74px', marginLeft: '170px'
              }}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeTwoTone twoToneColor="#A9A9CC" />)}
              type="password"
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" style={{ marginLeft: '170px' }}>
            <Checkbox style={{ color: "#F9F9FF", font: 'Poppins', fontSize: "18px" }}>Remember me</Checkbox>
            <a href="/forgot-password" style={{ float: 'right', color: "#A9A9CC", font: 'Poppins', marginRight: '170px', fontSize: "18px" }}>Forgot password?</a>
          </Form.Item>
          <Form.Item>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Button
                htmlType="submit"
                style={{
                  width: '277px',
                  height: '58px',
                  backgroundImage: 'linear-gradient(55.91deg, #D6D6E5 9.64%, #A9A9CC 77.84%)',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  color: '#3B3A82',
                  font: 'Poppins',
                  fontSize: '28px',
                  marginTop: '30px'
                }}
              >
                SIGN IN
              </Button>
            </div>
          </Form.Item>
        </Form>

      </Card>
    </div>

  );
};
export default SignInPage;