const oracledb = require('oracledb');


async function run() {
    const connection = await oracledb.getConnection({
        user          : 'TTPROJECT',
        password      : 'tt', 
        connectString : "localhost/orclpdb",
    });

    const result = await connection.execute('SELECT DISTRICT FROM "TTPROJECT"."SELLER_LOCATION"');
    console.log("Result is:", result.rows);

    await connection.close();  
}

run();