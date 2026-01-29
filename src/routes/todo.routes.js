const {createTodo,getAllTodos,getTodo, updateTodo,deleteTodo}=require("../controller/todo.controller");
const express =require("express")
const router =express.Router();

router.post('/todo',createTodo);
router.get('/todos',getAllTodos);
router.get('/todo/:id',getTodo);
router.patch('/todos/:id',updateTodo)
router.delete('/todos/:id',deleteTodo)
module.exports=router;