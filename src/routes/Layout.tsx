import { Router } from "preact-router";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Completed from "./Page5";
import { BottomNav } from "../components/BottomNav";
import Navigation from "../components/Navigation";
import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";
import { computed, signal, useSignal } from "@preact/signals";
import { route } from "preact-router";

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
	{ title: "Arcade", price: 9, img: arcade },
	{ title: "Advanced", price: 12, img: advanced },
	{ title: "Pro", price: 15, img: pro },
];

export const pages = ["info", "plan", "addons", "summary"];
export const page = signal("info");
export function navigate(to: (typeof pages)[number]) {
	route(to);
}

export const error = computed(
	() => !(name.value.length && email.value.length && phone.value.length),
);
export default function App() {
	const name = useSignal("");
	const email = useSignal("");
	const phone = useSignal("");
	const plan = useSignal<(typeof planList)[number]>(planList[1]);
	const yearly = useSignal(true);
	const addons = useSignal<typeof addonList>([]);
	return (
		<div className="w-screen h-screen relative bg-n-magnolia">
			<div className="lg:min-h-32 h-full w-full  lg:h-4/5 lg:w-4/5 lg:min-w-60 absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2  flex flex-col lg:flex-row overflow-x-hidden rounded-lg">
				<Navigation className="h-1/5 lg:h-full lg:text-lg lg:w-1/5" />
				<main className="flex overflow-y-auto relative rounded-lg -translate-y-12 lg:translate-y-0 mx-2 lg:mx-0 bg-n-alabaster lg:h-full p-4 lg:p-16 flex-col items-start lg:w-full">
					<Router
						default
						onChange={(e) => {
							page.value = e.path || "";
						}}
					>
						<Page1 name={name} phone={phone} email={email} path="info" />
						<Page2
							planList={planList}
							plan={plan}
							yearly={yearly}
							path="plan"
						/>
						<Page3 path="addons" />
						<Page4 path="summary" />
						<Completed path="completed" />
					</Router>
				</main>
				<BottomNav className="absolute text-2xl bottom-4 lg:pl-[20%]" />
			</div>
		</div>
	);
}
