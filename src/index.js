import dotenv from 'dotenv'
import ConnectDB from './db/db.js';
import app from './app.js'
dotenv.config();

ConnectDB().
then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);

    })
}).catch((err) => {
    console.log("MONGO DB connection failed !!!", err);

});