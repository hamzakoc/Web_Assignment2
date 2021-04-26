1.Write a function which receives one argument (string). The function would count and return the number of alphanumeric characters found in that string.
function('abc 5} =+;d 9') // returns 6

<br/>
2. Write a function which adds the equal amount of stars to both end of the receiving string and returns the new string. The number of stars to be added is passed as second argument to this function.
For example function(“abc”, 2); // returns ‘**abc**’<br/>
3. Write a function that searches the string (passed as first argument) for the character (passed as second argument) and changes the case for all instances of that char found in string. The function should return the new string as shown in example below:
function(‘abRA’, ‘a’) // returns ‘AbRa’<br/>
4. Write a function that receives two arguments (array, oddOrEven) and based on the value of oddOrEven (odd or even), the function will filter out all odd/even numbers and returns a string that contains other elements value separated by hyphen as shown in example below:
function([1,’b’, ‘x’,2,3,4], ‘odd’) // returns ‘b-x-2-4’<br/>
5. Write a function that accepts an array and a number. The function would start summing the values of array until the sum is greater or equal to the number passed to the function as second argument. The function would then return the value
function([5,1,2, 4],6) //returns 6 function([5,1,2, 4],8) //returns 8<br/>
6. Write a function that accepts an array as argument. The function should loop through the array elements and accumulate the sum of ASCII value of each character in element and return the total.
For example:
function([‘A’, ‘bc’, 12]); // returns 361
which is the sum of 65 + 98 + 99 + 49 + 50<br/>
7. Write a function that accepts two arguments (a string array and a character). The function will check each character of the strings in the array and removes the character, regardless of case. If the first letter of the string is removed the next letter must be capitalized. Your function would return the result as one string, where each element of array is separated by comma.
E.G. function([“John”,”Hannah”,”Saham”], “h”);
// returns ‘Jon,Anna,Saam’<br/>
8. Write a function that accepts two arguments (a string array and a character). The function will check each string in an array and count the number of instances of the character that was passed as second argument, if it is placed in an odd index position in that string, regardless of case. The counts for each element of an array are concatenated as one string separated by hyphen and returned
E.G. function([“AaA123Aa”, ”Hannah”, ”1090aambcaA”], “A”);
// returns: ‘2-1-2’<br/>
9. Write a function that takes an array of numbers to be used as ASCII representation of characters. The function would return a string of characters, representing each value.
For example function([65, 66, 67, 97, 98]) // returns 'ABCab’
