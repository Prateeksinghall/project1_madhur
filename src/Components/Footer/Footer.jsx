import React from 'react';
import NaataFooter from '../../assets/images/NaataFooter.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import NetBanking from '../../assets/images/netBankingFooter.png'
import Rupay from '../../assets/images/rupayFooter.png'
import MasterCard from '../../assets/images/mastercardFooter.png'
import VisaCard from '../../assets/images/visaFooter.png'
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__up'>
                <div className='footer__left'>
                    <img src={NaataFooter} alt="Naata Logo" />
                    <ul className='footer__socials'>
                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaWhatsapp /></li>
                        <li><FaYoutube /></li>
                        <li><FaXTwitter /></li>
                    </ul>
                </div>
                <div className='footer__middle'>
                    <div className='our_company'>
                        <div className='our_company1'>
                            <h4>OUR COMPANY</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Photo Gallery</li>
                                <li>Testimonial</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='our_company2'>
                            <h4>OUR COMPANY</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Photo Gallery</li>
                                <li>Testimonial</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__payments'>
                        <img src={NetBanking} alt="" />
                        <img src={Rupay} alt="" />
                        <img src={MasterCard} alt="" />
                        <img src={VisaCard} alt="" />
                    </div>
                </div>
                <div className='footer_right'>
                    <div>
                        <h4>CUSTOMER SERVICE</h4>
                        <ul>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Shipping Policy</li>
                            <li>Exchange Policy</li>
                            <li>Cancellation Policy</li>
                            <li>Track Order</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer__down'>
                <h5>CopyRight</h5>
                <h5>CopyRight</h5>
            </div>
        </footer>
    );
}

export default Footer;
