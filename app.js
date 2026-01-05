console.log("Hello");


const library = [];

function Book(title, id){
    this.title = title;
    this.id = id;
    this.read = false;
}

Book.prototype.read = function(){
    this.read = !this.read
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

        const newRemove = document.createElement('button');
        newRemove.textContent = "Remove";
        newRemove.setAttribute("data-index-number", book.id);
        newRemove.setAttribute("class", "deleteButton")

        const newTBody = document.querySelector('tBody');



        newRow.appendChild(newTitle);
        newRow.appendChild(newID);
        newRow.appendChild(newRemove);
        newTBody.appendChild(newRow);

        const table = document.querySelector("table");
        table.appendChild(newTBody);
    });
}

const addButton = document.querySelector(".newButton");
addButton.addEventListener("click", ()=>{
    let inputTitle  = prompt("Name of book");
    if (inputTitle != null){
        book = new Book(inputTitle, crypto.randomUUID());
        addToLibrary(book);
        displayBooks(library);
    }
});

// const deleteButton = document.querySelector(".deleteButton");
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

book1 = new Book("Price of Peace", crypto.randomUUID());
book2 = new Book("Investing in the US", crypto.randomUUID());
book3 = new Book("Red Rising ", crypto.randomUUID());

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

displayBooks(library);

