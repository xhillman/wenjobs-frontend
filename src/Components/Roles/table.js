import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Tag, Card } from 'antd';
import Column from 'antd/es/table/Column';
import axios from 'axios';
import './style.css'
import { render } from '@testing-library/react';

  const columns = [
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
    },
    {
      title: 'Posted',
      dataIndex: 'post_date',
      key: 'post_date',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Space wrap>
                <Tag key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              </Space>
            );
          })}
        </>
      ),
    },
    {
      title: 'Appy Now!',
      dataIndex: 'link',
      key: 'link',
      render: (link) => <Button type="primary" href={link}>Apply !</Button>
    },
  ];

function RoleTable() {
  const [roleDetails, setRoleDetails] = useState(null)
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
    <div className='roleTableWrapper'>
      <Table columns={columns} dataSource={jobsData} pagination={{
        pageSize: 5,
      }}
        onRow={record => ({
          onClick: (e) => setRoleDetails(`${record.details}`)
        })}
        rowSelection={handleRowSelection}
        size='small'
      >
        <Column title='job' dataIndex='job' key={Math.random()} />
        <Column title='company' dataIndex='company' key={Math.random()} />
        <Column title='location' dataIndex='location' key={Math.random()} />
        <Column title='Post time' dataIndex='post_date' key={Math.random()} />
        <Column title='link' dataIndex='link' key={Math.random()} />
        <Column title='tags' dataIndex='tags' key={Math.random()} />
      </Table>
      <Card className='roleDetailCard' title="Role Details" bordered={false} >
        <p>{roleDetails}</p>
      </Card>
    </div>
  )
}
export default RoleTable;