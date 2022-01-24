function getAddCareGiver()
{
    
    var Name =document.getElementById("name").value;
	var age =document.getElementById("age").value;
	var address =document.getElementById("address").value;
	var phone =document.getElementById("phone").value;
    
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
    
    else{
        alert("Caregiver data added successfully ")
    }

}

