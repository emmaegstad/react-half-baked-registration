import React from 'react';
import './AuthForm.css';

export default function AuthForm() {
  return (
    <form className="AuthForm">
      <label>E-mail</label>
      <input type="text" placeholder="Enter E-mail Address"></input>
      <label>Password</label>
      <input type="text" placeholder="Enter Password"></input>
      <button>Submit</button>
    </form>
  );
}
