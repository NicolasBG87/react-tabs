import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyTable = styled.table`
  width: 100%;
  & tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.15);
  }
  & td {
    padding: 5px;
  }
`;

const FakeServer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => setData(json), 1500);
      });
  }, []);

  const renderList = () => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
  };

  return (
    <Container>
      {data ? (
        <MyTable>
          <tbody>{renderList()}</tbody>
        </MyTable>
      ) : (
        Spinner()
      )}
    </Container>
  );
};

export default FakeServer;
