import { FormPage } from "../components/FormPage"
import { plan, planList, yearly } from "../state"


function Variant({ item, className }: { item: typeof planList[number], className:string }) {
	return (
		<button
			type="button"
			onClick={() => { plan.value = item }}
			className={`flex lg:flex-col  lg:gap-2 w-full gap-4 p-2 lg:p-4 items-center lg:items-start border rounded-md ${(item === plan.value && 'bg-p-blue-light border-p-blue-marine') || 'border-n-gray-light bg-n-alabaster'} transition-colors ${className}`}
		>
			<img src={item.img} alt={item.title} />
			<div className='text-start lg:mt-12'>
				<h2 className="text-2xl text-p-blue-marine font-bold"
				>
					{item.title}
				</h2>
				<p className="text-xl text-n-gray-cool">${item.price * ((yearly.value && 10) || 1)}/{(yearly.value && 'yr') || 'mo'}</p>
			</div>
			<span className={`text-p-blue-marine font-semibold ml-auto lg:ml-0 ${((!yearly.value && 'invisible') || '')}`}>2 months free</span>
		</button>
	)
}

export default function Page2(props: { path: string }) {
	function keyHandle(e:KeyboardEvent){
		if (e.key===" " || e.key==="Enter")
			yearly.value = !yearly.value
	}
	return (
		<>
		<FormPage
			title="Select your plan"
			subtitle="You have the option of monthly or yearly billing."
		/>
			<fieldset className="flex mb-8 flex-col lg:flex-row items-center gap-6 w-full">
				{planList.map((item) =>
					<Variant
						className="max-w-96"
						item={item}
					/>
				)}
			</fieldset>
			<div className="w-full flex justify-center items-center">
				<label
					className={`font-semibold gap-4 w-64 text-2xl text-p-blue-marine flex justify-between ${yearly.value ? "text-p-blue-purple" : "text-n-gray-light"}`}
					htmlFor="toggle-plan"
					tabindex={0}
					onKeyDown={keyHandle}
				>

					<span>
						Monthly
					</span>
					<div className={`relative w-full rounded-3xl ${yearly.value ? "bg-p-blue-purple" : "bg-n-gray-cool"}`}>
						<input
							className="peer"
							hidden
							id='toggle-plan'
							checked={yearly}
							onChange={() => { yearly.value = !yearly.value }}
							type='checkbox'
						/>
						<div
							className='absolute transition-all peer-checked:translate-x-full aspect-square h-8 bg-n-alabaster rounded-full'
						/>
					</div>
					<span className="">
						Yearly
					</span>
				</label>
				</div>
			</>
	)
}
