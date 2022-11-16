const createTable = (headers,data,parentElement)=>{
    const table = new Element('table');
    table.classList('table table-striped')
    // Head
    const trHead = new Element('tr');
    for(let header of headers){
            const th = new Element('th').body(header.label);
            trHead.append(th);
    }
    // Body
    const tbody = new Element('tbody');
    for(let record of data){
        const tr = new Element('tr')
        for(let header of headers){
            // record[header.key]
            const td = new Element('td')
            td.body(record[header.key])
            tr.append(td)
        }
        tr.appendTo(tbody.htmlElement);
    }
    
    trHead.appendTo(table.htmlElement)
    tbody.appendTo(table.htmlElement)
    table.appendTo(body);
}