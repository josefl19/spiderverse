class Spiderman {
    constructor(nombre, edad, actor, noPeliculas, estudio) {
        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.noPeliculas = noPeliculas;
        this.estudio = estudio;
    }

    getInfo() {
        return `Hey, I'm ${this.actor} from ${this.estudio}`;
    }
}

module.exports = Spiderman;