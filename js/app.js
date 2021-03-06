const typed = new Typed('.typed',{
    // strings: [
    //     'siendo profesionales',
    //     'ofreciendo garantía',
    //     'siendo tu mejor aliado',
    // ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

let imgSer = document.getElementsByClassName("imgSer");

var crecer = function () {
    this.style.transform ="scale(1.5, 1.5)";
    this.style.transition = "0.8s";
};

var nocrecer = function () {
    this.style.transform="scale(1, 1)";
    this.style.transition = "0.8s";
};


for (var i = 0; i < imgSer.length; i++) {
    imgSer[i].addEventListener('mouseover', crecer, false);
}

for (var i = 0; i < imgSer.length; i++) {
    imgSer[i].addEventListener('mouseout', nocrecer, false);
}
