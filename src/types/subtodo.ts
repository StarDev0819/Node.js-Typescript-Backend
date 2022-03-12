import { Document } from 'mongoose'

export interface ISubtodo extends Document {
    title: string
    status: boolean
    parent_id: string
}