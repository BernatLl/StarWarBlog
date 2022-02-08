const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			peopleData: [],
			planetsData: [],
			starshipsData: []
		},
		actions: {
			loadTotal: ()=> {
				loadPeopleData();
				loadPlanetData();
				loadStarshipsData();
			},
			loadPeopleData: () => {
				fetch("https://www.swapi.tech/api/people", {
				method: "GET",
				headers: {
					"Accept": "application/json"
				}
				})
				.then(resp => {return resp.json()}
				)
				.then(data => {
					
					setStore({peopleData:data.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
			
			},
			loadPlanetData: () => {
				fetch("https://www.swapi.tech/api/planets", {
				method: "GET",
				headers: {
					"Accept": "application/json"
				}
				})
				.then(resp => {return resp.json()}
				)
				.then(data => {
					
					setStore({planetsData:data.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
			
			},
			loadStarshipsData: () => {
				fetch("https://www.swapi.tech/api/starships", {
				method: "GET",
				headers: {
					"Accept": "application/json"
				}
				})
				.then(resp => {return resp.json()}
				)
				.then(data => {
					
					setStore({starshipsData:data.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
			
			},
			
		}
	};
};

export default getState;

