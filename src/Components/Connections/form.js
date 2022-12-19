import React from 'react';
import {
    Form,
    Input
} from 'antd';

import './style.css'

function PeopleForm() {
    return (
        <Form
            labelCol={{ span: 15 }}
            wrapperCol={{ span: 20 }}
            layout="vertical"
        >
            <Form.Item label="Search by First Name">
                <Input.Search onSearch={(value) => {
                }} />
            </Form.Item>
            <Form.Item label="Search by Last Name">
                <Input />
            </Form.Item>
            <Form.Item label="Search by Company">
                <Input />
            </Form.Item>
        </Form>
    );
};
export default PeopleForm;