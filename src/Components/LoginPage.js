import React from 'react'
import UserContext from './userContext';
import { useContext } from 'react';
const LoginPage = () => {
    const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div className="search m-4 p-4 flex items-center">
    <label className="p-2">UserName : </label>
    <input
      className="border border-black p"
      value={loggedInUser}
       onChange={(e) => setUserName(e.target.value)}
    />
  </div>
  )
}

export default LoginPage