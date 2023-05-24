import React, { createContext, useState } from 'react'
import arcade from '../assets/icon-arcade.svg'
import advanced from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'

export const DataContext = createContext(null)

const addonList = [
	{ title: 'Online service', desc: 'Access to multiplayer games', price: 1 },
	{ title: 'Larger storage', desc: 'Extra 1 TB of space', price: 2 },
	{ title: 'Customizable profile', desc: 'Custom theme on your profile', price: 2 }
]

const planList = [
	{ title: 'Arcade', price: 9, img: arcade },
	{ title: 'Advanced', price: 12, img: advanced },
	{ title: 'Pro', price: 15, img: pro }
]

export const DataProvider = function ({ children }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [plan, setPlan] = useState(planList[0])
	const [yearly, setYearly] = useState(true)
	const [addons, setAddons] = useState([])
	const [error, setError] = useState(false)
	return (
		<DataContext.Provider value={{
			name,
			setName,
			email,
			setEmail,
			phone,
			setPhone,
			plan,
			setPlan,
			yearly,
			setYearly,
			addons,
			setAddons,
			addonList,
			planList,
			error,
			setError
		}}>
			{children}
		</DataContext.Provider>
	)
}
