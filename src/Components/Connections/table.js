import { Table } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Form, Input } from 'antd';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import Papa from 'papaparse';
import Column from 'antd/es/table/Column';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
import db from '../Firebase/FirebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { setConnectionsData } from '../../Store/slices/connections';
import { SearchOutlined } from '@ant-design/icons';


const PeopleTable = () => {

  const { user, isAuthenticated } = useAuth0();


  let connectionsData = useSelector(state => state.connections.connections);
  const dispatch = useDispatch();


  const handleFile = (info) => {

    console.log(info);
    Papa.parse(info.file, {
      header: true,
      complete: (result) => {
        console.log(result.data);
        dispatch(setConnectionsData(result.data))
        console.log('papa parse connections ', connectionsData)
      }
    });
    console.log('papa parse connections ', connectionsData);
    addConnectionsData();
  }

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


    const docRef = doc(db, "users", user.email);
    let docSnap = await getDoc(docRef);
    let data;

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      data = docSnap.data().connections
    } else {
      // doc.data() will be undefined in this case
      let docSnap = await getDoc(docRef);
      data = docSnap.data().connections
      console.log("No such document!");
    }

    console.log(data)
    dispatch(setConnectionsData(data));
  }

  useEffect(() => {
    if (isAuthenticated) {
      readConnectionsData();
    }
  }, [isAuthenticated])
  return (
    <>
    
      <div className='connectionsTableWrapper'>
        <Table pagination={{ pageSize: '5' }}
          defaultPageSize={5}
          dataSource={connectionsData}>
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
        </div>
      </div>
    </>
  );
}

export default PeopleTable;