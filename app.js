const express = require('express');
const connectDB = require('./config/db.config');
const userTypeRouter = require('./routers/userType.router');
const userRouter = require('./routers/user.router');
const productRouter = require('./routers/product.router');
const ordersRouter = require('./routers/order.route');
const cors=require('cors');
const port = 3000;
const app = express();
app.use(express.json());
connectDB();
app.use(cors({origin:'http://localhost:4200'}));
app.use("/imgs",express.static('imgs'));
app.use('/userType',userTypeRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/order',ordersRouter);

app.listen(port, ()=> console.log(`server started at port: ${port}`));