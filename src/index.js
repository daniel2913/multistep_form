import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { DataProvider } from './data/DataProvider'
import router from './routes/router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<DataProvider>
			<RouterProvider router={router}/>
		</DataProvider>
	</React.StrictMode>
)
