const fetch = require("fetch");

async function getSwapi(){
    try {
        const getSwapiPeople = await fetch("https://swapi.dev/api/people/1");
        const result = [];
        const data = {
            personaje: {},
            planetas: {},
        };

        // const filmResultado = [];
        // const filmContect = {
        //     titulo: filmsJson.tittle,
        //     director: filmsJson.director,
        // };

        const character = await getSwapiPeople.json();
        // return character;
        console.log(character);

        const planet = await fetch(character.homeworld);
        const planeJson = await planet.json();

        // const films = await fetch(`https://swapi.dev/api/films/1/`), 
        // // (como hacer de forma dinamica si hay mas de un link)
        // const filmsJson = await films.json(),

        data.personaje = {
            nombre: character.name,
            altura: character.height,
            color_ojo: character.eye_color,  
            
        };

        data.planetas = {
            nombre: planeJson.name,
            gravedad: planeJson.gravity,
            terreno: planeJson.terrain,
        };
        console.log(data);
        resolve.push(data);
        // resolve.push(filmContect);
        return result;
        // return filmResultado;
    }

    catch (error) {}
}

getSwapi();