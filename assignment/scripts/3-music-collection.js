console.log("***** Music Collection *****");

// - Create a variable `collection` that starts as an empty array.
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  collection.push(album);

  return album;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

let talkingHeads = addToCollection(
  "Stop Making Sense",
  "The Talking Heads",
  "1984"
);

console.log("Added:", talkingHeads);

let Depeche = addToCollection("Violator", "Depeche Mode", "1990");

console.log("Added:", Depeche);

let hotChip = addToCollection("One Life Stand", "Hot Chip", "2010");
console.log("Added:", hotChip);

let Weezer = addToCollection("Blue Album", "Weezer", "1994");
console.log("Added:", Weezer);

let ninjaParty = addToCollection("Cool Patrol", "Ninja Sex Party", "2018");
console.log("Added:", ninjaParty);

let Ratatat = addToCollection("Classics", "Ratatat", "2006");
console.log("Added:", Ratatat);

let Ratatat2 = addToCollection("Magnifique", "Ratatat", "2015");
console.log("Added:", Ratatat2);

console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and
//      - console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
  console.log("The array's length is:", array.length);

  for (let i = 0; i < array.length; i++) {
    console.log(
      `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`
    );
  }
}
// - Test the `showCollection` function.
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
function findByArtist(artist) {
  {
    let matches = [];
    for (let i = 0; i < collection.length; i++) {
      let band = collection[i];
      if (artist == band.artist) {
        console.log(band.artist);
        matches.push(band.artist);
      }
    }
  }
  console.log("matches has ", matches);
  return matches;
}
console.log(findByArtist("The Talking Heads"));

// I'm missing something here...

//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!
