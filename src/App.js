// import ConnectionTable from "./Components/ConnectionTable";
import FileUploadForm from "./Components/FileUpload";
import FormInputTableData from './Components/FormInputTableData';
// import FilterFormField from './Components/FilterFormField'
import Database from "./Database";

function App() {
  return (
    <div className="App">
      <Database/>
      <header className="App-header">
        <h1>Wen Jobs Front-end</h1>
      </header>
      <FileUploadForm/>
      {/* <FilterFormField/> */}
      <FormInputTableData/>
    </div>
  );
}

export default App;
