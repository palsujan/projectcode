window.addEventListener('load', ()=>{

const timeZone = document.querySelector('.timezone h2 ');
const weatherIcon = document.querySelector('.weatherIcon h2');
const temparatureZone = document.querySelector('.temparature h2 .temp');
const temparatureBox = document.querySelector('.temparature h2');
const temparatureDeg = document.querySelector('.temparature h2 .deg');
const temperatureDescription = document.querySelector('.temperature-description');

let long;
let lat;


if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(position =>{
		long = position.coords.longitude;
		lat = position.coords.latitude;

		let proxy = 'https://cors-anywhere.herokuapp.com/';

		const api = `${proxy}https://api.darksky.net/forecast/816c6b00b3066c06481ef9b1ba8ba531/${lat},${long}`;

		fetch(api).then(response =>{
			return response.json();
		}).then(data =>{
			console.log(data);

			const timezone = data.timezone;
			const {temperature, summary, icon} =data.currently;
			let celsius = (temperature -32)*(5/9);

			timeZone.textContent = timezone;
			temparatureZone.textContent = Math.floor(temperature); 
			temperatureDescription.textContent = summary;

			temparatureBox.addEventListener('click', ()=>{
				if(temparatureDeg.textContent === 'F'){
					temparatureDeg.textContent = 'C';
					temparatureZone.textContent = Math.floor(celsius);
				}
				else{
					temparatureDeg.textContent = 'F';
					temparatureZone.textContent = Math.floor(temperature);
				}
				
			});

			setIcons(icon, document.querySelector('.icon'));

		});



	});
}
const setIcons = (icon, iconId) =>{
			const skycons = new Skycons({color:"white"});
			const currentIcon = icon.replace(/-/g,"_").toUpperCase();
			skycons.play();
			return skycons.set(iconId,Skycons[currentIcon]);
		}

});
