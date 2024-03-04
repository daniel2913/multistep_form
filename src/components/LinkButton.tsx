import { navigate, pages } from "../state"

type Props = {
	children: preact.ComponentChildren
	href: typeof pages[number]
	disabled?: boolean
	className?: string
	native?: boolean
}

export default function LinkButton({ children, href, disabled, className, native }: Props) {
	function clickHandler() {
		if (native)
			window.location.assign(href)
		else
			navigate(href)
	}
	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			type="button"
			style={{ border: 'none' }}
			className={className}
		>
			{children}
		</button>
	)
}
