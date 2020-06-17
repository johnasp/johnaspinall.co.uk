const squad = document.querySelector('.squad');

const data = new XMLHttpRequest();
data.open('GET', 'json/worst11.json');
data.send();

const addPlayer = (name, number, position) => {  
    let div = document.createElement('div')
    div.innerHTML = `
        <span>${number}</span>
        <p>${name}</p>
        <p>${position}</p>
    `;
    return div;
}

const getPlayers = () => {
    data.addEventListener('readystatechange', () => {
        if ( data.readyState === 4 & data.status === 200) {
            const playersObj = JSON.parse(data.responseText); // Parse the JSON into players object
            const players = Object.entries(playersObj); // Convert object into an array so can loop round data with forEach method
            players.forEach((player, index) => {
                let playerName = player[1].name;
                let playerNumber = player[1].number;
                let playerPosition = player[1].position

                console.log(playerNumber);
                squad.appendChild(addPlayer(playerName, playerNumber, playerPosition));
            });
        }
        else if (data.readyState === 4) {
            console.log('There was an error fetching the data');
        }
    })    
}

getPlayers();

