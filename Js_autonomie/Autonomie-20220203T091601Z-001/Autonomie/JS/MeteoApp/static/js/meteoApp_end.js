const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=585ee65ca36290ecc301eab6daa59875&units=metric'
	async function getWeather() {
	  try {
	    const response = await axios.get(WEATHER_API);
	    // console.log(response);
		updateMeteoCard(response.data)
	  } catch (error) {
	    console.error(error);
	  }
	}
	function updateMeteoCard(result){
		console.log(result)
		let iconCode = result.weather[0].icon;
		let temp     = result.main.temp;
		document.getElementById('wicon').src=`http://openweathermap.org/img/w/${iconCode}.png`
		document.querySelector('.temp').textContent=Math.round(temp)+'°c'
		document.querySelector('.city-title').textContent=result.name;


	}

	let goBtn = document.querySelector('#goBtn');
	goBtn.addEventListener('click',async function(){
		let a = await getWeather();
	})