import React from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
import JobCard from './jobCard';
const { Content, Sider, Header } = Layout;

function JobsLayout() {


  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          // width: '100vw',
          // height: '2rem',
          // margin: '2rem',
      }}>
        <RoleForm />
      </div>
      <Layout style={{ borderRadius: '20px ', backgroundColor: 'rgba(179, 78, 237, 0.31)' }}>
        {/* <Sider theme='light'
        style={{
          margin: '2rem 0rem 5.5rem 1rem',
          borderRadius: '20px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}>
        <RoleForm />
      </Sider> */}
        <Content style={{
          margin: '2rem 1rem',
          // boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        }}>
          <RoleTable />
        </Content>
        <Sider theme='light'
          style={{
            margin: '2rem 2rem 5.5rem 1rem',
            borderRadius: '20px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            height: '6rem'
          }}>
          <JobCard />
        </Sider>
      </Layout>
    </>
  );
}

export default JobsLayout