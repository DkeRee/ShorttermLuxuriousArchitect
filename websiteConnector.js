var editButton = document.getElementById("edit-button");
var saveButton = document.getElementById("save-button");
var textarea = document.getElementById("blog-textarea");

editButton.addEventListener("click", function(){
	textarea.removeAttribute("readonly");
	editButton.style.display = 'none';
	saveButton.style.display = 'block';
});

saveButton.addEventListener("click", function(){
	var h4 = document.createElement("h4");
	var p = document.createElement("p");
	var div = document.createElement("div");
	var body = document.getElementById("blog-content");
	var br = document.createElement("br");

	textarea.setAttribute("readonly", true);

	h4.textContent = "New Post On " + Date() + ":";
	h4.setAttribute("class", "text");
	p.textContent = textarea.value;
	p.setAttribute("class", "text");
  	textarea.value = "";

  	div.setAttribute("class", "blog");

  	div.appendChild(h4);
  	div.appendChild(br);
  	div.appendChild(br);
  	div.appendChild(p);

  	body.appendChild(div);

	editButton.style.display = 'block';
	saveButton.style.display = 'none';
});