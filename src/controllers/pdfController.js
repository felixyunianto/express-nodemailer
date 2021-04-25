const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");

const students = [
  { name: "Joy", email: "joy@example.com", city: "New York", country: "USA" },
  {
    name: "John",
    email: "John@example.com",
    city: "San Francisco",
    country: "USA",
  },
];

module.exports = {
  generatedPDF: (_, res, next) => {
    students.map((student) => {
      return res.render(
        path.join(__dirname, "../../views/", "report-template.ejs"),
        { student: student },
        (err, data) => {
          let options = {
            width: "279mm",
            height: "215mm",
            format: "Letter",
            orientation: "landscape",
          };
          pdf
            .create(data, options)
            .toFile("report" + student.name + ".pdf", (err) => {
              if (err) {
                return res.send("Error ", err);
              }
            });
        }
      );
    });
    return res.send("File Created");
  },
};
