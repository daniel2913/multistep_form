import { type Signal, useComputed } from "@preact/signals";
import LinkButton from "../components/LinkButton";
import { pages } from "../routes/Layout";

type Props = {
	className?: string;
	page: Signal<string>;
	error: Signal<boolean>;
};
export function BottomNav(props: Props) {
	const currentIdx = useComputed(() => pages.indexOf(props.page.value));
	const lockBack = currentIdx.value === 0;
	const lockForward =
		currentIdx.value === pages.length - 1 || props.error.value;
	if (props.page.value === "completed")
		return (
			<nav className={`absolute bottom-2 w-full ${props.className}`}>
				<div className="flex justify-between px-4">
					<LinkButton
						className="bg-p-blue-purple text-n-alabaster px-4 py-2 rounded-md"
						href="info"
					>
						Start Over
					</LinkButton>
				</div>
			</nav>
		);
	return (
		<nav className={`absolute bottom-2 w-full ${props.className}`}>
			<div className="flex justify-between px-4">
				{props.page.value === pages[0] ? (
					<div />
				) : (
					<LinkButton
						className={`${
							lockBack ? "bg-n-gray-light" : "bg-p-blue-purple"
						} text-n-alabaster px-4 py-2 rounded-md`}
						disabled={lockBack}
						href={props.error.value ? "info" : pages[currentIdx.value - 1]}
					>
						Back
					</LinkButton>
				)}
				{props.page.value === pages[pages.length - 1] ? (
					<LinkButton
						className={`${
							props.error.value ? "bg-n-gray-light" : "bg-p-blue-purple"
						} text-n-alabaster px-4 py-2 rounded-md`}
						disabled={props.error.value}
						href="completed"
					>
						Complete
					</LinkButton>
				) : (
					<LinkButton
						className={`${
							lockForward ? "bg-n-gray-light" : "bg-p-blue-purple"
						} text-n-alabaster px-4 py-2 rounded-md`}
						disabled={lockForward}
						href={pages[currentIdx.value + 1]}
					>
						Next
					</LinkButton>
				)}
			</div>
		</nav>
	);
}
