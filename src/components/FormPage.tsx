type Props = {
	title: string
	subtitle: string
	className?: string
}

export function FormPage({ title, subtitle,className}: Props) {
	return (
			<header
				className={`text-start my-4 lg:my-0 lg:mb-12 ${className}`}
			>
				<h1
					className="text-4xl font-bold mb-2 text-p-blue-marine"
				>
					{title}
				</h1>
				<p
					className="text-xl leading-6 font-semibold text-n-gray-cool"
				>
					{subtitle}
				</p>
			</header>
	)
}
