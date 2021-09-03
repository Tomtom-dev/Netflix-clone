export interface Film {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<any>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface Global {
    created_by:string,
    description:string,
    favorite_count:number,
    id:string,
    iso_639_1:string,
    item_count:number,
    items:Film[],
    name:string
}

export interface answer {
    data: Global;
}