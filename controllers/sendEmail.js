const nodemailer = require('nodemailer')
require('dotenv').config()


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
        html: `<h1>Reset Password</h1><p> was your payment</p>`
    })

    res.json(info)
}

module.exports = sendEmail