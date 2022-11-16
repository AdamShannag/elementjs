const createCard = (title,subtitle,body,{link1,href},{link2,href2},parentElement)=>{
    const card = new Element('div').classList('card');
    const cardBody = new Element('div').classList('card-body');
    const cardTitle = new Element('h5').classList('card-title').body(title);
    const cardSubtitle = new Element('h6').classList('card-subtitle mb-2 text-muted').body(subtitle);
    const cardText = new Element('p').classList('card-text').body(body);
    const cardLink1 = new Element('a').classList('card-link').body(link1)
    .addAttribute({attribute:'href',attributeValue:href});
    const cardLink2 = new Element('a').classList('card-link').body(link2)
    .addAttribute({attribute:'href',attributeValue:href2});
    
    cardBody.append(cardTitle)
    .append(cardSubtitle)
    .append(cardText)
    .append(cardLink1)
    .append(cardLink2);
    cardBody.appendTo(card.htmlElement);
    card.appendTo(parentElement)
}