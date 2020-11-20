const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    const init = Date.now();
    next();
    console.log(`Tempo: ${Date.now() - init} ms.`);
});

router.get('/produtos/:id', (req, res, next)=>{
    res.json({id: req.params.id});
});

module.exports = router;
