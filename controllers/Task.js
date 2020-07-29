
/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();
const taskModel = require("../models/task.js");


//Route to direct use to Add Task form
router.get("/add",(req,res)=>
{
    res.render("Task/taskAddForm");
});

//Route to process user's request and data when the user submits the add task form
router.post("/add",(req,res)=>
{
    const newUser = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority
    }

    const task = new taskModel(newUser);
    task.save()
    .then(()=>{
        res.redirect('/task/list')
    })
    .catch(err=>console.log(`Error happended: ${err}`))

   
});

////Route to fetch all tasks
router.get("/list",(req,res)=>
{
    taskModel.find()
    .then((tasks)=>{

        const filteredTask = tasks.map();

        res.render("Task/taskDashboard");

    })
    .catch(err=>console.log(`Error happended pulling: ${err}`))

    
  
});

//Route to direct user to the task profile page
router.get("/description",(req,res)=>{

    

})


//Route to direct user to edit task form



//Route to update user data after they submit the form


//router to delete user


module.exports=router;