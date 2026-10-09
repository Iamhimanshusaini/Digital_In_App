// const nodemailer = require('nodemailer')
// const express = require('express')
// const dotenv = require("dotenv");
// dotenv.config();

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAILId,
//         pass: process.env.EMAILPASS,
//     },
// });


// transporter.verify((error, success) => {

//     if (error) {
//         console.log("❌ Gmail Authentication Failed");
//         console.log(error.message);
//     } else {
//         console.log("✅ Gmail Authentication Successful");
//         console.log("📧 SMTP server is ready to send emails");
//     }

// });

// module.exports = transporter;
const { Resend } = require("resend");
const dotenv = require("dotenv");

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = resend;
