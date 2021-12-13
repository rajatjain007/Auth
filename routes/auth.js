const router = require('express').Router()

//Register
router.post('/register',(req,res)=>{
    res.send('Register');
});

//Login
router.post('/login',(req,res)=>{

});

module.exports = router;