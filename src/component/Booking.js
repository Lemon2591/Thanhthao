import { Form, Modal, Steps, message } from "antd";
import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import PaymentMethod from "./PaymentMethod";
import VerifyTransaction from "./VerifyTransaction";
import http from "../apiClient";

const opts = [
  {
    label: "Huyền Anh",
    value: "Huyền Anh",
  },
  {
    label: "Thanh Hằng",
    value: "Thanh Hằng",
  },
  {
    label: "Hồng Nhung",
    value: "Hồng Nhung",
  },
  {
    label: "Lan Hương",
    value: "Lan Hương",
  },
  {
    label: "Hiền Nhi",
    value: "Hiền Nhi",
  },
  {
    label: "Xuân Hoa",
    value: "Xuân Hoa",
  },
];

const timeRange = [
  {
    label: "8H-10H",
    value: "8H-10H",
  },
  {
    label: "10H-12H",
    value: "10H-12H",
  },
  {
    label: "14H-16H",
    value: "14H-16H",
  },
  {
    label: "16H-18H",
    value: "16H-18H",
  },
  {
    label: "20H-22H",
    value: "20H-22H",
  },
];

const Booking = ({ title, onClose, userInfo, service }) => {
  const [form] = Form.useForm();
  const [currentState, setCurrentState] = useState(0);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    form.setFieldsValue({
      service: service?.service_name,
      fullname: userInfo?.fullName,
      email: userInfo?.mail,
      phoneNumber: userInfo?.phoneNumber,
      address: userInfo?.location,
    });
  }, [form, userInfo, service]);
  const handleFinishFillUserInfo = async (values) => {
    const value = await form.validateFields();
    setInfo(value);
    setCurrentState(1);
  };

  const handleVerifyPayment = async () => {
    const accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));

    const payload = {
      code: "BHNT",
      cost: service?.cost,
      dateOfBirth: "02-03-2023",
      dentification: "033201003901",
      duration: 1,
      email: "cnnhok6262@gmail.com",
      expirationDate: "01-03-2024",
      fullName: "Quách Tuấn Anh",
      idUser: accessTokenObj?.id,
      insuranceCode: "HS2840798920466",
      phoneNumber: "0868158218",
      registrationDate: "01-03-2023",
      sex: "Nam",
    };
    try {
      const response = await http.post("/payment/data/medical/bh", payload, {
        headers: {
          token: `Bearer ${accessTokenObj?.accessToken}`,
        },
      });
      message.success(response.data?.message);
      const value = {
        ...info,
        service: service?.service_name,
        cost: service?.cost,
      };
      const bookingList = JSON.parse(localStorage.getItem("booking-list"));
      bookingList?.push(value);
      localStorage.setItem("booking-list", JSON.stringify(bookingList));
    } catch (error) {
      message.error(error.response.data?.message);
    }
    onClose();
  };
  const steps = [
    {
      title: "Điền thông tin",
      key: 1,
      content: (
        <BookingForm
          employeeOpts={opts}
          form={form}
          service={service}
          timeRange={timeRange}
          handleFinish={handleFinishFillUserInfo}
          handleClose={() => onClose()}
        />
      ),
    },
    {
      title: "Chọn phương thức thanh toán",
      key: 2,
      content: (
        <PaymentMethod
          goBack={() => setCurrentState(0)}
          handleSelectPayment={() => setCurrentState(2)}
        />
      ),
    },
    {
      title: "Xác nhận",
      key: 3,
      content: (
        <VerifyTransaction
          goBack={() => setCurrentState(1)}
          handleVerify={handleVerifyPayment}
          service={service}
          info={info}
        />
      ),
    },
  ];
  return (
    <Modal
      title={<h2 className="text-center">{title}</h2>}
      open
      width={"50%"}
      onCancel={onClose}
      onOk={() => {}}
      destroyOnClose
      footer={null}
    >
      <Steps current={currentState} items={steps} />
      {steps[currentState].content}
    </Modal>
  );
};

export default Booking;
