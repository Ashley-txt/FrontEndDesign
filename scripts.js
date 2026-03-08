let title;
let stat;
let author;
let genre;

const books = [];

function popupFn(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";
}
//submit button
document.getElementById("submit").onclick = function(event){
    event.preventDefault();
    //read values
    title = document.getElementById("title").value;
    stat = document.getElementById("reading-stat").value;
    author = document.getElementById("author").value;
    genre = document.getElementById("genre").value;
    
    //store values as obj -> add to arr
    let object = {"titleofbooks": title, "author": author, "reading": stat, "genre": genre};
    books.push(object);

    //localStorage.setItem("books", JSON.stringify(books));

    //default adding all books to list
     let list = document.getElementById('list');
     let li = document.createElement('li');
     li.innerText = object.titleofbooks + "\n" + object.author + "\n" + object.genre +"\n" +object.reading;
     list.append(li);

    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupBox").style.display = "block";    
}

//cancel button
document.getElementById("cancel").onclick = function(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupBox").style.display = "block"; 
}

//prints all books
document.getElementById("all").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list'); 
    list.innerHTML = "";

  for(let i = 0; i <= books.length; i++){
    let li = document.createElement("li");
    li.innerHTML = reader[i].titleofbooks + "<br>" + reader[i].author;
    list.appendChild(li);
  }
}
//filter by reading
document.getElementById("Reading-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list'); 
    list.innerHTML = "";
    let reader = books.filter((b) => b.reading == "Reading");

  for(let i = 0; i <= reader.length; i++){
    let li = document.createElement("li");
    li.innerHTML = reader[i].titleofbooks + "<br>" + reader[i].author;
    list.appendChild(li);
  }
}

document.getElementById("Planning-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list'); 
    list.innerHTML = "";

    let reader = books.filter((b) => b.reading == "Planning");

  for(let i = 0; i <= reader.length; i++){
    let li = document.createElement("li");
    li.innerHTML = reader[i].titleofbooks + "<br>" + reader[i].author;
    list.appendChild(li);
  }
}

document.getElementById("Finished-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list')
    list.innerHTML = "";

    let reader = books.filter((b) => b.reading == "Finished");

  for(let i = 0; i <= reader.length; i++){
    let li = document.createElement("li");
    li.innerHTML = reader[i].titleofbooks + "<br>" + reader[i].author;
    list.appendChild(li);
  }
}