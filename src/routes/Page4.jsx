import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider'

function Page4 () {
	const { addons, plan, yearly, setYearly } = useContext(DataContext)
	return (
		<>
			<h1 className="page-title">Finishing up</h1>
			<p className="instruction">Double-check everything looks OK before confirming.</p>

			<ul className='total-list'>
				<li className='total-item'>
					<div>
						<h2>{plan.title} ({(yearly && 'Yearly') || 'Monthly'})</h2>
						<button onClick={e => { e.preventDefault(); setYearly(prev => !prev) }}>Change</button>
					</div>
					<span>{plan.price * ((yearly && 10) || 1)}/{((yearly && 'yr') || 'mo')}</span>
				</li>
				{addons.map(addon => {
					return (
						<li key={addon.title} className='total-item'>
							<h2>{addon.title}</h2>
							<span>+{addon.price * ((yearly && 10) || 1)}/{((yearly && 'yr') || 'mo')}</span>
						</li>
					)
				})}
			</ul>

			<div className='total-item'>
				<h2>Total ({((yearly && 'per year') || 'per month')})</h2>
				<span className='total'>${
					addons.reduce((sum, addon) => sum + addon.price, plan.price) * ((yearly && 10) || 1)
				}/{((yearly && 'yr') || 'mo')}</span>
			</div>
		</>
	)
}

export default Page4
