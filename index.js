//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
const myFavFood = {
  title: "Kebab",
  servings: 2,
  ingredients: ["meat", "onion", "salt", "tomato"],
};
const recipeOutput = () =>
  `°${myFavFood.title}\n °${myFavFood.servings}\n °Ingredients :-\n °${myFavFood.ingredients[0]}\n °${myFavFood.ingredients[1]}\n °${myFavFood.ingredients[2]}\n °${myFavFood.ingredients[3]}\n`;

console.log(recipeOutput());
//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

const bookArrays = [
  {
    title: "Diwan Shams",
    author: "Mawlana",
    alreadyRead: true,
  },
  {
    title: "Rubaiyat Bidel",
    author: "Bidel",
    alreadyRead: false,
  },
];

console.log(bookArrays);

for (let book of bookArrays) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You already read ${book.title} by ${book.author} `);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
  }
}
