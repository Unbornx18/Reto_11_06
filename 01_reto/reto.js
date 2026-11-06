const usuario = {
  nombre: "Camilo",
  apellido: "Ortiz",
  edad: 25,
  direccion: {
    calle: "Calle 200 # 14-50",
    ciudad: "Bucaramanga",
    pais: "Colombia"
  },

  presentarse() {
    return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion.ciudad}, ${this.direccion.pais}.`;
  }
};

const {
  direccion: { ciudad, pais }
} = usuario;

console.log(usuario.presentarse());
console.log(`Variables independientes extraídas: Ciudad -> ${ciudad}, País -> ${pais}`);