"use strict";

console.log("Hello from external JavaScript");

// 1. //

	alert("Welcome to my Website!");

// 2. //

	var userInput = prompt("What's your favorite color?");

		alert("Great! " + userInput + " is my favorite color too!");

// 3. //

	// Write some JS code that is variable ans operators, to describe the following scenerios. //

	// 3.a //

		//Get the number of days rented for each movie from user //
			
			var daysLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
			var daysBrotherBear = prompt("How many days did you rent Brother Bear?");
			var daysHercules = prompt("How many days did you rent Hercules?");

		// Get daily rental cost from user //

			var pricePerDay = prompt("What's the cost per day to rent?");

		// Calculate the price to rent all three movies //
		
			var totalDaysRented = Number(daysLittleMermaid)  + Number(daysBrotherBear) + Number(daysHercules);
			var totalPrice = totalDaysRented * pricePerDay;

		// Return the result // 

			alert("You spent " + totalPrice + " dollar on movie rentals");

	// 3.b //

		// Get google pay info from user //

			var hourlyRateGoogle = prompt("How much does Google pay per hour?");
			var weeklyHoursGoogle = prompt("How many hours did you work at Google this week?");
			var totalGoogle = (Number(hourlyRateGoogle) * Number(weeklyHoursGoogle));
		
		// Get facebook pay info from user //

			var hourlyRateFacebook = prompt("How nuch does Facebook pay per hour?");
			var weeklyHoursFacebook = prompt("How many hours did you work at Facebook this week?");
			var totalFacebook = (Number(hourlyRateFacebook) * Number(weeklyHoursFacebook));
		
		// Get Amazon pay info from user //

			var hourlyWageAmazon = prompt("How much does Amazon pay per hour?");
			var weeklyHoursAmazon = prompt("How many hours did you work at Amazon this week?");
			var totalAmazon = Number(hourlyWageAmazon) * Number(weeklyHoursAmazon);

		//Weekly Pay// 

			var weeksPay  = (totalGoogle + totalFacebook + totalAmazon);

		// Output weeks pay // 

				alert("You earned " + weeksPay.toFixed(2) + " dollars this week.");

					// You earned a total of _____ dollars this week //
					
	// 3.c //

		var classFull = confirm("Is the class full");
		var conflicts = confirm("Do you have any conflict?");

		 if (!classFull && !conflicts) {
		 	alert("You can Enroll")
		 }else{ 
		 	alert("You can't enroll")
		}



	// 3.d //

		var itemNumber = confirm("Did you buy more than two items?");
		var expire = confirm("Has the offer expired?");
		var premium = confirm("Are you a premium member?");

		if (itemNumber && !expire || premium) {
			alert("Product offer applied");
		}else{
			alert("Product not offered")
		}

		












		

 