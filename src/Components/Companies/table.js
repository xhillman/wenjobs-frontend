import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import Column from 'antd/es/table/Column';
import axios from 'axios';

const CompanyTable = () => {

  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  // };
  //Just a comment to update dev
  const [jobsData, setJobsData] = useState(null);

  const job_listings = async () => {
    try {
      let data = await axios.get(`${process.env.REACT_APP_SERVER}/updateJobs`);
      let sanitizedData = data.data;
      setJobsData(sanitizedData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    job_listings();
  }, [])

  return (
    <>
      <Table className='companyTableWrapper' dataSource={jobsData}>
        <Column title='job' dataIndex='job' key={Math.random()} />
        <Column title='company' dataIndex='company' key={Math.random()} />
        <Column title='location' dataIndex='location' key={Math.random()} />
        <Column title='Post time' dataIndex='post_date' key={Math.random()} />
        <Column title='link' dataIndex='link' key={Math.random()} />
        <Column title='tags' dataIndex='tags' key={Math.random()} />
      </Table>
    </>
  );
}

export default CompanyTable;
