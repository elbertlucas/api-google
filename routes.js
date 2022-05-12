const express = require('express');
const service = require('./service/allServices')
const router = express.Router();

router.get("/metadata", async(req, res) => {
    const { data } = await service.getMetadata()
    res.send(data);
});

router.get("/getrows", async(req, res) => {
    const getRows = await service.getDataAll()
    res.send(getRows);
});

router.post("/addrow", async(req, res) => {
    const { values } = req.body;
    const row = await service.postRow(values)
    res.send(row.data);
});

router.post("/updatevalue", async(req, res) => {
    const { values } = req.body;
    const updateValue = await service.updateRow(values)
    res.send(updateValue.data);
});

module.exports = router;