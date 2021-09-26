
express = require('express')
router = express.Router();
const Post = require('../models/post');
// Post a post
router.post("/", async (req, res) => {
    const post = new Post({
        name: req.body.name,
        gender: req.body.gender,
        skill: req.body.skill
    });
    const savedPost = await post.save();
    try {
        res.send(savedPost);

    } catch (err) {
        res.json({ message: err });
    }

})
//Get All the posts
router.get('/', async (req, res) => {
    try {
        const allPost = await Post.find();
        res.json(allPost);
    } catch (err) {
        res.json({ message: err });
    }
})
//Find a specific Post
router.get('/:postId', async (req, res) => {
    try {
        res.json(await Post.findById(req.params.postId));
    } catch (err) {
        res.json({ message: err });
    }
})
//Delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.postId);
        res.json(deletedPost);
    } catch (err) {
        res.json(err);
    }
});
//Update specific post
router.patch('/:postId', async (req, res) => {
    const id = req.params.postId;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, { $set: { name: req.body.name } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;