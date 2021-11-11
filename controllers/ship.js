var Ship = require('../models/ship'); 
 
// for a specific ship. 
exports.ship_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship detail: ' + req.params.id); 
}; 
 
// Handle Ship create on POST. 
exports.ship_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Ship(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    
    document.Company = req.body.Company; 
    document.Cost = req.body.Cost; 
    document.Colour = req.body.Colour; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle ship delete form on DELETE. 
exports.ship_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship delete DELETE ' + req.params.id); 
}; 
 
// Handle ship update form on PUT. 
exports.ship_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: ship update PUT' + req.params.id); 
}; 

// List of all Ship
exports.ship_list = async function(req, res) { 
    try{ 
        theShips = await Ship.find(); 
        res.send(theShips); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.ship_view_all_Page = async function(req, res) { 
    try{ 
        theShips = await Ship.find(); 
        res.render('ship', { title: 'Ship Search Results', results: theShips }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 