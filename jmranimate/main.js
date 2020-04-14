
$(document).ready(function() {

	(function(){

		// rightText
		function updateClass() {
		  let a = $(".progfill.active");
		  a.removeClass("active");
		  a = a.parent().next(".discoverjmr");
		  if (a.length == 0)
		    a = $(".discoverjmr").first();
		  a.find(".progfill").addClass("active");
		}

		// CirclePointer
		function updateClassCrl() {
		  let a = $(".circlePointer.active");
		  a.removeClass("active");
		  a = a.parent().next(".pointerWrap");
		  if (a.length == 0)
		    a = $(".pointerWrap").first();
		  a.find(".circlePointer").addClass("active");
		}

		// Center Title
		function updateClassDcvrTitle(e) {
		  let a = $(".dcvrTitle.active");
		  a.removeClass("active");
		  a = a.parent().next(".discoverTitleWrap");
		  if (a.length == 0)
		    a = $(".discoverTitleWrap").first();
		  a.find(".dcvrTitle").addClass("active");
		}

		let myInterval = setInterval(updateClass,3000);
		let intvlCirclepointer = setInterval(updateClassCrl,3000);
		let intvlCntrTitle = setInterval(updateClassDcvrTitle,3000);

		const discoverjmrText = $('.discoverCrlcontent');

 		discoverjmrText.mouseover(function(ev){
			clearInterval(myInterval);
			clearInterval(intvlCirclepointer);
			clearInterval(intvlCntrTitle);
 		});

 		discoverjmrText.mouseout(function(ev){
			myInterval = setInterval(updateClass,3000);
			intvlCirclepointer = setInterval(updateClassCrl,3000);
			intvlCntrTitle = setInterval(updateClassDcvrTitle,3000);
 		});

 		const cirClePointerHv = $('.circlePointer');

 		cirClePointerHv.mouseover(function(ev){
			clearInterval(myInterval);
			clearInterval(intvlCirclepointer);
			clearInterval(intvlCntrTitle);
 		});

 		cirClePointerHv.mouseout(function(ev){
			myInterval = setInterval(updateClass,3000);
			intvlCirclepointer = setInterval(updateClassCrl,3000);
			intvlCntrTitle = setInterval(updateClassDcvrTitle,3000);
 		});

 		cirClePointerHv.each(function(){
 			$(this).click(function(){

 				cirClePointerHv.removeClass('active');
 				$(this).addClass('active');

 				const thisAttr = $(this).attr('id');
 				// console.log(thisAttr);

 				const disvrText = $('.progfill');

				disvrText.each(function(){
					const dsvrTestAttr = $(this).attr('id');
					// console.log(dsvrTestAttr);

					if(thisAttr == dsvrTestAttr){
						$(this).addClass('active');
					}else{
						$(this).removeClass('active');
					}

				}); 

				const discoverTitleclick = $('.dcvrTitle');

				discoverTitleclick.each(function(){
					const dsvrTitleAttr =	$(this).attr('id');

					if(thisAttr == dsvrTitleAttr){
						$(this).addClass('active');
					}else{
						$(this).removeClass('active');
					}


				});


 			});
 		});



	
		// $('#slide-show-overall').hover(function(ev){
	 //    clearInterval(timer);
		// 	}, function(ev){
		// 	    timer = setInterval( showDiv, 5000);
		// 	});

	})();


});



