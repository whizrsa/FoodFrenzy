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
        image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&auto=format&fit=crop',
        featured: true,
        dietary: ['vegetarian']
    },
    {
        id: 2,
        name: 'Buffalo Wings',
        category: 'starters',
        description: 'Spicy chicken wings tossed in buffalo sauce with ranch dressing',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Mozzarella Sticks',
        category: 'starters',
        description: 'Crispy breaded mozzarella with marinara sauce',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 4,
        name: 'Loaded Nachos',
        category: 'starters',
        description: 'Tortilla chips topped with cheese, jalapeños, and sour cream',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 5,
        name: 'Calamari Rings',
        category: 'starters',
        description: 'Lightly breaded and fried squid rings with aioli',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Bruschetta',
        category: 'starters',
        description: 'Toasted bread topped with fresh tomatoes, basil, and garlic',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 7,
        name: 'Onion Rings',
        category: 'starters',
        description: 'Crispy golden onion rings with spicy mayo dip',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 39,
        name: 'Garlic Bread',
        category: 'starters',
        description: 'Toasted bread with garlic butter and parsley',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 40,
        name: 'Chicken Nuggets',
        category: 'starters',
        description: 'Crispy breaded chicken nuggets with honey mustard',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop'
    },
    {
        id: 41,
        name: 'Spinach Artichoke Dip',
        category: 'starters',
        description: 'Creamy spinach and artichoke dip with tortilla chips',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1559238452-cfbb70da89e1?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 42,
        name: 'Stuffed Mushrooms',
        category: 'starters',
        description: 'Button mushrooms stuffed with cheese and herbs',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    
    // Main Dishes
    {
        id: 8,
        name: 'Classic Cheeseburger',
        category: 'main',
        description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
        price: 15.99,
        image: 'assets/images/menu/grilled-cheeseburger-with-tomato-onion-fries-generated-by-ai.jpg',
        featured: true
    },
    {
        id: 9,
        name: 'Margherita Pizza',
        category: 'main',
        description: 'Fresh tomato sauce, mozzarella, and basil on wood-fired crust',
        price: 16.99,
        image: 'assets/images/menu/close-up-delicious-pizza.jpg',
        dietary: ['vegetarian']
    },
    {
        id: 10,
        name: 'Grilled Salmon',
        category: 'main',
        description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&auto=format&fit=crop'
    },
    {
        id: 11,
        name: 'Chicken Alfredo Pasta',
        category: 'main',
        description: 'Fettuccine in creamy alfredo sauce with grilled chicken',
        price: 18.99,
        image: 'assets/images/menu/macaroni-with-cheese-chicken-mushrooms-baked-oven.jpg'
    },
    {
        id: 12,
        name: 'BBQ Ribs',
        category: 'main',
        description: 'Slow-cooked pork ribs with tangy BBQ sauce and coleslaw',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop'
    },
    {
        id: 13,
        name: 'Garden Salad',
        category: 'main',
        description: 'Mixed greens with tomatoes, feta, lettuce, spinach and pine nuts',
        price: 14.99,
        image: 'assets/images/menu/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts.jpg',
        dietary: ['vegetarian', 'vegan']
    },
    {
        id: 14,
        name: 'Steak & Fries',
        category: 'main',
        description: 'Grilled ribeye steak with seasoned french fries',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop'
    },
    {
        id: 15,
        name: 'Fish Tacos',
        category: 'main',
        description: 'Crispy fish with cabbage slaw and chipotle mayo',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop'
    },
    {
        id: 16,
        name: 'Chicken Teriyaki Bowl',
        category: 'main',
        description: 'Grilled chicken with teriyaki glaze, rice, and vegetables',
        price: 15.99,
        image: 'assets/images/menu/closeup-spicy-cooked-rice-with-meat-vegetables-chips-plate-table.jpg'
    },
    {
        id: 17,
        name: 'Beef Lasagna',
        category: 'main',
        description: 'Layers of pasta with bolognese sauce and melted cheese',
        price: 19.99,
        image: 'assets/images/menu/classic-lasagna-with-bolognese-sauce.jpg'
    },
    {
        id: 18,
        name: 'Shrimp Scampi',
        category: 'main',
        description: 'Succulent shrimp in garlic butter sauce with linguine',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800&auto=format&fit=crop'
    },
    {
        id: 19,
        name: 'Vegetable Curry',
        category: 'main',
        description: 'Spiced vegetable curry served with basmati rice',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop',
        dietary: ['vegetarian', 'vegan']
    },
    {
        id: 20,
        name: 'Chicken Parmesan',
        category: 'main',
        description: 'Breaded chicken breast with marinara and melted cheese',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop'
    },
    {
        id: 43,
        name: 'Lobster Roll',
        category: 'main',
        description: 'Fresh lobster meat in a buttered roll with mayo',
        price: 26.99,
        image: 'https://images.unsplash.com/photo-1625938146369-9b6e24c6e5e6?w=800&auto=format&fit=crop'
    },
    {
        id: 44,
        name: 'Pulled Pork Sandwich',
        category: 'main',
        description: 'Slow-cooked pulled pork with BBQ sauce on a brioche bun',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1619221882420-7a0e3c64e6c0?w=800&auto=format&fit=crop'
    },
    {
        id: 45,
        name: 'Sushi Platter',
        category: 'main',
        description: 'Assorted sushi rolls with wasabi and ginger',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop'
    },
    {
        id: 46,
        name: 'Mushroom Risotto',
        category: 'main',
        description: 'Creamy arborio rice with wild mushrooms and parmesan',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1476124369491-c217e42e5443?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 47,
        name: 'Beef Burrito',
        category: 'main',
        description: 'Large flour tortilla filled with seasoned beef, rice, and beans',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop'
    },
    {
        id: 48,
        name: 'Chicken Quesadilla',
        category: 'main',
        description: 'Grilled tortilla with chicken, cheese, and peppers',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&auto=format&fit=crop'
    },
    {
        id: 49,
        name: 'Pad Thai',
        category: 'main',
        description: 'Thai stir-fried noodles with shrimp, peanuts, and tamarind',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop'
    },
    {
        id: 50,
        name: 'Lamb Chops',
        category: 'main',
        description: 'Grilled lamb chops with mint sauce and roasted potatoes',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop',
        featured: true
    },
    {
        id: 51,
        name: 'Falafel Wrap',
        category: 'main',
        description: 'Crispy falafel with hummus, tahini, and fresh vegetables',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&auto=format&fit=crop',
        dietary: ['vegetarian', 'vegan']
    },
    {
        id: 52,
        name: 'Chicken Tikka Masala',
        category: 'main',
        description: 'Tender chicken in spiced tomato cream sauce with naan',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop'
    },
    {
        id: 53,
        name: 'Penne Arrabiata',
        category: 'main',
        description: 'Penne pasta in spicy tomato sauce with garlic and chili',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    
    // Desserts
    {
        id: 21,
        name: 'Chocolate Lava Cake',
        category: 'desserts',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop',
        featured: true
    },
    {
        id: 22,
        name: 'New York Cheesecake',
        category: 'desserts',
        description: 'Classic creamy cheesecake with graham cracker crust',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1533134242116-8d93cc92a526?w=800&auto=format&fit=crop'
    },
    {
        id: 23,
        name: 'Tiramisu',
        category: 'desserts',
        description: 'Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop'
    },
    {
        id: 24,
        name: 'Ice Cream Sundae',
        category: 'desserts',
        description: 'Three scoops of ice cream with toppings and whipped cream',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop'
    },
    {
        id: 25,
        name: 'Apple Pie',
        category: 'desserts',
        description: 'Homemade apple pie with cinnamon and vanilla ice cream',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800&auto=format&fit=crop'
    },
    {
        id: 26,
        name: 'Brownies',
        category: 'desserts',
        description: 'Rich chocolate brownies with walnuts',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&auto=format&fit=crop'
    },
    {
        id: 27,
        name: 'Crème Brûlée',
        category: 'desserts',
        description: 'Classic French custard with caramelized sugar topping',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&auto=format&fit=crop'
    },
    {
        id: 28,
        name: 'Chocolate Mousse',
        category: 'desserts',
        description: 'Light and airy chocolate mousse with whipped cream',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1541599468348-e96984315921?w=800&auto=format&fit=crop'
    },
    {
        id: 54,
        name: 'Panna Cotta',
        category: 'desserts',
        description: 'Italian cream dessert with berry compote',
        price: 8.49,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop'
    },
    {
        id: 55,
        name: 'Churros',
        category: 'desserts',
        description: 'Spanish fried dough with cinnamon sugar and chocolate sauce',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1590952546074-8fd1c7f23aae?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 56,
        name: 'Macarons',
        category: 'desserts',
        description: 'French almond cookies in assorted flavors (6 pieces)',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 57,
        name: 'Banana Split',
        category: 'desserts',
        description: 'Three scoops of ice cream with banana, nuts, and toppings',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1563379091339-03b47888c235?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 58,
        name: 'Red Velvet Cake',
        category: 'desserts',
        description: 'Classic red velvet cake with cream cheese frosting',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&auto=format&fit=crop',
        dietary: ['vegetarian'],
        featured: true
    },
    
    // Beverages
    {
        id: 29,
        name: 'Iced Coffee',
        category: 'beverages',
        description: 'Cold brew coffee served over ice',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&auto=format&fit=crop'
    },
    {
        id: 30,
        name: 'Fruit Smoothie',
        category: 'beverages',
        description: 'Blend of fresh fruits and yogurt',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 31,
        name: 'Coca Cola',
        category: 'beverages',
        description: 'Classic soft drink',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop'
    },
    {
        id: 32,
        name: 'Milkshake',
        category: 'beverages',
        description: 'Thick and creamy milkshake - vanilla, chocolate, or strawberry',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 33,
        name: 'Green Tea',
        category: 'beverages',
        description: 'Hot or iced premium green tea',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    },
    {
        id: 34,
        name: 'Orange Juice',
        category: 'beverages',
        description: 'Freshly squeezed orange juice',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    },
    {
        id: 35,
        name: 'Mojito',
        category: 'beverages',
        description: 'Refreshing mint and lime mocktail',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop'
    },
    {
        id: 36,
        name: 'Espresso',
        category: 'beverages',
        description: 'Strong Italian coffee shot',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop'
    },
    {
        id: 37,
        name: 'Hot Chocolate',
        category: 'beverages',
        description: 'Rich hot chocolate with marshmallows',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 38,
        name: 'Sparkling Water',
        category: 'beverages',
        description: 'Refreshing sparkling mineral water',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    },
    {
        id: 59,
        name: 'Cappuccino',
        category: 'beverages',
        description: 'Classic Italian coffee with steamed milk and foam',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 60,
        name: 'Lemonade',
        category: 'beverages',
        description: 'Freshly squeezed lemonade with mint',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1583064313642-a7c149480c7e?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    },
    {
        id: 61,
        name: 'Mango Lassi',
        category: 'beverages',
        description: 'Traditional Indian yogurt drink with mango',
        price: 5.49,
        image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 62,
        name: 'Matcha Latte',
        category: 'beverages',
        description: 'Japanese green tea latte with steamed milk',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1536013089549-e7f9d1596194?w=800&auto=format&fit=crop',
        dietary: ['vegetarian']
    },
    {
        id: 63,
        name: 'Fresh Mint Tea',
        category: 'beverages',
        description: 'Moroccan-style mint tea served hot',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    },
    {
        id: 64,
        name: 'Watermelon Juice',
        category: 'beverages',
        description: 'Freshly pressed watermelon juice',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop',
        dietary: ['vegan']
    }
];

// ========== STATE MANAGEMENT ==========
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let searchQuery = '';

// ========== DOM ELEMENTS ==========
let elements = {};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements after DOM is loaded
    elements = {
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
    setupMobileThemeToggle();
    // Delay scroll animations slightly to ensure content is loaded first
    setTimeout(initScrollAnimations, 100);
}

// Setup mobile theme toggle
function setupMobileThemeToggle() {
    const mobileThemeToggle = document.getElementById('themeToggleMobile');
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme();
            updateMobileThemeText();
        });
        updateMobileThemeText();
    }
    
    // Close mobile menu after clicking cart or wishlist links
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        const mobileLinks = navMenu.querySelectorAll('.mobile-only a[href]');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                const menu = document.getElementById('navMenu');
                const toggle = document.getElementById('mobileToggle');
                if (menu && toggle) {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        });
    }
}

function updateMobileThemeText() {
    const isDark = document.body.classList.contains('dark-mode');
    const themeText = document.getElementById('themeTextMobile');
    const themeIcon = document.querySelector('#themeToggleMobile i');
    
    if (themeText) {
        themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
    if (themeIcon) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
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

    // Observe sections for scroll animations (skip hero and menu sections)
    const sections = document.querySelectorAll('section:not(.hero):not(.food-menu-section)');
    sections.forEach(section => {
        // Check if section is already in viewport
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport) {
            // If already visible, show it immediately
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            // If not visible, prepare for animation
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
        }
        
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Ensure menu section is always visible
    const menuSection = document.querySelector('.food-menu-section');
    if (menuSection) {
        menuSection.style.opacity = '1';
        menuSection.style.transform = 'translateY(0)';
        menuSection.style.visibility = 'visible';
    }
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    elements.mobileToggle.addEventListener('click', toggleMobileMenu);
    elements.mobileToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleMobileMenu();
    });
    
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.themeToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleTheme();
    });
    
    elements.orderNowBtn.addEventListener('click', () => scrollToSection('menu'));
    
    // Cart - Navigate to cart page
    elements.cartIcon.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
    elements.cartIcon.addEventListener('touchend', function(e) {
        e.preventDefault();
        window.location.href = 'cart.html';
    });
    
    // Wishlist - Navigate to wishlist page
    elements.wishlistIcon.addEventListener('click', () => {
        window.location.href = 'wishlist.html';
    });
    elements.wishlistIcon.addEventListener('touchend', function(e) {
        e.preventDefault();
        window.location.href = 'wishlist.html';
    });
    
    // Keep panel functionality for backwards compatibility (if panels still exist)
    if (elements.cartClose) {
        elements.cartClose.addEventListener('click', () => toggleCart(false));
    }
    if (elements.cartOverlay) {
        elements.cartOverlay.addEventListener('click', () => toggleCart(false));
    }
    if (elements.continueShopping) {
        elements.continueShopping.addEventListener('click', () => {
            toggleCart(false);
            scrollToSection('menu');
        });
    }
    if (elements.checkoutBtn) {
        elements.checkoutBtn.addEventListener('click', handleCheckout);
    }
    if (elements.wishlistClose) {
        elements.wishlistClose.addEventListener('click', () => toggleWishlist(false));
    }
    if (elements.wishlistOverlay) {
        elements.wishlistOverlay.addEventListener('click', () => toggleWishlist(false));
    }
    if (elements.continueShoppingWishlist) {
        elements.continueShoppingWishlist.addEventListener('click', () => {
            toggleWishlist(false);
            scrollToSection('menu');
        });
    }
    
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
    console.log('Toggle mobile menu clicked');
    console.log('navMenu element:', elements.navMenu);
    console.log('mobileToggle element:', elements.mobileToggle);
    
    if (elements.navMenu) {
        elements.navMenu.classList.toggle('active');
        console.log('navMenu active class:', elements.navMenu.classList.contains('active'));
    }
    if (elements.mobileToggle) {
        elements.mobileToggle.classList.toggle('active');
    }
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
        <div class="food-item-card">
            <div class="food-item-img">
                <button class="wishlist-heart-btn ${isInWishlist ? 'active' : ''}" data-id="${item.id}">
                    <i class="fas fa-heart"></i>
                </button>
                ${renderImageHTML(item.image, item.name)}
                ${item.dietary && item.dietary.includes('vegetarian') ? 
                    '<span class="diet-badge">Vegetarian</span>' : ''}
            </div>
            <div class="food-item-info">
                <h3 class="food-item-name">${item.name}</h3>
                <p class="food-item-desc">${item.description}</p>
                <div class="food-item-bottom">
                    <span class="food-item-price">$${item.price.toFixed(2)}</span>
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
                ${renderImageHTML(item.image, item.name)}
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

// Helper to render either an <img> tag (when an asset path or URL is provided) or a fallback emoji/span
function renderImageHTML(image, alt = '') {
    if (typeof image === 'string' && (
        image.startsWith('assets/') || 
        image.startsWith('./assets/') || 
        image.startsWith('/assets/') ||
        image.startsWith('http://') ||
        image.startsWith('https://')
    )) {
        return `<img src="${image}" alt="${escapeHtml(alt)}" />`;
    }
    // fallback (emoji or text)
    return `<span style="font-size: 5rem;">${escapeHtml(image)}</span>`;
}

// simple escape to avoid breaking HTML when rendering text
function escapeHtml(unsafe) {
    return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
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
            ${renderImageHTML(item.image, item.name)} ${escapeHtml(item.name)} - $${item.price.toFixed(2)}
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
                ${renderImageHTML(item.image, item.name)}
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                </div>
                <div class="cart-item-subtotal">
                    Subtotal: <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
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
    
    // Update mobile badge
    const mobileBadge = document.getElementById('cartBadgeMobile');
    if (mobileBadge) {
        mobileBadge.textContent = totalItems;
        mobileBadge.style.display = totalItems > 0 ? 'inline' : 'none';
    }
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

// ========== WISHLIST MANAGEMENT ==========
function toggleWishlistItem(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const existingIndex = wishlist.findIndex(i => i.id === itemId);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showToast(`${item.name} removed from wishlist`);
    } else {
        // Add to wishlist
        wishlist.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description
        });
        showToast(`${item.name} added to wishlist! ❤️`);
    }
    
    saveWishlistToStorage();
    updateWishlistDisplay();
    updateWishlistBadge();
    
    // Update heart button in menu
    const heartBtn = document.querySelector(`.wishlist-heart-btn[data-id="${itemId}"]`);
    if (heartBtn) {
        if (existingIndex !== -1) {
            heartBtn.classList.remove('active');
        } else {
            heartBtn.classList.add('active');
        }
    }
}

function removeFromWishlist(itemId) {
    wishlist = wishlist.filter(item => item.id !== itemId);
    saveWishlistToStorage();
    updateWishlistDisplay();
    updateWishlistBadge();
    
    // Update heart button in menu
    const heartBtn = document.querySelector(`.wishlist-heart-btn[data-id="${itemId}"]`);
    if (heartBtn) {
        heartBtn.classList.remove('active');
    }
}

function addToCartFromWishlist(itemId) {
    addToCart(itemId);
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(itemId);
}

function updateWishlistDisplay() {
    if (wishlist.length === 0) {
        elements.wishlistBody.innerHTML = `
            <div class="wishlist-empty">
                <i class="fas fa-heart"></i>
                <p>Your wishlist is empty</p>
                <button class="btn btn-secondary" id="continueShoppingWishlist">Browse Menu</button>
            </div>
        `;
        
        // Re-attach event listener
        document.getElementById('continueShoppingWishlist').addEventListener('click', () => {
            toggleWishlist(false);
            scrollToSection('menu');
        });
        return;
    }
    
    const wishlistItemsHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-image">
                ${renderImageHTML(item.image, item.name)}
            </div>
            <div class="wishlist-item-details">
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
                <button class="add-to-cart-from-wishlist" data-id="${item.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
            <button class="remove-btn" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    elements.wishlistBody.innerHTML = `<div class="wishlist-items">${wishlistItemsHTML}</div>`;
    
    // Add event listeners
    document.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            addToCartFromWishlist(id);
        });
    });
    
    document.querySelectorAll('.wishlist-item .remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromWishlist(id);
        });
    });
}

function updateWishlistBadge() {
    const totalItems = wishlist.length;
    elements.wishlistBadge.textContent = totalItems;
    elements.wishlistBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update mobile badge
    const mobileBadge = document.getElementById('wishlistBadgeMobile');
    if (mobileBadge) {
        mobileBadge.textContent = totalItems;
        mobileBadge.style.display = totalItems > 0 ? 'inline' : 'none';
    }
}

function toggleWishlist(show) {
    if (show) {
        elements.wishlistPanel.classList.add('active');
        updateWishlistDisplay();
    } else {
        elements.wishlistPanel.classList.remove('active');
    }
}

function clearWishlist() {
    wishlist = [];
    saveWishlistToStorage();
    updateWishlistDisplay();
    updateWishlistBadge();
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

function saveWishlistToStorage() {
    localStorage.setItem(CONFIG.STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem(CONFIG.STORAGE_KEYS.WISHLIST);
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
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
