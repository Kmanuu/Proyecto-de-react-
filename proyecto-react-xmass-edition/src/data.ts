// 1. Definimos el "molde" del Disco usando una interfaz
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
    titulo: "Super Sangre Joven",
    artista: "Duki",
    anio: 2019,
    genero: "Trap",
    portada: "https://i.scdn.co/image/ab67616d00001e02ee96b9cce0c822c6a61338e9",
    descripcion: "Mi album favorito de este cantante y de la historia de la música, marcó el comienzo de una era, el trap en español."
  },
  {
    id: 2,
    titulo: "Desde el fin del mundo",
    artista: "Duki",
    anio: 2021,
    genero: "Trap",
    portada: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5",
    descripcion: " Este album es pura genialidad, musica motivadora, melancólica, rock, tiene de todo en uno es perfecto y único, gracias duko por tanto."
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
    titulo: "Inmortales",
    artista: "Bardero$",
    anio: 2022,
    genero: "Rap",
    portada: "https://i.scdn.co/image/ab67616d0000b273dc949382c31f5ad1264a8dbc",
    descripcion: "Este grupo de rap argentino tiene letras profundas y beats que te atrapan desde el primer segundo. Trajeron el boom del rap en español."
  }
];