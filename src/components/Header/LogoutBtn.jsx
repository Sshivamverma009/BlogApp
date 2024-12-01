import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-flex items-center px-6 py-2 text-white font-medium bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
