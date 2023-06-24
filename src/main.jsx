import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='mx-auto max-w-screen-xl'>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</div>
)
