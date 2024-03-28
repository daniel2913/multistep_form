import { BottomNav } from "@/components/BottomNav";
import Navigation from "@/components/Navigation";
import { computed, signal, useComputed, useSignal } from "@preact/signals";
import { createContext } from "preact";
import { Router } from "preact-router";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Completed from "./Page5";

export const addonList = [
	{ title: "Online service", desc: "Access to multiplayer games", price: 1 },
	{ title: "Larger storage", desc: "Extra 1 TB of space", price: 2 },
	{
		title: "Customizable profile",
		desc: "Custom theme on your profile",
		price: 2,
	},
];

export const planList = [
	{ title: "Arcade", price: 9, img: "/icon-arcade.svg" },
	{ title: "Advanced", price: 12, img: "/icon-advanced.svg" },
	{ title: "Pro", price: 15, img: "/icon-pro.svg" },
];

export const pages = ["info", "plan", "addons", "summary"];

export const navContext = createContext({
	page: signal("info"),
	error: computed(() => false),
});

export default function App() {
	const personalInfo = {
		name: useSignal(""),
		email: useSignal(""),
		phone: useSignal(""),
	};
	const page = useSignal("info");
	const plan = useSignal<(typeof planList)[number]>(planList[1]);
	const yearly = useSignal(true);
	const addons = useSignal<typeof addonList>([]);
	const error = useComputed(
		() =>
			!(
				personalInfo.name.value.length &&
				personalInfo.email.value.length &&
				personalInfo.phone.value.length
			),
	);
	return (
		<div className="w-screen h-screen relative bg-n-magnolia">
			<div className="md:min-h-32 h-full w-full  md:h-4/5 md:w-4/5 md:min-w-60 absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2  flex flex-col md:flex-row overflow-x-hidden rounded-md">
				<navContext.Provider value={{ page, error }}>
					<Navigation className="h-1/5 md:h-full md:text-md md:w-1/5" />
					<main className="flex overflow-y-auto relative rounded-md -translate-y-12 md:translate-y-0 mx-2 md:mx-0 bg-n-alabaster md:h-full p-4 md:p-16 flex-col items-start md:w-full">
						<Router
							default
							onChange={(e) => {
								page.value = e.path || "";
							}}
						>
							<Page1 personalInfo={personalInfo} path="info" />
							<Page2
								planList={planList}
								plan={plan}
								yearly={yearly}
								path="plan"
							/>
							<Page3
								addons={addons}
								addonList={addonList}
								yearly={yearly}
								path="addons"
							/>
							<Page4
								addons={addons}
								yearly={yearly}
								plan={plan}
								path="summary"
							/>
							<Completed path="completed" />
						</Router>
					</main>
					<BottomNav
						error={error}
						page={page}
						className="absolute text-2xl bottom-4 md:pl-[20%]"
					/>
				</navContext.Provider>
			</div>
		</div>
	);
}
