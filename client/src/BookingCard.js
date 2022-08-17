import { deleteBooking, updateBooking } from "./BookingService";

const BookingCard = ({booking, removeBooking, changeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const toggleCheckIn = () => {
        updateBooking(booking).then(() => {
            changeBooking();
        })
    }

    return (
        <>
            <div class="Booking">
                <h1>{booking.guest_name}</h1>
                <p>{booking.guest_email}</p>
                <hr></hr>
                {booking.checked_in
                ? <button onClick={toggleCheckIn} value={!booking.checked_in}>Checked in</button>
                : <button onClick={toggleCheckIn} value={!booking.checked_in}>Checked out</button>
                }
                <button onClick={handleDelete}> 🗑  </button>
            </div>
        </>
    )
}

export default BookingCard