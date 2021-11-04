const fetch = require(node-fetch);

async function SwapiSpecies() {

    try {
        const Species = await fetch(`https://swapi.dev/api/species/?page=2`);
        const SpeciesJson = await Species.json();
        console.log(SpeciesJson);


    } catch (error) {
        
    }


}

SwapiSpecies();
