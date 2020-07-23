var isSignedIn = true;

var profile = document.getElementById("profileIcon");
var profilepic = document.getElementById("profilePic");
var username = document.getElementById("username");


console.log(profilepic);
console.log(profile);


//profilepic.addEventListener("onmouseover",createthings);
//profilepic.addEventListener("onmouseout",deletethings);

var createthings = function(){
	deletethings(profile);
	username.innerText = "";

	if(isSignedIn === true){
		username.innerText = "Hi, Xue Ru"
		let link1 = document.createElement('a');
		link1.href = "profile.html";
		link1.innerText = "Profile";
		profile.appendChild(link1);
	}
}// createthings end

var deletethings = function(profile){
	while(profile.firstChild){
			profile.removeChild(profile.firstChild);
	}
}// deletethings end




