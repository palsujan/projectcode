window.addEventListener('load', ()=>{
	state = document.querySelector('.state-cases')
	url= 'https://api.covid19india.org/data.json';

	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		/*console.log(data);*/

		const corona = data.statewise;
		/*console.log(corona[1]['state']);*/

		document.write('<table border=2>')
		document.write('<tr>')
		document.write('<td>')
		document.write('Latest Update Time')
		document.write('</td>')
		document.write('<td>')
		document.write('State')
		document.write('</td>')
		document.write('<td>')
		document.write('Active Cases')
		document.write('</td>')
		document.write('<td>')
		document.write('Confirmed Case')
		document.write('</td>')
		document.write('<td>')
		document.write('Dath Cases')
		document.write('</td>')
		document.write('<td>')
		document.write('Recover Cases')
		document.write('</td>')
		document.write('</tr>')
		

		//data fetch from the api
		for(i=1; i<38; i++){
		document.write('<tr>')
		document.write('<td>')
		document.write(corona[i]['lastupdatedtime']);
		document.write('</td>')
		document.write('<td>')
		document.write(corona[i]['state'])
		document.write('</td>')
		document.write('<td>')
		document.write(corona[i]['active'])
		document.write('</td>')
		document.write('<td>')
		document.write(corona[i]['confirmed'])
		document.write('</td>')
		document.write('<td>')
		document.write(corona[i]['deaths'])
		document.write('</td>')
		document.write('<td>')
		document.write(corona[i]['recovered'])
		document.write('</td>')
		document.write('</tr>')
		}
		

		document.write('</table>')
	})
});
 




   var rowElm = document.createElement('div');

    var stateElm = document.createElement('div');
    var activeElm = document.createElement('div');
    var confirmedElm = document.createElement('div');
    var deathsElm = document.createElement('div');
    var recoveredElm = document.createElement('div');

    				stateElm.textContent = corona[i].state;
    				activeElm.textContent = corona[i].active;
    				confirmedElm.textContent = corona[i].confirmed;
    				deathsElm.textContent = corona[i].deaths;
    				recoveredElm.textContent = corona[i].recovered;



    				rowElm.appendChild(stateElm,activeElm,confirmedElm,recoveredElm);
    				// active.appendChild(activeElm);
    				// confirm.appendChild(confirmedElm);
    				// death.appendChild(deathsElm);
    				// recover.appendChild(recoveredElm);