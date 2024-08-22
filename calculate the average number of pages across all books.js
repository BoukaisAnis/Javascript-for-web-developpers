function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((sum, pages) => sum + pages, 0);
    return books.length === 0 ? 0 : totalPages / books.length;
}


const books = [
    { title: "Book A", author: "Author A", pages: 200 },
    { title: "Book B", author: "Author B", pages: 300 },
    { title: "Book C", author: "Author C", pages: 150 }
];
console.log(averagePages(books)); 
