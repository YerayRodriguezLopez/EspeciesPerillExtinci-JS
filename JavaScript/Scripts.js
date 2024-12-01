window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let titleBar = document.getElementById('cabezera');
    let newHeight = 600 - scrollPosition;
    if (newHeight < 100) {
        newHeight = 100;
    }

    titleBar.style.height = newHeight + 'px';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    // Neteja errors anteriors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validació del nom
    const name = document.getElementById('name').value.trim();
    const namePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/;
    if (name === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'El nom és obligatori.';
    } else if (!namePattern.test(name)) {
        valid = false;
        document.getElementById('nameError').textContent = 'El nom només pot contenir lletres, espais i accents.';
    }

    // Validació del correu electrònic
    const mail = document.getElementById('mail').value.trim();
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (mail === '') {
        valid = false;
        document.getElementById('mailError').textContent = 'El correu electrònic és obligatori.';
    } else if (!emailPattern.test(mail)) {
        valid = false;
        document.getElementById('mailError').textContent = 'Correu electrònic no vàlid.';
    }

    // Validació del títol del missatge
    const title = document.getElementById('title').value.trim();
    if (title === '') {
        valid = false;
        document.getElementById('titleError').textContent = 'El títol és obligatori.';
    }

    // Validació del missatge
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        valid = false;
        document.getElementById('messageError').textContent = 'El missatge és obligatori.';
    }

    // Si tot és correcte, es pot enviar el formulari
    if (valid) {
        alert('Missatge enviat!');
        document.getElementById('contactForm').reset();
    }
});
