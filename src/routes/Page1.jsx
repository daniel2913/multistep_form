import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider'

function Page1 (props) {
	const {
		name, setName,
		email, setEmail,
		phone, setPhone,
		error
	} = useContext(DataContext)

	return (
		<>
			<h1 className="page-title">Personal info</h1>
			<p className="instruction">Please provide your name, email address, and phone number.</p>

			<fieldset className="input-fieldset">
				<div className="input-field">
					<label className="field-label">
						<span>Name</span>
						<span className={(!(error && !name) && 'no-display') || ''}>This field is required</span>
					</label>

					<input className="field-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Stephen King"></input>
				</div>
				<div className="input-field">
					<label className="field-label">
						<span>Email Address</span>
						<span className={(!(error && !email) && 'no-display') || ''}>This field is required</span>
					</label>

					<input className="field-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. stephenking@lorem.com"></input>
				</div>
				<div className="input-field">
					<label className="field-label">
						<span>Phone Number</span>
						<span className={(!(error && !phone) && 'no-display') || ''}>This field is required</span>
					</label>
					<input className="field-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +1 234 567 890"></input>
				</div>

			</fieldset>
		</>
	)
}

export default Page1
