import { Upload, Button, Table } from "antd";
import Papa from "papaparse";
// import "antd/dist/antd.css";
import "./style.css";

export default function FileUploadForm() {
  const props = {
    name: "file",
    action: "",

    beforeUpload: (file) => {
      console.log("file", file);

      Papa.parse(file, {
        header: true,
        complete: function (results, file) {
          console.log("Parsing complete:", results);
        }
      });

      // Prevent upload
      return false;
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <Upload {...props}>
      <Button>Click to Upload</Button>
      {/* <Table dataSource={results} columns={columns}></Table> */}
    </Upload>
  );
}