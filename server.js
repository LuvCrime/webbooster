const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const pug = require("pug");
var nodemailer = require("nodemailer");

app.get('/webbooster', (req, res) => {
  res.send('Hello World!')
})

app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.use("/webbooster", function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  response.render("main", {
    product: [
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
      {
        name: "Парикмахерское кресло «Норм» гидравлическое",
        img: "http://dev-wbooster.ru/test_task/img/img-1.png",
        price: "9900",
      },
    ],
  });
});

app.use(express.urlencoded());

app.use(express.json());

app.post("/buy", function (request, response) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mytestaccpleaseignore@gmail.com",
      pass: "12345678Qq",
    },
  });

  var mailOptions = {
    from: "mytestaccpleaseignore@gmail.com",
    to: request.body.email,
    subject: "Sending Email using Node.js",
    text: `Здравствуйте, ${request.body.name}!${"\n"}Ваш заказ офрмлен: ${
      request.body.item
    }.${"\n"}В ближайшее время мы свяжемся с вами по указанному телефону: ${
      request.body.telephone
    }`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + request.body.email);
    }
  });
});

app.listen(port, () => {
  console.log(`You can open app at http://localhost:${port}/webbooster/`)
})
