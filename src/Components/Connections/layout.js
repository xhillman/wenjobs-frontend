import React from 'react';
import { Layout } from 'antd';
import PeopleTable from './table';
const { Content } = Layout;

function ConnectionsLayout() {

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
            <div className='peopleContentWrapper'>
              {/* <PeopleForm /> */}
              <PeopleTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ConnectionsLayout;