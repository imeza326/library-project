function findAuthorById(authors, id) {
  return authors.find((author)=>author.id===id)
}

function findBookById(books, id) {
  return books.find((book)=> book.id===id)
}

function partitionBooksByBorrowedStatus(books) {
  const result = [
    borrowed = books.filter((book) =>book.borrows[0].returned === false),
    returned = books.filter((book) =>book.borrows[0].returned === true)
  ];
  return result;
   
}


//Helper funtion
function matchBorrow(borrow, accounts){
   let account = accounts.find(account => account.id === borrow.id);
   account.returned = borrow.returned;
   return account;
}


function getBorrowersForBook(book, accounts) {
return book.borrows.map(borrow => matchBorrow(borrow, accounts)).slice(0,10);
  
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
