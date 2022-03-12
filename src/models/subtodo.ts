import { ISubtodo } from './../types/subtodo';
import mongoose, { model, Schema } from 'mongoose'

const subtodoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: false
    },

}, { timestamps: true })


export default model<ISubtodo>('Subtodo', subtodoSchema)