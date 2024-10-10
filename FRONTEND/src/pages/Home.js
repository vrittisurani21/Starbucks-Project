import React from 'react';

const Home = () => {
  return (
    <>
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-light">
      <div className="text-center">
        <h1 className="p-3 border rounded">Welcome To Starbucks!</h1>
        <p className="mt-4">Your favorite coffee shop awaits you. Enjoy our delicious beverages and treats!</p>
      </div>
      <div className="mt-4">
        <img 
          src="https://assets3.thrillist.com/v1/image/3134281/1200x600/scale;;webp=auto;jpeg_quality=85.jpg" 
          alt="Coffee" 
          className="img-fluid rounded" 
          style={{ maxWidth: '300px' }} 
        />
        <img 
          src="https://ca-times.brightspotcdn.com/dims4/default/51b07ed/2147483647/strip/true/crop/5855x3903+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdb%2F14%2Fc0d7f7ee6014b74de29b3e86e4e6%2Fce1d9fd11ff5439d985d7bccd7e6fe44" 
          alt="Coffee Beans" 
          className="img-fluid rounded ml-3" 
          style={{ maxWidth: '300px' }} 
        />
        <img 
          src="https://economymiddleeast.com/cdn-cgi/imagedelivery/Xfg_b7GtigYi5mxeAzkt9w/economymiddleeast.com/2022/02/shutterstock_1072863746-e1645185409628.jpg/w=900,h=600" 
          alt="Assorted Beverages" 
          className="img-fluid rounded ml-3" 
          style={{ maxWidth: '300px' }} 
        />
      </div>
    </div>
    </>
  );
}

export default Home;
