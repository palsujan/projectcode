window.addEventListener('load', ()=>{
	state = document.querySelector('.state-cases')
	url= 'https://api.covid19india.org/data.json';

	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		/*console.log(data);*/

		const corona = data.statewise;
		/*console.log(corona[1]['state']);*/

		document.write('<div>')
		document.write('<div class="row">')
		document.write('<div class="col col-2">')
		document.write('Latest Update Time')
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write('State')
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write('Active Cases')
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write('Confirmed Case')
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write('Dath Cases')
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write('Recover Cases')
		document.write('</div>')
		document.write('</div>')
		

		//data fetch from the api
		for(i=1; i<38; i++){
		document.write('<div class="row">')
		document.write('<div class="col col-2">')
		document.write(corona[i]['lastupdatedtime']);
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write(corona[i]['state'])
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write(corona[i]['active'])
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write(corona[i]['confirmed'])
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write(corona[i]['deaths'])
		document.write('</div>')
		document.write('<div class="col col-2">')
		document.write(corona[i]['recovered'])
		document.write('</div>')
		document.write('</div>')
		}
		

		document.write('</div>')
	})
});
 