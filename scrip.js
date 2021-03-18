
// Formacion especial
function tipoeventoformacion() {
    // Crear div del flyer
    const flyerevent = document.createElement("div");
    flyerevent.className = "container--flyer";
    document.querySelector(".flyer").appendChild(flyerevent);
    // modal titulo formacion
    let container = document.querySelector(".container");
    let boton = document.querySelector(".formacion").value;
    container.innerHTML = "Has selecionado " + boton;
    // crear titulo
    const titulo = document.createElement("p");
    let descripcion = boton;
    titulo.innerHTML = descripcion;
    document.querySelector(".container--flyer").appendChild(titulo);
}

// Presentacion Semanal
function tipoeventopresentacion() {
    // Crear div del flyer
    const flyerevent = document.createElement("div");
    flyerevent.className = "container--flyer";
    document.querySelector(".flyer").appendChild(flyerevent);

    // modal titulo formacion
    let container = document.querySelector(".container");
    let boton = document.querySelector(".presentacion").value;
    container.innerHTML = "Has selecionado " + boton;

    // crear titulo
    const titulo = document.createElement("p");
    let descripcion = boton;
    titulo.innerHTML = descripcion;
    document.querySelector(".container--flyer").appendChild(titulo);
}

// Formacion semanal
function tipoeventoformacionsem() {
    // crear opciones de oradores
    const opcionesoradores = document.querySelector(".oradores");
    const orador1 = opcionesoradores.cloneNode(true);
    orador1.className = "orador1"
    const orador2 = opcionesoradores.cloneNode(true);
    orador2.className = "orador2"
    const orador3 = opcionesoradores.cloneNode(true);
    orador3.className = "orador3"
    const orador4 = opcionesoradores.cloneNode(true);
    orador4.className = "orador4"
    const orador5 = opcionesoradores.cloneNode(true);
    orador5.className = "orador5"
    document.querySelector(".opciones").appendChild(orador1);
    document.querySelector(".opciones").appendChild(orador2);
    document.querySelector(".opciones").appendChild(orador3);
    document.querySelector(".opciones").appendChild(orador4);
    document.querySelector(".opciones").appendChild(orador5);
    const oradorgeneral = document.querySelector(".opciones");
    const oradoropciones = document.querySelector(".oradores")
    oradorgeneral.removeChild(oradoropciones);
    // Crear div del flyer
    const flyerevent = document.createElement("div");
    flyerevent.className = "container--flyer";
    document.querySelector(".flyer").appendChild(flyerevent);
    // modal titulo formacion
    let container = document.querySelector(".container");
    let boton = document.querySelector(".formacionSem").value;
    container.innerHTML = "Has selecionado " + boton;
    // crear titulo
    const titulo = document.createElement("p");
    let descripcion = boton;
    titulo.innerHTML = descripcion;
    document.querySelector(".container--flyer").appendChild(titulo);
    // borrar boton crear
    const crear1 = document.querySelector(".crear1");
    crear1.remove();
    const crear2 = document.createElement("button");
    crear2.value = "Tu flyer esta listo para descargar";
    crear2.type = "submit";
    crear2.onclick = function guardar2() {
        // obtener la fecha
        const fecha = document.createElement("p");
        const horaslat = document.createElement("p")
        horaslat.innerHTML = "2:30PM MEX 3:30 COL-PERU";
        let date = document.querySelector('input[type="date"]').value;
        document.querySelector("body > div:nth-child(3) > div").appendChild(fecha);
        document.querySelector(".container--flyer").appendChild(horaslat);
        // formato fecha
        const months = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let current_datetime = new Date(date);
        const day = ["Domingo ", "Lunes ", "Martes ", "Miercoles ", "Jueves ", "Viernes ", "Sabado "]
        let formatted_date = day[current_datetime.getDay()] + current_datetime.getDate() + " de " + months[current_datetime.getMonth()] + " 21:30 Hrs";
        // igresar la fecha en el dom
        fecha.innerHTML = formatted_date;
        // informacion del orador
        variosoradores()
        // resultado de tu flyer
        let container = document.querySelector(".fecha");
        let boton = document.querySelector(".button").value;
        container.innerHTML = boton;
    };
    crear2.className = "button";
    crear2.innerHTML = "Crear"
    document.querySelector(".crearadd").appendChild(crear2);
}


// fecha actual
function getDate() {
    var today = new Date();
    document.querySelector(".date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}


// Funcion selecionar orador
function myFunction() {
    let orador = document.querySelector(".oradores").value;

    // contructor oradores
    class Persona {
        constructor(nombre, posicion, foto) {
            this.nombre = nombre;
            this.posicion = posicion;
            this.foto = foto;
        }
    };

    // Datos de los Oradores
    const data = [
        ["Myriam de la Sierra", "Senior Vicepresidente & COC", "assets/oradores/myriam.png"],
        ["Alex Rew", "Vicepresidente Regional Platinum", "assets/oradores/alexrew.png"],
        ["Manu Darrocha", "Vicepresidente Regional", "assets/oradores/manu.png"],
        ["Mariano Solano", "Vicepresidente Regional", "assets/oradores/mariano.png"],
        ["Georgina Ferrón Arruzazabala", "Vicepresidente Regional", "assets/oradores/georgina.png"],
        ["Borja Rew", "Vicepresidente Regional", "assets/oradores/borja.png"],
        ["Miky Palacios", "Director Regional", "assets/oradores/miki.png"],
        ["Céline Bordenave", "Vicepresidente Regional", "assets/oradores//celine.png"],
        ["Pepi Morejón Rodriguez", "Vicepresidente Regional", "assets/oradores/pepi.png"],



    ];
    const personas = [];
    for (let index = 0; index < data.length; index++) {
        personas[index] = new Persona(data[index][0], data[index][1], data[index][2]);
    }
    // insertar imagen del orador
    const fotoOr = document.createElement("img");
    fotoOr.src = personas[orador].foto
    document.querySelector(".container--flyer").appendChild(fotoOr);

    // insertar nombre del orador
    const nombreor = document.createElement("p");
    nombreor.innerText = personas[orador].nombre;
    document.querySelector(".container--flyer").appendChild(nombreor);

    // insertar posicion del Orador
    const posicionOR = document.createElement("p");
    posicionOR.innerText = personas[orador].posicion;
    document.querySelector(".container--flyer").appendChild(posicionOR);

    // insertar base de la imagen
    const basefoto = document.createElement("img")
    basefoto.className = "orador";
    basefoto.src = "assets/oradores/base.png";
    document.querySelector(".container--flyer").appendChild(basefoto);
}



// selecionar oradores
function variosoradores() {
    let orador1 = document.querySelector(".orador1").value;
    let orador2 = document.querySelector(".orador2").value;
    let orador3 = document.querySelector(".orador3").value;
    let orador4 = document.querySelector(".orador4").value;
    let orador5 = document.querySelector(".orador5").value;
    // contructor oradores
    class Persona {
        constructor(nombre, posicion, foto) {
            this.nombre = nombre;
            this.posicion = posicion;
            this.foto = foto;
        }
    };
    // Datos de los Oradores
    const data = [
        ["Myriam de la Sierra", "Senior Vicepresidente & COC", "assets/oradores/myriam.png"],
        ["Alex Rew", "Vicepresidente Regional Platinum", "assets/oradores/alexrew.png"],
        ["Manu Darrocha", "Vicepresidente Regional", "assets/oradores/manu.png"],
        ["Mariano Solano", "Vicepresidente Regional", "assets/oradores/mariano.png"],
        ["Georgina Ferrón Arruzazabala", "Vicepresidente Regional", "assets/oradores/georgina.png"],
        ["Borja Rew", "Vicepresidente Regional", "assets/oradores/borja.png"],
        ["Miky Palacios", "Director Regional", "assets/oradores/miki.png"],
        ["Céline Bordenave", "Vicepresidente Regional", "assets/oradores/celine.png"],
        ["Pepi Morejón Rodriguez", "Vicepresidente Regional", "assets/oradores/pepi.png"],



    ];
    const personas = [];
    for (let index = 0; index < data.length; index++) {
        personas[index] = new Persona(data[index][0], data[index][1], data[index][2]);
    }

    // contenedor fotos oradores
    const divfotos = document.createElement("div");
    divfotos.className = "divfotos";
    document.querySelector(".container--flyer").appendChild(divfotos);

    // contendor orador1
    const divorador1 = document.createElement("div");
    divorador1.className = "divorador1";
    document.querySelector(".divfotos").appendChild(divorador1);
    // contenedor texto orador1
    const textoorador1 = document.createElement("div");
    textoorador1.className = "textoorador1";
    document.querySelector(".divorador1").appendChild(textoorador1);
    // insertar nombre del orador1
    const nombreor1 = document.createElement("p");
    nombreor1.innerText = personas[orador1].nombre;
    document.querySelector(".textoorador1").appendChild(nombreor1);
    // insertar posicion del Orador1
    const posicionOR1 = document.createElement("p");
    posicionOR1.innerText = personas[orador1].posicion;
    document.querySelector(".textoorador1").appendChild(posicionOR1);
    // insertar imagen del orador1
    const fotoOr1 = document.createElement("img");
    fotoOr1.src = personas[orador1].foto
    document.querySelector(".divorador1").appendChild(fotoOr1);

    // contendor orador2
    const divorador2 = document.createElement("div");
    divorador2.className = "divorador2";
    document.querySelector(".divfotos").appendChild(divorador2);
    // contenedor texto orador2
    const textoorador2 = document.createElement("div");
    textoorador2.className = "textoorador2";
    document.querySelector(".divorador2").appendChild(textoorador2);
    // insertar nombre del orador2
    const nombreor2 = document.createElement("p");
    nombreor2.innerText = personas[orador2].nombre;
    document.querySelector(".textoorador2").appendChild(nombreor2);
    // insertar posicion del Orado2
    const posicionOR2 = document.createElement("p");
    posicionOR2.innerText = personas[orador2].posicion;
    document.querySelector(".textoorador2").appendChild(posicionOR2);
    // insertar imagen del orador2
    const fotoOr2 = document.createElement("img");
    fotoOr2.src = personas[orador2].foto
    document.querySelector(".divorador2").appendChild(fotoOr2);


    // contendor orador3
    const divorador3 = document.createElement("div");
    divorador3.className = "divorador3";
    document.querySelector(".divfotos").appendChild(divorador3);
    // insertar imagen del orador3
    const fotoOr3 = document.createElement("img");
    fotoOr3.src = personas[orador3].foto
    document.querySelector(".divorador3").appendChild(fotoOr3);
    // contenedor texto orador3
    const textoorador3 = document.createElement("div");
    textoorador3.className = "textoorador3";
    document.querySelector(".divorador3").appendChild(textoorador3);
    // insertar nombre del orador3
    const nombreor3 = document.createElement("p");
    nombreor3.innerText = personas[orador3].nombre;
    document.querySelector(".textoorador3").appendChild(nombreor3);
    // insertar posicion del Orado3
    const posicionOR3 = document.createElement("p");
    posicionOR3.innerText = personas[orador3].posicion;
    document.querySelector(".textoorador3").appendChild(posicionOR3);

    // contendor orador4
    const divorador4 = document.createElement("div");
    divorador4.className = "divorador4";
    document.querySelector(".divfotos").appendChild(divorador4);
    // insertar imagen del orador4
    const fotoOr4 = document.createElement("img");
    fotoOr4.src = personas[orador4].foto
    document.querySelector(".divorador4").appendChild(fotoOr4);
    // contenedor texto orador4
    const textoorador4 = document.createElement("div");
    textoorador4.className = "textoorador4";
    document.querySelector(".divorador4").appendChild(textoorador4);
    // insertar nombre del orador4
    const nombreor4 = document.createElement("p");
    nombreor4.innerText = personas[orador4].nombre;
    document.querySelector(".textoorador4").appendChild(nombreor4);
    // insertar posicion del Orado4
    const posicionOR4 = document.createElement("p");
    posicionOR4.innerText = personas[orador4].posicion;
    document.querySelector(".textoorador4").appendChild(posicionOR4);

    // contendor orador5
    const divorador5 = document.createElement("div");
    divorador5.className = "divorador5";
    document.querySelector(".divfotos").appendChild(divorador5);
    // insertar imagen del orador5
    const fotoOr5 = document.createElement("img");
    fotoOr5.src = personas[orador5].foto
    document.querySelector(".divorador5").appendChild(fotoOr5);
    // contenedor texto orador5
    const textoorador5 = document.createElement("div");
    textoorador5.className = "textoorador5";
    document.querySelector(".divorador5").appendChild(textoorador5);
    // insertar nombre del orador5
    const nombreor5 = document.createElement("p");
    nombreor5.innerText = personas[orador5].nombre;
    document.querySelector(".textoorador5").appendChild(nombreor5);
    // insertar posicion del Orado5
    const posicionOR5 = document.createElement("p");
    posicionOR5.innerText = personas[orador5].posicion;
    document.querySelector(".textoorador5").appendChild(posicionOR5);












    // // insertar imagen del orador2
    // const fotoOr2 = document.createElement("img");
    // fotoOr2.src = personas[orador2].foto
    // document.querySelector(".divfotos").appendChild(fotoOr2);
    // // insertar imagen del orador3
    // const fotoOr3 = document.createElement("img");
    // fotoOr3.src = personas[orador3].foto
    // document.querySelector(".divfotos").appendChild(fotoOr3);
    // // insertar imagen del orador4
    // const fotoOr4 = document.createElement("img");
    // fotoOr4.src = personas[orador4].foto
    // document.querySelector(".divfotos").appendChild(fotoOr4);
    // // insertar imagen del orador5
    // const fotoOr5 = document.createElement("img");
    // fotoOr5.src = personas[orador5].foto
    // document.querySelector(".divfotos").appendChild(fotoOr5);

    // // insertar nombre del orador1
    // const nombreor = document.createElement("p");
    // nombreor.innerText = personas[orador1].nombre;
    // document.querySelector(".container--flyer").appendChild(nombreor);

    // // insertar posicion del Orador
    // const posicionOR = document.createElement("p");
    // posicionOR.innerText = personas[orador].posicion;
    // document.querySelector(".container--flyer").appendChild(posicionOR);

    // insertar base de la imagen
    const basefoto = document.createElement("img")
    basefoto.className = "oradores";
    basefoto.src = "assets/oradores/base.png";
    document.querySelector(".container--flyer").appendChild(basefoto);

}


// Crear Flyer
function guardar() {
    // obtener la fecha
    const fecha = document.createElement("p");
    const horaslat = document.createElement("p")
    horaslat.innerHTML = "2:30PM MEX 3:30 COL-PERU";
    let date = document.querySelector('input[type="date"]').value;
    document.querySelector("body > div:nth-child(3) > div").appendChild(fecha);
    document.querySelector(".container--flyer").appendChild(horaslat);
    // formato fecha
    const months = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let current_datetime = new Date(date);
    const day = ["Domingo ", "Lunes ", "Martes ", "Miercoles ", "Jueves ", "Viernes ", "Sabado "]
    let formatted_date = day[current_datetime.getDay()] + current_datetime.getDate() + " de " + months[current_datetime.getMonth()] + " 21:30 Hrs";
    // igresar la fecha en el dom
    fecha.innerHTML = formatted_date;
    // informacion del orador
    myFunction()
    // variosoradores()
    // resultado de tu flyer
    let container = document.querySelector(".fecha");
    let boton = document.querySelector(".button").value;
    container.innerHTML = boton;
}

function descargar(){
    html2canvas(document.querySelector(".flyer")).then(function (canvas) {
        console.log(canvas);
        document.body.appendChild(canvas)
        // simulateDownloadImageClick(canvas.toDataURL(), 'file-name.png');
    });
};

function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download !== 'string') {
        window.open(uri);
    } else {
        link.href = uri;
        link.download = filename;
        accountForFirefox(clickLink, link);
    }
}

function clickLink(link) {
    link.click();
}

function accountForFirefox(click) { // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
}

