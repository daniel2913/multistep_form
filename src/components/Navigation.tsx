import { useSignalEffect } from "@preact/signals";
import { route } from "preact-router";
import { useContext } from "preact/hooks";
import { navContext } from "../routes/Layout";
import LinkButton from "./LinkButton";

type Props = {
	idx: string;
	title: string;
	subtitle: string;
	href: string;
	disabled?: boolean;
};

function NavItem(props: Props) {
	const page = useContext(navContext).page;
	useSignalEffect(() => {
		route(page.value);
	});
	return (
		<LinkButton
			disabled={props.disabled}
			href={props.href}
			className="text-center flex flex-col items-center justify-center"
		>
			<span
				className={`text-xl font-semibold text-p-blue-light flex justify-center items-center  rounded-full w-16 aspect-square ${
					page.value === props.href
						? "bg-p-blue-light/20"
						: "bg-p-blue-marine/30"
				} ${props.disabled ? "backdrop-saturate-0" : ""}`}
			>
				{props.idx}
			</span>
			<h3 className="hidden md:block text-xl">{props.title}</h3>
			<h2 className="hidden md:block font-semibold text-xl">
				{props.subtitle}
			</h2>
		</LinkButton>
	);
}

type NavigationProps = {
	className: string;
};

export default function Navigation(props: NavigationProps) {
	const error = useContext(navContext).error;
	return (
		<nav
			className={`flex bg-[url('/bg-sidebar-mobile.svg')] pb-8 md:bg-[url('/bg-sidebar-desktop.svg')] bg-cover sm:px-6 md:px-0 md:py-4 justify-around relative md:flex-col ${props.className}`}
		>
			<NavItem href="info" idx="1" title="Step 1" subtitle="Your Info" />
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
	);
}
