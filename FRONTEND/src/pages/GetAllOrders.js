import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetAllOrders = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3010/Customers')
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching orders:", error));
    }, []);

    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center text-light mb-4">Orders Here!</h1>
            <div className="row">
                {data.map((customer) => (
                    <div className="col-md-4 mb-4" key={customer.CustomerId}>
                        <div className="card text-white bg-dark shadow">
                            <div className="card-body">
                                <h5 className="card-title">Customer ID: {customer.CustomerId}</h5>
                                <p className="card-text"><strong>Name:</strong> {customer.CustomerName}</p>
                                <p className="card-text"><strong>Order Name:</strong> {customer.OrderName}</p>
                                <p className="card-text"><strong>Order Type:</strong> {customer.OrderType}</p>
                                <p className="card-text"><strong>Price:</strong> ${customer.Price.toFixed(2)}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate('/Customers/' + customer.CustomerId)}
                                >
                                    View Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default GetAllOrders;
