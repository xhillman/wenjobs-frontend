import React from 'react';
import { Layout } from 'antd';
import PeopleTable from './table';
import PeopleForm from './form';
const { Content } = Layout;

function PeoplePageLayout() {

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
            {/* <PeopleForm /> */}
            <PeopleTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PeoplePageLayout