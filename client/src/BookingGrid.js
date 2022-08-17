import BookingCard from "./BookingCard"

const BookingGrid = ({bookings, removeBooking, changeBooking}) => {
    const bookingsList = bookings.map((booking) => {
return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking} changeBooking={changeBooking} />
    })

    return (
        <>
        <div class="Booking-list">
            {bookingsList}
        </div>
        </>
    )
}

export default BookingGrid