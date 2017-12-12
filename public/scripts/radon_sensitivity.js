/*
console.log(localStorage.getItem("smoker_status"));
console.log(localStorage.getItem("age_group"));
console.log(localStorage.getItem("gender"));
*/

var smoker_status = 0;
var age_group     = 0;
var gender        = 0;

smoker_status = localStorage.getItem("smoker_status");
age_group = localStorage.getItem("age_group");
gender = localStorage.getItem("gender");
localStorage.clear();

if (smoker_status === null || age_group === null || gender === null) {
	window.location.href = "main_circle.html";
}
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
document.getElementById("u758").innerHTML = radon_sensitivity.toFixed(2);

	
var e = document.getElementById("u782_img");

if(gender == 1) {
	if(age_group == 1) {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/M20Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/M20E.png";
		}
		else {
			e.src = "../SensitivityGraph/M20N.png";
		}
	} 
	else if (age_group == 2) {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/M60Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/M60E.png";
		}
		else {
			e.src = "../SensitivityGraph/M60N.png";
		}
	} 
	else {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/M70Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/M70E.png";
		}
		else {
			e.src = "../SensitivityGraph/M70N.png";
		}
	}
} 
else {
	if(age_group == 1) {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/F20Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/F20E.png";
		}
		else {
			e.src = "../SensitivityGraph/F20N.png";
		}
	} 
	else if (age_group == 2) {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/F60Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/F60E.png";
		}
		else {
			e.src = "../SensitivityGraph/F60N.png";
		}
	} 
	else {
		if(smoker_status == 1) {
			e.src = "../SensitivityGraph/F70Y.png";
		}	
		else if (smoker_status == 2) {
			e.src = "../SensitivityGraph/F70E.png";
		}
		else {
			e.src = "../SensitivityGraph/F70N.png";
		}
	}
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
