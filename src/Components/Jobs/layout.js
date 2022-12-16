import React from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
import JobCard from './jobCard';
const { Content, Sider, Header } = Layout;

function JobsLayout() {


  return (
    <div className='background'>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

        }}>
        <RoleForm />
      </div>

      <Layout style={{ borderRadius: '20px ', backgroundColor: 'rgba(184, 154, 169, 0.19)' }}>

        <Content style={{
          margin: '2rem 1rem',
        }}>
          <RoleTable />
        </Content>
        <Sider width='40rem' theme='light'
          style={{
            margin: '2rem 2rem 5.5rem 1rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            maxHeight: '62vh',
          }}>
          <JobCard />
        </Sider>
      </Layout>
    </div>
  );
}

export default JobsLayout