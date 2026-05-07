const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const service = button.dataset.service || 'serviço';
        alert(`Você escolheu ${service}. Em breve entraremos em contato.`);
    });
});

document.querySelectorAll('.btn2').forEach((button) => {
    button.addEventListener('click', () => {
        const service = button.dataset.service || 'serviço';
        alert(`Mensagem enviada! Em breve entraremos em contato.`);
    });
});
