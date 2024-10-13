import mongoose from 'mongoose';
import env from '../../env'

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error('Connection failed')
    }
}