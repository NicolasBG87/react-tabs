import React from "react";
import styled from "styled-components";

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 500px;

  & label {
    color: #197278;
    font-weight: bold;
    margin-bottom: 5px;
  }
  & input {
    border: 1px solid #197278;
    border-radius: 2px;
    padding: 5px;
    margin-bottom: 15px;
  }

  & button {
    color: #197278;
    font-weight: bold;
    border: 1px solid #197278;
    border-radius: 2px;
    background: none;
    padding: 5px 50px;
    cursor: pointer;
    &:hover {
      color: white;
      background: #197278;
    }
  }
`;

const MyFormComponent = () => {
  return (
    <MyForm onSubmit={e => e.preventDefault()}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <button type="submit">Register</button>
    </MyForm>
  );
};

export default MyFormComponent;
