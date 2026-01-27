console.log("Hello");


const library = [];

function Book(title, id, author, pages){
    this.title = title;
    this.id = id;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

Book.prototype.read = function(){
    this.read = !this.read;
}
function addToLibrary(book){
    library.push(book);
}


function displayBooks(library){
    const tableBody = document.querySelector("tBody");
    
    tableBody.innerHTML = "";

    library.forEach((book, index) => {
        // display each book in libray 
        console.log("display book # " + index);

        // reset table

        
        //create row element and table data element
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.textContent = book.title;

        const newID = document.createElement('td');
        newID.textContent = book.id;

        const newAuthor = document.createElement('td');
        newAuthor.textContent = book.author;

        const newPagesCount = document.createElement('td');
        newPagesCount.textContent = book.pages;

        const newRemove = document.createElement('button');
        newRemove.textContent = "Remove";
        newRemove.setAttribute("data-index-number", book.id);
        newRemove.setAttribute("class", "deleteButton")

        const newTBody = document.querySelector('tBody');



        newRow.appendChild(newTitle);
        newRow.appendChild(newID);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPagesCount);
        newRow.appendChild(newRemove);
        newTBody.appendChild(newRow);

        const table = document.querySelector("table");
        table.appendChild(newTBody);
    });
}
// old input collect
// const addButton = document.querySelector(".newButton");
// addButton.addEventListener("click", ()=>{
//     let inputTitle  = prompt("Name of book");
//     if (inputTitle != null){
//         book = new Book(inputTitle, crypto.randomUUID());
//         addToLibrary(book);
//         displayBooks(library);
//     }
// });


const myForm = document.querySelector(".form");
const pagesInput = myForm.querySelector('#bookPages')
const pagesError = pagesInput.nextElementSibling;

function isPageValid(){
    if (pagesInput.validity.valueMissing){
        pagesError.textContent = "No value given";
    }

    else if (pagesInput.validity.rangeUnderflow){
        pagesError.textContent = "A book must have at least 1 page.";
    }
    else{
        pagesError.textContent = "";
        pagesError.classList.remove("input-error");
        return true;
    }
    pagesError.classList.add("input-error");
    return false;
};



myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const formData = new FormData(myForm);
    const title = formData.get('bookTitle');
    const author = formData.get('bookAuthor');
    const pages = formData.get('bookPages');

    if (!isPageValid()){
        return;
    }
    book = new Book(title, crypto.randomUUID(), author, pages);
    addToLibrary(book);
    displayBooks(library);
    
    myForm.reset();
});

const tBody = document.querySelector("tbody");
tBody.addEventListener("click", (e)=>{
    if (e.target.classList.contains("deleteButton")){
        
        const id = e.target.getAttribute("data-index-number");
        for (let i = 0; i < library.length;++i){
            if (library[i].id == id){
                library.splice(i, 1);
            } 
        }
        displayBooks(library);
    }
});

book1 = new Book("Price of Peace", crypto.randomUUID(), "author", 100);
book2 = new Book("Investing in the US", crypto.randomUUID(), "author", 100);
book3 = new Book("Red Rising ", crypto.randomUUID(), "author", 100);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

displayBooks(library);

