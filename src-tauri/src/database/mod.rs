use rusqlite::{Connection, Result};

#[derive(Debug)]
struct Person {
    id: i32,
    name: String,
    data: Option<Vec<u8>>,
}

// Creates a demo database in memory
fn create_db() -> Result<Connection> {
    // Connection::open_in_memory()
    Connection::open("database.sqlite")
}

// Checks if a table exists in the database
fn check_if_table_exist(conn: &Connection, table_name: &str) -> bool {
    let query = format!(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='{}'",
        table_name
    );

    // Check if the  table already exists
    return conn
        .prepare(&query)
        .and_then(|mut stmt| stmt.query_map([], |_| Ok(())))
        .is_ok();
}

// Create demo table in the demo database
fn create_user_table(conn: &Connection) -> Result<()> {
    conn.execute(
        "CREATE TABLE IF NOT EXISTS user (
            id    INTEGER PRIMARY KEY,
            name  TEXT NOT NULL,
            data  BLOB
        )",
        [],
    )?;
    Ok(())
}

// Creates a demo user in the demo database
fn create_user(conn: &Connection, user: &Person) -> Result<()> {
    conn.execute(
        "INSERT INTO person (name, data) VALUES (?1, ?2)",
        (&user.name, &user.data),
    )?;
    Ok(())
}

// Retrieves demo user from the demo database
fn select_user(conn: &Connection) -> Result<Vec<Person>> {
    let mut stmt = conn.prepare("SELECT id, name, data FROM person")?;
    let person_iter = stmt.query_map([], |row| {
        Ok(Person {
            id: row.get(0)?,
            name: row.get(1)?,
            data: row.get(2)?,
        })
    })?;

    // Collect the results into a Vec<Person>
    let mut result = Vec::new();
    for person in person_iter {
        result.push(person?);
    }
    Ok(result)
}
