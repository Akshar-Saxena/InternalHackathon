// Footer.js

import React from "react";
import "react-icons";

const Footer = () => {
    return (
        <footer className="bg-[#FFA500] text-black p-8">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className="text-2xl text-black font-bold mb-4">
                            About Us
                        </h2>
                        <p className="text-sm text-justify">
                            Welcome to SchemeInsight, your trusted guide to
                            navigating and accessing a plethora of government
                            schemes and programs. We understand that government
                            initiatives can be diverse, and finding the right
                            support for your needs can sometimes be challenging.
                            That's where we come in. Our Mission: At
                            SchemeInsight, our mission is to empower
                            individuals, businesses, and communities by
                            providing a user-friendly platform that simplifies
                            the exploration and application of government
                            schemes. We believe that everyone should have easy
                            access to the support they need to thrive, and our
                            platform serves as the bridge between citizens and
                            the various opportunities made available by
                            government initiatives.
                        </p>
                    </div>
                    <div class="flex space-x-4 mb-4">
                        <a href="#" class="text-white hover:text-gray-400">
                            <i class="fab fa-facebook-square fa-lg"></i>
                        </a>
                        <a href="#" class="text-white hover:text-gray-400">
                            <i class="fab fa-twitter-square fa-lg"></i>
                        </a>
                        <a href="#" class="text-white hover:text-gray-400">
                            <i class="fab fa-linkedin fa-lg"></i>
                        </a>
                        <a href="#" class="text-white hover:text-gray-400">
                            <i class="fab fa-instagram-square fa-lg"></i>
                        </a>
                    </div>
                    <div class="text-center text-sm">
                        <p>&copy; 2024 SchemeInsight. All rights reserved.</p>
                        <p>
                            Disclaimer: This website is not affiliated with any
                            government agency and provides information for
                            guidance purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
