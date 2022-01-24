 function disableTxt() {
	  document.getElementById("myText").disabled = true;
	  document.getElementById("myText1").disabled = true;
	  document.getElementById("myText2").disabled = true;
	  document.getElementById("myText3").disabled = true;
	  document.getElementById("myText4").disabled = true;
	  document.getElementById("myText5").disabled = true;
	  document.getElementById("myText6").disabled = true; 
	  document.getElementById("myText7").disabled = true;
	  document.getElementById("myText8").disabled = true;

}

function getUpdatedCareGiver(){
	var Name =document.getElementById("myText").value;
	var age =document.getElementById("myText1").value;
	var address =document.getElementById("myText2").value;
	var phone =document.getElementById("myText3").value;
	var gender=document.getElementById("myText4").value;
    var letterNumber= "/^[0-9a-zA-Z]+$/";
	
	if(Name==""){
		alert("Name is obligatrory")
	}
	else if(/[^a-z]/i.test(Name)){
		alert("Name should include letters")

	}

	else if(age==""){
		alert("age is obligatrory")
	}
	else if(!/[^a-z]/i.test(age)){
		alert("age should be digits")
	}
	else if(age<0 || age>100){
		alert("enter valid age")

	}
	else if(address==""){
		alert("address is obligatrory")
	}
	else if(phone==""){
		alert("phone is obligatrory")
	}
	else if(!/[^a-z]/i.test(phone)){
		alert("phone number should be digits")
	}
	else if(phone.toString().length !=11){
		alert("phone number should be 11 digits")
	}
	
	else if(gender==""){
		alert("gender is obligatrory")
	}
	else{
		alert("Caregiver data updated successfully ")
	}

	console.log(Name);
	console.log(age);
	console.log(address);
	console.log(phone);
	console.log(gender);

}



