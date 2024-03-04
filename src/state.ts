import arcade from './assets/icon-arcade.svg'
import advanced from './assets/icon-advanced.svg'
import pro from './assets/icon-pro.svg'
import { computed, signal } from '@preact/signals'
import { route } from 'preact-router'

export const addonList = [
	{ title: 'Online service', desc: 'Access to multiplayer games', price: 1 },
	{ title: 'Larger storage', desc: 'Extra 1 TB of space', price: 2 },
	{ title: 'Customizable profile', desc: 'Custom theme on your profile', price: 2 }
]

export const planList = [
	{ title: 'Arcade', price: 9, img: arcade },
	{ title: 'Advanced', price: 12, img: advanced },
	{ title: 'Pro', price: 15, img: pro }
]


export const pages = ["info","plan","addons","summary"]
export const page = signal("info")
export function navigate(to:typeof pages[number]){
	route(to)
}

export const name = signal("")
export const email = signal("")
export const phone = signal("")
export const plan = signal<typeof planList[number]>(planList[1])
export const yearly = signal(true)
export const addons =signal<typeof addonList>([])

export const error = computed(()=> !(name.value.length && email.value.length && phone.value.length)
)
