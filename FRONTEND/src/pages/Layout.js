import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="https://i.pinimg.com/736x/9c/08/1f/9c081f369fdaea0ae2e8947a28dbdcab.jpg"
                            alt="Starbucks Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Starbucks
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="./Home" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./GetAllOrders" className="nav-link">All Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./AddOrder" className="nav-link">Add Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./Profile" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div
                className="container-fluid bg-dark text-light"
                style={{
                    minHeight: '100vh',
                    backgroundImage: "url('https://media.licdn.com/dms/image/D4E12AQFVhFxv4gz9CA/article-cover_image-shrink_720_1280/0/1695989234543?e=2147483647&v=beta&t=jcHMyJbRxgRg-A9G0_FVlHbG_9bLT0dlrFvrbevOHtk')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                    <Outlet />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ zIndex: 0 }}>
                    <h1 className="display-4 font-weight-bold text-shadow">Welcome to Starbucks</h1>
                    <p className="lead text-shadow">Experience the rich aroma of our finest coffee.</p>
                </div>
            </div>

            <style jsx>{`
                .text-shadow {
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                }
            `}</style>
        </>
    );
}

export default Layout;
