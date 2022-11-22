import React from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
const { Content } = Layout;

function RolePageLayout() {

  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className='contentWrapper'>
            <RoleForm />
            <RoleTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default RolePageLayout