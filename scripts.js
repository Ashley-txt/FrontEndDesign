let title;
let stat;

const books = [];

function popupFn(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupBox").style.display = "block";
}
//user input to insert book title and reading status -> push to array
document.getElementById("submit").onclick = function(event){
    event.preventDefault();
    title = document.getElementById("title").value;
    stat = document.getElementById("reading-stat").value;
    
    console.log(title);
    console.log(stat);

    let object = {titleofbooks: title, reading: stat};
    books.push(object);

    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupBox").style.display = "block";    
}
//prints all books
document.getElementById("all").onclick = function(){
    let main = document.getElementById("main");
    books.forEach(books =>{
        let item = document.createElement('P');
        let itemtext = document.createTextNode(`${books.titleofbooks}: ${books.reading}`);
        item.appendChild(itemtext);
        main.appendChild(item);
    });

}