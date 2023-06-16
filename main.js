function generateList(array) {
  const containerUl = document.createElement("ul");

  array.forEach((item) => {
    const elemLi = document.createElement("li");

    if (Array.isArray(item)) {
      elemLi.appendChild(generateList(item));
    } else {
      elemLi.appendChild(document.createTextNode(item));
    }
    containerUl.appendChild(elemLi);
  });
  return containerUl;
}
const array = [
  [1, 2, 3],
  [1, 2, [[1.1, 1.2, 1.3]], 3],
];
document.body.appendChild(generateList(array));
