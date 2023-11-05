import "@/common/styles/style.css";
import Link from "next/link";

const HeaderScreen = () => {
  return (
    <div className="pageWrapper">
      <div className="top-header bg-white">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div className="">
              <p className="phone-no text-black">
                <i className="anm anm-phone-s"></i> TOTODAY RE-BRANDING OPENING
                | TOTOSHOP 1/6/2022
              </p>
            </div>
            <div className="">
              <span className="user-menu d-block d-lg-none">
                <i className="anm anm-user-al" aria-hidden="true"></i>
              </span>
              <div className="d-flex justify-content-between align-items-center gap-3">
                <Link
                  href="/"
                  className="text-black text-decoration-none border-right"
                >
                  1900 633 501
                </Link>{" "}
                |
                <Link href="/" className="text-black text-decoration-none">
                  {" "}
                  Hệ thống cửa hàng
                </Link>{" "}
                |
                <Link href="/" className="text-black text-decoration-none">
                  {" "}
                  Tra cứu đơn hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="header-wrap d-flex align-items-center justify-content-between bg-black h-100 px-5" style={{ minHeight: "60px" }}>
            <div className="row align-items-center mx-5">
              <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                <a href="index.html">
                  <img
                    src="https://pos.nvncdn.net/d0f3ca-7136/store/20230906_9BHMhQjv.png"
                    alt="Logo"
                    title="Logo"
                    style={{ width: "50%" }}
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
                <nav className="grid__item">
                  <ul className="list-unstyled d-flex gap-3 my-0">
                    <li className="lvl1 parent megamenu">
                      <a
                        href="/"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Trang chủ <i className="anm anm-angle-down-l"></i>
                      </a>
                    </li>
                    <li className="lvl1 parent dropdown">
                      <a
                        href="#"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Sản phẩm <i className="anm anm-angle-down-l"></i>
                      </a>
                      {/* <ul className="dropdown">
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
										</ul> */}
                    </li>
                    <li className="lvl1 parent dropdown">
                      <a
                        href="/collection"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Bộ sưu tập <i className="anm anm-angle-down-l"></i>
                      </a>
                    </li>
                    <li className="lvl1">
                      <a
                        href="/about"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Về chúng tôi <i className="anm anm-angle-down-l"></i>
                      </a>
                    </li>
                    <li className="lvl1">
                      <a
                        href="/contact"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Liên hệ <i className="anm anm-angle-down-l"></i>
                      </a>
                    </li>
                    <li className="lvl1 parent megamenu">
                      <a
                        href="/faqs"
                        className="text-white fw-normal text-decoration-none"
                      >
                        FAQs <i className="anm anm-angle-down-l"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
			<div className="col-4 col-sm-3 col-md-3 col-lg-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="search d-inline-block h-100">
                    <form action="/search">
                      <input
                        type="text"
                        name="q"
                        className="search-input"
                        placeholder="Tìm kiếm"
                        autoComplete="off"
                      />
                    </form>
                    <div className="searchFolding d-none">
                      <p>Tìm kiếm gần đây</p>
                      <div className="hot-search">
                        <img
                          src="https://web.nvnstatic.net/tp/T0441/img/hot-search.svg?v=3"
                          alt="Tìm kiếm"
                        />
                        <span>Tìm kiếm phổ biến</span>
                      </div>
                      <ul>
                        <li>
                          <a href="/ao-khoac-pc72908.html">ÁO KHOÁC</a>
                        </li>
                        <li>
                          <a href="/do-nam-pc72882.html">ĐỒ NAM</a>
                        </li>
                        <li>
                          <a href="/do-nu-pc72896.html">ĐỒ NỮ</a>
                        </li>
                        <li>
                          <a href="/unisex-pc72920.html">UNISEX</a>
                        </li>
                        <li>
                          <a href="/phu-kien-pc360511.html">PHỤ KIỆN</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="/cart"
                    className="site-header__profile d-flex align-items-center"
                    title="Cart"
                  >
                    <i className="icon anm anm-bag-l" />
                    <img
                      src="https://web.nvnstatic.net/tp/T0441/img/hd-cart.png?v=3"
                      id="CartCount"
                    />
                    {/* <span
										id="CartCount"
										className="site-header__cart-count"
										data-cart-render="item_count"
									>
										2
									</span> */}
                  </a>
                  <a
                    href="/profile"
                    className="site-header__profile d-flex align-items-center"
                    title="Profile"
                  >
                    <i className="icon anm anm-bag-l"></i>
                    <img
                      src="https://web.nvnstatic.net/tp/T0441/img/hd-user.png?v=3"
                      id="Profile"
                    />
                  </a>
                </div>
              </div>
          </div>
    </div>
  );
};

export default HeaderScreen;
