
export interface Videogame {
    id: number,
    name: string,
    image: string,
    description: string,
    releaseDate: string,
    rating: number,
    genres: string[],
    createDB: boolean
}