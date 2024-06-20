document.getElementById('myButton').addEventListener('click', () => {
  // Récupérer les valeurs des champs de texte
  const link = document.querySelector('input[name="link"]').value;
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const commentaire = document.querySelector('input[name="commentaire"]').value;

  // Créer un objet avec les données
  const data = {
    IDUTILISTEUR : 1,
    NOMAPP: link,
    UTILISATEURAPP: username,
    MOTPASSAPP: password,
    COMMENTAIRE: commentaire
  };

  // Envoyer les données à l'API
  fetch('http://ricardonunesemilio.fr:8005/addapp', { // Remplacez par votre URL d'API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('Data sent successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Failed to send data');
  });
});
