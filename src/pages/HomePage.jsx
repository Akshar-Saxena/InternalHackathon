import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomePage() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        education: "",
        phoneNumber: "",
        occupation: "",
        sector: "",
        casteCategory: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        // Add logic to handle form submission (e.g., send data to server or perform validation)
        console.log(formData);
    };

    return (
        <div>
            <NavBar />
            <img src="/bg(2).png" alt="" />
        </div>
    );
}
