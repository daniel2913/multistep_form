import check from '../assets/icon-checkmark.svg'
import React, { useContext } from 'react'
import { DataContext } from '../data/DataProvider'

function CheckMark ({ id, checked }) {
	return (
		<div>
			<input id={id} checked={checked} type='checkbox' className='default-checkbox'
			/>
			<label htmlFor={id} className='custom-checkbox'><img src={check} alt='check'/></label>

		</div>
	)
}

function Addon ({ addon: { title, desc, price }, checked, yearly }) {
	return (
		<>
			<CheckMark id={`addon-${title}`} checked={checked}/>
			<div className='description smaller'>
				<h2>{title}</h2>
				<p>{desc}</p>
			</div>
			<span className='addon-price'>+{price * ((yearly && 10) || 1)}$/{(yearly && 'yr') || 'mo'}</span>
		</>
	)
}

function getAddon (e) {
	return Array.from(e.currentTarget.parentNode.childNodes).indexOf(e.currentTarget)
}

function Page3 () {
	const { addons, setAddons, addonList, yearly } = useContext(DataContext)
	return (
		<>
			<h1 className="page-title">Pick add-ons</h1>
			<p className="instruction">Add-ons help enchance your gaming experience.</p>

			<ul className="mp-variant-field">
				{addonList.map(addon => {
					return (
						<li key={addon.title} onClick={(e) => {
							const newAddon = addonList[getAddon(e)]
							if (addons?.includes(newAddon)) {
								setAddons(addons.filter(addon => addon !== newAddon))
							} else {
								setAddons([...addons, newAddon])
							}
						}}

						className={`mp-variant ${(addons?.includes(addon) || '') && 'chosen'}`}>
							<Addon
								addon={addon}
								checked={addons?.includes(addon)}
								yearly={yearly}
							/>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default Page3
