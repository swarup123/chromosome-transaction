module.exports = (app) => {
    const Chromosome = require('../controller/getChromosome.js');

    app.get('/Chromosome', Chromosome.findAll);
}