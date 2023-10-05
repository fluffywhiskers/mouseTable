function createTable() {
    let table = document.querySelector("#table tbody");
    let product = document.querySelector("#product").value;
    let productPrice = 0;
    let shop = ["TerabyteShop", "Magazine Luiza", "Americanas", "Pichau Informática", "Londritech"];
    let productType = ["Razer Deathadder V2", "Logitech G403", "Redragon King Cobra M711", "Logitech G502 HERO", "Logitech G903 — Sem fio"];

    table.innerHTML = "";

    for (i = 0; i <= 4; i++) {
        let result = Math.random()*200;

        let content = `<td>${shop[i]}</td>
                       <td>${product + " " + productType[i]}</td>
                       <td>${"R$" + result.toFixed(2)}</td>`
        
        let line = document.createElement("tr");
        line.innerHTML = content;
        table.append(line);
    }
}
document.querySelector(".button").addEventListener('click', createTable);