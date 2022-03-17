// https://swapi.dev/

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api/';

    async getResource(url) {
        const res =  await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`)
        }

        return await res.json();
    }

    // people
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPearson(id) {
        return this.getResource(`/people/${id}/`)
    }

    // planets
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getAllPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    //starship
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getAllStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}

const swapi = new SwapiService();

swapi.getAllPlanets().then((people) => {
    people.forEach( p => {
        console.log(p.name)
    });
})
    

 

