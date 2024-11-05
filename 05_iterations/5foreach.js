//for each loop

const codeLan = ["Py", "Cpp", "JS", "JAVA", "TS", "JSX", "ruby"];

codeLan.forEach(function (lang) {
  // console.log(lang)
});

codeLan.forEach((lang) => {
  // console.log(lang)
});

codeLan.forEach((lang, index, arr) => {
  // gives the value index and array
  // console.log(lang, index, arr)
});

function languages(lang) {
  console.log(lang);
}

// codeLan.forEach(languages);

//foreach does not returns any values
const value = codeLan.forEach((item) => {
  // console.log(item)
});
// console.log(value)

//Array of objects
const myFavLang = [
  {
    languageName: "Python",
    fileName: "py",
  },
  {
    languageName: "Java",
    fileName: "java",
  },
  {
    languageName: "Javascript",
    fileName: "js",
  },
];

myFavLang.forEach((item) => {
  console.log(item.languageName + " :- " + item.fileName);
});
