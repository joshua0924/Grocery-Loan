import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Card, Button, Modal, Dropdown, Row, Col } from 'antd';
import { PlusOutlined,DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getUsers, getAllBatch } from '../reducers/usersAPI';

const Members = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user?.status);
  const error = useSelector((state) => state.user?.error);
  const [selectedBatch,setSelectedBatch] = useState('Batch 1');
  const batches = useSelector((state) => state.user?.batch);
  const user = useSelector((state) => state.user?.user);
  const filteredUsers = user.filter(user => user.batch === selectedBatch);
  
  const CreateModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '50px'
  };
  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
  };

  useEffect(() => {
    if (selectedBatch) {
      dispatch(getUsers(selectedBatch));
    }
  }, [dispatch,selectedBatch]);
  
  useEffect(() => {
    dispatch(getAllBatch());
  }, [dispatch]);

 

  const menu = 
    // <Menu onClick={handleBatchClick}>
      batches?.length > 0 ?batches?.map((batch, index) => (  {
        key: `${batch}_${index}`,
        label: (
          <Button  onClick={() => handleBatchClick(batch)}>
           {batch}
          </Button>
        ),
        disabled: false,
      })) : [
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]
    // </Menu>
  // );


  const columns = [
    {
      title: (
        <span
          style={{
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '33px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#3B3A82',
            justifyContent: 'center',
          }}
        >
          User ID
        </span>
      ),
      dataIndex: 'user_id',
      key: 'user_id',
      align: 'center',
      render: (text) => (
        <span style={{
          font: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '17px',
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
            fontSize: '20px',
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
          fontSize: '17px',
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
            fontSize: '20px',
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
          fontSize: '17px',
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
            fontSize: '20px',
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
          fontSize: '17px',
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
            fontSize: '20px',
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
          fontSize: '17px',
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
            fontSize: '20px',
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
          fontSize: '17px',
          lineHeight: '36px',
          color: '#38384D',
        }}>{text}</span>
      )
    },
  ];

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }


  return (
    <>
<div>
  <Row justify="end" align="middle">
    <Col xs={24} sm={12} md={8}>
      <Button
        onClick={CreateModal}
        style={{
          width: '60%',
          height: 48,
          background: 'linear-gradient(258.36deg, #3B3A82 1.29%, #5250B4 97.24%)',
          borderRadius: '50px',
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
          marginBottom: 16
        }}
      >
        <PlusOutlined /> CREATE NEW &nbsp;
      </Button>
    </Col>
  </Row>
  <Modal
    visible={isModalVisible}
    onCancel={handleCancel}
    footer={null}
  >
    <p style={{ textAlign: 'center', color: '#30304D', font: "Poppins", fontWeight: 'bold' }}>CREATE NEW MEMBER</p>
    <Row justify="center" gutter={[16, 16]}>
      <Col xs={24} sm={12}>
        <Link to='/createnewmember'><Button style={{ borderColor: '#5250B4', borderRadius: '50px', color: '#3B3A82', font: "Poppins", fontWeight: 'bold', width: '100%' }}>
          SINGLE
        </Button></Link>
      </Col>
      <Col xs={24} sm={12}>
        <Link to='/batch'><Button style={{
          background: '#5250B4',
          borderRadius: '50px',
          display: 'inline-block',
          color: '#ffffff',
          font: "Poppins",
          fontWeight: 'bold',
          width: '100%'
        }}>
          BATCH
        </Button></Link>
      </Col>
    </Row>
  </Modal>
</div>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Card
    style={{
      margin: '20px',
      backgroundColor: '#FFFFFF',
      width: '100%',
      maxWidth: '900px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
      borderRadius: '24px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '10px' }}>
      <Dropdown overlay={menu} menu={{ items: menu }}>
        <Button
          style={{
            borderRadius: '5px',
            background: '#EEEEFF',
            font: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#3B3A82',
            width: '45%',
          }}
        >
          {selectedBatch || 'Select batch'} &nbsp;
          <DownOutlined style={{ fontSize: '14px' }} />
        </Button>
      </Dropdown>
    </div>
    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <Table
        columns={columns}
        dataSource={filteredUsers}
        style={{ justifyContent: 'center', maxWidth: '100%' }}
      />
    </div>
  </Card>
</div>

    </>
  );
};
export default Members;
