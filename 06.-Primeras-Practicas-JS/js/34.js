
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
});

if(Notification.permission == 'granted') {
    new Notification('Aguante The Last Of Us', {
        icon: 'img/tlou.jpg',
        body: 'The Last Of Us Fan!!!'
    });
}