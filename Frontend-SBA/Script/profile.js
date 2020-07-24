let titles = ["Powerlifting Guide", "Body Recomposition"];
let imgsrc = ["Images/Training/img03.jpg", "Images/Nutrition/img00.jpg"];
let file = "5_Day_Linear.xlsx";
let download_icon = "Images/Download_Icon.png";

let profile_picture = document.getElementById('profile_picture');
let file_input = document.getElementById('file-input');
let addButton = document.getElementById('addbutton');
let todoList = document.getElementById('todo-list');
let todoItem = document.getElementById('todoItem');

let programs = document.getElementById('programs');
length = titles.length;


for(let i = 0; i < length; i++){
	let row = document.createElement('div');
	row.classList.add('row');

	programs.appendChild(row);

	let img = document.createElement('div');
	img.classList.add("col-4");
	
	let tit = document.createElement('div');
	tit.classList.add("col-6");
	tit.style = "margin:auto;"

	let link = document.createElement('div');
	link.classList.add("col-2");
	link.style = "margin:auto;"


	row.appendChild(img);
	row.appendChild(tit);
	row.appendChild(link);

	let image = document.createElement('img');
	img.appendChild(image);
	image.src = imgsrc[i];
	image.style = "width:200px; height:200px;";

	let title = document.createElement('h2');
	tit.appendChild(title);
	title.textContent = titles[i];

	let a = document.createElement('a');
	link.appendChild(a);
	a.href = file;
	let dl_icon = document.createElement('img');
	a.appendChild(dl_icon);
	dl_icon.src = download_icon;
	dl_icon.style = "width:50px; height:50px;";

	if(i != length - 1){
		let br = document.createElement('br');
		programs.appendChild(br);
	}
	
}// end of for loop

let changepic = function(){
	let fileReader = new FileReader();
	fileReader.onload = function(event){
		profile_picture.src = event.target.result;
	};
	fileReader.readAsDataURL(file_input.files[0]);
}

let addItem = function(){
	let newTodo = todoItem.value;
	todoItem.value = "";

	let todo = document.createElement('li');
	todoList.appendChild(todo);
	todo.style = "font-weight:bold;font-size:25px;"
	todo.textContent = newTodo;

	todo.addEventListener('dblclick', function(){
		todoList.removeChild(todo);
	});

}

file_input.addEventListener("change", changepic);
addButton.addEventListener("click",addItem);















