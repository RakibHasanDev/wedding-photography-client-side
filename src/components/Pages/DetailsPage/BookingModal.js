import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ service, setBook }) => {
    const {name, price,_id} = service
    const { user } = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productId: _id,
            ProductTitle: name,
            price: price,
            userName,
            email,
            phone,
            location

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                   setBook(null)
                    toast.success('Booking Confirmed');
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }

            })
        
    }
    return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={submitHandler} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={`Price: $ ${price}`} className="input w-full input-bordered" dis />

                        <input name='userName' defaultValue={user?.displayName} disabled type="text" placeholder="Your name" className="input w-full  input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full  input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full  input-bordered" required />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full  input-bordered" required /> <br />
                        <input disabled={user === null} type="submit" value="submit" className="input w-full  input-bordered btn bg-gradient-to-r from-purple-400 to-sky-500 text-white" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;