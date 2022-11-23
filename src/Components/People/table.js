import { Space, Table, Tag } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, List, UploadProps, Form, Input } from 'antd';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs, writeBatch, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Column from 'antd/es/table/Column';
import './style.css'

const PeopleTable = () => {

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
    const batch = writeBatch(db);
    try {
      if (connectionsData) {
        connectionsData.forEach(element => {
          let ref = doc(db, "connections", element['First Name']);
          batch.set(ref,
            {
              'First Name': element['First Name'],
              "Last Name": element['Last Name'],
              "Email Address": element['Email Address'],
              "Company": element.Company,
              "Position": element.Position,
              "Connected On": element['Connected On'],
            });
        });
      }

      await batch.commit();


    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const readConnectionsData = async () => {

    let connectionsArray = [];
    
    
    const querySnapshot = await getDocs(collection(db, "connections"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc)}`);
      const newItem = doc.data();
      connectionsArray.push(newItem);
    });
    setConnectionsData(connectionsArray);
    console.log(connectionsArray[0])
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
      <Table className='connectionsTableWrapper' dataSource={connectionsData}>
        <Column title='First Name' dataIndex='First Name' key={Math.random()} />
        <Column title='Last Name' dataIndex='Last Name' key={Math.random()} />
        <Column title='Email Address' dataIndex='Email Address' key={Math.random()} />
        <Column title='Company' dataIndex='Company' key={Math.random()} />
        <Column title='Position' dataIndex='Position' key={Math.random()} />
        <Column title='Connected On' dataIndex='Connected On' key={Math.random()} />
      </Table>
      <div className='uploadSectionWrapper'>
        <Upload customRequest={handleFile}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Button onClick={addConnectionsData}>add new collection item</Button>
        <Button onClick={readConnectionsData}>add all connections items to state</Button>
      </div>
    </>
  );
}

export default PeopleTable;