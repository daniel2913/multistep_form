import type { Signal } from "@preact/signals";
import { FormPage as FormHeader } from "@/components/FormPage";
import type { planList } from "./Layout";

type VariantProps = preact.JSX.HTMLAttributes<HTMLButtonElement> & {
	item: (typeof planList)[number];
	active: boolean;
	yearly: Signal<boolean>;
};

function Variant({ item, className, onClick, active, yearly }: VariantProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex lg:flex-col  lg:gap-2 w-full gap-4 p-2 lg:p-4 items-center lg:items-start border rounded-md ${
				(active && "bg-p-blue-light border-p-blue-marine") ||
				"border-n-gray-light bg-n-alabaster"
			} transition-colors ${className}`}
		>
			<img src={item.img} alt={item.title} />
			<div className="text-start lg:mt-12">
				<h2 className="text-2xl text-p-blue-marine font-bold">{item.title}</h2>
				<p className="text-xl text-n-gray-cool">
					${item.price * ((yearly.value && 10) || 1)}/
					{(yearly.value && "yr") || "mo"}
				</p>
			</div>
			<span
				className={`text-p-blue-marine font-semibold ml-auto lg:ml-0 ${
					(!yearly.value && "invisible") || ""
				}`}
			>
				2 months free
			</span>
		</button>
	);
}

type Props = {
	path: string;
	yearly: Signal<boolean>;
	plan: Signal<(typeof planList)[number]>;
	planList: typeof planList;
};

export default function Page2({ planList, plan, yearly }: Props) {
	function keyHandle(e: KeyboardEvent) {
		if (e.key === " " || e.key === "Enter") yearly.value = !yearly.value;
	}
	return (
		<>
			<FormHeader
				title="Select your plan"
				subtitle="You have the option of monthly or yearly billing."
			/>
			<fieldset className="flex mb-8 flex-col lg:flex-row items-center gap-6 w-full">
				{planList.map((item) => (
					<Variant
						yearly={yearly}
						className="max-w-96"
						item={item}
						onClick={() => {
							plan.value = item;
						}}
						active={item === plan.value}
					/>
				))}
			</fieldset>
			<div className="w-full flex justify-center items-center">
				<label
					className={`font-semibold gap-4 w-64 text-2xl text-p-blue-marine flex justify-between ${
						yearly.value ? "text-p-blue-purple" : "text-n-gray-light"
					}`}
					htmlFor="toggle-plan"
					tabindex={0}
					onKeyDown={keyHandle}
				>
					<span>Monthly</span>
					<div
						className={`relative w-full rounded-3xl ${
							yearly.value ? "bg-p-blue-purple" : "bg-n-gray-cool"
						}`}
					>
						<input
							className="peer"
							hidden
							id="toggle-plan"
							checked={yearly}
							onChange={() => {
								yearly.value = !yearly.value;
							}}
							type="checkbox"
						/>
						<div className="absolute transition-all peer-checked:translate-x-full aspect-square h-8 bg-n-alabaster rounded-full" />
					</div>
					<span className="">Yearly</span>
				</label>
			</div>
		</>
	);
}
