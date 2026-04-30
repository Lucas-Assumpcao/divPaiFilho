const btn = document.querySelector('.btn');

 document.querySelector ("form").addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log('Formulário enviado');
});
''
btn.addEventListener('click', (evento) => {
    console.log(evento.timeStamp);
});