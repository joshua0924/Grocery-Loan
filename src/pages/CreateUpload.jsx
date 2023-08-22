import { Link } from "react-router-dom";
import { Modal, Card, Button } from 'antd';
import React, { useState } from "react";
import { TbCircle1Filled, TbCircle2Filled, TbCircle3Filled, TbChevronRight } from "react-icons/tb";
import create from './create.png';
import Members from "./Members";
function CreateUpload() {
const [isModalVisible, setIsModalVisible] = useState(false);
return (
    <Members>
<Modal open={isModalVisible} footer={null} onCancel={() => setIsModalVisible(false)} width={800} height={1500}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'nowrap',
              flexDirection: 'row'
            }}>
              <h2 style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '48px',
                textAlign: 'center',
                color: '#30304D'
              }}> CREATE NEW MEMBER </h2>
              <h2 style={{
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '48px',
                textAlign: 'center',
                color: '#30304D'
              }}> &nbsp; | User Guide</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '25px',
                lineHeight: '50px',
                color: '#D6D6E5'
              }}>
                <TbCircle1Filled style={{ color: '#D6D6E5' }} /> &nbsp; Choose
              </h3> &nbsp;
              &nbsp; &nbsp; <TbChevronRight /> &nbsp;
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '25px',
                lineHeight: '50px',
                color: '#3B3A82'
              }}>
                <TbCircle2Filled style={{ color: '#3B3A82' }} /> &nbsp; Create/ Upload
              </h3> &nbsp;
              &nbsp; &nbsp; <TbChevronRight /> &nbsp;
              <Link to='/receipt'><h3 style={{
                display: 'flex',
                alignItems: 'center',
                font: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '25px',
                lineHeight: '50px',
                color: '#D6D6E5'
              }}>
                <TbCircle3Filled style={{ color: '#D6D6E5' }} /> &nbsp; Add Member(s)
              </h3></Link> &nbsp;
            </div>
            <Card style={{ backgroundColor: '#E8E8E8', color: '#FFFFFF', }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={create} alt="create" width="500" height="300" style={{ margin: 'auto' }} />
              </div>
            </Card>
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'right' }}>
              <Button style={{ background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)', color: '#FFFFFF', width: '100px', height: '50px', font: 'Poppins'}}>Next</Button>
            </div>
          </Modal></Members>
)
}
export default CreateUpload;
