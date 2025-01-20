const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Hello World</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

            </head>
            <body>
                <h1 class="text-primary">Hello World!</h1>
                <button class="btn btn-success" onclick="alert('Welcome!')">Welcome</button>

            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
