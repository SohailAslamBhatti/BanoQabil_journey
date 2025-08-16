import React from "react";
import ProductCard from "./ProductCard";
import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import watch from "../assets/watch.jpg";
import camera from "../assets/camera.jpg"
import doorbell from "../assets/doorbell.jpg"
import computer from "../assets/computer.jpg"
import tv from "../assets/tv.jpg"
import speakers from "../assets/speakers.jpg"




export default function ProductList() {
    const products = [
        {
            id: 1,
            name: "Smart Laptop",
            description: "High performance laptop for work and gaming.",
            price: 1200,
            image: laptop,
        },
        {
            id: 2,
            name: "Smart Phone",
            description: "Latest smartphone with amazing camera.",
            price: 800,
            image: phone,
        },
        {
            id: 3,
            name: "Smart Watch",
            description: "Stylish smartwatch with health tracking.",
            price: 250,
            image: watch,
        },
        {
            id: 4,
            name: "Smart Camera",
            description: "An intelligent video camera with built-in processing capabilities for real-time image analysis and decision-making.",
            price: 350,
            image: camera,
        },
        {
            id: 5,
            name: "Smart Doorbell",
            description: "Offering features like live video streaming, two-way audio communication, and motion detection.",
            price: 90,
            image: doorbell,
        },
        {
            id: 6,
            name: "Smart computer",
            description: "Perform functions of sensing based on acquired data and perform decisions in a predictive or adaptive manner, thereby performing smart actions.",
            price: 400,
            image: computer,
        },
        {
            id: 7,
            name: "Smart TV",
            description: "With built-in internet connectivity and features that allow users to access online content, apps, and services, effectively turning the TV into an interactive entertainment hub.",
            price: 220,
            image: tv,
        },
        {
            id: 8,
            name: "Smart Speakers",
            description: "With the capabilities of a virtual assistant, allowing users to control various functions and access information using spoken commands.",
            price: 40,
            image: speakers,
        },

    ];

    return (
        <div className="product-list">
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
}
