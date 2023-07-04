const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl')

router.post('/create', postsCtrl.create);
router.put('/:id', postsCtrl.update);
router.delete('/:id', postsCtrl.delete)
router.get('/get-all', postsCtrl.getAllPosts)
router.get('/get-one/:id', postsCtrl.getOnePost)

module.exports = router;