import Elementjs from "../../../dist/Element.js";


export default function createNavbar(brand, links, parentElement) {
    const nav = new Elementjs('nav').classList('navbar navbar-expand-lg navbar-light bg-light mt-3')
    const div = new Elementjs().classList('container-fluid')
    const a = new Elementjs('a').classList('navbar-brand').body(brand)
    const divCollapse = new Elementjs()
    const divNavbar = new Elementjs().classList('navbar-nav')

    div.append(a)
    for (let link of links) {
        const a = new Elementjs('a').classList('nav-item nav-link').body(link.link)
            .addAttribute({ attribute: 'href', attributeValue: link.href })
        divNavbar.append(a)
    }
    divNavbar.appendTo(divCollapse.htmlElement)
    divCollapse.appendTo(div.htmlElement)
    div.appendTo(nav.htmlElement)
    nav.appendTo(parentElement)
}