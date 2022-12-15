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
import { algoliasearch } from 'algoliasearch';



function RoleForm(props) {

  //* Instantiate the Algolia client
  const client = algoliasearch(process.env.REACT_APP_ALGOLIA_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();


  //* apply filter using redux store
  const applyFilter = async () => {
    // Fetch search results
    const { results } = await client.search({
      requests: [
        {
          indexName: 'wenjobs',
          query: jobs.keyword,
          hitsPerPage: 50,
        },
      ],
    });
    // add results to redux store
    dispatch(filterJobs(results[0].hits))
  }

  //* resets redux store back to inital call from firebase
  const clearFilter = async () => {
    dispatch(filterJobs(jobs.jobs))
  }

  //* Fetch remote jobs from algolia
  //* Combines keyword with remote for more robust search
  const getRemote = async (e) => {
    if (e.target.checked) {
      const { results } = await client.search({
        requests: [
          {
            indexName: 'wenjobs',
            query: `${jobs.keyword} remote`,
            hitsPerPage: 50,
          },
        ],
      });
      // add results to redux store
      console.log(results[0].hits)
      dispatch(filterJobs(results[0].hits))

    }
  }

  return (
    <Form style={{
      padding: '1rem',
      position: 'relative',
    }}>
      <Form.Item>
        <Input placeholder='Keywords' onChange={(e) => dispatch(setKeyword(e.target.value))} />
      </Form.Item>
      <Form.Item label="Remote">
        <Checkbox onChange={(e) => getRemote(e)} />
      </Form.Item>
      <Button className='roleSearchButton' onClick={applyFilter}>Apply</Button>
      <Button className='roleSearchButton' onClick={clearFilter}>Clear</Button>
    </Form>

  );
};
export default RoleForm;