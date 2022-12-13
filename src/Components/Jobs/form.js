import React from 'react';
import {
  Form,
  Input,
  Checkbox,
} from 'antd';
import { Button } from 'antd';

import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { filterJobs } from '../../Store/slices/jobs';
import { setKeyword } from '../../Store/slices/jobs';
import db from '../Firebase/FirebaseConfig';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";


function RoleForm(props) {

  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();


  //apply filter using redux store
  const applyFilter = async () => {
    if (jobs.keyword) {
      // query firebase to see if there are any jobs that match the keyword
      const jobsRef = collection(db, "jobs");
      const q = query(jobsRef, where("title", "==", jobs.keyword), orderBy("posted", "desc"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
  }

  const clearFilter = () => {
    dispatch(filterJobs(''))
  }

  return (
    <div className='roleFormWrapper'>

      <Form
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="vertical"
      >
        <Form.Item label="General Keywords">
          <Input onChange={(e) => dispatch(setKeyword(e.target.value))} />
        </Form.Item>
        {/* <Form.Item label="Remote">
          <Checkbox onChange={(e) => getRemote(e)} />
        </Form.Item> */}
        <Button className='roleSearchButton' onClick={applyFilter}>Apply</Button>
        <Button className='roleSearchButton' onClick={clearFilter}>Clear</Button>
      </Form>
    </div>
  );
};
export default RoleForm;