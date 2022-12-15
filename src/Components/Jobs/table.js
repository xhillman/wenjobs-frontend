import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Card } from 'antd';
import Column from 'antd/es/table/Column';
import { limit, orderBy, query } from 'firebase/firestore';
import { collection, getDocs, startAfter } from 'firebase/firestore';
import db from '../Firebase/FirebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { setJobs } from '../../Store/slices/jobs';

import './style.css'

const columns = [
  {
    title: 'Job Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Posted',
    dataIndex: 'posted',
    key: 'posted',
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
    dataIndex: 'URL',
    key: 'URL',
    render: (link) => <Button type="primary" href={link} target='_blank'>Apply!</Button>
  },
];

function RoleTable() {

  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();
  
  const [lastVisible, setLastVisible] = useState(null);

  // declaring variables from redux state
  let jobsData = [...jobs.filteredJobs];

  const fetchJobs = async () => {
    // get the first 30 jobs on page load
    const firstQuery = query(collection(db, "jobs"), orderBy('key', 'desc'), limit(30));
    const documentSnapshots = await getDocs(firstQuery);

    // store the first 30 jobs in state
    let jobsQuery = documentSnapshots.docs.map(doc => doc.data());
    let lastQueryItem = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    

    dispatch(setJobs(jobsQuery));
    setLastVisible(lastQueryItem);

  }

  const fetchMoreJobs = async () => {
    const next = query(collection(db, "jobs"), orderBy('key', 'desc'), limit(10), startAfter(lastVisible));
    const documentSnapshots = await getDocs(next);

    let jobsQuery = documentSnapshots.docs.map(doc => doc.data());
    let lastQueryItem = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    //setting results in redux state
    dispatch(setJobs([...jobsData, ...jobsQuery]));
    setLastVisible(lastQueryItem);

  }

  // fetch the first 30 jobs on page load
  useEffect(() => {
    fetchJobs();
  }, []);

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
        pageSize: 10,
        showSizeChanger: false,
      }}
        onChange={fetchMoreJobs}
        onRow={record => ({
          onClick: (e) => setRoleDetails(`${record.details}`)
        })}
        rowSelection={handleRowSelection}
        size='small'
      >
      </Table>
      <Card className='roleDetailCard' title="Role Details" bordered={false} bodyStyle={{ overflowY: 'auto', maxHeight: 300 }}>
        <p>{roleDetails}</p>
      </Card>
    </div>
  )
}
export default RoleTable;