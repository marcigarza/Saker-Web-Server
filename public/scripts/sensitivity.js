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
	localStorage.setItem("smoker_status", smoke_value);
	localStorage.setItem("age_group", age_value);
	console.log(age_value);
	console.log(smoke_value);
	return returnStatus;
}