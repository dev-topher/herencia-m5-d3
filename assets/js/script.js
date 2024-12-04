// Definición de las clases
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}, vive en ${this.direccion}, y su número de teléfono es: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }

    get getTipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }

    get getNombreMascota() {
        return this._nombreMascota;
    }

    set setNombreMascota(nombre) {
        this._nombreMascota = nombre;
    }

    get getEnfermedad() {
        return this.enfermedad;
    }

    set setEnfermedad(enfermedad) {
        this.enfermedad = enfermedad;
    }
}

// Captura de elementos del formulario y creación de instancias
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombrePropietario = document.getElementById('propietario').value;
    const direccionPropietario = document.getElementById('direccion').value;
    const telefonoPropietario = document.getElementById('telefono').value;
    const tipoAnimal = document.getElementById('tipo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const enfermedadMascota = document.getElementById('enfermedad').value;

    let mascota;

    if (tipoAnimal === 'perro') {
        mascota = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, 'Perro', nombreMascota, enfermedadMascota);
    } else if (tipoAnimal === 'gato') {
        mascota = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, 'Gato', nombreMascota, enfermedadMascota);
    } else if (tipoAnimal === 'conejo') {
        mascota = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, 'Conejo', nombreMascota, enfermedadMascota);
    }

    mostrarDatos(mascota);
});

function mostrarDatos(mascota) {
    const resultado = document.getElementById('resultado').querySelector('ul');
    resultado.innerHTML = `
        <li>${mascota.datosPropietario()}</li>
        <li>${mascota.getTipo}</li>
        <li>El nombre de la mascota es: ${mascota.getNombreMascota}</li>
        <li>La enfermedad o motivo de la consulta es: ${mascota.getEnfermedad}</li>
    `;
}
