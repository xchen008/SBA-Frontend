let container = document.getElementById("plans");

let titles = ["Candito 6 weeks program", "Faster Six Packs","The DEADLIFT", "Powerlifting Guide","Advanced Programming"];
let length = 5;
for(let i = 0; i < length; i++){
	let item = document.createElement('div');
	container.appendChild(item);
	item.style = "width: 360px;height: 390px;text-align:center";
	let img = document.createElement('img');
	let title = document.createElement('p');
	item.appendChild(img);
	item.appendChild(title);
	img.src = "Images/Training/img0" + i + ".jpg";
	img.style = "width: 300px;height: 300px;margin:auto";
	title.style = "font-size:25px;font-weight:600";
	title.textContent = titles[i];
}