console.log("Hello");


const library = [];

function Book(title, id){
    this.title = title;
    this.id = id;
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

        const newTBody = document.querySelector('tBody');



        newRow.appendChild(newTitle);
        newRow.appendChild(newID);
        newTBody.appendChild(newRow);

        const table = document.querySelector("table");
        table.appendChild(newTBody);
    });
}

const button = document.querySelector(".newButton");
button.addEventListener("click", ()=>{
    let inputTitle  = prompt("Name of book");
    book = new Book(inputTitle, crypto.randomUUID());
    addToLibrary(book);
    displayBooks(library);
});

// book1 = new Book("Price of Peace", crypto.randomUUID());
// book2 = new Book("Investing in the US", crypto.randomUUID());
// book3 = new Book("Red Rising ", crypto.randomUUID());

// addToLibrary(book1);
// addToLibrary(book2);
// addToLibrary(book3);

displayBooks(library);

