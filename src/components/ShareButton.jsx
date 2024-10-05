import React from 'react';

const ShareButton = ({ platform, url }) => {
    const handleShare = () => {
        let shareUrl;

        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            default:
                return; // Jika platform tidak valid, tidak melakukan apa-apa
        }

        window.open(shareUrl, '_blank');
    };

    return (
        <button className="button" onClick={handleShare}>
            Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </button>
    );
};

export default ShareButton;
