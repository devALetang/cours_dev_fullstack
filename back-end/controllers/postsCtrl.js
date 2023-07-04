const jwtUtils = require('../middleware/jwtUtils');
const models = require('../models');

module.exports = {
    create: async (req, res) => {
        const {title, description} = req.body;
        const authorization = req.headers['authorization']
        const userId = jwtUtils.getUser(authorization);

        if (title == "" || description == "") {
            return res.status(500).json({ message: "Veuillez remplir tous les champs." });
        }
    
        const newPost = await models.Posts.create({
            title: title,
            description: description,
            pictures: 'test.png',
            users_id: userId
        })

        if(newPost) {
            return res.status(200).json({message: 'Posts a été crée.'});
        } else {
            return res.status(400).json({message: 'Erreur'});
        }
    },

    update: async (req, res) => {
        const id = req.params.id;
        const { title, description, pictures } = req.body;

        if (title == "" || description == "") {
            return res.status(500).json({ message: "Veuillez remplir tous les champs." });
        }

        const post = await models.Posts.findOne({
            attributes: ['id', 'title', 'description', 'pictures', 'users_id'],
            where: { id }
        });
        await post.update({
            title: title ? title : post.title,
            description: description ? description : post.description,
            pictures: pictures ? pictures : 'test.png'
        }).then(() => {
            return res.status(200).json({ message: "modification effectué" });
        }).catch((e) => {
            return res.status(400).json({ message: "erreur lors de la modification" });
        })
    },

    delete: (req, res) => {

    },

    getAllPosts: (req, res) => {

    },

    getOnePost: (req, res) => {

    }
}