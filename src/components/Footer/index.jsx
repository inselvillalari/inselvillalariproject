/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Bize Ulaşın</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adres Bilgilerimiz</h6>
                    <p>Zakkum Sk Kalkan, Kaş, ANTALYA</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Bize Yazın</h6>
                    <p>info@inselvillalari.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Bizi Arayın</h6>
                    <p>+90 507 137 63 96</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <a>
                        <img src="/assets/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>

                  <div className="sm-post">
                    <Link href="/blog-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <a>
                        <img src="/assets/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Arch Template. Made with passion by
                  <Link href="#">ThemesCamp</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
