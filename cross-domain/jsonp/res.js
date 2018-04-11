const express= require('express')
const app = new express()

var responsePort=3001

app.get('/',function (req,res) {
        var callbackName = req.query.callback
        res.send(callback+"("+JSON.stringify({message:'this is from jsonp'})+")")
})
app.listen(responsePort,function(){
    console.log('jsonp server is running at port'+responsePort)
})