import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider'

function Variant ({ plan: { title, price, img }, yearly }) {
	return (
		<>
			<img src={img} alt={title}></img>
			<div className='description'>
				<h2>{title}</h2>
				<p>${price * ((yearly && 10) || 1)}/{(yearly && 'yr') || 'mo'}</p>
				<span className={`discount ${((!yearly && 'no-display') || '')}`}>2 months free</span>
			</div>
		</>
	)
}

function getPlan (e) {
	return Array.from(e.currentTarget.parentNode.childNodes).indexOf(e.currentTarget)
}

function Page2 () {
	const { planList, plan, setPlan, yearly, setYearly } = useContext(DataContext)
	return (
		<>
			<h1 className="page-title">Select your plan</h1>
			<p className="instruction">You have the option of monthly or yearly billing.</p>

			<ul className="variant-field">
				{planList.map(item => {
					return (
						<li onClick={(e) => { setPlan(planList[getPlan(e)]) }} key={item.title} className={`variant ${(item.title === plan?.title && 'chosen') || ''}`}>
							<Variant plan={item} yearly={yearly}/>
						</li>
					)
				})}
			</ul>

			<div className="toggle-field">
				<span className={!yearly && 'set'}>Monthly</span>
				<div>
					<input id='toggle-plan' checked={yearly} onChange={() => setYearly(prev => !prev)} type='checkbox'/>
					<label htmlFor="toggle-plan"/>
					<label htmlFor="toggle-plan" className='cuck-ball'/>
				</div>
				<span className={yearly && 'set'}>Yearly</span>
			</div>
		</>
	)
}

export default Page2
