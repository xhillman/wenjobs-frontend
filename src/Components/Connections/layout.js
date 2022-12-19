import React from 'react';
import PeopleTable from './table';
import PeopleForm from './form';
import UploadConnections from './uploadConnections';
import { useSelector } from 'react-redux';
import './style.css';

import { Alert, Space } from 'antd';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

function ConnectionsLayout() {

  //  use redux state to get message
  const message = useSelector(state => state.connections.message);

  return (
    <>
      {message  !== '' && ( // if message is truthy, render the alert

        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <Alert
            message="Error Message"
            description={message}
            type="error"
            closable
          />
        </Space>
      )}

      <Layout className='layout'>

        <Sider className='connectionSider' width='15rem' theme='light'>
          <div className='formHeader'>
            <h4>Search</h4>
          </div>
          <PeopleForm />
          <UploadConnections />
        </Sider>

        <Content className='content'>
          <PeopleTable />
        </Content>

      </Layout >
    </>


  );
}

export default ConnectionsLayout;