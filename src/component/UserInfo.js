import { Button, Input, message } from "antd";
import http from "../apiClient";
import React, { useEffect, useState } from "react";

const UserInfo = ({ info }) => {
  const [money, setMoney] = useState(0);
  const [code, setCode] = useState("");
  const [currentMoney, setCurrentMoney] = useState(0);
  useEffect(() => {
    fetchMoney();
  }, []);

  const fetchMoney = async () => {
    const accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await http.post(
      "/payment/patient/money/get",
      {
        id_user: accessTokenObj?.id,
      },
      {
        headers: {
          token: `Bearer ${accessTokenObj?.accessToken}`,
        },
      }
    );
    setCurrentMoney(data?.data?.money);
  };

  const handleSaveMoney = async (e) => {
    const accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      dataCard: {
        optionWalet: "Vietcombank",
        payNumber: money,
        codePay: code,
      },
      id_user: accessTokenObj?.id,
    };
    const response = await http.post("/payment/patient/money", payload, {
      headers: {
        token: `Bearer ${accessTokenObj?.accessToken}`,
      },
    });
    message.success(response.data?.message);
    fetchMoney();
  };
  return (
    <div className="flex flex-col">
      <h1
        style={{
          fontSize: "32px",
          maxWidth: "max-content",
          fontWeight: "bold",
        }}
        className="py-16"
      >
        Thông tin tài khoản
      </h1>
      <div className="flex flex-col gap-y-5">
        <div className="flex">
          <p style={{ fontSize: "16px" }} className="font-semibold">
            Tên khách hàng :{" "}
          </p>
          <p style={{ fontSize: "16px" }} className="text-base">
            {info?.fullName}
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
            {info?.mail}
          </p>
        </div>
        <div className="flex">
          <p style={{ fontSize: "16px" }} className="font-semibold">
            Địa chỉ :{" "}
          </p>
          <p style={{ fontSize: "16px" }} className="text-base">
            {info?.location}
          </p>
        </div>
        <div className="flex">
          <p style={{ fontSize: "16px" }} className="font-semibold">
            Số tiền còn lại :
          </p>
          <p style={{ fontSize: "16px" }} className="text-base">
            {currentMoney} VND
          </p>
        </div>
      </div>
      <div>
        <div className="flex mt-10 gap-x-3">
          <p style={{ fontSize: "16px" }} className="font-semibold">
            Nhập mã
          </p>
          <Input
            placeholder="Nhập mã"
            className="w-96 h-16"
            onChange={(e) => setCode(e.target.value)}
          />
          <p style={{ fontSize: "16px" }} className="font-semibold">
            Nhập tiền
          </p>
          <Input
            placeholder="Nhập tiền"
            className="w-96 h-16"
            onChange={(e) => setMoney(e.target.value)}
          />
          <Button onClick={handleSaveMoney} type="default" className="h-16">
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
