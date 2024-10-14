import express from 'express'

const router = express.Router();

router.get(('/'), (req, res) =>{
    res.render('home')
})

router.get(('/trips'), (req, res) =>{
    res.render('trips')
})

router.get(('/testimonies'), (req, res) =>{
    res.render('testimonies')
})

router.get(('/us'), (req, res)=>{
    res.render('us')
})

// ### Passing parameters to the view

// router.get(('/contact'), (req, res) =>{

//     const info_user = "John Wick";

//     res.render('contact',{
//         info_user
//     });
// })

// router.get(('/Us'), (req, res) =>{
//     res.send("About us")
// })

export default router
