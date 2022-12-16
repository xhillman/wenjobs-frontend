import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '# Connections',
    dataIndex: 'numConnections',
    key: 'numConnections',
  }
];

const CompaniesTable = () => {

  let connectionsData = useSelector(state => state.connections.connections);
  // console.log('connection data: ', connectionsData);
  let companyData = new Map();
  connectionsData.forEach(connection => {
    if (companyData.has(connection.Company)) {
      let currentCount = companyData.get(connection.Company);
      companyData.set(connection.Company, currentCount + 1);
    } else {
      companyData.set(connection.Company, 1);
    }
  })
  let companyDataArray = [];
  companyData.forEach((value, key) => {
    if (key === '') {
      companyDataArray.push({company: 'No Company Listed', numConnections: value});
    } else {
      companyDataArray.push({ company: key, numConnections: value });
    }
  });
  console.log('company data: ', companyDataArray);

  return (
    <div className='connectionsTableWrapper'>
      <Table pagination={{ pageSize: '10' }}
        defaultPageSize={10}
        dataSource={companyDataArray}>
        <Column title='Company' dataIndex='company' key={Math.random()} />
        <Column title='# Connections' dataIndex='numConnections' key={Math.random()} />
      </Table>
    </div>
  )
}

export default CompaniesTable;