import { Router } from "preact-router"
import { page } from '../state'
import Page1 from "./Page1"
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Completed from "./Page5"
import { BottomNav } from '../components/BottomNav'
import Navigation from '../components/Navigation'


export default function App() {
	return (
		<div
			className="w-screen h-screen relative bg-n-magnolia"
		>
			<div className="lg:min-h-32 h-full w-full  lg:h-4/5 lg:w-4/5 lg:min-w-60 absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2  flex flex-col lg:flex-row overflow-x-hidden rounded-lg">
				<Navigation className="h-1/5 lg:h-full lg:text-lg lg:w-1/5" />
				<main 
					className="flex overflow-y-auto relative rounded-lg -translate-y-12 lg:translate-y-0 mx-2 lg:mx-0 bg-n-alabaster lg:h-full p-4 lg:p-16 flex-col items-start lg:w-full"
				>
					<Router default onChange={e => { page.value = e.path || "" }}>
						<Page1 path="info" />
						<Page2 path="plan" />
						<Page3 path="addons" />
						<Page4 path="summary" />
						<Completed path="completed" />
					</Router>
				</main>
				<BottomNav className="absolute text-2xl bottom-4 lg:pl-[20%]" />
			</div>
		</div>
	)
}
