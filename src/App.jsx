import React from 'react';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import './App.css'; // Import CSS here

const App = () => {
    const product = {
        id: 1,
        name: "Kaos Barter",
        description: "Kemeja berkualitas tinggi, cocok untuk acara kantor.",
        imageUrl: "src/assets/043863f8-812b-409a-b35a-adfd3f63d12e.jpg", // Main image
        smallImages: [
            "src/assets/2f61a680-076c-4ad0-8742-37fbf3b5688d.jpg", // First small image
            "src/assets/f99caff9-398d-45d0-8f3b-7ed4dceaccac.jpg", // Second small image
        ]
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
                <ProductDetail product={product} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
