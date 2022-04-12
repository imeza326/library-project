function findAccountById(accounts, id) {
   return accounts.find((acount)=>acount.id.includes(id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastnameA, lastnameB)=> 
  lastnameA.name.last>lastnameB.name.last ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  let result=0
  const booksBorrowed=books.forEach((book)=>{
    if (!!book.borrows){
      book.borrows.forEach((accounts)=>{
        if (accounts.id===account.id){
          result++;
        }
      })
    }
  });
   return result;
}


function getBooksPossessedByAccount(account, books, authors) {
  let user = account.id
  let accountInv = books.filter(book => (book.borrows[0].id === user && book.borrows[0].returned === false));
  let booksOnHand = accountInv.map((book) => {
    let {name, ...author} = authors.find((author) => author.id === book.authorId);
    return {...book,borrows: book.borrows, author: {name, ...author}
    };})
  return booksOnHand;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
