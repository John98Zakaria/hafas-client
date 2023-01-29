import baseProfile from './base.json' assert {type:'json'}
import {products} from './products.js'

const profile = {
	...baseProfile,
	locale: 'de-DE',
	timezone: 'Europe/Berlin',

	products: products,

	trip: true,
	radar: true,
	refreshJourneyUseOutReconL: true,
	reachableFrom: true,
}

export {
	profile,
}
