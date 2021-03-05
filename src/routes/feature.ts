const expressInstance = require('express');
const router = expressInstance.Router();
const Feature = require('../model/Feature');

// Get all Features - http://localhost:7000/api/features
router.get('/',async(req:any,res:any)=>{
    try {
        const allFeatures = await Feature.find();
        res.status(200).send(allFeatures)
    } catch(err) {
        res.status(400).send(err);
    } 
});

// Create a new feature - http://localhost:7000/api/features/feature
router.post('/feature',async(req:any,res:any)=>{
    const reqData = req.body;
    const feature = new Feature({
        feature_id: reqData.feature_id,
        feature_name: reqData.feature_name,
        feature_type: reqData.feature_type,
        feature_description: reqData.feature_description,
        feature_created_timestamp: reqData.feature_created_timestamp,
        feature_version: reqData.feature_version,
        feature_owner: reqData.feature_owner,
        feature_data: reqData.feature_data
    });

    try {
        const savedFeature = await feature.save();
        res.status(200).send(savedFeature);
    } catch(err) {
        res.status(400).send(err);
    }
});

//Update Existing Feature -	http://localhost:7000/api/features/{feature_id}
router.patch('/:featureId',async(req:any,res:any)=>{
    const reqData = req.body;
    try {
        const updateFeature = await Feature.updateOne(
            { _id:req.params.featureId},
            {$set:{
                feature_id: reqData.feature_id,
                feature_name: reqData.feature_name,
                feature_type: reqData.feature_type,
                feature_description: reqData.feature_description,
                feature_created_timestamp: reqData.feature_created_timestamp,
                feature_version: reqData.feature_version,
                feature_owner: reqData.feature_owner,
                feature_data: reqData.feature_data
            }}
            )
        res.status(200).send(updateFeature)
    } catch(err) {
        res.status(400).send(err);
    } 
});

//Remove Feature - http://localhost:7000/api/features/{feature_id}
router.delete('/:featureId',async(req:any,res:any)=>{
    try{
        const deleteFeature = await Feature.findByIdAndRemove({_id:req.params.featureId});
        res.status(200).send('Feature Deleted : '+ deleteFeature)
    } catch(err) {
        res.status(400).send(err);
    } 
})

//Get Feature By id - http://localhost:7000/api/features/search/{feature_id}
router.get('/:featureId',async(req:any,res:any)=>{
    try {
        const currentFeature = await Feature.findById(req.params.featureId);
        res.status(200).send(currentFeature)
    } catch(err) {
        res.status(400).send(err);
    } 
});

module.exports = router;