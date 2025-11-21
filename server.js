const http = require("http");
const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.write("Rovince Lee Marin");
//   res.write("BSIT BA-4102");
//   res.write("Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours- Mark 11:24");
//   res.end();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <html>
      <head>
        <title>Styled Output</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f0f2f5;
            padding: 40px;
            text-align: center;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 12px rgba(0,0,0,0.1);
            width: 400px;
            margin: auto;
          }
          h1 { color: #333; }
          p { color: #666; font-size: 18px; margin-bottom: 10px; }
          .verse { font-style: italic; color: #444; margin-top: 15px; }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>Rovince Lee Marin</h1>
          <p>BSIT BA-4102</p>
          <p class="verse">
            Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.
            <br> Mark 11:24
          </p>
        </div>
      </body>
    </html>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});