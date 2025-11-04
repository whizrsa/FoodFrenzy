// ===================================
// FoodFrenzy - JavaScript
// ===================================

// ========== CONFIGURATION ==========
const CONFIG = {
    TAX_RATE: 0.08, // 8% tax
    TOAST_DURATION: 3000, // 3 seconds
    STORAGE_KEYS: {
        CART: 'foodfrenzy_cart',
        WISHLIST: 'foodfrenzy_wishlist',
        THEME: 'foodfrenzy_theme'
    }
};

// ========== MENU DATA ==========
const menuData = [
    // Starters
    {
        id: 1,
        name: 'Crispy Spring Rolls',
        category: 'starters',
        description: 'Golden fried rolls filled with fresh vegetables and served with sweet chili sauce',
        price: 8.99,
        image: '🥟',
        featured: true,
        dietary: ['vegetarian']
    },
    {
        id: 2,
        name: 'Buffalo Wings',
        category: 'starters',
        description: 'Spicy chicken wings tossed in buffalo sauce with ranch dressing',
        price: 12.99,
        image: '🍗'
    },
    {
        id: 3,
        name: 'Mozzarella Sticks',
        category: 'starters',
        description: 'Crispy breaded mozzarella with marinara sauce',
        price: 9.99,
        image: '🧀',
        dietary: ['vegetarian']
    },
    {
        id: 4,
        name: 'Garlic Bread',
        category: 'starters',
        description: 'Toasted bread with garlic butter and herbs',
        price: 6.99,
        image: '🥖',
        dietary: ['vegetarian']
    },
    {
        id: 5,
        name: 'Loaded Nachos',
        category: 'starters',
        description: 'Tortilla chips topped with cheese, jalapeños, and sour cream',
        price: 11.99,
        image: '🌮',
        dietary: ['vegetarian']
    },
    {
        id: 6,
        name: 'Calamari Rings',
        category: 'starters',
        description: 'Lightly breaded and fried squid rings with aioli',
        price: 13.99,
        image: '🦑'
    },
    
    // Main Dishes
    {
        id: 7,
        name: 'Classic Cheeseburger',
        category: 'main',
        description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
        price: 15.99,
        image: '🍔',
        featured: true
    },
    {
        id: 8,
        name: 'Margherita Pizza',
        category: 'main',
        description: 'Fresh tomato sauce, mozzarella, and basil on wood-fired crust',
        price: 16.99,
        image: '🍕',
        dietary: ['vegetarian']
    },
    {
        id: 9,
        name: 'Grilled Salmon',
        category: 'main',
        description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
        price: 24.99,
        image: '🐟'
    },
    {
        id: 10,
        name: 'Chicken Alfredo Pasta',
        category: 'main',
        description: 'Fettuccine in creamy alfredo sauce with grilled chicken',
        price: 18.99,
        image: '🍝'
    },
    {
        id: 11,
        name: 'BBQ Ribs',
        category: 'main',
        description: 'Slow-cooked pork ribs with tangy BBQ sauce and coleslaw',
        price: 22.99,
        image: '🍖'
    },
    {
        id: 12,
        name: 'Vegetarian Stir Fry',
        category: 'main',
        description: 'Mixed vegetables in savory sauce served over rice',
        price: 14.99,
        image: '🥗',
        dietary: ['vegetarian', 'vegan']
    },
    {
        id: 13,
        name: 'Steak & Fries',
        category: 'main',
        description: 'Grilled ribeye steak with seasoned french fries',
        price: 28.99,
        image: '🥩'
    },
    {
        id: 14,
        name: 'Fish Tacos',
        category: 'main',
        description: 'Crispy fish with cabbage slaw and chipotle mayo',
        price: 16.99,
        image: '🌮'
    },
    {
        id: 15,
        name: 'Mushroom Risotto',
        category: 'main',
        description: 'Creamy Italian rice with wild mushrooms and parmesan',
        price: 17.99,
        image: '🍚',
        dietary: ['vegetarian']
    },
    {
        id: 16,
        name: 'Chicken Teriyaki Bowl',
        category: 'main',
        description: 'Grilled chicken with teriyaki glaze, rice, and vegetables',
        price: 15.99,
        image: '🍱'
    },
    
    // Desserts
    {
        id: 17,
        name: 'Chocolate Lava Cake',
        category: 'desserts',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: 8.99,
        image: '🍰',
        featured: true
    },
    {
        id: 18,
        name: 'New York Cheesecake',
        category: 'desserts',
        description: 'Classic creamy cheesecake with graham cracker crust',
        price: 7.99,
        image: '🍰'
    },
    {
        id: 19,
        name: 'Tiramisu',
        category: 'desserts',
        description: 'Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 8.99,
        image: '🍮'
    },
    {
        id: 20,
        name: 'Ice Cream Sundae',
        category: 'desserts',
        description: 'Three scoops of ice cream with toppings and whipped cream',
        price: 6.99,
        image: '🍨'
    },
    {
        id: 21,
        name: 'Apple Pie',
        category: 'desserts',
        description: 'Homemade apple pie with cinnamon and vanilla ice cream',
        price: 7.99,
        image: '🥧'
    },
    {
        id: 22,
        name: 'Brownies',
        category: 'desserts',
        description: 'Rich chocolate brownies with walnuts',
        price: 5.99,
        image: '🍫'
    },
    
    // Beverages
    {
        id: 23,
        name: 'Fresh Lemonade',
        category: 'beverages',
        description: 'Homemade lemonade with fresh lemons',
        price: 3.99,
        image: '🍋',
        dietary: ['vegan']
    },
    {
        id: 24,
        name: 'Iced Coffee',
        category: 'beverages',
        description: 'Cold brew coffee served over ice',
        price: 4.99,
        image: '☕'
    },
    {
        id: 25,
        name: 'Fruit Smoothie',
        category: 'beverages',
        description: 'Blend of fresh fruits and yogurt',
        price: 6.99,
        image: '🥤',
        dietary: ['vegetarian']
    },
    {
        id: 26,
        name: 'Coca Cola',
        category: 'beverages',
        description: 'Classic soft drink',
        price: 2.99,
        image: '🥤'
    },
    {
        id: 27,
        name: 'Milkshake',
        category: 'beverages',
        description: 'Thick and creamy milkshake - vanilla, chocolate, or strawberry',
        price: 5.99,
        image: '🥛',
        dietary: ['vegetarian']
    },
    {
        id: 28,
        name: 'Green Tea',
        category: 'beverages',
        description: 'Hot or iced premium green tea',
        price: 3.49,
        image: '🍵',
        dietary: ['vegan']
    }
];

// ========== STATE MANAGEMENT ==========
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let searchQuery = '';

// ========== DOM ELEMENTS ==========
const elements = {
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    mobileToggle: document.getElementById('mobileToggle'),
    navMenu: document.getElementById('navMenu'),
    themeToggle: document.getElementById('themeToggle'),
    
    // Cart
    cartIcon: document.getElementById('cartIcon'),
    cartPanel: document.getElementById('cartPanel'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartClose: document.getElementById('cartClose'),
    cartBadge: document.getElementById('cartBadge'),
    cartBody: document.getElementById('cartBody'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartFooter: document.getElementById('cartFooter'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTax: document.getElementById('cartTax'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    continueShopping: document.getElementById('continueShopping'),
    
    // Wishlist
    wishlistIcon: document.getElementById('wishlistIcon'),
    wishlistPanel: document.getElementById('wishlistPanel'),
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    wishlistClose: document.getElementById('wishlistClose'),
    wishlistBadge: document.getElementById('wishlistBadge'),
    wishlistBody: document.getElementById('wishlistBody'),
    wishlistEmpty: document.getElementById('wishlistEmpty'),
    continueShoppingWishlist: document.getElementById('continueShoppingWishlist'),
    
    // Menu
    menuGrid: document.getElementById('menuGrid'),
    featuredGrid: document.getElementById('featuredGrid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    searchInput: document.getElementById('searchInput'),
    searchAutocomplete: document.getElementById('searchAutocomplete'),
    noResults: document.getElementById('noResults'),
    orderNowBtn: document.getElementById('orderNowBtn'),
    
    // Checkout
    checkoutSection: document.getElementById('checkout'),
    checkoutForm: document.getElementById('checkoutForm'),
    backToMenu: document.getElementById('backToMenu'),
    orderItems: document.getElementById('orderItems'),
    orderSubtotal: document.getElementById('orderSubtotal'),
    orderTax: document.getElementById('orderTax'),
    orderTotal: document.getElementById('orderTotal'),
    
    // Confirmation Modal
    confirmationModal: document.getElementById('confirmationModal'),
    orderNumber: document.getElementById('orderNumber'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    
    // Contact Form
    contactForm: document.getElementById('contactForm'),
    
    // Newsletter
    subscribeBtn: document.getElementById('subscribeBtn'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    
    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage')
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    loadThemeFromStorage();
    displayMenu();
    displayFeaturedItems();
    setupEventListeners();
    updateCartBadge();
    updateWishlistBadge();
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    elements.mobileToggle.addEventListener('click', toggleMobileMenu);
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.orderNowBtn.addEventListener('click', () => scrollToSection('menu'));
    
    // Cart
    elements.cartIcon.addEventListener('click', () => toggleCart(true));
    elements.cartClose.addEventListener('click', () => toggleCart(false));
    elements.cartOverlay.addEventListener('click', () => toggleCart(false));
    elements.continueShopping.addEventListener('click', () => {
        toggleCart(false);
        scrollToSection('menu');
    });
    elements.checkoutBtn.addEventListener('click', handleCheckout);
    
    // Wishlist
    elements.wishlistIcon.addEventListener('click', () => toggleWishlist(true));
    elements.wishlistClose.addEventListener('click', () => toggleWishlist(false));
    elements.wishlistOverlay.addEventListener('click', () => toggleWishlist(false));
    elements.continueShoppingWishlist.addEventListener('click', () => {
        toggleWishlist(false);
        scrollToSection('menu');
    });
    
    // Menu
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    elements.searchInput.addEventListener('focus', () => {
        if (elements.searchInput.value) handleSearch();
    });
    elements.searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            elements.searchAutocomplete.classList.remove('active');
        }, 200);
    });
    
    // Checkout
    elements.backToMenu.addEventListener('click', () => {
        elements.checkoutSection.classList.remove('active');
        scrollToSection('menu');
    });
    
    elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    
    // Add live validation to form fields
    const formFields = elements.checkoutForm.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field);
            }
        });
    });
    
    // Contact Form
    elements.contactForm.addEventListener('submit', handleContactSubmit);
    
    // Newsletter
    elements.subscribeBtn.addEventListener('click', handleNewsletterSubscribe);
    
    // Confirmation Modal
    elements.backToHomeBtn.addEventListener('click', () => {
        elements.confirmationModal.classList.remove('active');
        elements.checkoutSection.classList.remove('active');
        scrollToSection('home');
    });
    
    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const section = href.substring(1);
                scrollToSection(section);
            }
        });
    });
}

// ========== NAVIGATION ==========
function handleNavClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = href.substring(1);
    scrollToSection(section);
    
    // Close mobile menu if open
    elements.navMenu.classList.remove('active');
    
    // Update active state
    elements.navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// ========== THEME TOGGLE ==========
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Update icon
    const icon = elements.themeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save to localStorage
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = elements.themeToggle.querySelector('i');
        icon.className = 'fas fa-sun';
    }
}

// ========== MENU DISPLAY ==========
function displayMenu(items = menuData) {
    const filteredItems = items.filter(item => {
        const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
        const matchesSearch = !searchQuery || 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    if (filteredItems.length === 0) {
        elements.menuGrid.innerHTML = '';
        elements.noResults.classList.add('active');
        return;
    }
    
    elements.noResults.classList.remove('active');
    
    elements.menuGrid.innerHTML = filteredItems.map(item => createMenuCard(item)).join('');
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            addToCart(itemId);
        });
    });
    
    // Add event listeners to wishlist heart buttons
    document.querySelectorAll('.wishlist-heart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.dataset.id);
            toggleWishlistItem(itemId);
        });
    });
}

function displayFeaturedItems() {
    const featured = menuData.filter(item => item.featured);
    elements.featuredGrid.innerHTML = featured.map(item => createFeaturedCard(item)).join('');
    
    // Add event listeners
    document.querySelectorAll('.featured-add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            addToCart(itemId);
        });
    });
}

function createMenuCard(item) {
    const isInWishlist = wishlist.some(w => w.id === item.id);
    return `
        <div class="menu-card">
            <div class="menu-image">
                <button class="wishlist-heart-btn ${isInWishlist ? 'active' : ''}" data-id="${item.id}">
                    <i class="fas fa-heart"></i>
                </button>
                <span style="font-size: 5rem;">${item.image}</span>
                ${item.dietary && item.dietary.includes('vegetarian') ? 
                    '<span class="menu-badge">Vegetarian</span>' : ''}
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-footer">
                    <span class="menu-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createFeaturedCard(item) {
    return `
        <div class="featured-card">
            <div class="featured-image">
                <span style="font-size: 5rem;">${item.image}</span>
            </div>
            <div class="featured-content">
                <h3 class="featured-title">${item.name}</h3>
                <p class="featured-description">${item.description}</p>
                <div class="featured-footer">
                    <span class="featured-price">$${item.price.toFixed(2)}</span>
                    <button class="btn btn-primary featured-add-btn" data-id="${item.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ========== FILTER & SEARCH ==========
function handleFilterClick(e) {
    const category = e.target.dataset.category;
    currentFilter = category;
    
    // Update active state
    elements.filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    displayMenu();
}

function handleSearch() {
    searchQuery = elements.searchInput.value.trim();
    displayMenu();
    
    // Show autocomplete suggestions
    if (searchQuery) {
        showAutocomplete(searchQuery);
    } else {
        elements.searchAutocomplete.classList.remove('active');
    }
}

function showAutocomplete(query) {
    const matches = menuData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    if (matches.length === 0) {
        elements.searchAutocomplete.classList.remove('active');
        return;
    }
    
    elements.searchAutocomplete.innerHTML = matches.map(item => `
        <div class="autocomplete-item" data-name="${item.name}">
            ${item.image} ${item.name} - $${item.price.toFixed(2)}
        </div>
    `).join('');
    
    elements.searchAutocomplete.classList.add('active');
    
    // Add click listeners
    document.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
            elements.searchInput.value = item.dataset.name;
            searchQuery = item.dataset.name;
            displayMenu();
            elements.searchAutocomplete.classList.remove('active');
        });
    });
}

// ========== CART MANAGEMENT ==========
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
    showToast(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCartToStorage();
        updateCartDisplay();
        updateCartBadge();
    }
}

function updateCartDisplay() {
    if (cart.length === 0) {
        elements.cartEmpty.style.display = 'block';
        elements.cartFooter.style.display = 'none';
        elements.cartBody.innerHTML = '<div class="cart-empty" id="cartEmpty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p><button class="btn btn-secondary" id="continueShopping">Browse Menu</button></div>';
        
        // Re-attach event listener
        document.getElementById('continueShopping').addEventListener('click', () => {
            toggleCart(false);
            scrollToSection('menu');
        });
        return;
    }
    
    elements.cartEmpty.style.display = 'none';
    elements.cartFooter.style.display = 'block';
    
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <span style="font-size: 2.5rem;">${item.image}</span>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                </div>
            </div>
            <button class="remove-btn" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    elements.cartBody.innerHTML = `<div class="cart-items">${cartItemsHTML}</div>`;
    
    // Add event listeners
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const change = parseInt(btn.dataset.change);
            updateQuantity(id, change);
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });
    
    updateCartTotals();
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * CONFIG.TAX_RATE;
    const total = subtotal + tax;
    
    elements.cartSubtotal.textContent = formatCurrency(subtotal);
    elements.cartTax.textContent = formatCurrency(tax);
    elements.cartTotal.textContent = formatCurrency(total);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartBadge.textContent = totalItems;
    elements.cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function toggleCart(show) {
    if (show) {
        elements.cartPanel.classList.add('active');
        updateCartDisplay();
    } else {
        elements.cartPanel.classList.remove('active');
    }
}

function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
}

// ========== CHECKOUT ==========
function handleCheckout() {
    if (cart.length === 0) return;
    
    toggleCart(false);
    elements.checkoutSection.classList.add('active');
    displayOrderSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayOrderSummary() {
    const orderItemsHTML = cart.map(item => `
        <div class="order-item">
            <div>
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-qty">Quantity: ${item.quantity}</div>
            </div>
            <div>$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    elements.orderItems.innerHTML = orderItemsHTML;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * CONFIG.TAX_RATE;
    const total = subtotal + tax;
    
    elements.orderSubtotal.textContent = formatCurrency(subtotal);
    elements.orderTax.textContent = formatCurrency(tax);
    elements.orderTotal.textContent = formatCurrency(total);
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    const formFields = elements.checkoutForm.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    formFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showToast('Please fill in all required fields correctly', 'error');
        return;
    }
    
    // Generate order number
    const orderNum = 'FF' + Date.now().toString().slice(-8);
    elements.orderNumber.textContent = orderNum;
    
    // Show confirmation modal
    elements.confirmationModal.classList.add('active');
    
    // Clear cart
    clearCart();
    
    // Reset form
    elements.checkoutForm.reset();
}

// ========== FORM VALIDATION ==========
function validateField(field) {
    const errorElement = document.getElementById(`error${field.id.charAt(0).toUpperCase() + field.id.slice(1)}`);
    let errorMessage = '';
    
    if (!field.value.trim()) {
        errorMessage = 'This field is required';
    } else {
        switch (field.type) {
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'tel':
                if (!/^\+?[\d\s\-\(\)]+$/.test(field.value) || field.value.replace(/\D/g, '').length < 10) {
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
        }
    }
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    if (errorMessage) {
        field.classList.add('error');
        return false;
    } else {
        field.classList.remove('error');
        return true;
    }
}

// ========== CONTACT FORM ==========
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formFields = elements.contactForm.querySelectorAll('input, textarea');
    let isValid = true;
    
    formFields.forEach(field => {
        const errorElement = document.getElementById(`error${field.id.charAt(0).toUpperCase() + field.id.slice(1)}`);
        if (!field.value.trim()) {
            if (errorElement) {
                errorElement.textContent = 'This field is required';
            }
            field.classList.add('error');
            isValid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email';
            }
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }
    });
    
    if (isValid) {
        showToast('Thank you! Your message has been sent.');
        elements.contactForm.reset();
    }
}

// ========== NEWSLETTER ==========
function handleNewsletterSubscribe() {
    const email = elements.newsletterEmail.value.trim();
    
    if (!email) {
        showToast('Please enter your email', 'error');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }
    
    showToast('Thank you for subscribing!');
    elements.newsletterEmail.value = '';
}

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = 'success') {
    elements.toastMessage.textContent = message;
    elements.toast.style.backgroundColor = type === 'error' ? 
        'var(--error-color)' : 'var(--success-color)';
    
    elements.toast.classList.add('active');
    
    setTimeout(() => {
        elements.toast.classList.remove('active');
    }, CONFIG.TOAST_DURATION);
}

// ========== LOCAL STORAGE ==========
function saveCartToStorage() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.CART, JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem(CONFIG.STORAGE_KEYS.CART);
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ========== UTILITY FUNCTIONS ==========
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== SCROLL ANIMATIONS (Optional) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
