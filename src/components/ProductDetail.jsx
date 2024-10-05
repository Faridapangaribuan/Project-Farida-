import React from 'react';
import ShareButton from './ShareButton'; // Import the ShareButton

const ProductDetail = ({ product }) => {
    const shareUrl = window.location.href; // Get the current URL for sharing

    return (
        <div className="container">
            <div className="title">{product.name}</div>
            <div className="info">
                <p>Jenis Pakaian: Kemeja</p>
                <p>Alamat: Jakarta</p>
                <p>Pemilik: Maya</p>
            </div>
            <div className="productImages">
                <img src={product.imageUrl} alt={product.name} className="largeImage" />
                <div className="smallImages">
                    {product.smallImages.map((img, index) => (
                        <img key={index} src={img} alt={`${product.name} ${index + 1}`} className="smallImage" />
                    ))}
                </div>
            </div>
            <div className="description">{product.description}</div>
            <div className="shareContainer">
                <ShareButton platform="whatsapp" url={shareUrl} />
                <ShareButton platform="facebook" url={shareUrl} />
                <ShareButton platform="twitter" url={shareUrl} />
            </div>
        </div>
    );
};

export default ProductDetail;
