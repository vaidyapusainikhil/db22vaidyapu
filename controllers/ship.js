var Ship = require('../models/ship'); 
 
// List of all ships 
exports.ship_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship list'); 
}; 
 
// for a specific ship. 
exports.ship_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship detail: ' + req.params.id); 
}; 
 
// Handle ship create on POST. 
exports.ship_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship create POST'); 
}; 
 
// Handle ship delete form on DELETE. 
exports.ship_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship delete DELETE ' + req.params.id); 
}; 
 
// Handle ship update form on PUT. 
exports.ship_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship update PUT' + req.params.id); 
}; 