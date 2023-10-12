fn main() {
    // Create Demo User
    let me = Person {
        id: 0,
        name: "Steven".to_string(),
        data: None,
    };

    // Database Testing
    let conn = create_db().unwrap(); // Create a demo database in memory
    if !check_if_table_exist(&conn, "user") {
        create_user_table(&conn).unwrap(); // Create demo table in the demo database
    }

    // Create a new user
    create_user(&conn, &me).unwrap(); // Create a demo user in the database

    // Retrieve demo user from the database
    for user in select_user(&conn).unwrap() {
        println!("Found person {:?}", user);
    }
}
