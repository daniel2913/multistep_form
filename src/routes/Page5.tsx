import { FormPage } from "@/components/FormPage";

export default function Completed(props: { path: string; className?: string }) {
	return (
		<>
			<FormPage className={props.className} title="" subtitle="" />
			<div className="w-full flex px-6 flex-col justify-center items-center">
				<img className="mb-8" src="/icon-thank-you.svg" alt="thank you" />
				<h1 className="text-3xl text-p-blue-marine font-bold">Thank you!</h1>
				<p className="text-center text-n-gray-cool font-semibold">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</p>
			</div>
		</>
	);
}
