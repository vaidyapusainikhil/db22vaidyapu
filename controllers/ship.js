var Ship = require('../models/ship'); 
 
// for a specific ship. 
exports.ship_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Ship.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
        if(document.Cost < 1200 || document.Cost >99999){
            throw new TypeError("Please add cost in between 1200 and 99999")
          }
          else if(document.Company.length<=0){
            throw new TypeError("Company name is Empty")
          }
          else{
            let result = await document.save();
            res.send(result);
          }
        }
    
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle ship delete form on DELETE. 
exports.ship_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Ship.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle ship update form on PUT. 
exports.ship_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Ship.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Company)  
               toUpdate.Company = req.body.Company; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        if(req.body.Colour) toUpdate.Colour = req.body.Colour; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
 // Handle a show one view with id specified by query 
exports.ship_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Ship.findById( req.query.id) 
        res.render('shipdetail',  
{ title: 'Ship Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a ship. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.ship_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('shipcreate', { title: 'Ship Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a ship. 
// query provides the id 
exports.ship_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Ship.findById(req.query.id) 
        res.render('shipupdate', { title: 'Ship Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.ship_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Ship.findById(req.query.id) 
        res.render('shipdelete', { title: 'Ship Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  