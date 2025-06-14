
        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const languageSwitcher = document.getElementById('languageSwitcher');
        const prevSlideBtn = document.getElementById('prevSlide');
        const nextSlideBtn = document.getElementById('nextSlide');
        const heroControls = document.querySelectorAll('.hero__control');
        const quickViewModal = document.getElementById('quickViewModal');
        const closeQuickView = document.getElementById('closeQuickView');
        const quickViewContent = document.getElementById('quickViewContent');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartModalBody = document.getElementById('cartModalBody');
        const cartCount = document.getElementById('cartCount');
        const wishlistCount = document.getElementById('wishlistCount');
        const zoomModal = document.getElementById('zoomModal');
        const zoomedImage = document.getElementById('zoomedImage');
        const featuredProductsGrid = document.getElementById('featuredProducts');
        const dealProductsGrid = document.getElementById('dealProducts');
        const dealHours = document.getElementById('dealHours');
        const dealMinutes = document.getElementById('dealMinutes');
        const dealSeconds = document.getElementById('dealSeconds');
        const backToTop = document.getElementById('backToTop');
        const accountBtn = document.getElementById('accountBtn');
        const accountModal = document.getElementById('accountModal');
        const closeAccount = document.getElementById('closeAccount');
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeLogin = document.getElementById('closeLogin');
        const registerBtn = document.getElementById('registerBtn');
        const registerModal = document.getElementById('registerModal');
        const closeRegister = document.getElementById('closeRegister');
        const showRegisterFromLogin = document.getElementById('showRegisterFromLogin');
        const showLoginFromRegister = document.getElementById('showLoginFromRegister');
        const wishlistBtn = document.getElementById('wishlistBtn');
        const wishlistModal = document.getElementById('wishlistModal');
        const closeWishlist = document.getElementById('closeWishlist');
        const closeWishlistBtn = document.getElementById('closeWishlistBtn');
        const wishlistProducts = document.getElementById('wishlistProducts');
        const emptyWishlist = document.getElementById('emptyWishlist');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const newsletterForm = document.getElementById('newsletterForm');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Language Switcher
        languageSwitcher.addEventListener('click', (e) => {
            if (e.target.closest('.language-switcher__btn')) {
                languageSwitcher.classList.toggle('active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!languageSwitcher.contains(e.target)) {
                languageSwitcher.classList.remove('active');
            }
        });

        // Change Language
        document.querySelectorAll('.language-switcher__item').forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.getAttribute('data-lang');
                const btnText = lang === 'en' ? 'English' : 'اردو';
                document.querySelector('.language-switcher__btn').innerHTML = `
                    <i class="fas fa-language"></i>
                    ${btnText}
                    <i class="fas fa-chevron-down"></i>
                `;
                languageSwitcher.classList.remove('active');
                showToast(`Language changed to ${btnText}`);
            });
        });

        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero__slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            slides.forEach((slide, i) => {
                slide.style.opacity = i === currentSlide ? '1' : '0';
                slide.style.zIndex = i === currentSlide ? '1' : '0';
            });

            heroControls.forEach((control, i) => {
                control.classList.toggle('active', i === currentSlide);
            });
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Auto slide change
        let slideInterval = setInterval(nextSlide, 5000);

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        heroControls.forEach(control => {
            control.addEventListener('click', () => {
                const slideIndex = parseInt(control.getAttribute('data-slide'));
                showSlide(slideIndex);
                resetInterval();
            });
        });

        // Initialize slider
        showSlide(0);

        // Product Data
        const products = [
            {
                id: 1,
                title: "Samsung Galaxy S21 Ultra",
                price: 199999,
                originalPrice: 219999,
                images: [
                    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1610792516307-ea5acbd9c4b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "electronics",
                description: "The Samsung Galaxy S21 Ultra is the ultimate smartphone with a 6.8-inch Dynamic AMOLED 2X display, 108MP camera, and 5G connectivity. Includes S Pen support and 5000mAh battery.",
                rating: 5,
                stock: 15,
                cityPrices: {
                    "karachi": 199999,
                    "lahore": 201999,
                    "islamabad": 203999,
                    "peshawar": 205999,
                    "quetta": 207999
                }
            },
            {
                id: 2,
                title: "Apple iPhone 13 Pro",
                price: 229999,
                originalPrice: 249999,
                images: [
                    "https://images.unsplash.com/photo-1632660677899-a415c1a50793?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "electronics",
                description: "iPhone 13 Pro features a 6.1-inch Super Retina XDR display with ProMotion, A15 Bionic chip, Pro camera system with new 3x telephoto lens, and 5G capability.",
                rating: 5,
                stock: 8,
                cityPrices: {
                    "karachi": 229999,
                    "lahore": 231999,
                    "islamabad": 233999,
                    "peshawar": 235999,
                    "quetta": 237999
                }
            },
            {
                id: 3,
                title: "Men's Casual Shirt",
                price: 2499,
                originalPrice: 3499,
                images: [
                    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "fashion",
                description: "Premium quality men's casual shirt made from 100% cotton. Available in multiple colors and sizes. Perfect for both formal and casual occasions.",
                rating: 4,
                stock: 32,
                cityPrices: {
                    "karachi": 2499,
                    "lahore": 2599,
                    "islamabad": 2699,
                    "peshawar": 2799,
                    "quetta": 2899
                }
            },
            {
                id: 4,
                title: "Women's Maxi Dress",
                price: 3499,
                originalPrice: 4999,
                images: [
                    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "fashion",
                description: "Elegant women's maxi dress with floral pattern. Made from breathable fabric for all-day comfort. Available in multiple sizes and colors.",
                rating: 4,
                stock: 18,
                cityPrices: {
                    "karachi": 3499,
                    "lahore": 3599,
                    "islamabad": 3699,
                    "peshawar": 3799,
                    "quetta": 3899
                }
            },
            {
                id: 5,
                title: "Dell XPS 15 Laptop",
                price: 249999,
                originalPrice: 269999,
                images: [
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1593642702821-8f0a81a3e9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1593642634523-b31a5a5a8f0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "electronics",
                description: "Dell XPS 15 with 15.6-inch 4K UHD display, Intel Core i7 processor, 16GB RAM, 512GB SSD, and NVIDIA GeForce GTX 1650 graphics. Perfect for professionals and creatives.",
                rating: 5,
                stock: 5,
                cityPrices: {
                    "karachi": 249999,
                    "lahore": 251999,
                    "islamabad": 253999,
                    "peshawar": 255999,
                    "quetta": 257999
                }
            },
            {
                id: 6,
                title: "Kitchen Blender",
                price: 5999,
                originalPrice: 7999,
                images: [
                    "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "home",
                description: "High-powered kitchen blender with 1000W motor, stainless steel blades, and 1.5L BPA-free jug. Perfect for smoothies, soups, and food preparation.",
                rating: 4,
                stock: 22,
                cityPrices: {
                    "karachi": 5999,
                    "lahore": 6199,
                    "islamabad": 6399,
                    "peshawar": 6599,
                    "quetta": 6799
                }
            },
            {
                id: 7,
                title: "Wireless Headphones",
                price: 12999,
                originalPrice: 15999,
                images: [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "electronics",
                description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design. Includes carrying case and aux cable.",
                rating: 4,
                stock: 12,
                cityPrices: {
                    "karachi": 12999,
                    "lahore": 13199,
                    "islamabad": 13399,
                    "peshawar": 13599,
                    "quetta": 13799
                }
            },
            {
                id: 8,
                title: "Women's Handbag",
                price: 4499,
                originalPrice: 5999,
                images: [
                    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "fashion",
                description: "Stylish women's handbag made from genuine leather. Multiple compartments for organization. Adjustable shoulder strap and secure zipper closure.",
                rating: 4,
                stock: 7,
                cityPrices: {
                    "karachi": 4499,
                    "lahore": 4599,
                    "islamabad": 4699,
                    "peshawar": 4799,
                    "quetta": 4899
                }
            },
            {
                id: 9,
                title: "Smart Watch",
                price: 14999,
                originalPrice: 19999,
                images: [
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "electronics",
                description: "Feature-rich smartwatch with heart rate monitoring, GPS, fitness tracking, and smartphone notifications. Water-resistant with 7-day battery life.",
                rating: 4,
                stock: 10,
                cityPrices: {
                    "karachi": 14999,
                    "lahore": 15199,
                    "islamabad": 15399,
                    "peshawar": 15599,
                    "quetta": 15799
                }
            },
            {
                id: 10,
                title: "Perfume Set",
                price: 5999,
                originalPrice: 7999,
                images: [
                    "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "beauty",
                description: "Luxury perfume set with 3 different fragrances for women. Long-lasting scents with elegant packaging. Perfect gift set.",
                rating: 4,
                stock: 15,
                cityPrices: {
                    "karachi": 5999,
                    "lahore": 6199,
                    "islamabad": 6399,
                    "peshawar": 6599,
                    "quetta": 6799
                }
            },
            {
                id: 11,
                title: "Coffee Maker",
                price: 12999,
                originalPrice: 15999,
                images: [
                    "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1581922819941-8451d37b3c2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "home",
                description: "Automatic coffee maker with programmable timer, 12-cup capacity, and permanent filter. Brews coffee at the perfect temperature for optimal flavor.",
                rating: 4,
                stock: 8,
                cityPrices: {
                    "karachi": 12999,
                    "lahore": 13199,
                    "islamabad": 13399,
                    "peshawar": 13599,
                    "quetta": 13799
                }
            },
            {
                id: 12,
                title: "Running Shoes",
                price: 7999,
                originalPrice: 9999,
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                ],
                category: "fashion",
                description: "High-performance running shoes with cushioned soles, breathable mesh upper, and durable rubber outsole. Perfect for athletes and casual wear.",
                rating: 5,
                stock: 20,
                cityPrices: {
                    "karachi": 7999,
                    "lahore": 8199,
                    "islamabad": 8399,
                    "peshawar": 8599,
                    "quetta": 8799
                }
            }
        ];

        // Deal Products (subset of featured products)
        const dealProducts = [products[0], products[2], products[5], products[8], products[11]];

        // Cart and Wishlist
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

        // Update cart/wishlist count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function updateWishlistCount() {
            wishlistCount.textContent = wishlist.length;
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }

        // Format price
        function formatPrice(price) {
            return 'Rs. ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Show toast notification
        function showToast(message, type = 'success') {
            toastMessage.textContent = message;
            toast.className = 'toast';
            toast.classList.add(`toast--${type}`, 'visible');
            
            setTimeout(() => {
                toast.classList.remove('visible');
            }, 3000);
        }

        // Render Products
        function renderProducts(productsArray, container) {
            container.innerHTML = productsArray.map(product => `
                <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                    ${product.originalPrice > product.price ? `<span class="product-card__badge">Sale</span>` : ''}
                    <div class="product-card__image-container">
                        <img src="${product.images[0]}" alt="${product.title}" class="product-card__image">
                        <div class="product-card__actions">
                            <button class="btn btn--icon quick-view-btn" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn--icon wishlist-btn" data-id="${product.id}">
                                <i class="fas fa-heart ${wishlist.includes(product.id) ? 'text-danger' : ''}"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.title}</h3>
                        <div class="product-card__price">
                            <span class="product-card__current-price">${formatPrice(product.price)}</span>
                            ${product.originalPrice > product.price ? `
                                <span class="product-card__original-price">${formatPrice(product.originalPrice)}</span>
                                <span class="product-card__discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                            ` : ''}
                        </div>
                        <div class="product-card__city-price">
                            <i class="fas fa-map-marker-alt"></i>
                            <select class="city-selector">
                                <option value="karachi">Karachi</option>
                                <option value="lahore">Lahore</option>
                                <option value="islamabad">Islamabad</option>
                                <option value="peshawar">Peshawar</option>
                                <option value="quetta">Quetta</option>
                            </select>
                        </div>
                        <div class="product-card__stock ${product.stock > 10 ? 'product-card__stock--available' : product.stock > 0 ? 'product-card__stock--low' : 'product-card__stock--unavailable'}">
                            <i class="fas ${product.stock > 10 ? 'fa-check-circle' : product.stock > 0 ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                            ${product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} Left` : 'Out of Stock'}
                        </div>
                        <div class="product-card__buttons">
                            <button class="btn btn--primary btn--sm add-to-cart-btn" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn btn--outline btn--sm view-details-btn" data-id="${product.id}">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Add event listeners to new buttons
            document.querySelectorAll('.quick-view-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.getAttribute('data-id'));
                    showQuickView(productId);
                });
            });

            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.getAttribute('data-id'));
                    addToCart(productId);
                    
                    // Animation effect
                    btn.innerHTML = '<i class="fas fa-check"></i> Added';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                    }, 1000);
                });
            });

            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.getAttribute('data-id'));
                    showQuickView(productId);
                });
            });

            document.querySelectorAll('.wishlist-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.getAttribute('data-id'));
                    toggleWishlist(productId);
                    
                    // Animation effect
                    btn.innerHTML = wishlist.includes(productId) ? 
                        '<i class="fas fa-heart text-danger"></i>' : 
                        '<i class="fas fa-heart"></i>';
                });
            });

            // Image zoom
            document.querySelectorAll('.product-card__image').forEach(img => {
                img.addEventListener('click', (e) => {
                    zoomImage(img.src);
                });
            });

            // City price selector
            document.querySelectorAll('.city-selector').forEach(select => {
                select.addEventListener('change', (e) => {
                    const productCard = select.closest('.product-card');
                    const productId = parseInt(productCard.getAttribute('data-id'));
                    const product = products.find(p => p.id === productId);
                    const city = select.value;
                    
                    if (product) {
                        const priceElement = productCard.querySelector('.product-card__current-price');
                        priceElement.textContent = formatPrice(product.cityPrices[city]);
                    }
                });
            });
        }

        // Filter Products
        document.querySelectorAll('.products__filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.products__filter-btn.active').classList.remove('active');
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                if (category === 'all') {
                    renderProducts(products, featuredProductsGrid);
                } else {
                    const filteredProducts = products.filter(p => p.category === category);
                    renderProducts(filteredProducts, featuredProductsGrid);
                }
            });
        });

        // Show Quick View
        function showQuickView(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            quickViewContent.innerHTML = `
                <div class="quick-view__gallery">
                    <img src="${product.images[0]}" alt="${product.title}" class="quick-view__main-image" id="quickViewMainImage">
                    <div class="quick-view__thumbnails">
                        ${product.images.map((img, i) => `
                            <img src="${img}" alt="Thumbnail ${i + 1}" class="quick-view__thumbnail ${i === 0 ? 'active' : ''}">
                        `).join('')}
                    </div>
                </div>
                <div class="quick-view__details">
                    <h1>${product.title}</h1>
                    <div class="quick-view__price">
                        <span class="quick-view__current-price">${formatPrice(product.price)}</span>
                        ${product.originalPrice > product.price ? `
                            <span class="quick-view__original-price">${formatPrice(product.originalPrice)}</span>
                            <span class="quick-view__discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                        ` : ''}
                    </div>
                    <div class="quick-view__meta">
                        <div class="quick-view__meta-item">
                            <span class="quick-view__rating">
                                ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                                ${product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            </span>
                            <span>${product.rating.toFixed(1)}</span>
                        </div>
                        <div class="quick-view__meta-item">
                            <i class="fas fa-box"></i>
                            <span>${product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} Left` : 'Out of Stock'}</span>
                        </div>
                        <div class="quick-view__meta-item">
                            <i class="fas fa-tag"></i>
                            <span>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                        </div>
                    </div>
                    <p class="quick-view__description">${product.description}</p>
                    <form class="quick-view__form">
                        <div class="quick-view__form-group">
                            <label class="quick-view__form-label">City</label>
                            <select class="quick-view__form-select city-selector">
                                <option value="karachi">Karachi</option>
                                <option value="lahore">Lahore</option>
                                <option value="islamabad">Islamabad</option>
                                <option value="peshawar">Peshawar</option>
                                <option value="quetta">Quetta</option>
                            </select>
                        </div>
                        ${product.category === 'fashion' ? `
                        <div class="quick-view__form-group">
                            <label class="quick-view__form-label">Size</label>
                            <select class="quick-view__form-select">
                                <option value="s">Small (S)</option>
                                <option value="m">Medium (M)</option>
                                <option value="l">Large (L)</option>
                                <option value="xl">Extra Large (XL)</option>
                            </select>
                        </div>
                        ` : ''}
                        <div class="quick-view__form-group">
                            <label class="quick-view__form-label">Quantity</label>
                            <input type="number" class="quick-view__form-select" value="1" min="1" max="${product.stock}">
                        </div>
                    </form>
                    <div class="quick-view__actions">
                        <button class="btn btn--primary add-to-cart-btn" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn btn--outline wishlist-btn" data-id="${product.id}">
                            <i class="fas fa-heart ${wishlist.includes(product.id) ? 'text-danger' : ''}"></i> ${wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            `;

            // Thumbnail click event
            document.querySelectorAll('.quick-view__thumbnail').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    document.querySelector('.quick-view__thumbnail.active').classList.remove('active');
                    thumb.classList.add('active');
                    document.getElementById('quickViewMainImage').src = thumb.src;
                });
            });

            // Add to cart button in quick view
            document.querySelector('.quick-view .add-to-cart-btn').addEventListener('click', () => {
                const quantity = parseInt(document.querySelector('.quick-view__form input[type="number"]').value);
                addToCart(productId, quantity);
                document.querySelector('.quick-view .add-to-cart-btn').innerHTML = '<i class="fas fa-check"></i> Added to Cart';
                setTimeout(() => {
                    document.querySelector('.quick-view .add-to-cart-btn').innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                }, 1000);
            });

            // Wishlist button in quick view
            document.querySelector('.quick-view .wishlist-btn').addEventListener('click', () => {
                toggleWishlist(productId);
                document.querySelector('.quick-view .wishlist-btn').innerHTML = `
                    <i class="fas fa-heart ${wishlist.includes(productId) ? 'text-danger' : ''}"></i> ${wishlist.includes(productId) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                `;
            });

            // City price selector in quick view
            document.querySelector('.quick-view .city-selector').addEventListener('change', (e) => {
                const city = e.target.value;
                const priceElement = document.querySelector('.quick-view__current-price');
                priceElement.textContent = formatPrice(product.cityPrices[city]);
            });

            // Image zoom
            document.getElementById('quickViewMainImage').addEventListener('click', () => {
                zoomImage(document.getElementById('quickViewMainImage').src);
            });

            quickViewModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Quick View
        closeQuickView.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Add to Cart
        function addToCart(productId, quantity = 1) {
            const product = products.find(p => p.id === productId);
            if (!product || product.stock === 0) return;

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.images[0],
                    quantity: quantity
                });
            }

            updateCartCount();
            renderCart();
            showToast('Product added to cart');
        }

        // Toggle Wishlist
        function toggleWishlist(productId) {
            const index = wishlist.indexOf(productId);
            if (index === -1) {
                wishlist.push(productId);
                showToast('Product added to wishlist');
            } else {
                wishlist.splice(index, 1);
                showToast('Product removed from wishlist');
            }

            updateWishlistCount();
            renderWishlist();
        }

        // Render Cart
        function renderCart() {
            if (cart.length === 0) {
                cartModalBody.innerHTML = `
                    <div class="cart-modal__empty">
                        <div class="cart-modal__empty-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h4>Your cart is empty</h4>
                        <p class="cart-modal__empty-text">Looks like you haven't added anything to your cart yet</p>
                        <button class="btn btn--primary" id="closeCartBtn">Continue Shopping</button>
                    </div>
                `;
                document.getElementById('cartSubtotal').textContent = 'Rs. 0';
                
                // Add event listener to close cart button
                document.getElementById('closeCartBtn')?.addEventListener('click', () => {
                    cartModal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            } else {
                cartModalBody.innerHTML = cart.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.title}" class="cart-item__image">
                        <div class="cart-item__details">
                            <h4 class="cart-item__title">${item.title}</h4>
                            <div class="cart-item__price">${formatPrice(item.price)}</div>
                            <div class="cart-item__actions">
                                <div class="cart-item__quantity">
                                    <button class="cart-item__quantity-btn minus-btn" data-id="${item.id}">-</button>
                                    <input type="text" class="cart-item__quantity-input" value="${item.quantity}" readonly>
                                    <button class="cart-item__quantity-btn plus-btn" data-id="${item.id}">+</button>
                                </div>
                                <button class="cart-item__remove remove-btn" data-id="${item.id}">
                                    <i class="fas fa-trash"></i> Remove
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');

                // Calculate subtotal
                const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);

                // Add event listeners to quantity buttons
                document.querySelectorAll('.minus-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const productId = parseInt(btn.getAttribute('data-id'));
                        updateCartItemQuantity(productId, -1);
                    });
                });

                document.querySelectorAll('.plus-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const productId = parseInt(btn.getAttribute('data-id'));
                        updateCartItemQuantity(productId, 1);
                    });
                });

                document.querySelectorAll('.remove-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const productId = parseInt(btn.getAttribute('data-id'));
                        removeFromCart(productId);
                    });
                });
            }
        }

        // Update Cart Item Quantity
        function updateCartItemQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (!item) return;

            item.quantity += change;

            if (item.quantity < 1) {
                removeFromCart(productId);
            } else {
                updateCartCount();
                renderCart();
                showToast('Cart updated');
            }
        }

        // Remove from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            renderCart();
            showToast('Product removed from cart');
        }

        // Render Wishlist
        function renderWishlist() {
            if (wishlist.length === 0) {
                emptyWishlist.classList.remove('hidden');
                wishlistProducts.classList.add('hidden');
            } else {
                emptyWishlist.classList.add('hidden');
                wishlistProducts.classList.remove('hidden');
                
                const wishlistProductsData = products.filter(p => wishlist.includes(p.id));
                renderProducts(wishlistProductsData, wishlistProducts);
            }
        }

        // Open Cart
        cartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCart();
        });

        // Close Cart
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Account Modal
        accountBtn.addEventListener('click', () => {
            if (isLoggedIn) {
                // Show user profile or logout options
                showToast(`Welcome back, ${currentUser?.name || 'User'}!`);
            } else {
                accountModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        closeAccount.addEventListener('click', () => {
            accountModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Login Modal
        loginBtn.addEventListener('click', () => {
            accountModal.classList.remove('active');
            loginModal.classList.add('active');
        });

        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Register Modal
        registerBtn.addEventListener('click', () => {
            accountModal.classList.remove('active');
            registerModal.classList.add('active');
        });

        closeRegister.addEventListener('click', () => {
            registerModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Switch between login and register
        showRegisterFromLogin.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('active');
            registerModal.classList.add('active');
        });

        showLoginFromRegister.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });

        // Login Form
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would validate and send to server
            isLoggedIn = true;
            currentUser = {
                name: "Test User",
                email: e.target.querySelector('input[type="email"]').value
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
            showToast('Login successful!', 'success');
        });

        // Register Form
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would validate and send to server
            isLoggedIn = true;
            currentUser = {
                name: e.target.querySelector('input[type="text"]').value,
                email: e.target.querySelector('input[type="email"]').value
            };
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            registerModal.classList.remove('active');
            document.body.style.overflow = '';
            showToast('Registration successful!', 'success');
        });

        // Wishlist Modal
        wishlistBtn.addEventListener('click', () => {
            wishlistModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderWishlist();
        });

        closeWishlist.addEventListener('click', () => {
            wishlistModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        closeWishlistBtn.addEventListener('click', () => {
            wishlistModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Newsletter Form
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            // In a real app, you would send this to your server
            e.target.reset();
            showToast('Thanks for subscribing!', 'success');
        });

        // Zoom Image
        function zoomImage(src) {
            zoomedImage.src = src;
            zoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Zoom Modal
        zoomModal.addEventListener('click', () => {
            zoomModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Deals Countdown Timer
        function updateDealsTimer() {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            
            const diff = endOfDay - now;
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            dealHours.textContent = hours.toString().padStart(2, '0');
            dealMinutes.textContent = minutes.toString().padStart(2, '0');
            dealSeconds.textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateDealsTimer, 1000);
        updateDealsTimer();

        // Back to Top Button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initialize
        updateCartCount();
        updateWishlistCount();
        renderProducts(products, featuredProductsGrid);
        renderProducts(dealProducts, dealProductsGrid);

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.getElementById('header').classList.add('scrolled');
            } else {
                document.getElementById('header').classList.remove('scrolled');
            }
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target === quickViewModal) {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (e.target === accountModal) {
                accountModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (e.target === registerModal) {
                registerModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            if (e.target === wishlistModal) {
                wishlistModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                quickViewModal.classList.remove('active');
                cartModal.classList.remove('active');
                accountModal.classList.remove('active');
                loginModal.classList.remove('active');
                registerModal.classList.remove('active');
                wishlistModal.classList.remove('active');
                zoomModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Lazy loading for images
        const lazyLoadImages = () => {
            const lazyImages = document.querySelectorAll('img[data-src]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('data-src');
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                observer.observe(img);
            });
        };

        // Run lazy loading after initial render
        setTimeout(lazyLoadImages, 500);