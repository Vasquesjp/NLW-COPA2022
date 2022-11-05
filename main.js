function createGame(player1, country1, hour, player2, country2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" title="${country1}" />
            <strong title="Horário de Brasilia" >${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" title="${country2}" />
        </li>
    `
};

let delay = 0;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
};


document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta",
    createGame('brazil', 'Brasil', '16:00', 'serbia', 'Sérvia')) +
    createCard("28/11", "segunda",
    createGame('brazil', 'Brasil', '13:00', 'switzerland', 'Suiça')) +
    createCard("02/12", "sexta",
    createGame('brazil', 'Brasil', '16:00', 'cameroon', 'Camarões')) + `<p></p>`;

let layoutColor = document.querySelector("#body");
let class_obj = document.querySelector("#body").getAttribute("class");

function LayoutAmarelo() {
    class_obj = document.querySelector("#body").getAttribute("class");
    layoutColor.classList.remove(`${class_obj}`);
    layoutColor.classList.add("yellow");
}

function LayoutAzul() {
    class_obj = document.querySelector("#body").getAttribute("class");
    layoutColor.classList.remove(`${class_obj}`);
    layoutColor.classList.add("blue");
}

function LayoutVerde() {
    class_obj = document.querySelector("#body").getAttribute("class");
    layoutColor.classList.remove(`${class_obj}`);
    layoutColor.classList.add("green");
}