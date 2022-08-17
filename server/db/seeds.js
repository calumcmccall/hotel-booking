use hotel;
db.dropDatabase();

db.bookings.insertMany([

    {
        guest_name: "Tim Man",
        guest_email: "time124@gmail.com",
        checked_in: false
    }, 
    {
        guest_name: "Pam Tam",
        guest_email: "flowergal49@gmail.com",
        checked_in: false
    }, 
    {
        guest_name: "Wendy Goode",
        guest_email: "sogoode@gmail.com",
        checked_in: false
    }

]);