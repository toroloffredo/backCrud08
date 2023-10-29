const Student = require("../models/Student.model");

const router = require("express").Router();



/* GET all students (read)*/ 
router.get('/', async (req,res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (error){
    console.log (error)
    res.status(500).json(error)
  }
})

/* GET one student (read)*/ 
router.get('/:studentId', async (req,res) => {
  try {
    const student = await Student.findById(req.params.studentId)
    res.status(200).json(student)
  } catch (error){
    console.log (error)
    res.status(500).json(error)
  }

})

/* POST one student (create)*/ 
router.post('/', async (req,res) => {
  try { 
    const payload = req.body
    const newStudent = await Student.create(payload)
    res.status(201).json(newStudent)
  } catch (error){
    console.log (error)
    res.status(500).json(error)
  }

})

/* PUT one student (update)*/ 
router.put('/:studentId', async (req,res) => {
  try {
    const payload = req.body
    const updatedStudent = await Student.findByIdAndUpdate(req.params.studentId, payload, { 
      new: true,
    })
    res.status(202).json(updatedStudent)
  } catch (error){
    console.log (error)
    res.status(500).json(error)
  }

})

/* DELETE one student (delete)*/ 
router.delete('/:studentId', async (req,res) => {
  try { 
    await Student.findByIdAndDelete(req.params.studentId)
    res.status(202).json({message:'Student deleted'})
  } catch (error){
    console.log ("on the backend route", error)
    res.status(500).json(error)
  }

})



module.exports = router;
