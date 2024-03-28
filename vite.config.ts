import { defineConfig } from "vite"

export default defineConfig({
	build:{
		emptyOutDir:true, 
		copyPublicDir:true,
		outDir:"../dist"
	},
	root:"src",
	resolve:{
		alias:{
			"public/":"../public/",
			"@/":"/"
		}
	},
	publicDir:"../public",
})
