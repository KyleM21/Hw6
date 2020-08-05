$(document).ready(function() {
	
	$("#tForm").validate(
	
		//alert("validating");
		// Validation rules
		rules: {
			x1:	{
				required: true,
				number: true
				},
			x2:	{
				required: true,
				number: true
				},
			y1:	{
				required: true,
				number: true
				},
			y2:	{
				required: true,
				number: true
				}

		},
		
		// Error messages
		messages: {
			x1:	{
				required: "This value needs to be filled in",
				number: "Please enter a valid number with no letters or special characters (x1)"
				},
			x2:	{
				required: "This value needs to be filled in",
				number: "Please enter a valid number with no letters or special characters (x2)"
				},
			y1:	{
				required: "This value needs to be filled in",
				number: "Please enter a valid number with no letters or special characters (y1)"
				},
			y2:	{
				required: "This value needs to be filled in",
				number: "Please enter a valid number with no letters or special characters (y2)"
				}
		},
	);
});

// On successful submission, call the math() function to build the table$.validator.setDefaults({
submitHandler: function(form) {
	alert("submitted!");
	form.submit();
}