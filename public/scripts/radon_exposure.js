console.log(localStorage.getItem("smoker_status"));
console.log(localStorage.getItem("age_group"));
console.log(localStorage.getItem("gender"));
var smoker_status = 0;
var age_group     = 0;
var gender        = 0;

smoker_status = localStorage.getItem("smoker_status");
age_group = localStorage.getItem("age_group");
gender = localStorage.getItem("gender");
/*
smoker_status: 
				1. current smoker
				2. ex smoker
				3. non-smoker


age_group:      1. 0  - 50
 				2. 50 - 65 
 				3. 65+ 


gender:         1. male
				2. female

render_sensitivity id : u758
*/



var smoke_affectance  = smoker(smoker_status);
var age_affectance    = age(age_group);
var gender_affectance = (gender == 1)?0.11:0.03;

var radon_sensitivity = smoke_affectance + age_affectance + gender_affectance + 1;
console.log(radon_sensitivity);
console.log(radon_sensitivity.toString());
document.getElementById("u758").innerHTML = radon_sensitivity;

	
if(smoker_status == 3 & age_group ==1) {
	//non_smoker and less than 50
} else if (smoker_status == 3 & (age_group==2 | age_group==3)) {
	//non_smoker and more than 50
} else if ((smoker_status==1 | smoker_status == 2) & age_group==1) {
	//smoker and less than 50
} else {
	//smoker and more than 50
}

function smoker(data) {
	if (data == 1) {
		return 0.07;
	}
	else if (data == 2) {
		return 0.08;
	}
	else {
		return 0.11;
	}
	return 0;
}

function age(data) {
	if (data == 1) {
		return 0;
	}
	else if (data == 2) {
		return 0.14;
	}
	else {
		return 0.07;
	}
	return 0;
}
