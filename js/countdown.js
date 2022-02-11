
	
		$(window).scroll(function() {
			if ($(this).scrollTop() < 5500) {
				(function(){ 
					numberWang1 = {
						countUpOrDown: function(numberWang1, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
						// Required parameters
						var divPlaceholder = document.getElementById(numberWang1);
						var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
						var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
						// Optional parameters
						betweenNumberDuration = betweenNumberDuration || 20;
						betweenEffect = betweenEffect || "jello";
						effectDuration = effectDuration || "0.1s";
						endingEffect = endingEffect || "tada";
						endingEffectDuration = endingEffectDuration || "1s";
						// if both numbers ARE numbers
						if (isNaN(startingNumber, endingNumber)) {
							console.log('both starting and ending numbers are not integars!');
							return false;
						} else {
							if(fixedStartingNumber < 0){
								divPlaceholder.innerHTML = fixedStartingNumber-1;
							} else {
								divPlaceholder.innerHTML = fixedStartingNumber;
							}
							
							if(fixedEndingNumber < 0){
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
							} else {
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
							}
							
							if(fixedStartingNumber > fixedEndingNumber) {
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber--;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
							} else if(fixedStartingNumber < fixedEndingNumber)  {		
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber++;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
							} else if(fixedStartingNumber == fixedEndingNumber) {
									clearInterval(clearCountTimer);
									clearCountTimer = 0;
									divPlaceholder.style.animationDuration = endingEffectDuration;
									divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
								}
							}
						}
						
						
					}
					numberWang2 = {
						countUpOrDown: function(numberWang2, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
						// Required parameters
						var divPlaceholder = document.getElementById(numberWang2);
						var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
						var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
						// Optional parameters
						betweenNumberDuration = betweenNumberDuration || 20;
						betweenEffect = betweenEffect || "jello";
						effectDuration = effectDuration || "0.1s";
						endingEffect = endingEffect || "tada";
						endingEffectDuration = endingEffectDuration || "1s";
						// if both numbers ARE numbers
						if (isNaN(startingNumber, endingNumber)) {
							console.log('both starting and ending numbers are not integars!');
							return false;
						} else {
							if(fixedStartingNumber < 0){
								divPlaceholder.innerHTML = fixedStartingNumber-1;
							} else {
								divPlaceholder.innerHTML = fixedStartingNumber;
							}
							
							if(fixedEndingNumber < 0){
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
							} else {
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
							}
							
							if(fixedStartingNumber > fixedEndingNumber) {
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber--;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
							} else if(fixedStartingNumber < fixedEndingNumber)  {		
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber++;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
							} else if(fixedStartingNumber == fixedEndingNumber) {
									clearInterval(clearCountTimer);
									clearCountTimer = 0;
									divPlaceholder.style.animationDuration = endingEffectDuration;
									divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
								}
							}
						}
					}
					numberWang3 = {
						countUpOrDown: function(numberWang3, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
						// Required parameters
						var divPlaceholder = document.getElementById(numberWang3);
						var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
						var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
						// Optional parameters
						betweenNumberDuration = betweenNumberDuration || 20;
						betweenEffect = betweenEffect || "jello";
						effectDuration = effectDuration || "0.1s";
						endingEffect = endingEffect || "tada";
						endingEffectDuration = endingEffectDuration || "1s";
						// if both numbers ARE numbers
						if (isNaN(startingNumber, endingNumber)) {
							console.log('both starting and ending numbers are not integars!');
							return false;
						} else {
							if(fixedStartingNumber < 0){
								divPlaceholder.innerHTML = fixedStartingNumber-1;
							} else {
								divPlaceholder.innerHTML = fixedStartingNumber;
							}
							
							if(fixedEndingNumber < 0){
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
							} else {
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
							}
							
							if(fixedStartingNumber > fixedEndingNumber) {
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber--;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
							} else if(fixedStartingNumber < fixedEndingNumber)  {		
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber++;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
							} else if(fixedStartingNumber == fixedEndingNumber) {
									clearInterval(clearCountTimer);
									clearCountTimer = 0;
									divPlaceholder.style.animationDuration = endingEffectDuration;
									divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
								}
							}
						}
					}
					numberWang4 = {
						countUpOrDown: function(numberWang4, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
						// Required parameters
						var divPlaceholder = document.getElementById(numberWang4);
						var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
						var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
						// Optional parameters
						betweenNumberDuration = betweenNumberDuration || 20;
						betweenEffect = betweenEffect || "jello";
						effectDuration = effectDuration || "0.1s";
						endingEffect = endingEffect || "tada";
						endingEffectDuration = endingEffectDuration || "1s";
						// if both numbers ARE numbers
						if (isNaN(startingNumber, endingNumber)) {
							console.log('both starting and ending numbers are not integars!');
							return false;
						} else {
							if(fixedStartingNumber < 0){
								divPlaceholder.innerHTML = fixedStartingNumber-1;
							} else {
								divPlaceholder.innerHTML = fixedStartingNumber;
							}
							
							if(fixedEndingNumber < 0){
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
							} else {
								var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
							}
							
							if(fixedStartingNumber > fixedEndingNumber) {
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber--;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
							} else if(fixedStartingNumber < fixedEndingNumber)  {		
								function updateToEndNumber() {	
									divPlaceholder.style.animationDuration = effectDuration;
									divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
									divPlaceholder.innerHTML = fixedStartingNumber++;
									if(fixedStartingNumber == fixedEndingNumber) {
										clearInterval(clearCountTimer);
										clearCountTimer = 0;
										divPlaceholder.style.animationDuration = endingEffectDuration;
										divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
									}
								}
								var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
							} else if(fixedStartingNumber == fixedEndingNumber) {
									clearInterval(clearCountTimer);
									clearCountTimer = 0;
									divPlaceholder.style.animationDuration = endingEffectDuration;
									divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
								}
							}
						}
					}
				
				
						var numbers1 = 51;
						var numbers2 = 39
						var numbers3 = 11;
						var numbers4 = 125;
						numberWang1.countUpOrDown('numberWang1', 0, numbers1, 100, "shake", "0.03s", "tada", "3s")
						numberWang2.countUpOrDown('numberWang2', 0, numbers2, 100, "shake", "0.03s", "tada", "3s")
						numberWang3.countUpOrDown('numberWang3', 0, numbers3, 100, "shake", "0.03s", "tada", "3s")
						numberWang4.countUpOrDown('numberWang4', 0, numbers4, 60, "shake", "0.03s", "tada", "3s")
		
						
				
				})();
			}else{

			}
		});
		
		


