var Visit = require('./visit.model')


module.exports = function(app){
    //get all votes
    app.get("/api/v1/visits", async function(req, res, next){
        try {
            var result = await Visit.find();
            res.json(result);
            
        } catch (error) {
            return next(error);
        }
        
    });


    //create vote
    app.post("/api/v1/visits", async function(req, res, next){
        try {
           var visit = new Visit({
                visitor: req.fields.visit
            }).save();

            res.status(201)
            res.json(visit)

        } catch (error) {
            return next(error);
        }
    })

  /*   //delete a vote
    app.delete('/api/v1/votes/:id', async function(req, res, next){
        try {
            
            await Vote.findByIdAndDelete(req.params.id);

            res.status(204)
            res.end()

        } catch (error) {
            return next(error);
        }

    }); */

}