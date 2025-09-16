console.log("Hello from app.js"); // // Define userPrompt as a function or assign a value as needed

let inputElement = document.getElementById("userPrompt");
let buttonElement = document.getElementById("searchBtn");
let responseElement = document.getElementById("api-response"); 

onEvent("searchBtn", "click", function () {
let userPrompt = document.getElementById("userPrompt").value;
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch(`https://www.googleapis.com/books/v1/volumes?q=${userPrompt}+subject:children&printType=books&langRestrict=en&orderBy=relevance&maxResults=1`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
     console.log(result);
     setText("book-title", result.items[0].volumeInfo.title);
     setText("book-author_name", result.items[0].volumeInfo.authors[0]);
     setText("book-summary", result.items[0].volumeInfo.description);
     setImageURL("book-cover", result.items[0].volumeInfo.imageLinks.thumbnail);
  })
  .catch((error) => console.error(error));
})
