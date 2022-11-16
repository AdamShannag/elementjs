const createHeader = (title, parentElement)=>{
    const header = new Element('h1');
    header.body(title).classList('mt-3');
    header.append(new Element('hr'))
    header.appendTo(parentElement);
}