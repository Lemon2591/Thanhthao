import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    setBookingList(JSON.parse(localStorage.getItem("booking-list")));
  }, []);
  return (
    <div className="flex justify-center px-5">
      <h1
        style={{
          fontSize: "32px",
          maxWidth: "max-content",
          fontWeight: "bold",
        }}
        className="py-16"
      >
        Các dịch vụ đã đặt
      </h1>
      <div className="">
        {bookingList.map((info, index) => (
          <div className="flex justify-start items-center gap-x-5 gap-y-2 flex-wrap">
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Tên dịch vụ :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.service}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Tên nhân viên :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.employee}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Thời gian :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.time}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                CSKH :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.area}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Tên khách hàng :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.fullname}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                SDT :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.phoneNumber}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Email :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.email}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Địa chỉ :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.address}
              </p>
            </div>
            <div className="flex">
              <p style={{ fontSize: "16px" }} className="font-semibold">
                Số tiền :{" "}
              </p>
              <p style={{ fontSize: "16px" }} className="text-base">
                {info?.cost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
