import React from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
const { Content, Sider } = Layout;

function JobsLayout() {


  return (
    <Layout style={{ borderRadius: '20px ',   filter: 'blur(8px);', backgroundColor: 'rgba(179, 78, 237, 0.31)' }}>
      <Sider theme='light'
        style={{
          margin: '2rem 1rem 5.5rem 2rem',
          borderRadius: '20px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}>
        <RoleForm />
      </Sider>
      <Content style={{
        margin: '2rem',
        // boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}>
        <RoleTable/>
      </Content>
    </Layout>
  );
}

export default JobsLayout