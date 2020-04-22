
jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergar');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});
});



window.addEventListener('load', ()=>{

	
	const stateWrap = document.querySelector('.state')
	const active = document.querySelector('.active')
	const confirm = document.querySelector('.confirm')
	const death = document.querySelector('.death')
	const recover = document.querySelector('.recover')
	const active1 = document.querySelector('.active1')
	const confirm1 = document.querySelector('.confirm1')
	const death1 = document.querySelector('.death1')
	const recover1 = document.querySelector('.recover1')

	url= 'https://api.covid19india.org/data.json';

	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
	/*	console.log(data);*/

		const corona = data.statewise;
		// console.log(corona);
		
		for(i=1; i<corona.length; i++){
			// console.log(corona[i]);
				// const dataRow	=`<div class="row">
    //       <div class="col col-2">${corona[i].state}</div>
    //       <div class="col col-2">${corona[i].active}</div>
    //       <div class="col col-3">${corona[i].confirmed}</div>
    //       <div class="col col-2">${corona[i].deaths}</div>
    //       <div class="col col-3">${corona[i].recovered}</div>
    //     </div>`;

    let stateElm = document.createElement('span');
    let activeElm = document.createElement('span');
    let confirmedElm = document.createElement('span');
    let deathsElm = document.createElement('span');
    let recoveredElm = document.createElement('span');
    				stateElm.textContent = corona[i].state;
    				activeElm.textContent = corona[i].active;
    				confirmedElm.textContent = corona[i].confirmed;
    				deathsElm.textContent = corona[i].deaths;
    				recoveredElm.textContent = corona[i].recovered;

    				stateWrap.appendChild(stateElm);
    				active.appendChild(activeElm);
    				confirm.appendChild(confirmedElm);
    				death.appendChild(deathsElm);
    				recover.appendChild(recoveredElm);

						  stateElm.addEventListener('click', ()=>{
								durl = 'https://api.covid19india.org/v2/state_district_wise.json';
								fetch(durl).then((response)=>{
									return response.json();
								}).then((data) =>{
									console.log(data);
								});
						});
		}
			// this loop only use for total count of india
			for(i=0; i<1; i++){
				let activeElm1 = document.createElement('span');
    let confirmedElm1 = document.createElement('span');
    let deathsElm1 = document.createElement('span');
    let recoveredElm1 = document.createElement('span');
    				activeElm1.textContent = corona[i].active;
    				confirmedElm1.textContent = corona[i].confirmed;
    				deathsElm1.textContent = corona[i].deaths;
    				recoveredElm1.textContent = corona[i].recovered;

    				active1.appendChild(activeElm1);
    				confirm1.appendChild(confirmedElm1);
    				death1.appendChild(deathsElm1);
    				recover1.appendChild(recoveredElm1);
			}
});
});



