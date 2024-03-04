import { Signal } from "@preact/signals"
import { name, email, phone} from "../state"
import { JSX } from "preact/jsx-runtime"
import { FormPage as PageTitle } from "../components/FormPage"


type InputProps = {
	label: string
	value: Signal
	placeholder: string
	type?: string
	pattern?:string
	invalidMessage?:string
}
function InputField(props: InputProps) {
		
	function inputHandler(e:JSX.TargetedInputEvent<HTMLInputElement>){
		if (e.currentTarget.checkValidity() && e.currentTarget.value.length>0) props.value.value=e.currentTarget.value
		else props.value.value=""
	}
	function blurHandler(e:JSX.TargetedFocusEvent<HTMLInputElement>){
		if (e.currentTarget.checkValidity()) return
		if(props.invalidMessage)
			e.currentTarget.setCustomValidity(props.invalidMessage)
		e.currentTarget.reportValidity()
	}

	return (
		<label className="flex flex-col">
			<span
				className="text-xl text-p-blue-marine font-semibold"
			>
				{props.label}
			</span>
			<input
				defaultValue={props.value}
				required
				onBlur={blurHandler}
				type={props.type}
				className="px-2 py-1 text-2xl border-n-gray-cool border rounded-lg"
				onInput={inputHandler}
				placeholder={props.placeholder} />
		</label>
	)
}

export default function Page1({ path}: { path: string}) {

	return (
		<>
		<PageTitle
			title="Personal info"
			subtitle="Please provide your name, email address, and phone number."
		/>
			<fieldset className=" space-y-6 w-full max-w-96">
				<InputField
					label="Name"
					value={name}
					placeholder="e.g. Stephen King"
					pattern="[A-Z][a-z]"
					type="text"
					invalidMessage="Enter valid name"
				/>
				<InputField
					label="Email Address"
					value={email}
					placeholder="e.g. stephenking@lorem.com"
					type="email"
				/>
				<InputField
					label="Phone Number"
					value={phone}
					placeholder="e.g. +1 234 567 890"
					type="tel"
				/>
			</fieldset>
		</>
	)
}

