function elementMaker(element, elementContent, parent) {
  document.createElement(element);
  tagName.innerHTML = elementContent;
  parent.appendChild(tagName);
}
export default elementMaker;
