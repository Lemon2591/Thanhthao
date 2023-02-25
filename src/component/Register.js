import React from "react";
import background from "../assets/img/bg.jpeg";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="banner">
          <div className="img">
            <div className="bg-login"></div>
            <div className="form-login">
              <span
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "3.4rem",
                  margin: "4rem 0 2rem 0",
                }}
              >
                LATinterface
              </span>
              <span
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: "1.6rem",
                }}
              >
                Đặt lịch hẹn làm đẹp
              </span>
              <p>Đăng ký</p>
              <div className="input">
                <label htmlFor="">Tên tài khoản</label>
                <input placeholder="Nhập tài khoản..." />
              </div>
              <div className="input">
                <label htmlFor="">Mật khẩu</label>
                <input placeholder="Nhập mật khẩu..." />
              </div>

              <div className="input">
                <label htmlFor="">Nhập lại khẩu</label>
                <input placeholder="Nhập mật khẩu..." />
              </div>

              <div className="input">
                <label htmlFor="">Điền email</label>
                <input placeholder="Nhập email..." />
              </div>

              <div className="input" style={{ textAlign: "center" }}>
                <button className="btn">Đăng ký</button>
              </div>
              <div
                className="input"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    marginBottom: "2.5rem",
                    fontSize: "1.4rem",
                  }}
                >
                  Bạn đã có tài khoản ? &nbsp;
                </p>
                <NavLink className="login-rg" to="/">
                  Đăng nhập ngay.
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
