const Spiderman = require('../app/spiderman');

describe("Unit tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const tomHolland = new Spiderman("Spider-Man: No Way Home", 25, "Tom Holland", 24, "Sony");
        
        expect(tomHolland.nombre).toBe("Spider-Man: No Way Home");
        expect(tomHolland.edad).toBe(25);
        expect(tomHolland.actor).toBe("Tom Holland");
        expect(tomHolland.noPeliculas).toBe(24);
        expect(tomHolland.estudio).toBe("Sony");
    });
})
