import Elementjs from "../../../dist/Element.js";


export default function createTable(headers, data, parentElement) {
    const table = new Elementjs('table')
    table.classList('table table-striped')
    // Head
    const trHead = new Elementjs('tr');
    for (let header of headers) {
        const th = new Elementjs('th').body(header.label)
        trHead.append(th);
    }
    // Body
    const tbody = new Elementjs('tbody');
    for (let record of data) {
        const tr = new Elementjs('tr')
        for (let header of headers) {
            // record[header.key]
            const td = new Elementjs('td')
            td.body(record[header.key])
            tr.append(td)
        }
        tr.appendTo(tbody.htmlElement)
    }

    trHead.appendTo(table.htmlElement)
    tbody.appendTo(table.htmlElement)
    table.appendTo(parentElement)
}

