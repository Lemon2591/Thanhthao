import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../apiClient";
import { Button, Popover } from "antd";
import Booking from "./Booking";
import BookingList from "./BookingList";
import UserInfo from "./UserInfo";
import { Spin, message } from "antd";

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

function Home() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [showBookingList, setShowBookingList] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState({
    isOpen: false,
    service: "",
    title: "",
  });
  const accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    const fetchInfo = async () => {
      if (!accessTokenObj) navigate("/");
      const { data } = await http.post("/user/data/patient/v2", {
        idAccount: accessTokenObj?.id,
      });
      setUserInfo(data?.result);
    };
    fetchInfo();
  }, [navigate]);
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-bg">
          <div className="home-display">
            {accessTokenObj && (
              <div className="text-right mr-10 flex justify-end p-4">
                <span className="font-medium text-2xl mr-3">Xin ch??o :</span>
                <Popover
                  placement="topRight"
                  content={
                    <div className="flex flex-col gap-y-3">
                      <Button
                        onClick={() => {
                          setShowBookingList(false);
                          setShowUserInfo(false);
                        }}
                      >
                        Xem c??c d???ch v???
                      </Button>
                      <Button
                        onClick={() => {
                          setShowBookingList(false);
                          setShowUserInfo(true);
                        }}
                      >
                        Xem th??ng tin
                      </Button>
                      <Button
                        onClick={() => {
                          setShowBookingList(true);
                          setShowUserInfo(false);
                        }}
                      >
                        Xem c??c l???ch ???? ?????t
                      </Button>
                      <Button
                        onClick={() => {
                          localStorage.removeItem("userInfo");
                          navigate("/");
                        }}
                      >
                        ????ng xu???t
                      </Button>
                    </div>
                  }
                  trigger="click"
                >
                  <h1 className="font-semibold text-3xl hover:underline cursor-pointer">
                    {userInfo?.fullName
                      ? userInfo?.fullName
                      : accessTokenObj.userName}
                  </h1>
                </Popover>
              </div>
            )}
          </div>
          <div className="home-items">
            {showBookingList ? (
              <BookingList />
            ) : showUserInfo ? (
              <UserInfo info={userInfo} />
            ) : (
              <>
                <p>D???ch v??? c???a ch??ng t??i</p>
                <div>
                  {service?.map((data) => {
                    return (
                      <div className="home-item" key={data.id}>
                        <img src={data.img} alt="" />
                        <div className="home-item-text">
                          <p>{data.service_name}</p>
                          {/* <span>
                        Gi?? ti???n:{" "}
                        {data.cost?.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span> */}
                          <div className="booking">
                            <span
                              onClick={() => {
                                const dataBooking = JSON.parse(
                                  localStorage.getItem("booking-list")
                                );
                                if (
                                  dataBooking === null ||
                                  !dataBooking ||
                                  dataBooking.length < 6
                                ) {
                                  setShowBookingForm({
                                    isOpen: true,
                                    service: data,
                                    title:
                                      "?????t l???ch " +
                                      data?.service_name +
                                      " ngay",
                                  });
                                } else {
                                  if (dataBooking.length >= 6) {
                                    message.error(
                                      "B???n kh??ng ???????c ?????t qu?? 6 l???ch trong m???t ng??y !"
                                    );
                                  }
                                }
                              }}
                            >
                              ?????t l???ch ngay
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showBookingForm.isOpen && (
        <Booking
          title={showBookingForm.title}
          onClose={() => {
            setShowBookingForm({
              isOpen: false,
              title: "",
            });
          }}
          service={showBookingForm.service}
          userInfo={userInfo}
        />
      )}
    </div>
  );
}

export default Home;
