import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Card } from 'antd';
import Column from 'antd/es/table/Column';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs, writeBatch, doc } from 'firebase/firestore';

// import axios from 'axios';
import './style.css'
// import { render } from '@testing-library/react';

  const columns = [
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
    },
    {
      title: 'Posted',
      dataIndex: 'post_date',
      key: 'post_date',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Space wrap>
                <Tag key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              </Space>
            );
          })}
        </>
      ),
    },
    {
      title: 'Apply Now!',
      dataIndex: 'link',
      key: 'link',
      render: (link) => <Button type="primary" href={link}>Apply !</Button>
    },
  ];

function RoleTable(props) {

  const {filterParams, needReset } = props;

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  //Just a comment to update dev
  const [jobsData, setJobsData] = useState([]);
  const [jobsRef, setJobsRef] = useState([]);
  // const [connectionsData, setConnectionsData] = useState(null);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const addJobsData = async () => {
    console.log(jobsData)
    const batch = writeBatch(db);

    try {
      if (jobsData) {
        jobsData.jobs.forEach(job => {
          let ref = doc(db, "jobs", job.key);
          batch.set(ref,
            {
              "job": job.job,
              "company": job.company,
              "location": job.location,
              "post_date": job.post_date,
              "link": job.link,
              "key": job.key,
              "details": job.details,
              "tags": job.tags
            });
        });
      }

      await batch.commit();

    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const readJobsData = async () => {
    let jobsArray = []

    const querySnapshot = await getDocs(collection(db, "jobs"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${JSON.stringify(doc)}`);
      const newItem = doc.data();
      jobsArray.push(newItem);
    });
    console.log('JOBS------', jobsArray);
    setJobsData(jobsArray);
    setJobsRef(jobsArray);
  }

  const filterJobs = () => {
    let allJobs = jobsData;
    console.log('Jobs Ref:', jobsRef);
    let filteredJobs;
    if (filterParams.keyword !== '') {
      filteredJobs = allJobs.filter(job => {
        console.log('Job:', job.job, typeof job.job);
        return job.job.toLowerCase().includes(filterParams.keyword.toLowerCase()) || job.details.toLowerCase().includes(filterParams.keyword.toLowerCase());
      });
    }
    setJobsData(filteredJobs);
  }

  useEffect(() => {
    filterJobs();
  }, [filterParams]);

  useEffect(() => {
    setJobsData(jobsRef);
  }, [needReset])

  const [roleDetails, setRoleDetails] = useState(null)
  const handleRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <div className='roleTableWrapper'>
      <Table columns={columns} dataSource={jobsData} pagination={{
        pageSize: 5,
      }}
        onRow={record => ({
          onClick: (e) => setRoleDetails(`${record.details}`)
        })}
        rowSelection={handleRowSelection}
        size='small'
      >
        <Column title='job' dataIndex='job' key={Math.random()} />
        <Column title='company' dataIndex='company' key={Math.random()} />
        <Column title='location' dataIndex='location' key={Math.random()} />
        <Column title='Post time' dataIndex='post_date' key={Math.random()} />
        <Column title='link' dataIndex='link' key={Math.random()} />
        <Column title='tags' dataIndex='tags' key={Math.random()} />
      </Table>
      <div className='uploadSectionWrapper'>
        <Button className='roleSearchButton' onClick={addJobsData}>Add Jobs to the Database</Button>
        <Button className='roleSearchButton' onClick={readJobsData}>Get Jobs from the Database</Button>
      </div>
      <Card className='roleDetailCard' title="Role Details" bordered={false} bodyStyle={{overflowY: 'auto', maxHeight: 300}}>
        <p>{roleDetails}</p>
      </Card>
    </div>
  )
}
export default RoleTable;