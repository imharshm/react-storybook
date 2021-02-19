import React from "react";

const Table = ({ tableHeader, tableRow }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeader.map((header, i) => (
            <React.Fragment key={i}>
              <th>{header.name}</th>
            </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRow.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
