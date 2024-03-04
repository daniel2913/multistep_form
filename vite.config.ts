import preact from "@preact/preset-vite"
/**@type {import('vite').UserConfig}*/
export default {
	build:{
		emptyOutDir:true, 
	},
	resolve:{
		alias:{
			"@":"./src"
		}
	},
	plugins:[preact()],
}
