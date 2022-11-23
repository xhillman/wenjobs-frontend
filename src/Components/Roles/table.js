import React, { useState, useEffect } from 'react';
import { Table, Space, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import axios from 'axios';

import './style.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
function RoleTable() {
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
  }, []);

  const columns = [
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        // 3d ai analyst backend blockchain community manager 
        // crypto cto customer support dao data science defi 
        // design developer relations devops discord economy 
        // designer entry level front end full stack game dev 
        // golang intern java javascript marketing mobile 
        // moderator nft node non tech open source pay in 
        // crypto product manager project manager react refi 
        // research ruby rust sales smart contract solana solidity 
        // unity web3js

        // entry level front end full stack open source
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

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
export default RoleTable;