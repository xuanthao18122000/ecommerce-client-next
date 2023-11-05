"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {};

  const handleChangeRadio = async () => {};

  return (
    <div id="page-content" className="container mt-5 pt-5">
      <div className=" d-flex justify-content-between align-items-center mb-3">
        <label className="fs-2 fw-bold">ĐẶT HÀNG</label>
        <p>
          Bạn đã có tài khoản? <a href="" className="text-danger">Đăng nhập ngay</a>
        </p>
		<label></label>
      </div>

      <div className="row">
        <div className="col-lg-8 col-12 border rounded p-3 mb-3">
          <div className="mb-4">
            <p className="fs-4 fw-bolder">Thông tin nhận hàng</p>
            <div className="mb-2">
              <label className="mb-1">Họ tên</label>
              <input className="rounded" type="text" placeholder="Họ tên" />
            </div>
            <div className="d-flex justify-content-between gap-2 mb-2">
              <div className="w-50">
                <label>Số điện thoại</label>
                <input
                  className="rounded"
                  type="text"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="w-50">
                <label>Email</label>
                <input className="rounded" type="text" placeholder="Email" />
              </div>
            </div>
            <div className="mb-2">
              <label>Địa chỉ nhận hàng</label>
              <input
                className="rounded"
                type="text"
                placeholder="Địa chỉ nhận hàng"
              />
            </div>
            <div className="mb-2">
              <div className="mb-2">
                <label>Tỉnh / Thành phố</label>
                <select name="provinces" id="provinces" className="rounded">
                  <option value="">Chọn Tỉnh / Thành phố</option>
                  <option value="volvo">Hồ Chí Minh</option>
                </select>
              </div>
              <div className="mb-2">
                <label>Quận / Huyện</label>
                <select name="provinces" id="provinces" className="rounded">
                  <option value="">Chọn Quận / Huyện</option>
                  <option value="volvo">Thủ Đức</option>
                </select>
              </div>
              <div>
                <label>Phường / Xã</label>
                <select name="provinces" id="provinces" className="rounded">
                  <option value="">Chọn Phường / Xã</option>
                  <option value="volvo">Linh Trung</option>
                </select>
              </div>
            </div>
            <div className="mb-2">
              <label>Ghi chú</label>
              <input className="rounded" type="text" placeholder="Ghi chú" />
            </div>
          </div>
          <div className="payment-methods">
            <p className="fs-4 fw-bold">Phương thức thanh toán</p>
            <div
              className="payment border d-flex gap-2 p-3 mb-2 rounded"
              onClick={handleChangeRadio}
            >
              <input name="payment" value="cash" type="radio" />
              <label className="payment-label">
                Thanh toán tiền mặt khi nhận hàng
              </label>
            </div>
            <div
              className="payment border d-flex gap-2 p-3 mb-2 rounded"
              onClick={handleChangeRadio}
            >
              <input name="payment" value="momo" type="radio" />
              <label className="payment-label">Thanh toán bằng ví MoMo</label>
            </div>
            <div
              className="payment border d-flex gap-2 p-3 mb-2 rounded"
              onClick={handleChangeRadio}
            >
              <input name="payment" value="banking" type="radio" />
              <label className="payment-label">
                Mobile banking của các ngân hàng qua VNPay Thẻ ATM
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between mb-3">
              <p className="fs-4 fw-bolder mb-0">Thông tin đơn hàng</p>
              <button className="">Sửa</button>
            </div>
            <p className="product-name border-bottom border-secondary pb-3">
              ÁO THUN M1ATN10301BOSBA - NV - L
            </p>
            <div className="open-modal cursor-pointer border-bottom border-secondary text-center mb-3">
              <img />
              <label className="mb-3 text-warning">Chọn hoặc nhập mã giảm giá</label>
            </div>
            <div className="border-bottom border-secondary mb-3">
              <div className="d-flex justify-content-between mb-1">
                <label>Tổng tiền hàng</label>
                <label>285,000đ</label>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <label>Phí vận chuyển</label>
                <label>0đ</label>
              </div>
            </div>
            <div className="border-bottom border-secondary pb-3 mb-3 d-flex justify-content-between">
              <label>Giảm giá</label>
              <label>0đ</label>
            </div>
            <div>
              <div className="d-flex justify-content-between">
                <label>Tạm tính</label>
                <label>285,000đ</label>
              </div>
              <p className="d-flex justify-content-end">
                (Đã bao gồm VAT nếu có)
              </p>
            </div>
          </div>
          <button className="w-100 p-2 rounded bg-success text-white">
            Hoàn tất
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
