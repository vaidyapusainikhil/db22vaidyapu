var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var ship_controller = require('../controllers/ship'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// ship ROUTES /// 
 
// POST request for creating a ship.  
router.post('/resource/ships', ship_controller.ship_create_post); 
 
// DELETE request to delete ship. 
router.delete('/resource/ships/:id', ship_controller.ship_delete); 
 
// PUT request to update ship. 
router.put('/resource/ships/:id', 
ship_controller.ship_update_put); 
 
// GET request for one ship. 
router.get('/resource/ships/:id', ship_controller.ship_detail); 
 
// GET request for list of all ship items. 
router.get('/resource/ships', ship_controller.ship_list); 
 
module.exports = router;