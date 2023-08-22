import styled from "styled-components";
import { BellOutlined, QuestionCircleOutlined, RightOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "./logo.png";
import { notification } from 'antd';
import { Modal, Divider, Carousel } from 'antd';
import React, { useState } from 'react';
import v1 from './v1.png';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import C1 from './C1.png';
import C2 from './C2.png';
import C3 from './C3.png';
import C4 from './C4.png';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';
import m1 from './m1.png';
import m2 from './m2.png';
import m3 from './m3.png';
import m4 from './m4.png';
const StyledHeader = styled.header`
  background-color: #f9f9ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 24px;
  border: 0.5px solid #9494b2;

  @media only screen and (max-width: 320px) {
    flex-direction: column;
    height: auto;
    padding: 24px;
  }

  &:focus {
    outline: none;
    border-color: #9494b2;
    box-shadow: 0 0 0 2px #e6f7ff;
  }
`;

const StyledSearch = styled.input`
  width: 100%;
  max-width: 200px;
  border: 1px solid #9494b2;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: #30304d;
  background-color: #fff;
  transition: all 0.3s;

  @media only screen and (max-width: 320px) {
    margin: 0 auto;
    margin-bottom: 24px;
  }

  &:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 0.5px #3B3A82;
  }
`;


const StyledBadge = styled.span`
  display: inline-block;
  margin-right: 8px;
  position: relative;

  @media only screen and (max-width: 768px) {
  margin: 0 auto;
    margin-bottom: 8px;
  }

  &:hover {
    cursor: pointer;
  }

  .ant-badge-count {
    background-color: #30304d;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    border-radius: 8px;
    padding: 2px 6px;
    position: absolute;
    top: -8px;
    right: -8px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;

  @media only screen and (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledRowContainer = styled.div`
display: flex;
align-items: center;
justify-content: right;

@media only screen and (max-width: 320px) {
  flex-direction: row;
  align-items: flex-start;
}
@media (max-width: 768px) {
  .ant-modal-content {
    height: 80vh;
    width: 100vw;
  }

  .ant-carousel .slick-slide img {
    max-height: 60vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .ant-modal-content {
    height: 80vh;
    width: 320px;
  }

  .ant-carousel .slick-slide img {
    max-height: 70vh;
  }
}

@media (min-width: 1025px) {
  .ant-modal-content {
    height: max-content;
    width: 320px;
  }

  .ant-carousel .slick-slide img {
    max-height: 80vh;
  }
}
`;


const Navbar = () => {
  const handleCli = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This can be a longer text if needed.',
      icon: <BellOutlined style={{ color: '#108ee9' }} />,
    });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOks = () => {
    setIsModalVisible(false);
  };
  const images = [''];
  const [visible, setVisible] = useState(false);

  const hasShownModal1 = localStorage.getItem('hasShownModal1');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal1) {
    setVisible(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal1', true);
  }
  const handleSidebarClick = () => {
    setVisible(true);
  };
  const handleModalOk = () => {
    setVisible(false);
  };
  const handleModalCancel = () => {
    setVisible(false);
  };

  const [isvis, issetVis] = useState(false);

  const hasShownModal2 = localStorage.getItem('hasShownModal2');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal2) {
    issetVis(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal2', true);
  }

  const handleClick = () => {
    issetVis(true);
  };
  const handleOk = () => {
    issetVis(false);
  };
  const Cancel = () => {
    issetVis(false);
  };
  const [isvisible, issetVisible] = useState(false);

  const hasShownModal3 = localStorage.getItem('hasShownModal3');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal3) {
    issetVisible(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal3', true);
  }


  const handleSideClick = () => {
    issetVisible(true);
  };
  const handleModalOkay = () => {
    issetVisible(false);
  };
  const handleCancel = () => {
    issetVisible(false);
  };

  const [vis, setVis] = useState(false);

  const hasShownModal4 = localStorage.getItem('hasShownModal4');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal4) {
    setVis(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal4', true);
  }
  const handleC = () => {
    setVis(true);
  };
  const handle = () => {
    setVis(false);
  };
  const cel = () => {
    setVis(false);
  };
  const [is, set] = useState(false);
  const hasShownModal5 = localStorage.getItem('hasShownModal5');

  // If the modal has not been shown before, set its visibility to true
  if (!hasShownModal5) {
    set(true);
    // Store in local storage that the modal has been shown
    localStorage.setItem('hasShownModal5', true);
  }
  const hand = () => {
    set(true);
  };
  const han = () => {
    set(false);
  };
  const c = () => {
    set(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dotStyle: {
      borderColor: 'gray',
      borderWidth: 2,
    },
    dotActiveStyle: {
      borderColor: 'blue',
    },
  };
  return (

    <StyledHeader >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="i" src={logo} alt="logo" height={50} width={80} />
      <StyledContainer>
        <StyledSearch placeholder="Search..." />
      </StyledContainer>
      <StyledRowContainer>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <StyledBadge onClick={showModal}>
          <QuestionCircleOutlined style={{ fontSize: "24px", color: "#30304D" }} />
        </StyledBadge>
        <Modal
          title={<h3 style={{
            textAlign: 'center',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'
          }}>User Guides</h3>}
          open={isModalVisible}
          footer={null}
          onOk={handleOks}
          onCancel={handleOks}
        >
          <h1 style={{
            marginBottom: '0px',
            marginTop: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',
            alignItems: 'center',
            color: '#555566',
          }}>Products</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Create New Product <RightOutlined onClick={handleSidebarClick} style={{
              marginLeft: '225px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} />
              <Modal
                visible={visible}
                footer={null}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                width={500}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Carousel autoplay {...settings} dots={false}>
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={C1}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={C2}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={C3}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={C4}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Modal>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',
            alignItems: 'center',
            color: '#555566'
          }}>Make Purchase</h1>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Make Purchase (Manual) <RightOutlined onClick={handleClick} style={{
              marginLeft: '178px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} />
              <Modal
                open={isvis}
                footer={null}
                onOk={handleOk}
                onCancel={Cancel}
                width={500}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Carousel autoplay {...settings} dots={false}>
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={i1}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={i2}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={i3}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={i4}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Modal>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',
            alignItems: 'center',
            color: '#555566'
          }}>Members/Clients</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Create New Member <RightOutlined onClick={handleSideClick} style={{
              marginLeft: '220px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} />
              <Modal
                open={isvisible}
                footer={null}
                onOk={handleModalOkay}
                onCancel={handleCancel}
                width={500}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Carousel autoplay {...settings} dots={false}>
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={m1}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={m2}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={m3}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={m4}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Modal>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',
            alignItems: 'center',
            color: '#555566'
          }}>Scan QR Code</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>View Product Details <RightOutlined onClick={handleC} style={{
              marginLeft: '220px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} />
              <Modal
            open={vis}
            footer={null}
            onOk={handle}
            onCancel={cel}
            width={500}
            >
              <div style={{ textAlign: 'center' }}>
                <Carousel autoplay {...settings} dots={false}>
                  {images.map((image) => (
                    <div key={image}>
                      <img
                        src={v1}
                        alt={image}
                        style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                      />
                    </div>
                  ))}
                  
                </Carousel>
              </div>
            </Modal>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '0px', marginTop: '0px' }} />
          <h1 style={{
            marginBottom: '0px',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '24px',
            alignItems: 'center',
            color: '#555566'
          }}>Make Purchase</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{
              font: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              color: '#1A2163'
            }}>Make Purchase (Scan QR Code) <RightOutlined onClick={hand} style={{
              marginLeft: '105px',
              color: '#A9A9CC',
              fontSize: '20px'
            }} />
              <Modal
                open={is}
                footer={null}
                onOk={han}
                onCancel={c}
                width={500}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Carousel autoplay {...settings} dots={false}>
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={s1}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={s2}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                      {images.map((image) => (
                        <div key={image}>
                          <img
                            src={s3}
                            alt={image}
                            style={{ width: '100%', maxHeight: '80vh', height: 'auto' }}
                          />
                        </div>
                      ))}
                   
                    </Carousel>
                  </div>
                </Modal>
            </h1>
          </div>
          <Divider style={{ borderColor: '#9494B2', borderWidth: '0.5px', marginBottom: '30px', marginTop: '0px' }} />
        </Modal>
        &nbsp;&nbsp;&nbsp;
        <StyledBadge onClick={handleCli} >
          <BellOutlined style={{ fontSize: "24px", color: "#30304D" }} />
        </StyledBadge>
        &nbsp;&nbsp;&nbsp;
        <StyledBadge >
          <LogoutOutlined to="/out" style={{ fontSize: "24px", color: "#30304D" }} />
        </StyledBadge>
      </StyledRowContainer>


    </StyledHeader>
  );
};
export default Navbar;
