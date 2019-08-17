const express = require('express');

const projectDb = require('../data/helpers/projectModel.js');
const actionDb = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get("/", (req, res) => {
    const name  = req.body.name
    const description = req.body.description

        projectDb.get()
            .then(project => {
                res.status(200).json(project)
            })
            .catch(err => {
                res.status(500).json({ error: 'Error getting projects'})
            })
        res.status(401)
});

router.get("/:id", confirmProjectId, (req, res) => {
    projectDb.get(req.body.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting post with this id'})
        })
        res.status(401)
});

router.get("/:id/actions", confirmProjectId, (req, res) => {
    const id = req.params.id

        projectDb.getProjectActions(id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting action with this ID'})
        })
        res.status(401)
       
});

router.post("/", (req, res) => {

});

router.post("/:id/actions", (req, res) => {
    
});

router.delete("/:id", (req, res) => {
    
});

router.delete("/:project_id/actions/:id", (req, res) => {
    
});

router.put("/:id", (req, res) => {
    
});

router.put("/:project_id/actions/:id", (req, res) => {
    
});

//middleware

function confirmProjectId(req, res, next) {
    const { id } = req.params;

    projectDb.get(id)
        .then(project => {
            if(project){
                req.project = project;
                next();
            } else {
                res.status(400).json({ message: "Could not find project with this ID."})
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error in finding ID.'})
        })
};

module.exports = router;