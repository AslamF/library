const newBookButton = document.querySelector(".newBook");
const cards = document.querySelector(".cards");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popupWrapper");
const cancel =document.querySelector("#cancel");
const submit = document.querySelector("#submit");

let newCard;
let bookName;
let bookAuthor;
let number;
let del;
let read;
let bookTitle;
let authorName;
let pageNumber;
let bookRead;


// array for cards
const myLibrary = [

];

// Object Constructor 
function Book(name, author, pages, read) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.read = read 
};

// Function for Object Constructor
function createBookObject(name, author, pages, read){
  book = new Book(name, author, pages, read);
}






function createCard(){
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
  
  del = document.createElement("button");
  del.classList.add("delete");
  del.textContent = "delete";
  
  newCard.appendChild(bookName);
  newCard.appendChild(bookAuthor);
  newCard.appendChild(number);
  buttonGroup.appendChild(read);
  buttonGroup.appendChild(del);
  newCard.appendChild(buttonGroup);

}


// Loop Array, Create Card with array element
function arrayLoop(){
for(let i = 0; i < myLibrary.length; i++){
    createCard();

    if(myLibrary[i].read === true){
      read.textContent = "READ";
    }
    else{
      read.textContent = "NOT READ";
    }

    bookName.textContent = `"${myLibrary[i].name}"`;
    bookAuthor.textContent = `${myLibrary[i].author}`;
    number.textContent = `${myLibrary[i].pages} - pages`;
    
    cards.appendChild(newCard);

    del.addEventListener("click", ()=>{
      myLibrary.splice(i, 1);
      cards.textContent = "";
      arrayLoop();
    })

    if(myLibrary[i].read === true){
      read.classList.add("active");
    }
    
}}

// When click submit, CREATE OBJECT THEN ADD INTO ARRAY
submit.addEventListener("click", (event)=>{
  event.preventDefault();
  bookTitle = document.querySelector("#title").value;
  authorName = document.querySelector("#author").value;
  pageNumber = document.querySelector("#pages").value;
  if(document.querySelector("#read").checked === true){
    bookRead = true;
  }
  else{
    bookRead = false;
  }

  createBookObject(bookTitle, authorName, pageNumber, bookRead);
  myLibrary.push(book);
  cards.textContent = "";
  arrayLoop();
  document.querySelector("#bookInfo").reset();
  popup.classList.remove("active");
  popupWrapper.classList.remove("active");
  

});

newBookButton.addEventListener("click", ()=> {
    popup.classList.add("active");
    popupWrapper.classList.add("active");
    
    

})
cancel.addEventListener("click", ()=>{
  popup.classList.remove("active")
  popupWrapper.classList.remove("active")
})
