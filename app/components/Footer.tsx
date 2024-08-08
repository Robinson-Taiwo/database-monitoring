import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer className="footer pb-[]  text-white bg-[#7141F8] p-10">
      <nav>
        <Image src={logo} alt="footer-logo" />
      </nav>
      <nav>
        <h6 className="footer-title"> Support</h6>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">How Telex Works</a>
        <a className="link link-hover">Waiting list</a>
        <a className="link link-hover">Pricing Experience</a>
        <a className="link link-hover">Contact us</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms of use</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Sign Up for Newsletter</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary bg-[#7141F8] join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
