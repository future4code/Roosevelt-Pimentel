import knex from "knex";




export const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "419969-roosevelt-pimentel",
        password: "5hWoThB2AGVgH#lMdOus",
        database: "joy-419969-roosevelt-pimentel" 
    }
});

export default connection