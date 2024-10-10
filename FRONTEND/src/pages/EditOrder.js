import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditOrder = () => {
    const [data, setData] = useState({
        CustomerId: '',
        CustomerName: '',
        OrderName: '',
        OrderType: '',
        Price: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3010/Customers/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching order details:", error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3010/Customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => navigate("/GetAllOrders"))
            .catch((error) => console.error("Error updating order:", error));
    };

    return (
        <>
        <div className="container mt-5">
            <h2 className="text-center text-light mb-4">Edit Order</h2>
            <div className="card text-white bg-dark mb-4">
                <div className="card-body">
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label">Customer ID</label>
                            <input
                                type="text"
                                value={data.CustomerId}
                                onChange={(e) => setData({ ...data, CustomerId: parseInt(e.target.value) })}
                                className="form-control"
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Customer Name</label>
                            <input
                                type="text"
                                value={data.CustomerName}
                                onChange={(e) => setData({ ...data, CustomerName: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order Name</label>
                            <input
                                type="text"
                                value={data.OrderName}
                                onChange={(e) => setData({ ...data, OrderName: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Order Type</label>
                            <input
                                type="text"
                                value={data.OrderType}
                                onChange={(e) => setData({ ...data, OrderType: e.target.value })}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="text"
                                value={data.Price}
                                onChange={(e) => setData({ ...data, Price: parseFloat(e.target.value) })}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Update</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default EditOrder;
