const getLastWordLength = (str) => {
  const newArr = str.trim().split(" ");
  const lastWord = newArr[newArr.length - 1];
  return lastWord.length;
};

getLastWordLength(""); // 0

getLastWordLength("man in BlacK"); // 5

getLastWordLength("hello, world!  "); // 6
