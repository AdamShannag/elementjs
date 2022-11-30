import Elementjs from "../../../dist/Element.js";


export default function createHeader(title, parentElement) {
    const header = new Elementjs('h1')
    header.body(title).classList('mt-3')
    header.append(new Elementjs('hr'))
    header.appendTo(parentElement)
}

