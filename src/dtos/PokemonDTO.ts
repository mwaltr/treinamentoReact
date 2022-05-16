

export interface PokemonAbout{
    weight : string ; 
    height  : string ; 
    description : string ; 

}
export interface PokemonMoves{
    id : number ;
    name : string ;

}
export interface PokemonType{
    id : number ;
    name : PokemonName;
}
export interface PokemonStats{
    hp : string ; 
    atk : string ; 
    def : string ;
    satk : string ;
    sdef : string ;
    spd : string ;
}
export interface PokemonDTO{
    id : number ; 
    name : string ;
    code : string ;
about : PokemonAbout;
moves : PokemonMoves[];
base_stats : PokemonStats;
types : PokemonType[];
}

export enum PokemonName {
    rock = "rock",
    ghost = "ghost",
    steel = "steel",
    water = "water",
    grass = "grass",
    psychic = "psychic",
    ice = "ice",
    dark = "dark",
    fairy = "fairy",
    normal = "normal",
    fighthing = "fighthing",
    flying = "flying",
    poison = "poison",
    ground = "ground",
    bug = "bug",
    fire = "fire",
    electric = "electric",
    dragon = "dragon"
}