import { route } from "preact-router";

type Props = {
	children: preact.ComponentChildren;
	disabled?: boolean;
	className?: string;
	native?: boolean;
	href: string;
};

export default function LinkButton({
	children,
	href,
	disabled,
	className,
	native,
}: Props) {
	function clickHandler() {
		if (native) window.location.assign(href);
		else route(href);
	}
	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			type="button"
			style={{ border: "none" }}
			className={className}
		>
			{children}
		</button>
	);
}
