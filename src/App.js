import React, {useEffect, useState} from "react";
import "./App.css";
import Table from './components/DataGrid'
import {getInitialData} from './services/'

function App() {
  const [rows, setRows] = useState([]);
  const chartTitle = 'Association Score Vs Data Type'
  useEffect(() => {
    getInitialData((rows) => {
      setRows(rows)
    })
  }, [])
  return (
    <div className="App">
      <Table chartTitle={chartTitle} rows={rows}/>
    </div>
  );
}

export default App;
