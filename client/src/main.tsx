import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import EnglandPage from './pages/England.tsx';
import FrancePage from './pages/France.tsx';
import GermanyPage from './pages/Germany.tsx';  
import PolandPage from './pages/Poland.tsx';
import SpainPage from './pages/Spain.tsx';
import ExchangePage from './pages/Exchange.tsx';
import Bucketlist from './pages/Bucketlist.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/England',
        element: <EnglandPage />,
      },
      {
        path: '/France',
        element: <FrancePage />,
      },
      {
        path: '/Germany',
        element: <GermanyPage />,
      },
      {
        path: '/Poland',
        element: <PolandPage />,
      },
      {
        path: '/Spain',
        element: <SpainPage />,
      },
      {
        path: '/Exchange',
        element: <ExchangePage />,
      },
      {
        path: '/Bucketlist',
        element: <Bucketlist />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}