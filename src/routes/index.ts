import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
import { addSubtodo, updateSubtodo, deleteSubtodo } from '../controllers/subtodos'
 
const router: Router = Router()

router.get('/', getTodos)

router.post('/add-todo', addTodo)

router.post('/add-subtodo', addSubtodo)

router.put('/edit-todo/:id', updateTodo)

router.put('/edit-subtodo/:id', updateSubtodo)

router.delete('/delete-todo/:id', deleteTodo)

router.delete('/delete-subtodo/:id', deleteSubtodo)

export default router
