const tutorials = [
  "what is JavaScript?",
  "understanding the this keyword",
  "introduction to node.js",
  "callbacks and promises",
  "the event loop in depth"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  });
}
 console.log(titleCased());