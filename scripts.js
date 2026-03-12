let list = document.getElementById('list')
let editId = null;
let bookList = document.getElementById("bookList");
let mode = "view";

let books = JSON.parse(localStorage.getItem("books")) || [];
document.getElementById("delete").onclick = function(){
    bookList.innerHTML = "Delete:";
    mode = "delete";
}
document.getElementById("edit").onclick = function(){
    bookList.innerHTML = "Edit:";
    mode = "edit";
}

function popupFn(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";
}

//submit button
document.getElementById("submit").onclick = function(event){
    event.preventDefault();
    //read values
    let title = document.getElementById("title").value;
    let stat = document.getElementById("reading-stat").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    

    //store values as obj -> add to arr
    if(editId == null){
        books.push({
            id: Date.now(),
        "titleofbooks": title, 
        "author": author, 
        "reading": stat, 
        "genre": genre
        });
    }else{      
        let book = books.find(book => book.id === editId);
        book.titleofbooks = title;
        book.author = author;
        book.genre = genre;
        book.reading = stat;

        editId = null;
        renderBooks();
    }
    renderBooks(books);
 
    localStorage.setItem("books", JSON.stringify(books));

    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupBox").style.display = "block";    
}

//cancel button
document.getElementById("cancel").onclick = function(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupBox").style.display = "block"; 
}

function renderBooks(filtered){
     if(!filtered){
        filtered = books;
    }
    list.innerHTML = "";

    filtered.forEach(read => {
       let li = document.createElement('li');
       li.innerHTML = 
            read.titleofbooks + "<br>" + 
            read.author + "<br>" + 
            read.genre + "<br>" + 
            read.reading;
            li.dataset.id = read.id;
       list.appendChild(li);
    });
}

//prints all books
document.getElementById("all").onclick = function(event){   
    event.preventDefault();
    list.innerHTML = "";
    bookList.innerHTML = "All:"
    renderBooks(books);
   
}
//filter by reading
document.getElementById("Reading-btn").onclick = function(event){
    event.preventDefault();  
    list.innerHTML = "";
    let reader = books.filter((b) => b.reading === "Reading");

   bookList.innerHTML = "Reading List:"
    renderBooks(reader);

}

//sort by planning
document.getElementById("Planning-btn").onclick = function(event){
    event.preventDefault();
    list.innerHTML = "";

    bookList.innerHTML = "Planning:"
    
    let reader = books.filter((b) => b.reading == "Planning");
    renderBooks(reader);

}
//sort by finished
document.getElementById("Finished-btn").onclick = function(event){
    event.preventDefault();
    
    list.innerHTML = "";

    bookList.innerHTML = "Finished:"
    
    let reader = books.filter((b) => b.reading == "Finished");
    renderBooks(reader);

}

list.addEventListener("click", function(event){
    let li = event.target.closest("li");

    if(!li) return;
    let id = Number(li.dataset.id);
console.log(books);
    if(mode === "delete"){
        let result = confirm("Do you want to delete this book?");

        if(!result) return;
        books = books.filter(book => book.id !== id);
        localStorage.setItem("books", JSON.stringify(books));

        li.remove();
    }

    if(mode === "edit"){
        let book = books.find(book => book.id === id);
        
        document.getElementById("title").value = book.titleofbooks;
        document.getElementById("author").value = book.author;
        document.getElementById("genre").value = book.genre;
        document.getElementById("reading-stat").value = book.reading;
        

        editId = id;
        popupFn();

    }
    
});
    


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