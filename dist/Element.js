/**
 * Elementjs
 * Class for creating html elements.
 * Add inner text, clasess and attributes on created elements.
 *
 * @version 1.1.0
 * @author Adam Shannag
 * @license MIT
 * @url https://github.com/AdamShannag/elementjs
 *
 */
class Elementjs {
  htmlElement = 'element'
  htmlElementTagName = 'tag'
  htmlElementInnerText = null
  htmlElementClassList = 'class'
  htmlElementAttributes = [];
  constructor(elementTag = 'div') {
    this.htmlElement = document.createElement(elementTag);
    this.htmlElementTagName = elementTag
  }

  appendTo(element) {
    element.appendChild(this.htmlElement);
  }

  append(component) {
    const newComponent = new Elementjs(component.htmlElementTagName)
    newComponent.body(component.htmlElementInnerText)
    newComponent.classList(component.htmlElementClassList)
    for (let i = 0; i < component.htmlElementAttributes.length; i++) {
      newComponent.addAttribute(component.htmlElementAttributes[i])
    }
    this.htmlElement.appendChild(newComponent.htmlElement);
    return this
  }

  body(text) {
    this.htmlElementInnerText = text
    this.htmlElement.innerText = this.htmlElementInnerText;
    return this
  }

  classList(className) {
    this.htmlElementClassList = className
    this.htmlElement.className = this.htmlElementClassList;
    return this;
  }

  addAttribute({ attribute, attributeValue }) {
    this.htmlElement.setAttribute(attribute, attributeValue)
    this.htmlElementAttributes.push({ attribute, attributeValue })
    return this;
  }

  addId = (id) => this.addAttribute({ attribute: 'id', attributeValue: id })
  addType = (type) => this.addAttribute({ attribute: 'type', attributeValue: type })
  addHref = (href) => this.addAttribute({ attribute: 'href', attributeValue: href })
  addSrc = (src) => this.addAttribute({ attribute: 'src', attributeValue: src })
  addStyle = (style) => this.addAttribute({ attribute: 'style', attributeValue: style })
}

export default Elementjs