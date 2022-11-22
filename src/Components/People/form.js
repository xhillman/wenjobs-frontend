import React from 'react';
import {
  Form,
  Input
} from 'antd';

import './style.css'

function PeopleForm() {
  return (
    <div className='formWrapper'>
      <Form
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="vertical"
      >
        <Form.Item label="Search by First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Search by Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Search by Company">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
export default PeopleForm;