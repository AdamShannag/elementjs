const createNavbar = (brand,links,parentElement)=>{
    const nav = new Element('nav').classList('navbar navbar-expand-lg navbar-light bg-light mt-3')
    const div = new Element('div').classList('container-fluid')
    const a = new Element('a').classList('navbar-brand').body(brand)
    const divCollapse = new Element('div')
    const divNavbar = new Element('div').classList('navbar-nav')
    
    div.append(a)
    for(let link of links){
        const a = new Element('a').classList('nav-item nav-link').body(link.link)
        .addAttribute({attribute:'href',attributeValue:link.href});
        divNavbar.append(a);
    }
    divNavbar.appendTo(divCollapse.htmlElement);
    divCollapse.appendTo(div.htmlElement);
    div.appendTo(nav.htmlElement)
    nav.appendTo(parentElement);
}

