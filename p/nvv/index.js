'use strict'

const baseProfile = require('./base.json')
const products = require('./products')

const saarfahrplanProfile = {
	...baseProfile,
	locale: 'de-DE',
	timezone: 'Europe/Berlin',

	products: products,

	departuresGetPasslist: false,
	departuresStbFltrEquiv: false,
	refreshJourneyUseOutReconL: true,
	trip: true,
	radar: true,
	reachableFrom: true,
}

module.exports = saarfahrplanProfile
