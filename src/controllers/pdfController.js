const pdf = require("html-pdf");
const path = require("path");

const students = [
  { name: "Mamang", email: "mamangfelix1@gmail.com"},
  { name: "Felix", email: "lixtech20@gmail.com"},
];

module.exports = {
  generatedPDF: (req, res, next) => {
    students.map((student) => {
      return res.render(
        path.join(__dirname, "../../views/", "report-template.ejs"),
        { student: student },
        (err, data) => {
          let options = {
            width: "750px",
            height: "563px",
            format: "Letter",
            orientation: "landscape",
          };
          pdf
            .create(data, options)
            .toFile("public/certificate/report" + student.name + ".pdf", (err, result) => {
              if (err) {
                return res.send("Error ", err);
              }
            });
        }
      );
    });
    req.students = students
    next();
  },
};
