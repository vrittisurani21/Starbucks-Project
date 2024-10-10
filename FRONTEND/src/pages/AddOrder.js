import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
    const [data, setData] = useState({
        CustomerId: "",
        CustomerName: "",
        OrderName: "",
        OrderType: "",
        Price: ""
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const updatedData = {
            ...data,
            CustomerId: parseInt(data.CustomerId, 10),
            Price: parseFloat(data.Price)
        };

        fetch("http://localhost:3010/Customers", {
            method: "POST",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(() => {
            navigate('/GetAllOrders'); 
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
        <>
        <div className="container mt-5">
            <h2 className="text-center text-light mb-4">Add Order</h2>
            <div className="card bg-dark text-white shadow-lg">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Customer Id:</label>
                            <input
                                type="text"
                                className="form-control bg-secondary text-white"
                                onChange={(e) => setData({ ...data, CustomerId: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Customer Name:</label>
                            <input
                                type="text"
                                className="form-control bg-secondary text-white"
                                onChange={(e) => setData({ ...data, CustomerName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order Name:</label>
                            <input
                                type="text"
                                className="form-control bg-secondary text-white"
                                onChange={(e) => setData({ ...data, OrderName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order Type:</label>
                            <input
                                type="text"
                                className="form-control bg-secondary text-white"
                                onChange={(e) => setData({ ...data, OrderType: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price:</label>
                            <input
                                type="number"
                                className="form-control bg-secondary text-white"
                                onChange={(e) => setData({ ...data, Price: e.target.value })}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddOrder;
