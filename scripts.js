let title;
let stat;
let author;
let genre;
let deletebtn = document.getElementById("delete")

let books = JSON.parse(localStorage.getItem("books")) || [];

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
    let object = {id: Date.now(),"titleofbooks": title, "author": author, "reading": stat, "genre": genre};

    books.push(object);

    let list = document.getElementById("list");
    let li = document.createElement('li');
    li.innerText = object.titleofbooks + "\n" + object.author + "\n" + object.genre +"\n" +object.reading;
     list.append(li);

     console.log(books);
    localStorage.setItem("books", JSON.stringify(books));

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

    let reader = books;

    reader.forEach(read => {
       let li = document.createElement('li');
       li.innerHTML = read.titleofbooks + "<br>" + read.author + "<br>" + read.genre + "<br>" + read.reading;
       li.dataset.id = read.id;
       list.appendChild(li);
    });

    document.getElementById("edit").onclick = editBook();
    document.getElementById("delete").onclick = deleteBook();
}
//filter by reading
document.getElementById("Reading-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list'); 
    list.innerHTML = "";
    let reader = books.filter((b) => b.reading === "Reading");

    let x = document.getElementById("bookList");
    x.innerHTML = "Reading List:"

    reader.forEach(read => {
       let li = document.createElement('li');
       li.innerHTML = read.titleofbooks + "<br>" + read.author + "<br>" + read.genre;
       li.dataset.id = read.id;
       list.appendChild(li);
    });
    document.getElementById("edit").onclick = editBook();
  document.getElementById("delete").onclick = deleteBook();
}
//sort by planning
document.getElementById("Planning-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list'); 
    list.innerHTML = "";

    let x = document.getElementById("bookList");
    x.innerHTML = "Planning:"
    
    let reader = books.filter((b) => b.reading == "Planning");

  reader.forEach(read => {
       let li = document.createElement('li');
       li.innerHTML = read.titleofbooks + "<br>" + read.author + "<br>" + read.genre;
       li.dataset.id = read.id;
       list.appendChild(li);
    });
    document.getElementById("edit").onclick = editBook();
  document.getElementById("delete").onclick = deleteBook();
}
//sort by finished
document.getElementById("Finished-btn").onclick = function(event){
    event.preventDefault();
    let list = document.getElementById('list')
    list.innerHTML = "";

    let x = document.getElementById("bookList");
    x.innerHTML = "Finished:"
    
    let reader = books.filter((b) => b.reading == "Finished");

  reader.forEach(read => {
       let li = document.createElement('li');
       li.innerHTML = read.titleofbooks + "<br>" + read.author + "<br>" + read.genre;
       li.dataset.id = read.id;
       list.appendChild(li);
    });
    document.getElementById("edit").onclick = editBook();
  document.getElementById("delete").onclick = deleteBook();
}

//edit
function editBook(index){
    editIndex = index;

    document.getElementById("titleofbook").value = books[index].title;
    document.getElementById("author").value = books[index].title;
    document.getElementById("reading").value = books[index].title;
    document.getElementById("genre").value = books[index].title;

}

function deleteBook(){
    list.addEventListener('click', function(event){

        let li = event.target.closest("li");
        
        if(!li) return;
        let id = Number(li.dataset.id);

        var result = confirm("Want to delete?");

        if(result){

            books = books.filter(book => book.id !==id);
            localStorage.setItem("books", JSON.stringify(books));
            li.remove(); 

        }

    });
    
}

window.onload = function(){

    let list = document.getElementById("list");

    books.forEach(book => {

        let li = document.createElement("li");

        li.innerHTML =
        book.titleofbooks + "<br>" +
        book.author + "<br>" +
        book.genre + "<br>" +
        book.reading;

        li.dataset.id = book.id;

        list.appendChild(li);

    });

};