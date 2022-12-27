import React, { useState, useEffect } from 'react';
import { Table, Space, Tag } from 'antd';
import { limit, orderBy, query } from 'firebase/firestore';
import { collection, getDocs, startAfter } from 'firebase/firestore';
import db from '../Firebase/FirebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { setJobs, setSelectedJob } from '../../Store/slices/jobs';

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
    title: '# of Connections',
    dataIndex: 'connectionsData',
    key: 'connectionData',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    width: '10% '
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {

          tags.map((tag) => {
            let color;
            switch (tag.length) {
              case 2:
                color = 'geekblue';
                break;
              case 3:
                color = 'green';
                break;
              case 4:
                color = 'blue';
                break;
              case 5:
                color = 'purple';
                break;
              case 6:
                color = 'orange';
                break;
              case 7:
                color = 'magenta';
                break;
              case 8:
                color = 'cyan';
                break;
              case 9:
                color = 'volcano';
                break;
              case 10:
                color = 'gold';
                break;
              default:
                color = '';
                break;
            }

            return (
              <Space wrap>
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              </Space>
            );
          })}
      </>
    ),
  },
  // {
  //   title: 'Apply Now!',
  //   dataIndex: 'URL',
  //   key: 'URL',
  //   render: (link) => <Button type="primary" href={link} target='_blank'>Apply!</Button>
  // },
];

function RoleTable() {

  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  const [lastVisible, setLastVisible] = useState(null);

  // declaring variables from redux state
  let jobsData = [...jobs.filteredJobs];

  let connectionsData = useSelector(state => state.connections.connections);
  let companyData = new Map();
  connectionsData.forEach(connection => {
    if (companyData.has(connection.Company)) {
      let currentCount = companyData.get(connection.Company);
      companyData.set(connection.Company, currentCount + 1);
    } else {
      companyData.set(connection.Company, 1);
    }
  })

  let companyDataArray = [];
  companyData.forEach((value, key) => {
    if (key === '') {
      companyDataArray.push({company: 'No Company Listed', numConnections: value});
    } else {
      companyDataArray.push({ company: key, numConnections: value });
    }
  })

  const fetchJobs = async () => {
    console.log(companyData)
    console.log(companyDataArray)
    // get the first 30 jobs on page load
    const firstQuery = query(collection(db, "jobs"), orderBy('key', 'desc'), limit(30));
    const documentSnapshots = await getDocs(firstQuery);

    // store the first 30 jobs in state
    let jobsQuery = documentSnapshots.docs.map(doc => doc.data());
    // append the connections to each object in jobsQuery
    jobsQuery.forEach((job, index) => {
      if (companyData.has(job.company)) {
        console.log(companyData.get(job.company))
        job.connectionsData = companyData.get(job.company);
      }
      else {
        job.connectionsData = 0
      }
    })


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <>
      <Table columns={columns} dataSource={jobsData} pagination={{
        pageSize: 10,
        showSizeChanger: false,
        color: 'white'
      }}
        onChange={fetchMoreJobs}
        onRow={record => ({
          onClick: (e) => dispatch(setSelectedJob(record)),
        })}
        rowSelection={handleRowSelection}
        size='small'
        bordered
      >
      </Table>
    </>
  )
}
export default RoleTable;