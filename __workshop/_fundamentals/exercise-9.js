// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  let chars = paragraph.split("");
  let count = 0;
  let output = [];
  chars.forEach(function (char) {
    if (count % 40 === 0 && count > 0) {
      output.push("\n");
      if (char !== " ") {
        output.push(char);
      }
      count++;
    } else if (
      !(char === " " && output[output.length - 1] === "\n" && count > 0)
    ) {
      // console.log(output[output.length-1], ' | ', char);
      output.push(char);
      count++;
    } else if (count === 0) {
      output.push(char);
      count++;
    }
  });
  return output.join("");
};

console.log(
  wrapAfter40Chars(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  )
);
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
