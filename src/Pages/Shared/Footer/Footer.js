import React from 'react';

const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 bg-black text-white font-bold h-screen -mt-8">
            <div>
                <span className="footer-title text-2xl">About</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title text-2xl">Mobile</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title text-2xl">Web</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title text-2xl">Ecommerce</span>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Github</a>
            </div>
            <div>
                <span className="footer-title text-2xl" >AI & ML</span>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Enterprise</a>
                <a className="link link-hover">Security</a>
                <a className="link link-hover">Pricing</a>
            </div>
            <div>
                <span className="footer-title text-2xl">Iot</span>
                <a className="link link-hover">Mac</a>
                <a className="link link-hover">Windows</a>
                <a className="link link-hover">iPhone</a>
                <a className="link link-hover">Android</a>
            </div>
            <div>
                <span className="footer-title text-2xl">Help Us</span>
                <a className="link link-hover">Mac</a>
                <a className="link link-hover">Windows</a>
                <a className="link link-hover">iPhone</a>
                <a className="link link-hover">Android</a>
            </div>

            <div className="w-full ">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Subscribe to our newsletter</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Stay updated with latest technology trends and topics with us.</p>
                    <div className="flex flex-row">
                        <input className="w-3/5 p-3 rounded-l-lg sm:w-2/3" type="text" name="" id="" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-indigo-400 dark:text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;