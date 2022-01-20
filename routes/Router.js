const router = require('express').Router();

const fetch = require('node-fetch')

//get..

router.get('/videos', async (req, res) => {
    try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UULNgu_OupwoeESgtab33CCw&key=${process.env.KEY}`
        const data = await fetch(url);
        const reply = await data.json()
        res.json(reply.items)
    } catch (error) {
        console.log(error);
    }

})










module.exports = router;