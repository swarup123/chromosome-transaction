const things = require('../models/chromosomeDetails.js');


async function findAll(req,res){
    const findChromosome = await things.aggregate([
    {"$group" : 
        {_id:{chromosome:"$chromosome"}, variant:{$sum:1}}
    }, 
    {$sort:{"_id.chromosome":1}}
]);
    return res.send({
        findChromosome
    });
}


module.exports = {
    findAll
};