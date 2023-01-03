const myLibrary = [

];


function Book(name, author, pages) {
    this.name = name,
    this.author = author,
    this.pages = pages
    
};


function createBookObject(name, author, pages){
  book = new Book(name, author, pages);
}


const newBookButton = document.querySelector(".newBook");
const cards = document.querySelector(".cards");
const form = document.querySelector("#bookInfo");
const popup = document.querySelector(".popup");

let newCard;
let bookName;
let bookAuthor;
let number;
let del;
let read;




// Loop Array, Create Card with array element
function arrayLoop(){
for(let i = 0; i < myLibrary.length; i++){
    newCard = document.createElement("div");
    newCard.classList.add("newCard");
    bookName = document.createElement("div");
    bookName.classList.add("bookName");
    bookAuthor = document.createElement("div")
    bookAuthor.classList.add("bookAuthor");
    number = document.createElement("div")
    number.classList.add("pageNumber");

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("buttonGroup");

    read = document.createElement("button");
    read.classList.add("read");
    read.textContent = "read";

    del = document.createElement("button");
    del.classList.add("delete");
    del.textContent = "delete";
    
    newCard.appendChild(bookName);
    newCard.appendChild(bookAuthor);
    newCard.appendChild(number);
    buttonGroup.appendChild(read);
    buttonGroup.appendChild(del);
    newCard.appendChild(buttonGroup);

    bookName.textContent = `"${myLibrary[i].name}"`;
    bookAuthor.textContent = `${myLibrary[i].author}`;
    number.textContent = `${myLibrary[i].pages}`;
    
    cards.appendChild(newCard);

    del.addEventListener("click", ()=>{
      console.log("tree");
      myLibrary.splice(i, 1);
      cards.textContent = "";
      arrayLoop();
    })
    
    
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
  popup.classList.remove("active");

});

newBookButton.addEventListener("click", ()=> {
    popup.classList.add("active");
    

})

