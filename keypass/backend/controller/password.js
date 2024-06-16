// Charge le module MySQL pour Node.js
var mysql = require('mysql');

// Définit les options de connexion à la base de données MySQL
// Utilise les variables d'environnement si disponibles, sinon utilise les valeurs par défaut
var connectionOptions = {
    host:  'localhost',
    port:  '3306',
    user:  'root',
    password:  'root',
    database: 'keypass'
};


// Fonction d'inscription
function addapp(req, res) {
    var connection = mysql.createConnection(connectionOptions);

    console.log(req.body)
    
    var queryStr = 'INSERT INTO `ENTREPRISE` ( `IDUTILISTEUR`, `NOMAPP`,`UTILISATEURAPP`,`COMMENTAIRE`,`MOTPASSAPP`) VALUES ( ?, ?,?,?)';
   
    
    connection.query(queryStr, [req.body.utilisateurID, req.body.utilisateurPSEUDO, req.body.NOMUTILISATEUR, req.body.utilisateurBIRTHDAY, req.body.utilisateurPASSWORD, req.body.utilisateurROLE, req.body.utilisateurPREMIUM], function (error, results, fields) {
      if (error) {
         console.error('Une erreur est survenue lors de la requête à la base de données:', error);
         res.status(500).json({ error: "Une erreur interne est survenue" });
         return;
      }
   
      res.status(200).json({ message: "Utilisateur enregistré avec succès" });
    });

    connection.query(queryStr, [req.body.utilisateurID, req.body.utilisateurPSEUDO, req.body.NOMUTILISATEUR, req.body.utilisateurBIRTHDAY, req.body.utilisateurPASSWORD, req.body.utilisateurROLE, req.body.utilisateurPREMIUM], function (error, results, fields) {
      if (error) {
         console.error('Une erreur est survenue lors de la requête à la base de données:', error);
         res.status(500).json({ error: "Une erreur interne est survenue" });
         return;
      }
      
      res.status(200).json({ message: "Utilisateur enregistré avec succès" });
     });
   
    connection.end();
}

function getapp(req, res){
   var connect = mysql.createConnection(connectionOptions);

   var query = 'SELECT * from `APP`';

   connect.connect();

   connect.query(query, function (error, results, fields) {
 
       if (error) {
          console.error('Une erreur est survenue lors de la requête à la base de données:', error);
          res.status(500).json({ error: "Une erreur interne est survenue" });
          return;
       }
       if (results.length == 0) {
          res.status(404).json({ message: "Aucun APP trouvé" });
          return;
       }

          res.status(200).json(results);
   });
     
   connect.end();
}

function getappid(req, res){
   var connect = mysql.createConnection(connectionOptions);

   var query = 'SELECT * from `APP` WHERE `IDUTILISTEUR`';

   connect.connect();

   connect.query(query, function (error, results, fields) {

      if (error) {
         console.error('Une erreur est survenue lors de la requête à la base de données:', error);
         res.status(500).json({ error: "Une erreur interne est survenue" });
         return;
      }
      if (results.length == 0) {
         res.status(404).json({ message: "Aucun APP trouvé" });
         return;
      }

         res.status(200).json(results);
   });
     
   connect.end();
}

// Exporte les fonctions pour qu'elles puissent être utilisées dans d'autres fichiers du projet
module.exports = {addapp, getapp,getappid };