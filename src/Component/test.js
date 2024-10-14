let mysql = require("mysql")

function main(...args) {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jet..123@2024!',
        database: 'netai_data_scients'
    })


    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting to the database: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);

        // Example query (replace with your query)
        connection.query('SELECT * FROM User', function (error, results, fields) {
            if (error) throw error;
            console.log('Results: ', results);
        });

        // Close the connection
        connection.end();
    });
}
main()