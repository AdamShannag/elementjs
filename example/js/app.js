import createCard from "./elements/card.js";
import createTable from "./elements/table.js";
import createHeader from "./elements/header.js";
import createNavbar from "./elements/navbar.js";

const body = document.getElementById('body')

// Create header and navbar
createHeader("Navbar Example", body)
const links = [
    { link: 'Home', href: '#' },
    { link: 'Services', href: '#' },
    { link: 'Pricing', href: '#' },
    { link: 'About', href: '#' },
]
createNavbar("Brand", links, body)

// Create header and card
createHeader("Card Example", body)
createCard(
    "Card Title",
    "Card Subtitle",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    { link1: "Card Link", href: "#" },
    { link2: "Another Link", href2: "#" },
    body
)

// Create header and table
createHeader("Table Example", body)
const headers = [
    { 'key': 'first', 'label': 'First' },
    { 'key': 'last', 'label': 'Last' },
]
const data = [
    { "first": "Mark", "last": 'Otto' },
    { "first": "Sam", "last": 'Smith' },
    { "first": "Jacob", "last": 'Williams' },
    { "first": "Aj", "last": 'Jhons' },
]
createTable(headers, data, body)
