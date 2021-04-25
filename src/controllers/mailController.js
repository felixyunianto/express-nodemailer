const transporter = require('../configs/nodemailers');
const mailOptions = {
  from: "lixtech20@gmail.com",
  to: "mamangfelix1@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};


module.exports = {
    sendMail : (req, res) => {
        transporter.sendMail(mailOptions, (err, data) => {
            if(err) {
                console.log("Error ", err);
            }else{
                return res.status(200).json({
                    message : 'Success send mail',
                    status : 200
                });
            }
        })
    }
}