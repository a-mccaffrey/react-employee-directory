import React from "react";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
  render() {
  return (
    <div>
      <Header />
      {/* <SearchForm /> */}
      <DataTable />
    </div>
  );
}
}

export default App;