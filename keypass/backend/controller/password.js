// Charge le module MySQL pour Node.js
var mysql = require('mysql');
const methodecrypto = require('./cryptage');

// Définit les options de connexion à la base de données MySQL
var connectionOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'bsRt(bP)*h5yTB!A',
    database: 'keypass'
};

// Création d'un pool de connexions MySQL pour une meilleure gestion des ressources.
const pool = mysql.createPool(connectionOptions);
var querytoken = 'SELECT TOKEN from UTILISATEUR where IDUTILISTEUR = ?'

// Fonction d'ajout d'application
function addapp(req, res) {
  
    var queryStr = 'INSERT INTO `APP` (`IDUTILISTEUR`,`IDDOSSIER`,`NOMAPP`, `UTILISATEURAPP`, `COMMENTAIRE`, `MOTPASSAPP`) VALUES (?,?, ?, ?, ?, ?)';
    var token;
    var motsdepasseCrypte ;

    pool.query(querytoken, [req.body.IDUTILISTEUR],function (error, results, fields) {
        token = results.dody[0]
    });
    
    motsdepasseCrypte = methodecrypto.decrypt(req.body.MOTPASSAPP , token)
    


    pool.query(queryStr, [req.body.IDUTILISTEUR,req.body.IDDOSSIER, req.body.NOMAPP, req.body.UTILISATEURAPP, req.body.COMMENTAIRE,motsdepasseCrypte], function (error, results, fields) {
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
            return;
        }
        res.status(200).json({ message: "Application ajoutée avec succès" });
    });
}

// Fonction pour obtenir toutes les applications
function getapp(req, res) {
    var query = 'SELECT * FROM `APP`';

    pool.query(query, function (error, results, fields) {
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
            return;
        } else if (results.length === 0) {
            res.status(404).json({ message: "Aucune application trouvée" });
        } else {
            res.status(200).json(results);
        }
    });
}

// Fonction pour obtenir une application par ID utilisateur
function getappid(req, res) {
    var userId = req.params.id; // Supposant que l'ID utilisateur est passé en paramètre de la requête
    var query = 'SELECT * FROM `APP` WHERE `IDUTILISTEUR` = ?';

    pool.query(query, [userId], function (error, results, fields) {
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
        } else if (results.length === 0) {
            res.status(404).json({ message: "Aucune application trouvée pour cet utilisateur" });
        } else {
            res.status(200).json(results);
        }
    });
}
// Fonction pour obtenir une application par ID utilisateur
function getappiddossier(req, res) {
    var userId = req.params.id; // Supposant que l'ID utilisateur est passé en paramètre de la requête
    var query = 'SELECT * FROM `APP` WHERE `IDDOSSIER` = ?';

    pool.query(query, [userId], function (error, results, fields) {
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
        } else if (results.length === 0) {
            res.status(404).json({ message: "Aucune application trouvée pour cet utilisateur" });
        } else {
            res.status(200).json(results);
        }
    });
}

// Fonction de suppression d'application
function delectepass(req, res) {
    var appId = req.params.id; // Supposant que l'ID de l'application est passé en paramètre de la requête
    var query = 'DELETE FROM `APP` WHERE `IDAPP` = ?';

    pool.query(query, [appId], function (error, results, fields) {
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: "Aucune application trouvée à supprimer" });
        } else {
            res.status(200).json({ message: "Application supprimée avec succès" });
        }
        console.log(query)
    });
}

// Fonction de mise à jour d'application
function updateApp(req, res) {
    const { IDAPP, NOMAPP, COMMENTAIRE, MOTPASSAPP , IDDOSSIER} = req.body;

    if (!IDAPP || !NOMAPP || !COMMENTAIRE || !MOTPASSAPP ) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    var queryStr = 'UPDATE `APP` SET `IDDOSSIER` = ? ,`NOMAPP` = ?, `COMMENTAIRE` = ?, `MOTPASSAPP` = ? WHERE `IDAPP` = ?';
    
    pool.query(queryStr, [IDDOSSIER ,NOMAPP, COMMENTAIRE, MOTPASSAPP, IDAPP], function (error, results, fields) {
        
        if (error) {
            console.error('Une erreur est survenue lors de la requête à la base de données:', error);
            res.status(500).json({ error: "Une erreur interne est survenue" });
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).json({ message: "Aucune application trouvée pour mise à jour" });
        } else {
            res.status(200).json({ message: "Application mise à jour avec succès" });
        }
    });
}

// Exporte les fonctions pour qu'elles puissent être utilisées dans d'autres fichiers du projet
module.exports = { addapp, getapp, getappid, delectepass, updateApp,getappiddossier };
