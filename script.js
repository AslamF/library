const myLibrary = [
 {
    name: "LOTR",
    author: "TOLKIEN",
    read: "YES"
  },
  {
    name: "GAME OF THRONES",
    author: "SOMEBODY",
    read: "NO"
  }
];


function Book(name, author, read) {
    this.name = name,
    this.author = author,
    this.read = read
};


function createBookObject(name, author, read){
  book = new Book(name, author, read);
}

const main = document.querySelector(".main");
const newBookButton = document.querySelector(".newBook");
const cards = document.querySelector(".cards");


/*
function addBookToLibrary() {
  const name = prompt ("WHAT IS NAME?");
  const author = prompt("AUTHOR?");
  const read = prompt("read?");
  createBookObject(name, author, read);
}
*/
/*
newBookButton.addEventListener("click", ()=>{
  const name = prompt ("WHAT IS NAME?");
  const author = prompt("AUTHOR?");
  const read = prompt("read?");
  createBookObject(name, author, read);
  myLibrary.push(book);
  cards.textContent = "";
  arrayLoop();
  
  

})
*/
// addBookToLibrary();
// myLibrary.push(book);

// Loop Array, Create Card with array element
function arrayLoop(){
for(let i = 0; i < myLibrary.length; i++){
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = `${myLibrary[i].name}, ${myLibrary[i].author}, ${myLibrary[i].read}`
    cards.appendChild(card);
    console.log(myLibrary[i].name) 
}}

const submit = document.querySelector("#submit");



let bookTitle;
let authorName;
let pageNumber;



submit.addEventListener("click", (event)=>{
  event.preventDefault();
  bookTitle = document.querySelector("#title").value;
  authorName = document.querySelector("#author").value;
  pageNumber = document.querySelector("#pages").value;
  createBookObject(bookTitle, authorName, pageNumber);
  myLibrary.push(book);
  cards.textContent = "";
  arrayLoop();
  document.querySelector("#bookInfo").reset();

});



