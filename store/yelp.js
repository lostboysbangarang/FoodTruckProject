import axios from 'axios'

export const state = () => ({
	yelpTrucks: { 0: null },
	ipInfo: { location: null },
	check: true,
	savedTrucks: {},
    tempTrucks: {},
    tempYelp: {}
})
export const actions = {
	getJSON({ state, dispatch, commit }, local) {
		console.log(`\t\t\t\t\tInitiating JSON pull\n\n`)
		if (state.yelpTrucks) {
			const rollOut = JSON.parse(local)
			const autoBots = Object.keys(rollOut).length
			for (let i = 0; i < autoBots; i++) {
				state.yelpTrucks[i] = rollOut[i]
			}
		}
		dispatch('getIPInfo')
	},
	getJSONTrucks({state}) {
        delete state.savedTrucks
        // console.log(!state.savedTrucks, local)
		if (localStorage.getItem('savedTrucks')) {
			const rollOut = JSON.parse(localStorage.getItem('savedTrucks'))
            state.savedTrucks = rollOut
            // console.log(rollOut)
			// const autoBots = Object.keys(rollOut).length
			// for (let i = 0; i < autoBots; i++) {
			// 	if (rollOut[i]) {
			// 	}
			// }
		}
        console.log(`\n\t\t\tState Check\n`, state.savedTrucks)
	},
	async updateJSON({ state }, local) {
		await localStorage.removeItem(local.objI)
		localStorage.setItem(local.objI, JSON.stringify(local.objII))
	},

	getIPInfo({ state }, local) {
		if (local) {
			const out = JSON.parse(local)
            // out.forEach(element => {})
			// const iKnowWhereUR = Object.keys(out).length
			console.log(`refresh fail`)
			state.ipInfo.location = out.location
		}
	},
    maybeThis({state}) {
        
        localStorage.removeItem('yelpArry')
        const setYelp = JSON.stringify(state.tempYelp)
        console.log(setYelp)
        localStorage.setItem('yelpArry', setYelp)
    }
}
export const mutations = {
	async setIP(state) {
		const ipArry = await axios.get('http://ip-api.com/json/')

		state.ipInfo.location = {
			city: ipArry.data.city,
			lat: ipArry.data.lat,
			lon: ipArry.data.lon,
		}
		delete state.ipInfo.null

		let truckArry = await axios({
                                        method: 'GET',
                                        url: '/api/yelpTrucks',
                                        headers: { 'Content-Type': 'application/json' },
                                        params: {
                                            term: 'foodtruck',
                                            latitude: state.ipInfo.location.lat,
                                            longitude: state.ipInfo.location.lon,
                                            radius: '40000',
                                            limit: '36',
                                        },
		})
		console.log("before", state.yelpTrucks)
        truckArry = JSON.parse(JSON.stringify(truckArry.data.trucks))
        console.log(`\nAxios Truck Array`, truckArry)
		if (state.check) {
            console.log("setting yelpTrucks")
			await localStorage.setItem('ipConfig', JSON.stringify(state.ipInfo))
			for (let i = 0; i < truckArry.length; i++) {
				truckArry[i].alias = truckArry[i].alias.replaceAll('-', ' ')
				truckArry[i].image_url = truckArry[i].image_url.replaceAll('"', '')
				truckArry[i].url = truckArry[i].url.replaceAll('"', '')

				state.yelpTrucks[i] = JSON.parse(JSON.stringify(truckArry[i]))
				state.yelpTrucks[i].booleen = false
			}
			delete state.yelpTrucks.null
            console.log(`localStorage.yelpArry check`, !localStorage.getItem('yelpArry'))
            console.log(`state.yelpArry check`, state.yelpTrucks)
			if (!localStorage.getItem('yelpArry')) {
				const yelpT = await state.yelpTrucks
				await localStorage.setItem('yelpArry', JSON.stringify(yelpT))
			}
			state.check = false
		}
	},

	async addBooleen(state, { index }) {
		state.yelpTrucks[index].booleen = true
		const size = Object.keys(state.savedTrucks).length
		if (size === 0) {
			state.savedTrucks[size] = state.yelpTrucks[index]
		} else {
            for(let i=0; i < size; i++) {
                if(state.savedTrucks.hasOwnProperty(i.toString())) {}
                else{
                    state.tempTrucks[i]=state.yelpTrucks[index]
                }
            }
			state.savedTrucks[size] = state.yelpTrucks[index]
		}
		// localStorage.removeItem('savedTrucks')
		await localStorage.setItem('savedTrucks', JSON.stringify(state.savedTrucks))
	},

	removeBooleen(state, { index }) {
        console.log(this.yelpArry)
        console.log(`\n\nOLD\n\n`, state.savedTrucks)
		const identification = state.savedTrucks[index].id
		for (let i = 0; i < Object.keys(state.yelpTrucks).length; i++) {
			// const obj = state.yelpTrucks[i.toString()]
            // console.log(`\t\t\t\t\t\tSEARCH`, obj)
			if (state.yelpTrucks[i.toString()].id === identification) {
                // console.log(`\t\t\t\t\t\tFOUND`, obj)
				state.yelpTrucks[i].booleen = false
                delete state.savedTrucks[index]
                console.log(state.yelpTrucks, Object.keys(state.savedTrucks).length)
                let y =0;
                for (let j=0; j < Object.keys(state.savedTrucks).length; j++) {
                    if (state.savedTrucks[j.toString()]) {
                        console.log(`${j}\n\n\n`,state.savedTrucks[j]);
                        state.tempTrucks[j] = state.savedTrucks[j+y]
                    } else {
                        console.log(`${j}\n\n\n`)
                        y++;
                        state.tempTrucks[j] = state.savedTrucks[j+y]
                    }
                    // delete state.savedTrucks[j]
                }
			}
		}
        console.log(`\n\nNEW\n\n`, state.savedTrucks)
        console.log(`\n\nNEW\n\n`, state.tempTrucks)
        // let k = 0;
        for (let j=0; j < Object.keys(state.yelpTrucks).length; j++) {
            state.tempYelp[j] = state.yelpTrucks[j]
            // console.log(state.tempYelp);
            // if(state.tempYelp[j]) {
            // } else {
            //     k++;
            // }
            // delete state.yelpTrucks[j]
        }
        console.log(`\n\nNEW\n\n`, state.yelpTrucks)
        console.log(`\n\nNEW\n\n`, state.tempYelp)
	},
}

export const getters = {
	getIpInfo: (state) => {
		return state.ipInfo
	},
	getTrucks: (state) => {
		return state.yelpTrucks
	},
	getSaved: (state) => {
		return state.savedTrucks
	},
	getLocal: (state) => {
        return state.tempTrucks
    },
}

export const strict = false
