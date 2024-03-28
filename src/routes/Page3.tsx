import type { Signal } from "@preact/signals";
import { FormPage } from "@/components/FormPage";
import type { addonList } from "./Layout";

function CheckMark({
	id,
	checked,
}: { id: string; checked: boolean; className?: string }) {
	return (
		<label
			htmlFor={id}
			className={`w-8 pointer-events-none aspect-square relative ${
				checked ? "bg-p-blue-purple" : "bg-n-gray-light"
			} transition-colors`}
		>
			<input
				id={id}
				hidden
				readonly
				checked={checked}
				type="checkbox"
				className="peer"
			/>
			<img
				className={`absolute w-6 aspect-square right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 ${
					checked ? "" : "hidden"
				}`}
				src="/icon-checkmark.svg"
				alt="check"
			/>
		</label>
	);
}

type AddonProps = {
	addon: (typeof addonList)[number];
	checked: boolean;
	className?: string;
	onClick: () => void;
	yearly: Signal<boolean>;
};

function Addon(props: AddonProps) {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className={`flex w-full justify-between p-2 items-center border rounded-md ${
				(props.checked && "bg-p-blue-light border-p-blue-marine") ||
				"border-n-gray-light bg-n-alabaster"
			} transition-colors ${props.className}`}
		>
			<CheckMark
				className=""
				id={`props.addon-${props.addon.title}`}
				checked={props.checked}
			/>
			<div className="text-start w-full ml-4">
				<h2 className="text-2xl text-p-blue-marine font-bold">
					{props.addon.title}
				</h2>
				<p className="text-xl text-n-gray-cool">{props.addon.desc}</p>
			</div>
			<span
				className={`font-semibold ml-auto ${props.checked ? "" : "invisible"} ${
					props.yearly.value ? "text-p-blue-purple" : ""
				}`}
			>
				+{props.addon.price * ((props.yearly.value && 10) || 1)}$/
				{(props.yearly.value && "yr") || "mo"}
			</span>
		</button>
	);
}

type Props = {
	path: string;
	addonList: typeof addonList;
	addons: Signal<(typeof addonList)[number][]>;
	yearly: Signal<boolean>;
};

export default function Page3(props: Props) {
	return (
		<>
			<FormPage
				title="Pick add-ons"
				subtitle="Add-ons help enchance your gaming experience."
			/>
			<fieldset className="flex overflow-y-auto flex-col items-center gap-6 w-full">
				{props.addonList.map((addon) => (
					<Addon
						onClick={() => {
							props.addons.value = props.addons.value.includes(addon)
								? props.addons.value.filter((a) => a !== addon)
								: [...props.addons.value, addon];
						}}
						yearly={props.yearly}
						addon={addon}
						checked={props.addons.value.includes(addon)}
					/>
				))}
			</fieldset>
		</>
	);
}
