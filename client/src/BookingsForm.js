import { useState } from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        guest_name: "",
        guest_email: "",
        checked_in: false
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
         .then((data) => {
            addBooking(data);
         })
        setFormData({
            guest_name: "",
            guest_email: "",
            checked_in: false
        });
    }

    return (
        <div class="Booking-form">
            <form onSubmit={onSubmit} id="bookings-form">
                <h3>Add a Booking</h3>
                <div>
                    <label htmlFor="guest_name">Guest Name</label>
                    <input onChange={onChange}
                    type="text"
                    name="guest_name"
                    id="guest_name"
                    value={formData.guest_name}
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="guest_email">Guest Email</label>
                    <input onChange={onChange}
                    type="text"
                    name="guest_email"
                    id="guest_email"
                    value={formData.guest_email}
                    required>
                    </input>
                </div>
                <input type="submit" value="Save" id="save"/>
            </form>
        </div>
    );
}

export default BookingsForm;