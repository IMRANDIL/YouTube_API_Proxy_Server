const router = require('express').Router();

const fetch = require('node-fetch')

//get..

router.get('/videos', async (req, res) => {
    try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL8p2I9GklV45ihqIep4n3_VijItAkcibN&key=${process.env.KEY}`
        const data = await fetch(url);
        const reply = await data.json()
        res.json(reply.items)
    } catch (error) {
        console.log(error);
    }

});



router.get('/', (req, res) => {
    res.send(`<h1 style='text-align:center'>YouTube_API_APP</h1>`)
})










module.exports = router;