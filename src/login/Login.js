import React from 'react';

const handleClick = () => {
    alert('Button clicked!');
};

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleClick}>
      Click Me
    </button>
    </div>
  );
};

export default Login;