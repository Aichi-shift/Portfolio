document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!nom || !email || !message) {
      status.textContent = 'Veuillez remplir tous les champs avant d’envoyer votre message.';
      status.classList.add('error');
      return;
    }

    const subject = encodeURIComponent(`Nouveau message de ${nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:aichiandrianjoarisoa@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Votre message a été préparé dans votre client mail. Envoyez-le pour finaliser.';
    status.classList.remove('error');
    form.reset();
  });
});
