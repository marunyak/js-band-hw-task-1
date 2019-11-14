class Catalog {
    constructor(to) {
        this.to = to;
    }

    add(...args) {
        let itemCatalog = args.map((item) => `<td>${item}</td>`);
        let item = `<tr>${itemCatalog.join('')}</tr>`;
        document.querySelector(`${this.to} tbody`).innerHTML += item;
    }
}
export default Catalog;
