const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then (res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateBooking = (payload) => {
    console.log(payload);
    const oppositeBool = !payload.checked_in;
    return fetch(baseURL + payload._id, {
        method: 'PUT',
        body: JSON.stringify({checked_in: oppositeBool}),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json)
}