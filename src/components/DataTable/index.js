import React, { Component } from "react";
import { sortBy } from "lodash";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=60&noinfo")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          rows: response.results,
          loading: true,
        });
      });
  }

  //Ran out of time, sorry for the very undry code below

  sortEmail = () => {
    this.setState((prevState) => {
      const sortedRows = sortBy(prevState.rows, "email")
      console.log(sortedRows)
      return { rows: sortedRows }
    });
  };

  sortName = () => {
    this.setState((prevState) => {
      const sortedRows = sortBy(prevState.rows, "name.first")
      console.log(sortedRows)
      return { rows: sortedRows }
    });
  };

  sortPhone = () => {
    this.setState((prevState) => {
      const sortedRows = sortBy(prevState.rows, "phone")
      console.log(sortedRows)
      return { rows: sortedRows }
    });
  };

  sortDOB = () => {
    this.setState((prevState) => {
      const sortedRows = sortBy(prevState.rows, "dob.date")
      console.log(sortedRows)
      return { rows: sortedRows }
    });
  };

  //Ending my undry code

  render() {
    const { rows, loading } = this.state;
    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table className="table" cellPadding={0} cellSpacing={0}>
            <thead className="thead-dark">
              <tr>
                <th></th>
                <th>
                <button className="btn btn-link" onClick={this.sortName}>Name</button>
                </th>
                <th>
                <button className="btn btn-link" onClick={this.sortPhone}>Phone</button>
                </th>
                <th>
                  <button className="btn btn-link" onClick={this.sortEmail}>Email</button>
                </th>
                <th>
                <button className="btn btn-link" onClick={this.sortDOB}>DOB</button>
                </th>
                {/* <th><button onClick={() => this.props.sortBy('first')}>Name</button></th>
                <th><button onClick={() => this.props.sortBy('phone')}>Phone</button></th>
                <th><button onClick={() => this.props.sortBy('email')}>Email</button></th>
                <th><button onClick={() => this.props.sortBy('date')}>DOB</button></th> */}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.phone}>
                  <td>
                    <img src={row.picture.medium} alt={row.name.first} />
                  </td>
                  <td>
                    {row.name.first} {row.name.last}
                  </td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.dob.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        // </EmployeeContext.Provider>
      );
    // }
  }
}
}

export default DataTable;
