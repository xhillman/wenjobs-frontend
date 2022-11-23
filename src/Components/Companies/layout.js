import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import CompanyTable from './table';
import CompanyForm from './form';
import Description from '../Descriptions/Description';
import axios from 'axios';
const { Content } = Layout;

function CompanyPageLayout({ props }) {

  const [jobListings, setJobListings] = useState([]);

  const data = async () => {
    try {
      let data = await axios.get('https://wen-jobs-server-deploy-prod.onrender.com/updateJobs');
      let sanitizedData = data.data;
      setJobListings(sanitizedData);
      console.log(sanitizedData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    data();
  }, []);
  

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
            {/* {
              jobListings.map(listing => {
                return (
                  <Description 
                    job={listing}
                  />
                )
              })
            } */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CompanyPageLayout