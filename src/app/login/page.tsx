"use client";
import { loginApi } from "@/services/auth.service";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const LoginScreen = () => {
	const router = useRouter();

	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async () => {
		if (!formValues.email || !formValues.password) {
			return toast.warning("Vui lòng nhập đầy đủ email, password!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}

		try {
			setLoading(true);
			let response = await loginApi(formValues);
			if (response && response?.data) {
				localStorage.setItem("token", response?.data?.data?.token);
				localStorage.setItem(
					"user",
					JSON.stringify(response?.data?.data?.user)
				);

				toast.success("Bạn đã đăng nhập thành công!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					onClose: () => {
						router.push("/");
					},
				});
				setTimeout(() => {
					return setLoading(false);
				}, 5000);
			}
		} catch (error) {
			return toast.error("Sai email hoặc mật khẩu!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<div id="page-content" className="mt-5 pt-5 container">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div id="page-content" className="page-content">
				<ToastContainer
					className="toast-container"
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<div className="page-wrapper container row mt-5 pt-5 mx-0">
					<div className="banner col container">
						<h1 className="banner__title">Data verification</h1>
						<p className="banner__description mb-0">
							All document are provide and upload file and data are send to
							website
						</p>
						<img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="/>
					</div>
					<div className="login-form col container">
						<div className="login-form-title">
							<h1 className="login-form-title__text">Login to Website</h1>
							<p className="login-form-title__description mb-5">
								Enter your login details to get sign in to your account
							</p>
						</div>
						<div className="login-form-group mb-4">
							<div className="form-group mb-3">
								<label className="form-group__label fw-bold mb-2">
									Email or mobile number
								</label>
								<input
									type="email"
									className="form-group__input rounded"
									placeholder="Enter email or mobile number"
									value={formValues.email}
									onChange={(e) =>
										setFormValues({
											...formValues,
											email: e.target.value,
										})
									}
								/>
							</div>
							<div className="form-group mb-3">
								<label className="form-group__label fw-bold mb-1">
									Password
								</label>
								<input
									type="password"
									className="form-group__input rounded"
									placeholder="Enter password"
									value={formValues.password}
									onChange={(e) =>
										setFormValues({
											...formValues,
											password: e.target.value,
										})
									}
								/>
							</div>
							<div className="form-group d-flex flex-row justify-content-between mb-3">
								<div className="form-group__checkbox">
									<input
										type="checkbox"
										className="form-group__checkbox-input"
									/>{" "}
									<span className="form-group__checkbox-label">
										Remember me
									</span>
								</div>
								<label className="form-group__forgot-password">
									Forget password?
								</label>
							</div>
							<div className="row">
								<div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
									<input
										onClick={handleSubmit}
										className="btn p-2 border login-form-group__submit btn-primary text-white w-100"
										value="Sign In"
										disabled={
											(formValues.email && formValues.password) || loading
												? false
												: true
										}
									/>
									{error && (
										<p className="text-danger login-form-group__error">
											{error}
										</p>
									)}
								</div>
							</div>
						</div>
						<div className="d-flex login-form__separator d-flex flex-row justify-content-between gap-2 align-item-center mb-4">
							<hr className="login-form__separator-line w-50" />
							<label className="login-form__separator-label text-secondary">
								or
							</label>
							<hr className="login-form__separator-line w-50" />
						</div>
						<div className="login-social-network d-flex flex-row justify-content-between gap-4 mb-4">
							<button className="login-social-network__button w-50 rounded p-2 my-auto d-flex align-items-center gap-2 justify-content-center">
								<img
									src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
									style={{ width: "10%" }}
								/>
								<label>Google</label>
							</button>
							<button className="login-social-network__button w-50 rounded p-2 my-auto d-flex align-items-center gap-2 justify-content-center">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
									style={{ width: "10%" }}
								/>
								<label>Facebook</label>
							</button>
						</div>
						<p className="sign-up-wrapper text-center mb-3">
							Don't you have an account?{" "}
							<Link
								href="/sign-up"
								className="sign-up-link text-decoration-none fw-bold"
							>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
