let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "https://media.audubon.org/nas_birdapi_hero/rock-pigeon_002_fall_washington_andyreagochrissymcclarren_flickrcc-by-2.0_adults.jpg", 
    "https://celebrateurbanbirds.org/wp-content/uploads/2016/08/rock-pigeon-1024x1024.png" 

] 
for(let i = 0; i < 100; i++){ 
    let newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("img")[0] 
    imgpost.setAttribute("src", imgurls[i%2]) 
    postsBox.appendChild(newpost); 
}
function like(element) {
	const countElement = element.parentElement.getElementsByClassName("count")[0];
	const count = parseInt(countElement.textContent);
	const newCount = count + 1;
	countElement.textContent = newCount;
}

function sendComment(element) {
	const inputElement = element.parentElement.getElementsByClassName("input")[0];
	if (inputElement.value.trim() == ""){
		return;
	}
	const commentsBox = element.parentElement.parentElement.getElementsByClassName("commentsBox")[0];
	const comment = document.createElement("p");
	comment.setAttribute("class", "comment");
	comment.innerHTML = inputElement.value;
	inputElement.value = "";
	commentsBox.appendChild(comment);
}