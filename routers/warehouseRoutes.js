let express = require('express');
let router = express.Router();

function deleteUser(itemID) {

    let index = -5;

    for (let i=0; i<db.length; i++) {
        if (db[i].id == itemID) {
            
            index = i;
            break;
        };
    };

    if (index >= 0) {
        db.splice(index, 1);
    };
};

function getwarehousevalue() {
    let totalCost=0;
    for (let i=0; i<db.length; i++) {
        totalCost = totalCost + db[i].cost*db[i].count;
    }

    return totalCost;
};

function generateList() {
    let st = 'ID  NAME   COUNT  COST  TOTAL</br>';
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].name + ' | ' + db[i].count  + ' | ' + db[i].cost + ' | ' + db[i].cost*db[i].count  + '</br>';
    }
    return st;
};

router.get('/newItem', function(req, res) {
    let q = req.query;
    let newId = Math.round(Math.random()*1000);
    let newItem = {id: newId, name: q.name, count: q.count, cost: q.cost};
    db.push(newItem);
    res.send("Item has been added to Database");
});

router.get('/getallitems', function(req, res){
    res.send(generateList());
});

router.get('/removeitemid/:id', function(req, res){
    idToDelete = req.params.id;
    deleteUser(idToDelete);
    res.send('Item as been deleted from Database');
});

router.get('/getwarehousevalue', function(req, res){
    res.send(getwarehousevalue().toString());
});

module.exports = router;