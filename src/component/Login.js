import React from "react";
import background from "../assets/img/bg.jpeg";
import { NavLink } from "react-router-dom";

function Login() {
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
              <p>Đăng nhập</p>
              <div className="input">
                <label htmlFor="">Tên tài khoản</label>
                <input placeholder="Nhập tài khoản..." />
              </div>
              <div className="input">
                <label htmlFor="">Mật khẩu</label>
                <input placeholder="Nhập mật khẩu..." />
              </div>

              <div className="input" style={{ textAlign: "center" }}>
                <button className="btn">Đăng nhập</button>
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
                  Bạn chưa có tài khoản ? &nbsp;
                </p>
                <NavLink className="login-rg" to="/register">
                  Đăng ký ngay.
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
