import express from 'express';
import cors from 'cors';
const app = express();
//import routers
import customerRoute from './routes/customerRoute.js'
import quotationRoute from './routes/quotationRoute.js'
import employeeRoute from './routes/employeeRoute.js'
import websiteRoute from './routes/websiteRoute.js'
import bankRoute from './routes/bankRoute.js'
import uploadlogoRoute from './routes/uploadlogoRoute.js'
import uploadstampRoute from './routes/uploadstampRoute.js'
import cardcustomerRoute from './routes/customer/card.js'
import carddashRoute from './routes/dashboard/card.js'

app.use(cors());
app.use(express.static('uploads'));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(express.json());

// app.use("/company", companyRoute);
// app.use("/", dashboardW1Route);
// app.use("/works", workRoute);
// app.use("/scope", scopeRoute);
// app.use("/lastwork", lastworkRoute);
app.use("/quotation", quotationRoute);
app.use("/customer", customerRoute);
app.use("/employee", employeeRoute);
app.use("/website", websiteRoute);
app.use("/bank", bankRoute);
app.use("/uploadlogo",uploadlogoRoute);
app.use("/uploadstamp",uploadstampRoute);
app.use("/cardcustomer",cardcustomerRoute);
app.use("/carddash",carddashRoute);

app.listen(5000, () =>{
    console.log("Running on port 5000");
})