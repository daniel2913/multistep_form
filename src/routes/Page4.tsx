import { FormPage } from "../components/FormPage";
import { addons, plan, yearly } from "../state";

export default function Page4(props: { path: string }) {
	return (
		<>
		<FormPage
			title="Finishing up"
			subtitle="Double-check everything looks OK before confirming."
		/>
			<div className="w-full flex flex-col justify-center items-center">
			<ul className='flex flex-col gap-4 w-full bg-n-magnolia px-4 py-6 rounded-lg'>
				<li className='flex justify-between items-center'>
					<label>
						<p className="text-xl leading-7 text-start text-p-blue-marine font-bold">
							{plan.value.title}
							({(yearly.value && 'Yearly') || 'Monthly'})
						</p>
						<button
							className="text-n-gray-cool underline"
							type="button"
							onClick={() => { yearly.value = !yearly.value }}
						>
							Change
						</button>
					</label>
					<span className="text-end text-xl font-semibold text-p-blue-marine">
						${plan.value.price * ((yearly.value && 10) || 1)}/{((yearly.value && 'yr') || 'mo')}
					</span>
				</li>
				<line className="bg-n-gray-cool h-px "/>
				{addons.value.map(addon => {
					return (
						<li
							key={addon.title}
							className='flex justify-between items-center'
						>
							<p
								className="text-n-gray-cool text-lg"
							>
								{addon.title}
							</p>
							<span
								className="text-xl text-p-blue-marine font-semibold"
							>
								+${addon.price * ((yearly.value && 10) || 1)}/{((yearly.value && 'yr') || 'mo')}
							</span>
						</li>
					)
				})}
			</ul>
			<div
				className='flex w-full justify-between items-center mt-6'
				>
					<p
								className="text-n-gray-cool text-xl"
					>
						Total ({((yearly.value && 'per year') || 'per month')})
					</p>
					<span
					className="text-2xl text-p-blue-purple font-bold"
					>
						${
							addons.value.reduce((sum, addon) => sum + addon.price, 0 + plan.value.price) * ((yearly.value && 10) || 1)
						}/{((yearly.value && 'yr') || 'mo')}
					</span>
				</div>
				</div>
		</>
	)
}

