const nodemailer = require('nodemailer')
require('dotenv').config()
const Product = require("../models/Product")

let total = 0;
async function totalAmt(){
    const products = await Product.find({});
    products.map((each) => {

        total += each.price
    })
    
}
totalAmt();
console.log(total)

const sendEmail = async (req,res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'francisco.steuber10@ethereal.email',
            pass: 'Ah3fQDqrn2qAj28pRe'
        }
    });
    let info = await transporter.sendMail({
        to: 'john.mcfarland222@gmail.com',
        from: 'jmcfar187@west-mec.org',
        
        subject: 'Your Receipt',
        html: `${total}`
    })

    res.json(info)
}

module.exports = sendEmail