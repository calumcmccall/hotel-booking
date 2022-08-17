import { useState, useEffect } from "react";
import './App.css';
import BookingGrid from "./BookingGrid";
import { getBookings } from "./BookingService";
import BookingsForm from "./BookingsForm";


function App() {

  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect(() => {
    getBookings()
     .then((allBookings) => {
      setHotelBookings(allBookings);
     })
  }, [])

  const addBooking = (booking) => {
    const tempBookings = hotelBookings.map(b => b);
    tempBookings.push(booking);
    setHotelBookings(tempBookings);
  }

  const removeBooking = (id) => {
    const tempBookings = hotelBookings.map(b => b);
    const indexToDelete = tempBookings.map(b => b._id).indexOf(id);
    tempBookings.splice(indexToDelete, 1);
    setHotelBookings(tempBookings);
  }

  const changeBooking = () => {
    getBookings().then((allBookings) => {
      setHotelBookings(allBookings)
    })
  }

  return (
    <>
      <div class="Look-nice">
        <div class="Heading">
          <div>
          <img class="Cute" src="https://avatars.githubusercontent.com/u/12415524?s=96&v=4"/>
          </div>
          <h1 class="Heading">Hotel Bookings</h1>
        </div>
        <BookingsForm addBooking={addBooking} />
        <BookingGrid bookings={hotelBookings} removeBooking={removeBooking} changeBooking={changeBooking} />
      </div>
    </>
  );
}

export default App;
