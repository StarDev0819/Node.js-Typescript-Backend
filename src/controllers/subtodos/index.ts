import { Response, Request } from 'express'
import { ISubtodo } from './../../types/subtodo'
import Subtodo from '../../models/subtodo'

const addSubtodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body

        const subtodo: ISubtodo = new Subtodo({
            title: body.title
        }) 

        const newSubtodo: ISubtodo = await subtodo.save()
        const allSubtodos: ISubtodo[] = await Subtodo.find()

        res.status(201).json({ message: 'Todo added', subtodo: newSubtodo, subtodos: allSubtodos })
    } catch (error) {
        throw error
    }
}

const updateSubtodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateSubtodo: ISubtodo | null = await Subtodo.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allSubtodos: ISubtodo[] = await Subtodo.find()
        res.status(200).json({
            message: 'Todo updated',
            subtodo: updateSubtodo,
            subtodos: allSubtodos,
        })
    } catch (error) {
        throw error
    }
}

const deleteSubtodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedSubtodo: ISubtodo | null = await Subtodo.findByIdAndRemove(
            req.params.id
        )
        const allSubtodos: ISubtodo[] = await Subtodo.find()
        res.status(200).json({
            message: 'Subtodo deleted',
            subtodo: deletedSubtodo,
            subtodos:allSubtodos,
        })
    } catch (error) {
        throw error
    }
}

export { addSubtodo, updateSubtodo, deleteSubtodo }
