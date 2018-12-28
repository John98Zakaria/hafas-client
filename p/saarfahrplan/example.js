'use strict'

const createClient = require('../..')
const saarfahrplanProfile = require('.')

const client = createClient(saarfahrplanProfile, 'hafas-client-example')

client.journeys('15541', '10609', {results: 1})
// .then(([journey]) => {
// 	const leg = journey.legs[0]
// 	return client.trip(leg.id, leg.line.name, {polyline: true})
// })
// .then(([journey]) => {
// 	return client.refreshJourney(journey.refreshToken, {stopovers: true, remarks: true})
// })

// client.departures('15541', {duration: 1})
// client.arrivals('15541', {duration: 10, stationLines: true})
// client.locations('uhlandstr', {results: 2})
// client.station('10609') // Uhlandstr., Saarbrücken
// client.nearby({
// 	type: 'location',
// 	latitude: 49.229498,
// 	longitude: 7.008609
// }, {distance: 400})
// client.radar({
// 	north: 49.244044,
// 	west: 6.987644,
// 	south: 49.235332,
// 	east: 7.006480
// }, {results: 10})
// client.reachableFrom({
// 	type: 'location',
// 	id: '009000763',
// 	latitude: 49.235223,
// 	longitude: 6.996493,
// 	name: 'Saarbrücken, Rathaus'
// }, {maxDuration: 20})

.then((data) => {
	console.log(require('util').inspect(data, {depth: null, colors: true}))
})
.catch(console.error)
