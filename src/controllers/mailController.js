const transporter = require("../configs/nodemailers");
module.exports = {
  sendMail: (req, res) => {
    const { students } = req;

    students.map((student) => {
      const mailOptions = {
        from: "lixtech20@gmail.com",
        to: student.email,
        subject: "Nodemailer Project",
        text: "Hi from your nodemailer project",
        attachments: [
            {
                filename: 'certificate-PLUG-IN.pdf',
                path: 'http://localhost:3000/certificate/report'+student.name+'.pdf'
            }
        ]
      };
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log("Error ", err);
        } else {
          return res.status(200).json({
            message: "Success send mail",
            status: 200,
          });
        }
      });
    });
  },
};
