const express = require('express');

const projectDb = require('../data/helpers/projectModel.js');
const actionDb = require('../data/helpers/actionModel.js')

const router = express.Router();

router.get("/", (req, res) => {
    
});

router.get("/:id", (req, res) => {
    
});

router.get("/:id/actions", (req, res) => {
    
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

module.exports = router;