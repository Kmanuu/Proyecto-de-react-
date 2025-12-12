// 1. Definimos la FORMA que tiene una camiseta (Interface)
export interface Resena {
  usuario: string;
  comentario: string;
}

export interface Camiseta {
  id: number;
  equipo: string;
  temporada: string;
  precio: number;
  imagen: string;    
  descripcion: string;
  tallas: string[];
  resenas: Resena[];  // Array para guardar las opiniones
}

// 2. Creamos los DATOS iniciales (6 ejemplos)
export const camisetas: Camiseta[] = [
  {
    id: 1,
    equipo: "FC Barcelona",
    temporada: "2008/2009",
    precio: 125,
    imagen: "/images/barsa.jpg", 
    descripcion: "La mítica camiseta del triplete. Diseño clásico con media mitad azulgrana.",
    tallas: ["S", "M", "L", "XL"],
    resenas: []
  },
  {
    id: 2,
    equipo: "Real Madrid",
    temporada: "2001/2002",
    precio: 130,
    imagen: "/images/madrid.jpg",
    descripcion: "Edición Centenario. Blanca impoluta sin publicidad, pura historia.",
    tallas: ["M", "L", "XL"],
    resenas: []
  },
  {
    id: 3,
    equipo: "AC Milan",
    temporada: "1989/1990",
    precio: 110,
    imagen: "/images/milan.jpg",
    descripcion: "El Milan de Sacchi. Rayas estrechas rojas y negras con cuello tipo polo.",
    tallas: ["S", "M", "L"],
    resenas: []
  },
  {
    id: 4,
    equipo: "Boca Juniors",
    temporada: "2000",
    precio: 115,
    imagen: "/images/boca.jpg",
    descripcion: "La azul y oro de la época dorada de Riquelme y Palermo.",
    tallas: ["L", "XL", "XXL"],
    resenas: []
  },
  {
    id: 5,
    equipo: "Arsenal FC",
    temporada: "2005/2006",
    precio: 120,
    imagen: "/images/arsenal.jpg",
    descripcion: "Edición despedida de Highbury. Color 'redcurrant' con detalles dorados.",
    tallas: ["S", "M", "XL"],
    resenas: []
  },
  {
    id: 6,
    equipo: "Selección Brasil",
    temporada: "1998",
    precio: 140,
    imagen: "/images/brasil.jpg",
    descripcion: "La clásica 'canarinha' de Ronaldo Nazario. Cuello verde y ribetes en hombros.",
    tallas: ["M", "L"],
    resenas: []
  }
];