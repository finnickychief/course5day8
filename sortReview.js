/*
  Sorting via the built-in array.sort method

  The sort method is called on arrays, and modifies the array in place. 

  It takes an optional callback, which can be used to redefine how the sort will work.

  By default, it will sort on lexicographical(string) values, rather than numeric.
  If you don't provide a callback, you will get results such as this:
  let ary = [7, 3, 1, 8, 32, 90];
  ary.sort(); // ary will now be [1,3,32,7,8,90]

  The callback takes 2 parameters, and returns a numeric value.
  If the value returned is positive, it means the item in the first parameter should come AFTER the item in the second parameter in a sorted array.
  If the value returned is 0 or negative, it means the item in the first parameter should come BEFORE the item in the second parameter.

  a: 5
  b: 3

  a > b: True
  We want a to come after b so we return a positive value

  a: 'Hello'
  b : 'Goodbye'

  a > b : False
  We want Goodbye to come first, so we return a negative number

 */

// Sorting an array of strings:
// As a note: Capitalized characters come before lowercase letters in standard sorting
let stringAry = ['words', 'to', 'Be', 'Sorted'];
stringAry.sort(); // No callback because we want the default behavior
// stringAry is now ['Be', 'Sorted', 'to', 'words']

// Sorting an array of numbers:
// These 2 examples will only work for numbers
let numAry = [7, 3, 1, 8, 32, 90];
// Ascending order:
numAry.sort((a, b) => {
  return a - b; // If the value that comes back is positive, the item on the left should be after the item on the right
});
// Descending order:
numAry.sort((a, b) => {
  return b - a; // If number is positive, the item on the right should be after the item on the left.
});

// String in descending order:
// Strings cannot have +/- applied to them so you need to use < or > comparators. The following callback will work for both numbers and Strings
stringAry.sort((a, b) => {
  if (a > b) return 1;
  else return -1;
});

// Shorter callback with ternary:
stringAry.sort((a, b) => (a > b ? 1 : -1));

// Sorting object arrays:
// because you cannot directly compare objects with eachother, you must pick some other property of those objects that is shared to compare them with.
let objAry = [
  { order: 3, name: 'Item3' },
  { order: 7, name: 'Item7' },
  { order: 2, name: 'Item2' },
  { order: 1, name: 'Item1' },
  { order: 9, name: 'Item9' }
];

// Ascending order by 'order' property:
objAry.sort((a, b) => {
  if (a['order'] > b['order']) return 1;
  else return -1;
});

// Descending order by 'name' property
objAry.sort((a, b) => {
  if (a['name'] < b['name']) return 1;
  else return -1;
});

// Generating a method that takes an object array and sorts it based on the key provided in a parameter
// Using same objAry as before
function sortByKey(ary, key) {
  ary.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else {
      return -1;
    }
  });
}
sortByKey(objAry, 'name'); // Sorts our ary by name
sortByKey(objAry, 'order'); // Sorts our ary by order

// Adding our new method as a prototype to the Array object
Array.prototype.sortByKey = function(key) {
  this.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    else return -1;
  });
};

// Define a parameter to tell the ary which order it should be sorted in(ascending or descending) - ASC/DESC
Array.prototype.sortWithDirection = function(order) {
  this.sort((a, b) => {
    if (order === 'ASC') {
      if (a > b) return 1;
      else return -1;
    } else if (order === 'DESC') {
      if (a < b) return 1;
      else return -1;
    }
  });
  /*
  this.sort((a,b) => {
    if(order === 'ASC') a > b ? 1 : -1;
    else if(order === 'DESC') a < b ? 1 : -1;
  })
  
  */
};
