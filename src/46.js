let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Project1234567890</title>
      <style>
        body {
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 800px;
          margin: 50px auto;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          bottom: 100px;
          left: 40px;
          background-color: #87CEEB;
          color: white;
        }
        .nav {
          list-style-type: none;
          padding: 0;
        }
        .nav a {
          display: block;
          text-align: center;
          margin-bottom: 15px;
          font-size: 16px;
          color: #333;
        }
        .nav li:last-child a {
          border-radius: 40deg;
        }
      </style>
    </head>
    <body class="container">
      <header>
        <div class="logo"></div>
      </header>
      <nav class="nav">
        <a href="#home" class="nav-a">Home</a>
        <a href="#about" class="nav-a">About</a>
        <a href="#contact" class="nav-a">Contact</a>
      </nav>
      <main id="content"></main>
    </body>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
