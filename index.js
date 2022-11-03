const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000
const operation_type_enum = Object.freeze({
    addition: "addition",
    substraction:  "substraction",
    multiplication: "multiplication",
})
app.use(cors())
app.get('/',(req,res)=>{
    res.status(200).json({
        "slackUsername":"tamynator",
        "backend": true,
        "age": 20,
        "bio": "i am a tech entusiast with knowledge in dart(flutter), javascript and some webtechnology. I a recently started node and i'm happy to join like mind in this hng internship to futher my knowledge in backend using node"
    })
})
app.post('/',(req,res)=>{
    if(!req.body){
        return res.status(400).json({
            slackUsername: "Tamynator",
            message: "all fields are requried"
        })
    }
    let {operation_type,x,y} = req.body
    let operation = operation_type == operation_type_enum.addition || operation_type.includes("addition")||operation_type.includes("add") || operation_type.includes( "+")  ? operation_type_enum.addition : operation_type == operation_type_enum.substraction || operation_type.includes("substraction")||operation_type.includes("minus") || operation_type.includes("-") || operation_type.includes("remove") ? operation_type_enum.substraction : operation_type == operation_type_enum.multiplication || operation_type.includes("miltiplication")||operation_type.includes("multiply") || operation_type.includes("times") || operation_type.includes("of")||operation_type.includes("*")?operation_type_enum.multiplication:"invalid"
    if(!operation_type || !x || !y){
        return res.status(400).json({
            slackUsername: "Tamynator",
            message:!operation ? "operation type is invalid" : !x ? "x value is not supplied" : !y ?"y value is not supplied" : "all fields are requried"
        })
    }
    let result = performOperation(operation,x,y)
    return res.header('Content-Type',"application/json").status(200).json({
        "slackUsername": "Tamynator",
        "result": result,
        "operation_type": operation,
    })
    

})

function performOperation(operation_type_input,firtsNum,lastNum){
    let value = 0
    switch(operation_type_input){
        case operation_type_enum.addition:
            value = firtsNum + lastNum
            break
        case operation_type_enum.substraction:
            value = firtsNum - lastNum
            break
        case operation_type_enum.multiplication :
            value = firtsNum * lastNum
            break
        default: 
            value = 0;
            break
    }    
    return value
}




app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
