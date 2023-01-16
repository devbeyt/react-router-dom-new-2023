import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createRoutesFromElements,createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Root from './routes/root'
import Contact, { loader as contactLoader,action as contactAction } from './pages/Contact'
import { loader as rootLoader, action as rootAction, } from './routes/root'
import EditContact,{action as editAction,} from './pages/EditContact'
import {action as deleteAction} from './pages/DeleteContact'
import Index from './pages/Index'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={deleteAction}
        />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
