// require the handlers
const handlers = require('./handlers');
const express = require('express');

// build the router
const router = express.Router();

router.get('/', (req, res) => {
  res.send('files API!');
});

// add routes to router
router.get('/files', handlers.show);

router.get('/files/:name', handlers.read);

router.post('/files/:name', handlers.write);

router.delete('/files/:name', handlers.delete);
// export the router
module.exports = router;
