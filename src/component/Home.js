import React from "react";

function Home() {
  const service = [
    {
      id: 1,
      service_name: "Spa",
      cost: 1350000,
      img: "https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      service_name: "Salon",
      cost: 1150000,
      img: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      service_name: "Gym",
      cost: 750000,
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      service_name: "Nail",
      cost: 870000,
      img: "https://images.pexels.com/photos/1138149/pexels-photo-1138149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      service_name: "Makeup",
      cost: 1500000,
      img: "https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      service_name: "Mi",
      cost: 2200000,
      img: "https://images.pexels.com/photos/7755531/pexels-photo-7755531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-bg">
          <div className="home-display"></div>
          <div className="home-items">
            <p>Dịch vụ của chúng tôi</p>
            <div>
              {service?.map((data) => {
                return (
                  <div className="home-item" key={data.id}>
                    <img src={data.img} alt="" />
                    <div className="home-item-text">
                      <p>{data.service_name}</p>
                      {/* <span>
                        Giá tiền:{" "}
                        {data.cost?.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span> */}
                      <div className="booking">
                        <span>Đặt lịch ngay</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
