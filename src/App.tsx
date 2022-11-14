import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dashboard} from './page/base'
import { RunnerPage } from './page/runner';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/:courses/:lessons",
    element: <RunnerPage />,
  },
]);


function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
