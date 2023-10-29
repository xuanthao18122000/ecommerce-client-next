"use client";
import { loginApi } from "@/services/auth.service";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const LoginScreen = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async () => {

	};

	const handleChangeRadio= async () => {

	};

	return (
		<div id="page-content" className="container mt-5 pt-5">
			<div className=" d-flex justify-content-between align-item-center">
				<h1>ĐẶT HÀNG</h1>
				<p>Bạn đã có tài khoản? <a>Đăng nhập ngay</a></p>
			</div>

			<div className="row">
				<div className="col-8">
					<p>Thông tin nhận hàng</p>
					<div>
						<label>Họ tên</label>
						<input type="text" placeholder="Họ tên" />
					</div>
					<div className="d-flex">
						<div>
							<label>Số điện thoại</label>
							<input type="text" placeholder="Số điện thoại" />
						</div>
						<div>
							<label>Email</label>
							<input type="text" placeholder="Email" />
						</div>
					</div>
					<div>
						<label>Địa chỉ nhận hàng</label>
						<input type="text" placeholder="Địa chỉ nhận hàng" />
					</div>
					<div>
						<div>
							<label>Tỉnh / Thành phố</label>
							<select name="provinces" id="provinces">
								<option value="">Chọn Tỉnh / Thành phố</option>
								<option value="volvo">Hồ Chí Minh</option>
							</select>
						</div>
						<div>
							<label>Quận / Huyện</label>
							<select name="provinces" id="provinces">
								<option value="">Chọn Quận / Huyện</option>
								<option value="volvo">Thủ Đức</option>
							</select>
						</div>
						<div>
							<label>Phường / Xã</label>
							<select name="provinces" id="provinces">
								<option value="">Chọn Phường / Xã</option>
								<option value="volvo">Linh Trung</option>
							</select>
						</div>
					</div>
					<div>
						<label>Ghi chú</label>
						<input type="text" placeholder="Ghi chú" />
					</div>
					<div className="payment-methods">
            <p>Phương thức thanh toán</p>
            <div className="payment" onClick={handleChangeRadio}>
                <input name="payment" value="cash" type="radio" />
                <label className="payment-label">Thanh toán tiền mặt khi nhận hàng</label>
            </div>
            <div className="payment" onClick={handleChangeRadio}>
                <input name="payment" value="momo" type="radio" />
                <label className="payment-label">Thanh toán bằng ví MoMo</label>
            </div>
            <div className="payment" onClick={handleChangeRadio}>
                <input name="payment" value="banking" type="radio" />
                <label className="payment-label">Mobile banking của các ngân hàng qua VNPay Thẻ ATM</label>
            </div>
        </div>
				</div>
				<div className="col-4">
          <div>
            <div>
              <p>Thông tin đơn hàng</p>
              <button>Sửa</button>
            </div>
            <p className="product-name">ÁO THUN M1ATN10301BOSBA - NV - L</p>
            <div className="open-modal">
              <img/><label>Chọn hoặc nhập mã giảm giá</label>
            </div>
            <div>
              <div>
                <label>Tổng tiền hàng</label>
                <label>285,000đ</label>
              </div>
              <div>
                <label>Phí vận chuyển</label>
                <label>0đ</label>
              </div>
            </div>
            <div>
              <label>Giảm giá</label>
              <label>0đ</label>
            </div>
            <div>
              <div>
                <label>Tạm tính</label>
                <label>285,000đ</label>
              </div>
              <p>(Đã bao gồm VAT nếu có)</p>
            </div>
          </div>
          <button>Hoàn tất</button>
        </div>
			</div>
		</div>
	);
};

export default LoginScreen;
