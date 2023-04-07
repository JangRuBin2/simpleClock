function elementMaker(tagName, element, elementContent, parent) {
  tagName = document.createElement(element);
  tagName.innerHTML = elementContent;
  parent.appendChild(tagName);
}
export default elementMaker;
