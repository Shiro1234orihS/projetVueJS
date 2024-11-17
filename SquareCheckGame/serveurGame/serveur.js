const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let games = []; // Liste des parties

// Endpoint pour créer une partie
app.post('/create-game', (req, res) => {
    const { name, maxPlayers } = req.body;
    const game = {
        id: games.length + 1,
        name,
        maxPlayers,
        players: [],
    };
    games.push(game);
    res.status(201).send(game);
});

// Endpoint pour lister les parties
app.get('/games', (req, res) => {
    res.send(games);
});

// Lancer le serveur
app.listen(3000, () => console.log('Serveur en cours d\'exécution sur le port 3000'));
