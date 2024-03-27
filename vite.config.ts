import preact from "@preact/preset-vite"
import { defineConfig } from "vite"

export default defineConfig({
	build:{
		emptyOutDir:true, 
	},
	resolve:{
		alias:{
			"@":"./src"
		}
	},
	plugins:[preact()],
})
