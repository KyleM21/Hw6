function math(fForm) {
	

		
	// So my idea here was to use an array to store the form data right before submission and 
	// then use it here to create the multiplication table
	// var x1 = fArray[0];
	// alert("Testing x1 value: " + x1);
	// If this worked as intended it would've turned the form data into an array and 
	// pulled each field out as needed.
	
	/*  This is just some code that didn't work, it was one of my ideas on how to
		grab the data from the form.
	*/
	var arr = $("fForm").serializeArray();
	var x1 = $('#fForm :x1').fieldValue()[0];
	var x2 = $('#fForm :x2').fieldValue()[1];
	var y1 = $('#fForm :y1').fieldValue()[2];
	var y2 = $('#fForm :y2').fieldValue()[3];
	
	
	
	// Past this point I didn't change any code compared to Homework 5, I never got to this point because
	// I failed to grab the data from the form correctly.
	
	//This clears the old table body and makes room for the new one
	$("#rTable").empty(); 

	// This ensures that you cant put in the variables wrong, the larger variable will always be x2/y2 respectively
	if(x1>x2){
		document.getElementById("errorMessage").innerHTML = "Invalid Input! Please switch your x values";
		throw new Error("Invalid Input");
	}
	if(y1>y2){
		document.getElementById("errorMessage").innerHTML = "Invalid Input! Please switch your y values";
		throw new Error("Invalid Input");
	}
	
	/*This here is a solution to the table acting strange.  The first column and row of multiplication
	would just disappear. subtracing 1 from each means the missing row and column appear and function
	normally
	*/
	y1--;
	x1--;
	
	/*This temporary variable holds the tbody with the new table, effectively replacing the old one by 
	adding it in following the old ones removal
	*/
	var temp="";
	
	//Checks for big mode
	if (bigMode.checked == true){
		temp+="<table id='table'; border='100px'; bordercolor='coral';>";
	}
	else{
		temp+="<table id='table'; border='10px'; bordercolor='blue';>";
	}

	//This first loop creates the rows, and uses a loop to fill the columns
	for(var i = y1; i <= y2; i++){
		
		temp+="<tr id=row style='height:30px;'>";
		//This loops builds the rest of the table
		for(var j = x1; j <= x2; j++){

			if(j == x1){
				color = "lightgrey";	
				
				//This checks if its the first cell of the first row and empties it to provide a cleaner look
				if(i==y1){
					color = "lightgrey";
					temp+="<td style='width:30px; background-color:" + color + "'>" + " " + "</td>";
				}
				else{
				temp+="<td style='width:30px; background-color:" + color + "'>" + (i*1).toFixed(2); + "</td>";
				}
			}
			else if(i == y1){
				color = "lightgrey";
				temp+="<td style='width:30px; background-color:" + color + "'>" + (1*j).toFixed(2); + "</td>";
			}	
			else {
				color = "white";
				temp+="<td style='width:30px; background-color:" + color + "'>" + (i*j).toFixed(2); + "</td>";
			}
		}
		temp+="</tr>";
	}
	
	//This builds the end of the table, appends it.
	temp+="</table>";
	$("#rTable").append(temp);
}
	