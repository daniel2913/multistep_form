import { Link, Outlet, useLocation } from 'react-router-dom'
import { DataContext } from '../data/DataProvider'
import React, { useContext } from 'react'

function LinkButton ({ children, to, disabled, setError }) {
	const click = function (e) {
		if (disabled) { e.preventDefault(); setError(true) }
	}
	return (
		<Link to={to}>
			<button style={{ border: 'none' }} onClick={click} className={`nav-button-footer-next ${(disabled && 'disabled') || ''}`}>
				{children}
			</button>
		</Link>
	)
}

function Navigation ({ location }) {
	return (

		<ul className='nav-buttons'>
			<li>
				<span className={`nav-button ${(location.pathname === '/1' || '') && 'active'}`}>1</span>
				<div className='nav-description'>
					<h3>Step 1</h3>
					<h2>Your Info</h2>
				</div>
			</li>
			<li>
				<span className={`nav-button ${(location.pathname === '/2' || '') && 'active'}`}>2</span>
				<div className='nav-description'>
					<h3>Step 2</h3>
					<h2>Select Plan</h2>
				</div>
			</li>
			<li>
				<span className={`nav-button ${(location.pathname === '/3' || '') && 'active'}`}>3</span>
				<div className='nav-description'>
					<h3>Step 3</h3>
					<h2>Add-ons</h2>
				</div>
			</li>
			<li>
				<span className={`nav-button ${(location.pathname === '/4' || '') && 'active'}`}>4</span>
				<div className='nav-description'>
					<h3>Step 4</h3>
					<h2>Summary</h2>
				</div>
			</li>
		</ul>
	)
}

function Main () {
	const location = useLocation()
	const { name, email, phone, setError } = useContext(DataContext)
	console.log(location.pathname)
	return (
		<div className='wrapper'>
			<div className='navigation'>
				<Navigation location={location}/>
			</div>
			<div className='main'>
				<form className='form'>
					<Outlet/>
				</form>
			</div>
			<footer className='footer-main'>
				<LinkButton setError={setError} disabled={+location.pathname[1] < 2} to={`/${+location.pathname[1] - 1}`}
				>
				Go Back
				</LinkButton>
				{+location.pathname[1] < 5 && <LinkButton setError={setError} disabled={!(name && email && phone) || +location.pathname[1] > 4} to={`/${+location.pathname[1] + 1}`}
				>
					{((+location.pathname[1] < 4 && 'Next Step') || 'Confirm')}
				</LinkButton>}
			</footer>
		</div>
	)
}

export default Main
