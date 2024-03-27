import check from '../assets/icon-checkmark.svg'
import { FormPage } from '../components/FormPage'

function CheckMark({ id, checked, className }: { id: string, checked: boolean,className?:string }) {
	return (
		<label 
			htmlFor={id}
			className={`w-8 pointer-events-none aspect-square relative ${checked ? "bg-p-blue-purple" : "bg-n-gray-light"} transition-colors`}
		>
			<input 
				id={id} 
				hidden 
				readonly
				checked={checked}
				type='checkbox'
				className="peer"
			/>
			<img
				className={`absolute w-6 aspect-square right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 ${checked ? "" : "hidden"}`}
				src={check}
				alt='check'
			/>
		</label>
	)
}

function Addon({ addon, checked, className }: { addon: typeof addonList[number], checked: boolean, className?:string }) {
	function clickHandler() {
		addons.value = addons.value.includes(addon)
			? addons.value.filter(a => a !== addon)
			: [...addons.value, addon]
	}
	return (
		<button
			type="button"
			onClick={clickHandler}
			className={`flex w-full justify-between p-2 items-center border rounded-md ${(addons.value.includes(addon) && 'bg-p-blue-light border-p-blue-marine') || 'border-n-gray-light bg-n-alabaster'} transition-colors ${className}`}
		>
			<CheckMark 
				className=''
				id={`addon-${addon.title}`}
				checked={checked}
			/>
			<div className='text-start w-full ml-4'>
				<h2 className="text-2xl text-p-blue-marine font-bold">
					{addon.title}</h2>
				<p className="text-xl text-n-gray-cool">
					{addon.desc}
				</p>
			</div>
			<span
				className={`font-semibold ml-auto ${checked ? "" : "invisible"} ${yearly.value ? "text-p-blue-purple" : ""}`}
			>
				+{addon.price * ((yearly.value && 10) || 1)}$/{(yearly.value && 'yr') || 'mo'}
			</span>
		</button>
	)
}

export default function Page3({ path }: { path: string }) {
	return (
		<>
		<FormPage
			title="Pick add-ons"
			subtitle="Add-ons help enchance your gaming experience."
		/>
			<fieldset className="flex overflow-y-auto flex-col items-center gap-6 w-full">
				{addonList.map(addon =>
					<Addon
						className=""
						addon={addon}
						checked={addons.value.includes(addon)}
					/>
				)}
			</fieldset>
			</>
	)
}

