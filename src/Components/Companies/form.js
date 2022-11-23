import React from 'react';
import {
  Form,
  Input,
  Slider,
  Checkbox,
} from 'antd';
import Description from '../Descriptions/Description';

import './style.css'

function CompanyForm() {

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
        <Form.Item label="General Keywords">
          <Input />
        </Form.Item>
        <Form.Item label="Headquarters Location">
          <Input />
        </Form.Item>
        <Form.Item label="Industry">
          <Input />
        </Form.Item>
        <Form.Item label="Number of Employees">
        <Slider className='formSlider'
          defaultValue={5}
          tooltip={{
            placement: 'right'
          }}
        />
        </Form.Item>
        <Form.Item label="Actively Hiring">
        <Checkbox/>
        </Form.Item>
        <Form.Item label="Market Cap">
        <Slider className='formSlider'
          defaultValue={5}
          blur
          tooltip={{
            placement: 'right',
          }}
        />
        </Form.Item>
      </Form>
    </div>
  );
};
export default CompanyForm;