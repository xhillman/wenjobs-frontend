// import { Table, Space, Tag } from 'antd';
// import React, { useState, useEffect } from 'react';
// import Column from 'antd/es/table/Column';
// import axios from 'axios';

// const CompanyTable = () => {

//   // const firebaseConfig = {
//   //   apiKey: process.env.REACT_APP_API_KEY,
//   //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   //   projectId: process.env.REACT_APP_PROJECT_ID,
//   //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   //   appId: process.env.REACT_APP_APP_ID,
//   //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
//   // };
//   //Just a comment to update dev
//   const [jobsData, setJobsData] = useState(null);

//   const job_listings = async () => {
//     try {
//       let data = await axios.get(`${process.env.REACT_APP_SERVER}/updateJobs`);
//       let sanitizedData = data.data;
//       setJobsData(sanitizedData);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   useEffect(() => {
//     job_listings();
//   }, []);

//   const columns = [
//     {
//       title: 'Job',
//       dataIndex: 'job',
//       key: 'job',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Company',
//       dataIndex: 'company',
//       key: 'company',
//     },
//     {
//       title: 'Key',
//       dataIndex: 'key',
//       key: 'key',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: (_, { tags }) => (
//         // 3d ai analyst backend blockchain community manager 
//         // crypto cto customer support dao data science defi 
//         // design developer relations devops discord economy 
//         // designer entry level front end full stack game dev 
//         // golang intern java javascript marketing mobile 
//         // moderator nft node non tech open source pay in 
//         // crypto product manager project manager react refi 
//         // research ruby rust sales smart contract solana solidity 
//         // unity web3js

//         // entry level front end full stack open source
//         <>
//           {tags.map((tag) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (_, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Table className='companyTableWrapper' dataSource={jobsData}>
//         <Column title='job' dataIndex='job' key={Math.random()} />
//         <Column title='company' dataIndex='company' key={Math.random()} />
//         <Column title='location' dataIndex='location' key={Math.random()} />
//         <Column title='Post time' dataIndex='post_date' key={Math.random()} />
//         <Column title='link' dataIndex='link' key={Math.random()} />
//         <Column title='tags' dataIndex='tags' key={Math.random()} />
//       </Table>
//     </>
//   );
// }

// export default CompanyTable;
