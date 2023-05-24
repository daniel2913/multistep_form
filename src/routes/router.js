import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Main from './Main'
import { createBrowserRouter } from 'react-router-dom'
import React from 'react'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main/>,
		children: [
			{
				path: '*',
				element: <Page1/>
			},
			{
				path: '/2',
				element: <Page2/>
			},
			{
				path: '/3',
				element: <Page3/>
			},
			{
				path: '/4',
				element: <Page4/>
			},
			{
				path: '/5',
				element: <Page5/>
			}
		]
	}
])

export default router
