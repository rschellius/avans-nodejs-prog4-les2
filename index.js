// Importeer de in-memory database
const database = require("./src/dtb/inmem-db");
const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
    // Haal een niet-bestaand item uit de database
    database.getById(1, (err, data) => {
        if (err) {
            console.error(err.message);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Voeg een item toe aan de database
database.add(
    {
        firstName: "Abdi",
        lastName: "Nageeye",
        emailAdress: "a.nageeye@server.com",
    },
    (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    }
);

// Haal een niet-bestaand item uit de database
database.getById(123, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(data);
    }
});

// Haal alle data uit de database
database.getAll((err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
