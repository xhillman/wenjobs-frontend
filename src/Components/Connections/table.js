import { Table } from 'antd';
import { getDoc, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import Column from 'antd/es/table/Column';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'
import db from '../Firebase/FirebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { setConnectionsData } from '../../Store/slices/connections';


const PeopleTable = () => {

  const { user, isAuthenticated } = useAuth0();


  let connectionsData = useSelector(state => state.connections.connections);
  const dispatch = useDispatch();

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

      <Table pagination={{ pageSize: '10' }}
        defaultPageSize={10}
        style={{ height: '100%' }}
        dataSource={connectionsData}>
        <Column title='First Name' dataIndex='First Name' key={Math.random()} />
        <Column title='Last Name' dataIndex='Last Name' key={Math.random()} />
        <Column title='Email Address' dataIndex='Email Address' key={Math.random()} />
        <Column title='Company' dataIndex='Company' key={Math.random()} />
        <Column title='Position' dataIndex='Position' key={Math.random()} />
        <Column title='Connected On' dataIndex='Connected On' key={Math.random()} />
      </Table>



    </>
  );
}

export default PeopleTable;