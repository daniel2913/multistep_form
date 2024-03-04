import { error, page } from "../state";
import LinkButton from "./LinkButton";


type Props = {
	idx: string
	title: string
	subtitle: string
	href: string
	disabled?: boolean
}

function NavItem(props: Props) {
	return (
		<LinkButton disabled={props.disabled} href={props.href} className="text-center flex flex-col items-center justify center">
			<span
				className={`text-xl font-semibold text-p-blue-light flex justify-center items-center  rounded-full w-12 aspect-square ${page.value===props.href ? "bg-p-blue-light/20" : "bg-p-blue-marine/30"} ${props.disabled ? "backdrop-saturate-0" : ""}`}
			>
				{props.idx}
			</span>
			<h3 className="hidden lg:block"
			>
				{props.title}
			</h3>
			<h2 className="font-semibold">{props.subtitle}</h2>
		</LinkButton>
	)
}

export default function Navigation({ className }: { className: string }) {

	return (
		<nav className={`object-cover bg-[url('/sidebar-mob.svg')] lg:bg-[url('/sidebar-desk.svg')] flex sm:px-6 lg:px-0 lg:py-4 justify-around relative lg:flex-col ${className}`}>
			<NavItem
				href="info"
				idx="1"
				title="Step 1"
				subtitle="Your Info"
			/>
			<NavItem
				disabled={error.value}
				href="plan"
				idx="2"
				title="Step 2"
				subtitle="Select Plan"
			/>
			<NavItem
				disabled={error.value}
				href="addons"
				idx="3"
				title="Step 3"
				subtitle="Add-ons"
			/>
			<NavItem
				disabled={error.value}
				href="summary"
				idx="4"
				title="Step 4"
				subtitle="Summary"
			/>
		</nav>
	)
}
