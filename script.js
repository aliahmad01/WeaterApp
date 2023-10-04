
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79db73ddc5msh71964f278851befp139e3fjsn6165eaaf2cad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function weather(url){
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);

		// cloud_pct.innerHTML = result.cloud_pct 
		temp.innerHTML = result.temp 
		tem.innerHTML = result.temp	 
		feels_like.innerHTML = result.feels_like 
		humidity.innerHTML = result.humidity 
		humidity2.innerHTML = result.humidity 
		min_temp.innerHTML = result.min_temp 
		max_temp.innerHTML = result.max_temp 
		wind_speed.innerHTML  = result.wind_speed  
		wind_speed2.innerHTML  = result.wind_speed  
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise 
		sunset.innerHTML = result.sunset 

	} catch (error) {
		console.error('Api ni chali');
	}
}

const getWeather= (city)=>{
	cityName.innerHTML=city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
	weather(url)
}
submit.addEventListener('click' , (e)=>{
	e.preventDefault();
	getWeather(city.value);
})
getWeather('Lahore')
// getWeather()
