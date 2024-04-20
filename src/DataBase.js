const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./DataBase/Hackathon.db', sqlite3.OPEN_READWRITE,(err) =>{
    if(err) return console.error(err.message);
});

function createTableParticipants()
{
    sql = `CREATE TABLE participants(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        last_name TEXT NOT NULL,
        first_name TEXT NOT NULL,
        middle_name TEXT NOT NULL,
        photo BLOP CHECK(length(photo) <= 2097152),
        about_me TEXT CHECK(length(about_me) <= 255)
    )`;
    db.run(sql,(error) => {
        if(error){
            console.log('Ошибка при создании таблицы', error);
        }
        else{
            console.log('Таблица успешно создана');
        }
    });
}
function createTableTeam(){
    sql = `CREATE TABLE team(
        id INTEGER PRIMARY KEY,
        team_name TEXT NOT NULL,
        photo BLOP CHECK(length(photo) <= 2097152),
        email TEXT UNIQUE,
        login TEXT,
        password TEXT
    )`;
    db.run(sql,(error) => {
        if(error){
            console.log('Ошибка при создании таблицы', error);
        }
        else{
            console.log('Таблица успешно создана');
        }
    });
}
// createTableParticipants();
// createTableTeam();





db.close();