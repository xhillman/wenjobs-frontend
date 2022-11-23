import { Table, Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, List, UploadProps, Form, Input } from 'antd';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDoc, writeBatch, doc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Column from 'antd/es/table/Column';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'

const PeopleTable = () => {

  const { user, isAuthenticated } = useAuth0();

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const [connectionsData, setConnectionsData] = useState(null);
  const [searchText, setSearchText] = useState(null);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const handleFile = (info) => {

    console.log(info);
    Papa.parse(info.file, {
      header: true,
      complete: (result) => {
        console.log(result.data);
        setConnectionsData(result.data)
        console.log('papaarse connections ',connectionsData)
      }
    });
  }
  console.log('papaarse connections ',connectionsData);

  const addConnectionsData = async () => {
    console.log(user.email)
    try {
      if (connectionsData) {
        const ref = doc(db, 'users', user.email);
        await updateDoc(ref, {
          connections: connectionsData
        });
        console.log('added connections data to DB')

      }
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const readConnectionsData = async () => {

    // let connectionsArray = [];

    const docRef = doc(db, "users", user.email);
    const docSnap = await getDoc(docRef);
    let data;
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      data = docSnap.data().connections
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    console.log(data)
    setConnectionsData(data);
  }

  return (
    <>
      <div className='formWrapper'>
        <Form
          labelCol={{span: 15}}
          wrapperCol={{span: 15}}
          layout="vertical"
        >
          <Form.Item label="Search by First Name">
            <Input.Search onSearch={(value) => {
              setSearchText(value);
            }} />
          </Form.Item>
          <Form.Item label="Search by Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Search by Company">
            <Input />
          </Form.Item>
        </Form>
      </div>
      <Table pagination={{ pageSize: '5'}}
      defaultPageSize={5} 
      className='connectionsTableWrapper' dataSource={connectionsData}>
        <Column title='First Name' dataIndex='First Name' key={Math.random()} />
        <Column title='Last Name' dataIndex='Last Name' key={Math.random()} />
        <Column title='Email Address' dataIndex='Email Address' key={Math.random()} />
        <Column title='Company' dataIndex='Company' key={Math.random()} />
        <Column title='Position' dataIndex='Position' key={Math.random()} />
        <Column title='Connected On' dataIndex='Connected On' key={Math.random()} />
      </Table>
      <div className='uploadSectionWrapper'>
        <Upload customRequest={handleFile}>
          <Button className='uploadCSVButton' icon={<UploadOutlined />}>Upload CSV</Button>
        </Upload>
        <Button className='contentModifyButton' onClick={addConnectionsData}>Add Connections to Database</Button>
        <Button className='contentModifyButton' onClick={readConnectionsData}>Get Connections from Database</Button>
      </div>
    </>
  );
}

export default PeopleTable;