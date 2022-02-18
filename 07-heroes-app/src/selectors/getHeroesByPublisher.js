import { heroes } from "../data/heroes";

export const getHeroByPublisher = ( publisher ) => {

    const publishersValid = ['Marvel Comics', 'DC Comics'];

    if (!publishersValid.includes(publisher)){
        throw new Error(`El publisher ${publisher} no es valido`)
    }
    return heroes.filter( hero => hero.publisher === publisher);
}