const mongooseInstance = require('mongoose');

const FeatureSchema = new mongooseInstance.Schema({
    feature_id: {
        type: String,
        required:true,
        unique:true
    },
    feature_name :{
        type: String,
        required:true
    },
    feature_type:{
        type: String,
        required:true
    },
    feature_description :{
        type: String
    },
    feature_created_timestamp :{
        type: Date,
        default: Date.now
    },
    feature_version :{
        type: Number,
        required:true
    },
    feature_owner :{
        type: String,
        required:true
    },
    feature_data:{
        type: String,
        required:true
    },
});

module.exports = mongooseInstance.model('Feature',FeatureSchema);