
class Table {
    constructor(init) {
        this.init = init
    }

    createHeader(data) {
        let openingTags = '<thead class="table-content thead-dark"><tr>';
        let closingTags = '</tr></thead>';

        data.forEach(datum => {
            openingTags += `<th>${datum}</th>`;
        });

        return openingTags + closingTags;
    }

    createBody(data) {
        let openingTags = '<tbody class="table-content"><tr>';
        let closingTags = '</tr></tbody>';
        
        for (const teamName in data) {
            openingTags += `<tr>
            <td>${teamName}</td>
            <td>${data[teamName].driver[0]}</td>
            <td>${data[teamName].driver[1]}</td>
            <td>${data[teamName].homebase}</td>`
        }

        return openingTags + closingTags;
    }

    render(elementSelector) {
        let table = `<table class="table table-striped text-center table-bordered">
        ${this.createHeader(this.init.columns)}
        ${this.createBody(this.init.teams)}
        </table>`;

        elementSelector.innerHTML = table;
    }
}

function createTable(data={},identifyer=""){
    const entryList = new Table(data);
    const selector = document.querySelector(identifyer);
    return entryList.render(selector);
}

export default createTable;