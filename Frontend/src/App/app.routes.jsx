import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../Features/Auth/Pages/LoginPage';
import RegisterPage from '../Features/Auth/Pages/RegisterPage';
import Home from '../Features/Home/Home';
import DashboardHome from '../Features/Dashboard/Pages/DashboardHome';
import Protected from './protected';
import Choice from '../Features/Choose/Pages/Choice';
import DashboardLayout from './DashboardLayout';
import Library from '../Features/Library/Pages/Library';
import Features from '../Features/Marketing/Pages/Features';
import Tools from '../Features/Marketing/Pages/Tools';
import Pricing from '../Features/Marketing/Pages/Pricing';
import Community from '../Features/Marketing/Pages/Community';
import Blog from '../Features/Marketing/Pages/Blog';

import MusePage from '../Features/Chat/Pages/MusePage';
import SettingsPage from '../Features/Setting/Pages/SettingsPage';
import Editor from '../Features/Editor/Pages/Editor';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: '/features', element: <Features /> },
  { path: '/tools', element: <Tools /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/community', element: <Community /> },
  { path: '/blog', element: <Blog /> },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    element: <Protected><DashboardLayout /></Protected>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />
      },
      {
        path: '/choose',
        element: <Choice />
      },
      {
        path: '/library',
        element: <Library />
      },
      {
        path: '/story',
        element: <Editor />
      },
      {
        path: '/poem',
        element: <Editor />
      },
      {
        path: '/muse',
        element: <MusePage />
      },
      {
        path: '/settings',
        element: <SettingsPage />
      }
    ]
  }
  ,

  {
    path: '*',
    element: <div className="min-h-screen bg-black flex items-center justify-center text-white">404 - Page Not Found</div>,
  }
]);
