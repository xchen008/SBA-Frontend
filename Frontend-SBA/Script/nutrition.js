let container = document.getElementById("plans");

let titles = ["Body Recomposition", "Bulking Up","All you need to know about Nutrition", "Vegan Guide"];
let length = 4;
for(let i = 0; i < length; i++){
	let item = document.createElement('div');
	container.appendChild(item);
	item.style = "width: 360px;height: 390px;text-align:center";
	let img = document.createElement('img');
	let title = document.createElement('p');
	item.appendChild(img);
	item.appendChild(title);
	img.src = "Images/Nutrition/img0" + i + ".jpg";
	img.style = "width: 300px;height: 300px;margin:auto";
	title.style = "font-size:25px;font-weight:600";
	title.textContent = titles[i];
}