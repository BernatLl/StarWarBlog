const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			peopleData: [],
			planetsData: [],
			starshipsData: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch('https://www.swapi.tech/api/people')
				.then(response => {
					console.log('Aqui esta response' ,response )
						if(response.ok){
							return response.json();
						}
						throw new Error('Fail loading data')
					}
				)
				.then(responseAsJson => {
					console.log('Aqui esta responseAsJson' ,responseAsJson )
					setStore({peopleData:responseAsJson.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
				fetch('https://www.swapi.tech/api/planets')
				.then(response => {
					console.log('Aqui esta response' ,response )
						if(response.ok){
							return response.json();
						}
						throw new Error('Fail loading data')
					}
				)
				.then(responseAsJson => {
					console.log('Aqui esta responseAsJson' ,responseAsJson )
					setStore({planetsData:responseAsJson.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
				fetch('https://www.swapi.tech/api/starships')
				.then(response => {
					console.log('Aqui esta response' ,response )
						if(response.ok){
							return response.json();
						}
						throw new Error('Fail loading data')
					}
				)
				.then(responseAsJson => {
					console.log('Aqui esta responseAsJson' ,responseAsJson )
					setStore({starshipsData:responseAsJson.results})
				})
				.catch(error=>{
					console.error(error.message);

				})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.peopleData.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
