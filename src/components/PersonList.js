import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Capitalize, getData } from "../utils/Methods";

const PersonList = () => {
  const [persons, setPersons] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await getData("https://randomuser.me/api/");

    if (res.data && res.data.results) {
      setPersons(res.data.results);
      console.log(res.data.results);
    } else {
      setErrorMsg("API Error");
      console.log("API Error");
    }
  };

  return (
    <div className="card border-0 p-4 persons-list">
      <h3 className="mb-3">List of Persons</h3>
      {errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>Sr. NO</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>User Image</th>
            </tr>
          </thead>
          <tbody>
            {persons && persons.length
              ? persons.map((person, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{person.name.title + ". " + person.name.first + " " + person.name.last}</td>
                    <td>{Capitalize(person.gender)}</td>
                    <td>
                      Date: {person.dob.date}
                      <span className="px-3"></span>
                      Age: {person.dob.age}
                    </td>
                    <td>
                      <img src={person.picture.medium} alt="user" />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default PersonList;
