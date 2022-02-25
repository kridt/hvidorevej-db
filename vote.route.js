var Vote = require("./vote.model");


module.exports = function(app){
    //get all votes
    app.get("/api/v1/votes", async function(req, res, next){
        try {
            var result = await Vote.find();
            res.json(result);
            
        } catch (error) {
            return next(error);
        }
        
    });

    //get vote by id
    app.get("/api/v1/votes/:id", async function(req, res, next){
        try {
            //get vote by id
            var result = await Vote.findById(req.params.id);       

            //if vote not found: error 404
            if(!result) {
                res.status(404)
                res.end();
                return;
            }

            //if vote is found
            res.json(result);
        } catch (error) {
            return next(error);
        }
    });

    //create vote
    app.post("/api/v1/votes", async function(req, res, next){
        try {
           var vote = new Vote({
                vote: req.fields.vote,
                voter: req.fields.voter,
                message: req.fields.message
            }).save();

            res.status(201)
            res.json(vote)

        } catch (error) {
            return next(error);
        }
    })

    //update a vote
    app.patch('/api/v1/votes/:id', async function(req, res, next) {
        try {
            var { voter, vote, message } = req.fields;
            var updateObject = {};

            if(voter) updateObject.voter = voter;
            if(vote) updateObject.vote = vote;
            if(message) updateObject.message = message;

            await Vote.findByIdAndUpdate(req.params.id, updateObject);

            var vote = await Vote.findById(req.params.id)

            res.status(204)
            res.end()

        } catch (error) {
            return next(error);
        }

    });

    //delete a vote
    app.delete('/api/v1/votes/:id', async function(req, res, next){
        try {
            
            await Vote.findByIdAndDelete(req.params.id);

            res.status(204)
            res.end()

        } catch (error) {
            return next(error);
        }

    });

}