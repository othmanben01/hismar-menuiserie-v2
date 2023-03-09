const nodemailer = require("nodemailer");

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "othmanben.vp@gmail.com",
      pass: "obiyywqzrvusvzue",
    },
    secure: true,
  });

  const { name, email, phone, message } = req.body;
  // console.log({ name, email, phone, message });

  const mailData = {
    from: "othmanben.vp@gmail.com", // sender address
    to: "othmanben.vp@gmail.com", // list of receivers
    subject: `Hismar Menuiserie Website Message: ${name} ${phone}`, // Subject line
    text: `${name}, email: ${email}, phone: ${phone}, \n ${message}`, // plain text body
    html: "", // html body
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return res.status(200);
  //   console.log(req.body);
}
