
/**
 * Elementjs
 * Class for creating html elements.
 * Add inner text, clasess and attributes on created elements.
 *
 * @version 1.0.0
 * @author Adam Shannag
 * @license MIT
 */
class Element{
    htmlElement = 'element'
    htmlElementTagName ='tag'
    htmlElementInnerText =null
    htmlElementClassList='class'
    htmlElementAttributes = [];
    constructor(elementTag){
        this.htmlElement = document.createElement(elementTag);
        this.htmlElementTagName=elementTag
    }

    appendTo(element){
        element.appendChild(this.htmlElement);
    }

    append(component){
        const newComponent = new Element(component.htmlElementTagName);
        newComponent.body(component.htmlElementInnerText);
        newComponent.classList(component.htmlElementClassList);
        for (let i=0;i<component.htmlElementAttributes.length;i++){
            newComponent.addAttribute(component.htmlElementAttributes[i])
        }
       this.htmlElement.appendChild(newComponent.htmlElement);
       return this
    }

    body(text){
        this.htmlElementInnerText=text;
        this.htmlElement.innerText=this.htmlElementInnerText;
        return this
    }

    classList(className){
        this.htmlElementClassList = className
         this.htmlElement.className =this.htmlElementClassList;
         return this;
    }

    addAttribute({attribute, attributeValue}){
        this.htmlElement.setAttribute(attribute,attributeValue)
        this.htmlElementAttributes.push({attribute,attributeValue});
        return this;
    }
}