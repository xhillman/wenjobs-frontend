// import ConnectionTable from "./Components/ConnectionTable";
import FileUploadForm from "./Components/FileUpload";
import FormInputTableData from './Components/FormInputTableData';
// import FilterFormField from './Components/FilterFormField'

function App() {
  return (
    <div className="App">
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
