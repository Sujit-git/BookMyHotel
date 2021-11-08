import React, { useEffect, useState } from "react"
import axios from "axios"
import Room from "../components/Room";
import Loader from "../components/Loader";

function Bookingscreen({ match }) {

    const [room, setRoom] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(async () => {

        try {
            setLoading(true)
            const data = (await axios.post("/api/rooms/getroombyid", { roomid: match.params.roomid })).data;

            setRoom(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }

    }, [])


    return (
        <div className="m-5">

            {loading ? (<Loader />) : error ? (<h1>Error...</h1>) : (<div>
                <div className="row justify-content-center mt-5 bs">
                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg" />
                    </div>
                    <div className="col-md-6" >
                        <div>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name : </p>
                                <p>From Date </p>
                                <p>To Date </p>
                                <p>Max count : {room.maxcount}</p>
                            </b>
                        </div>

                        <div>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total days : </p>
                                <p>Rent per day : {room.rentperday}</p>
                                <p>Total Amount</p>
                            </b>
                        </div>

                        <div style={{ float: "right" }}>
                            <button className="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>)}


        </div>
    )
}

export default Bookingscreen
