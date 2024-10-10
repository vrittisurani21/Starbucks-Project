import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GetOrderById = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3010/Customers/' + id)
            .then((res) => res.json())
            .then((res) => setDetail(res))
            .catch((error) => console.error("Error fetching order details:", error));
    }, [id]);

    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center text-light mb-4">Order Details</h1>
            <div className="card text-white bg-dark mb-4">
                <div className="card-body">
                    <h5 className="card-title">Order Information</h5>
                    <p><strong>Customer ID:</strong> {detail.CustomerId}</p>
                    <p><strong>Customer Name:</strong> {detail.CustomerName}</p>
                    <p><strong>Order Name:</strong> {detail.OrderName}</p>
                    <p><strong>Order Type:</strong> {detail.OrderType}</p>
                    <p><strong>Price:</strong> ${detail.Price ? detail.Price.toFixed(2) : 'N/A'}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-warning me-2" onClick={() => navigate('/EditOrder/' + id)}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => {
                    fetch('http://localhost:3010/Customers/' + id, { method: "DELETE" })
                        .then(() => navigate("/GetAllOrders"))
                        .catch((error) => console.error("Error deleting order:", error));
                }}>
                    Delete
                </button>
            </div>
        </div>
        </>
    );
};

export default GetOrderById;
