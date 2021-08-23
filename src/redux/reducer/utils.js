export const orderTeam = (state, hero) => {

    // La api trae en muchos heroes con algunos stats en null
    // pasamos todos los que esten en null a 10 para evitar errores
    hero.powerstats.intelligence = hero.powerstats.intelligence === "null" ? 10 : parseInt(hero.powerstats.intelligence);
    hero.powerstats.strength = hero.powerstats.strength === "null" ? 10 : parseInt(hero.powerstats.strength);
    hero.powerstats.speed = hero.powerstats.speed === "null" ? 10 : parseInt(hero.powerstats.speed);
    hero.powerstats.durability = hero.powerstats.durability === "null" ? 10 : parseInt(hero.powerstats.durability);
    hero.powerstats.power = hero.powerstats.power === "null" ? 10 : parseInt(hero.powerstats.power);
    hero.powerstats.combat = hero.powerstats.combat === "null" ? 10 : parseInt(hero.powerstats.combat);

    const stats = hero.powerstats.intelligence + hero.powerstats.strength + hero.powerstats.speed + hero.powerstats.durability + hero.powerstats.power + hero.powerstats.combat;
    hero.total = Math.round(stats / 6);
    let newState = state.team.concat(hero);
    newState = newState.sort((a, b) => {
        if (a.total < b.total) {
            return 1;
        };
        if (a.total > b.total) {
            return -1;
        };
        return 0
    });
    return newState;
};