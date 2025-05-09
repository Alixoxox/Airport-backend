import {PORT} from './config/dotenv.js'
import express from 'express'
import cors from 'cors'
import userRouter from './routes/user_R.js'
import flightsRouter from './routes/flights_R.js'
import airlinesRouter from './routes/airlines_R.js'
import adminRoute from './routes/admin_R.js'
import bookingRoute from "./routes/bookings.js"
import baggage_Router from './routes/baggae_R.js'
import staff_and_terminal_Router from './routes/staff_terminal_services_R.js'
const app=express()

app.use(express.json());
app.use(cors()) // used to by pass cors Limitation by browser
app.use('/api/users',userRouter);
app.use('/api/data/flights',flightsRouter);
app.use('/api/data/airlines',airlinesRouter);
app.use("/api/admin",adminRoute)
app.use('/api/users/booking',bookingRoute)
app.use('/api/data/baggage', baggage_Router)
app.use('/api/data',staff_and_terminal_Router)

app.listen(PORT,()=>{
    console.log("Server running in Port : ",PORT);
})