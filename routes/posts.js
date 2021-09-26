
express = require('express')
router = express.Router();
const multer = require('multer');


const storageUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
        cb(null, true)

    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storageUpload,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Post = require('../models/post');
// Post a post
router.post("/:userId", upload.single('productImage'), async (req, res) => {
    console.log(req.file.path);
    console.log(req.file);
    const post = new Post({
        name: req.body.name,
        gender: req.body.gender,
        skill: req.body.skill,
        userId: req.params.userId,
        productImage: "http://practicerestfulapis-env.eba-u5uyntpp.us-east-1.elasticbeanstalk.com/" + req.file.path.toString().slice(8),
    });
    const savedPost = await post.save();
    try {
        res.send(savedPost);

    } catch (err) {
        res.json({ message: err });
    }

})
//Get All the posts
router.get("/all/", async (req, res) => {
    console.log("a;; posts fetched");
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

//Find Posts for specific User
router.get("/finduser/:userId", async (req, res) => {
    console.log("Single user posts fetched");
    const userId = req.params.userId;
    console.log(userId);
    try {
        const AllSingleUserPosts = await Post.find({ userId: userId }).exec();
        res.json(AllSingleUserPosts);

    } catch (err) {
        res.json({ message: err })
    }
});

//Update specific post for specific user
router.post('/', async (req, res) => {
    try {
        const userId = req.body.userId;
        const postId = req.body.postId;
        const skill = req.body.skill;
        console.log(userId);
        console.log(postId);
        // res.json(await Post.findById(req.body.postId));
        res.json(await Post.findOneAndUpdate({ userId: userId, _id: postId }, { $set: { skill: skill } }, { new: true }));

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;