import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../Features/Auth/Pages/LoginPage';
import RegisterPage from '../Features/Auth/Pages/RegisterPage';
import Home from '../Features/Home/Home';
import DashboardHome from '../Features/Dashboard/Pages/DashboardHome';
import Protected from './protected';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/dashboard',
    element: <Protected>
      <DashboardHome />
    </Protected>
  },
  {
    path: '*',
    element: <div className="min-h-screen bg-black flex items-center justify-center text-white">404 - Page Not Found</div>,
  }
]);
