import React from 'react';
import { Layout } from 'antd';
import CompanyTable from './table';
import CompanyForm from './form';
const { Content } = Layout;

function CompanyPageLayout() {

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
            <CompanyForm />
            <CompanyTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CompanyPageLayout