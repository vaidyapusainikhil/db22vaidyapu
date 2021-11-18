var express = require('express'); 
const ship_controlers= require('../controllers/ship'); 
var router = express.Router(); 
 
/* GET ships */ 
router.get('/', ship_controlers.ship_view_all_Page ); 
router.get('/detail', ship_controlers.ship_view_one_Page); 
router.get('/create', ship_controlers.ship_create_Page); 
router.get('/update', ship_controlers.ship_update_Page); 
router.get('/delete', ship_controlers.ship_delete_Page); 
module.exports = router;
