import '@/common/styles/style.css';
import Link from "next/link";

const HeaderScreen = () => {
	return (
		<div className="pageWrapper">
			<div className="top-header bg-white">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-sm-8 col-md-5 col-lg-4">
							<p className="phone-no text-black">
								<i className="anm anm-phone-s"></i> TOTODAY RE-BRANDING OPENING | TOTOSHOP 1/6/2022
							</p>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4 d-md-block d-lg-block text-center">
							
						</div>
						<div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right hidden-md-down">
							<span className="user-menu d-block d-lg-none">
								<i className="anm anm-user-al" aria-hidden="true"></i>
							</span>
							<ul className="customer-links list-inline">
								<li>
									<Link href="/login" className="text-black">Login</Link>
								</li>
								<li>
									<Link href="/register" className="text-black">Create Account</Link>
								</li>
								<li>
									<Link href="/" className="text-black">Language</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-wrap classicHeader animated d-flex bg-black">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="logo col-md-2 col-lg-2 d-none d-lg-block">
							<a href="index.html">
								<img
									src="https://pos.nvncdn.net/d0f3ca-7136/store/20230906_9BHMhQjv.png"
									alt="Logo"
									title="Logo"
									style={{ width: "25%" }}
								/>
							</a>
						</div>
						<div className="col-2 col-sm-3 col-md-3 col-lg-8">
							<div className="d-block d-lg-none">
								<button
									type="button"
									className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
								>
									<i className="icon anm anm-times-l"></i>
									<i className="anm anm-bars-r"></i>
								</button>
							</div>
							<nav className="grid__item" id="AccessibleNav">
								<ul id="siteNav" className="site-nav medium center hidearrow">
									<li className="lvl1 parent megamenu">
										<a href="/" className="text-white fw-normal">
											Trang chủ <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1 parent dropdown">
										<a href="#" className="text-white fw-normal">
											Sản phẩm <i className="anm anm-angle-down-l"></i>
										</a>
										<ul className="dropdown">
											<li>
												<a className="site-nav">
													Shirt  <span className="lbl nm_label1">New</span>{" "}
												</a>
												<ul className="dropdown">
													<li>
														<a href="/shirt" className="site-nav">
														Shirt 
														</a>
													</li>
													<li>
														<a href="/t-shirt" className="site-nav">
														T-Shirt
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="compare-variant1.html" className="site-nav">
													Trousers
													<i className="anm anm-angle-right-l"></i>
												</a>
											</li>
											<li>
												<a href="checkout.html" className="site-nav">
													Dress
												</a>
											</li>
											<li>
												<a href="faqs.html" className="site-nav">
													Shoes
												</a>
											</li>
											<li>
												<a href="faqs.html" className="site-nav">
													Hats
												</a>
											</li>
										</ul>
									</li>
									<li className="lvl1 parent dropdown">
										<a href="/collection" className="text-white fw-normal">
											Bộ sưu tập <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1">
										<a href="/about" className="text-white fw-normal">
											Về chúng tôi <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1">
										<a href="/contact" className="text-white fw-normal">
											Liên hệ <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1 parent megamenu">
										<a href="/faqs" className="text-white">
											FAQs <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-4 col-sm-3 col-md-3 col-lg-2">
							<div className="site-cart d-flex align-items-center gap-2 pe-4">
								<a href="/cart" className="site-header__profile site-cart d-flex align-items-center" title="Cart">
									<i className="icon anm anm-bag-l"></i>
										<img src="https://web.nvnstatic.net/tp/T0441/img/hd-cart.png?v=3" id="CartCount"/>
										{/* <span
										id="CartCount"
										className="site-header__cart-count"
										data-cart-render="item_count"
									>
										2
									</span> */}
								</a>
								<a href="/profile" className="site-header__profile site-cart d-flex align-items-center" title="Profile">
									<i className="icon anm anm-bag-l"></i>
										<img src="https://web.nvnstatic.net/tp/T0441/img/hd-user.png?v=3" id="Profile"/>
								</a>
							</div>
							<div className="site-header__search">
								<button type="button" className="search-trigger">
									<i className="icon anm anm-search-l"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderScreen;
