const products = [
    { 
        title: "Wireless Headphones", 
        text: "Premium noise-canceling headphones with 30-hour battery life.", 
        img: "download.jpg" 
    },
    { 
        title: "Smart Watch", 
        text: "Track your fitness and stay connected on the go.", 
        img: "download.jpg" 
    },
    { 
        title: "Minimalist Camera", 
        text: "Capture stunning moments with this compact mirrorless camera.", 
        img: "download.jpg" 
    },
    { 
        title: "Classic Sunglasses", 
        text: "UV400 protection with a timeless, durable frame design.", 
        img: "download.jpg" 
    },
    { 
        title: "Mechanical Keyboard", 
        text: "Tactile switches for the ultimate typing and gaming experience.", 
        img: "download.jpg" 
    },
    { 
        title: "Running Sneakers", 
        text: "Lightweight and breathable for your everyday runs.", 
        img: "download.jpg" 
    },
    { 
        title: "Smart Speaker", 
        text: "Voice-controlled speaker with deep bass and crisp highs.", 
        img: "download.jpg" 
    },
    { 
        title: "Leather Wallet", 
        text: "Genuine leather bifold wallet with RFID blocking technology.", 
        img: "download.jpg" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    const productHTML = products.map((product, index) => {
        const delay = index * 0.1; 
        
        return `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card product-card" style="animation-delay: ${delay}s;">
                    <div class="overflow-hidden">
                        <img src="${product.img}" alt="${product.title}" class="card-img-top product-img">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h3 class="card-title h5">${product.title}</h3>
                        <p class="card-text flex-grow-1">${product.text}</p>
                        <a href="#" class="btn btn-primary mt-auto w-100">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    productList.innerHTML = productHTML;
});
