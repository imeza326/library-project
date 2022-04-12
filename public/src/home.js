function getTotalBooksCount(books) {
  const total= books.map((book)=>books)
  return total.length;
}

function getTotalAccountsCount(accounts) {
  const total = accounts.reduce((account) => {
  account = accounts.map((account) => account);
  return account.length;
  }, 0);
  return total; 
  

}

function getBooksBorrowedCount(books) {
  const totalBooks = books.filter((book) => book.borrows[0].returned === false);
  return totalBooks.length;
 
}

function getMostCommonGenres(books) {
  let result=[]
  let counter= books.reduce((account,book)=>{
    return {...account,[book.genre]:(account[book.genre] || 0) +1};
  },[])
  
  for (let genre in counter){
    result.push({name: genre, count:counter[genre]})
  }
  result.sort((a, b) => {return b.count - a.count});
  
  return result.slice(0, 5);
  
   
}



function getMostPopularBooks(books) {
let result = [];
  books.sort((num1, num2)=>{
    return num2.borrows.length - num1.borrows.length;
  })
  books.forEach(book=>{
      name = book.title;
      borrow = book.borrows.length;
      result.push({name:name , count:borrow});
    })
  return result.slice(0,5);  
  
}

function getMostPopularAuthors(books, authors) {
let result = [];

authors.forEach(author => {
authorsName = author.name.first + ' ' + author.name.last;
  let counter = 0;
   books.forEach(book => {
    if(book.authorId === author.id){
    counter = counter + book.borrows.length;
 }
 })
    result.push({name: authorsName, count: counter});
 })
  result.sort((num1, num2) => {
    return num2.count - num1.count;
 })

  return result.slice(0, 5);  
  
  
  
  
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
