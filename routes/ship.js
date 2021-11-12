var express = require('express'); 
const ship_controlers= require('../controllers/ship'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', ship_controlers.ship_view_all_Page ); 
module.exports = router;
