const express = require('express');
app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index')
});
app.listen(8080,function(){
    console.log('server is running on port number 8080')
});

