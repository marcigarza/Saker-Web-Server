var returnStatus

if (typeof(Storage) !== "undefined") {
    returnStatus = true;
} else {
	returnStatus = false;
}

function StoreData() {
	var e = document.getElementById("smoke_selection");
	var smoke_value = e.options[e.selectedIndex].value;
	e = document.getElementById("age_selection");
	var age_value = e.options[e.selectedIndex].value;
	e = document.getElementById("gender_selection");
	var gender_value = e.options[e.selectedIndex].value;
	localStorage.setItem("smoker_status", smoke_value);
	localStorage.setItem("age_group", age_value);
	localStorage.setItem("gender", gender_value);
	console.log(smoke_value);
	console.log(age_value);
	console.log(gender_value);
	return returnStatus;
}