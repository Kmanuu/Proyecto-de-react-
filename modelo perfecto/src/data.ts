// 1. Definimos el "molde" del Disco (Esto arregla el error de TypeScript)
export interface Disco {
  id: number;
  titulo: string;
  artista: string;
  anio: number;
  genero: string;
  portada: string;
  descripcion: string;
}

// 2. Exportamos los datos usando ese molde
export const discosData: Disco[] = [
  {
    id: 1,
    titulo: "Thriller",
    artista: "Michael Jackson",
    anio: 1982,
    genero: "Pop",
    portada: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    descripcion: "El álbum más vendido de todos los tiempos. Un clásico absoluto que definió una era."
  },
  {
    id: 2,
    titulo: "Un Verano Sin Ti",
    artista: "Bad Bunny",
    anio: 2022,
    genero: "Urbano",
    portada: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png",
    descripcion: "Un viaje por los sonidos del caribe. Perfecto para escuchar en la playa con una neverita."
  },
  {
    id: 3,
    titulo: "Dark Side of the Moon",
    artista: "Pink Floyd",
    anio: 1973,
    genero: "Rock",
    portada: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    descripcion: "Una obra maestra de la ingeniería de sonido. Escúchalo con cascos y viaja a otra dimensión."
  },
  {
    id: 4,
    titulo: "Motomami",
    artista: "Rosalía",
    anio: 2022,
    genero: "Experimental",
    portada: "https://upload.wikimedia.org/wikipedia/en/6/60/Rosalia_-_Motomami.png",
    descripcion: "Una reinvención total. Saoko papi, saoko. Una mezcla de jazz, reguetón y balada."
  }
];