
var last = localStorage.getItem("last_status");
var el = document.getElementById("u923_img");

console.log(last);
if (last == 1) {
	el.src = "../Alice-35y-Smoke.gif";
} else if (last == 2) {
	el.src = "../Gema-30y-Non.gif";
} else if (last == 3) {
	el.src = "../Hans-65y-Non.gif";
} else if (last == 4) {
	el.src = "../Ricky-55y-Smoke.gif";;
} else {
	el.src = " ";
}

let filter = document.getElementById('profile_selection');

filter.addEventListener('change', filterChanged);

function filterChanged() {
	console.log("onchange received");
	var e = document.getElementById("profile_selection");
	var value = e.options[e.selectedIndex].value;
	console.log(value);
	localStorage.setItem("last_status", value);
	location.reload();
  }
  
