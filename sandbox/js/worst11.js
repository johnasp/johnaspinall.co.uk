const squad = document.querySelector('.squad');

const data = new XMLHttpRequest();
data.open('GET', 'json/worst11.json');
data.send();

const addPlayer = (name, number) => {  
    let div = document.createElement('div')
    div.textContent = number;
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
                console.log(playerNumber);
                squad.appendChild(addPlayer(playerName, playerNumber));
            });
        }
        else if (data.readyState === 4) {
            console.log('There was an error fetching the data');
        }
    })    
}

getPlayers();

