const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			peopleData: [],
			planetsData: [],
			starshipsData: []
		},
		actions: {
			
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
			
		}
	};
};

export default getState;

