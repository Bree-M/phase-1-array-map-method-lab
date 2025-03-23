const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stopPropagation and preventDefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is jsonp?"
];

const titleCased = () => {
  return tutorials.map(tutorial => 
    tutorial
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" ") 
  );
};

console.log(titleCased());
