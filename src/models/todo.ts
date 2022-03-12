import { ITodo } from './../types/todo';
import mongoose, { model, Schema } from 'mongoose'

const todoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: false
    },
    
    subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subtodo'
        }
    ]

}, { timestamps: true })


export default model<ITodo>('Todo', todoSchema)