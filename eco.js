const firebaseConfig = {
  apiKey: "AIzaSyEXEMPLO",
  authDomain: "ecoworld.firebaseapp.com",
  projectId: "ecoworld",
  storageBucket: "ecoworld.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcde123456"
};

document.getElementById('meuBotao').addEventListener('click', function() {
  alert('Iniciando o ECOWORLD');
  window.location.href = 'quiz.html'; // ou o nome correto do arquivo do quiz
});

function salvarUsuario(nome, email, senha, foto) {
  localStorage.setItem('userName', nome);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', senha);
  if (foto) {
    localStorage.setItem('userPicture', foto);
  }

  // Mostra a animação de sucesso
  document.getElementById('sucessoContainer').style.display = 'flex';

  // Espera 2 segundos e inicia a transição verde
  setTimeout(() => {
    const transicao = document.getElementById('transicaoVerde');
    transicao.style.display = 'block';
    transicao.style.opacity = '1';

    // Após o efeito, redireciona
    setTimeout(() => {
      window.location.href = 'pagina_protegida.html';
    }, 1500);
  }, 2000);
}

document.getElementById('somNatureza').play();
// Mostra a animação de sucesso
document.getElementById('sucessoContainer').style.display = 'flex';

// Toca som suave
document.getElementById('somNatureza').play();


// email
function enviarEmail(nome, email) {
  const serviceID = 'SEU_SERVICE_ID'; // substitua pelo seu Service ID
  const templateID = 'default_service'; // use default_service ou seu Template ID, se tiver

  const templateParams = {
    from_name: nome,
    to_email: email,
    message: `Olá ${nome}, seu cadastro na EcoWorld foi realizado com sucesso! 🌿`
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      alert('Cadastro realizado e e-mail enviado com sucesso! 🌱');
    }, (err) => {
      alert('Erro ao enviar e-mail. Por favor, tente novamente.');
      console.error(err);
    });
}
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;

// Chama para enviar o e-mail
enviarEmail(nome, email);

