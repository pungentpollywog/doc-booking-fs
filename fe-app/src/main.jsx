import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Services from './routes/Services.jsx';
import Contact from './routes/Contact.jsx';
import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <h1>Oh no!!!!</h1>,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'service',
          element: <Services />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </StrictMode>
);
