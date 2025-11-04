# 🎯 FoodFrenzy - Complete Feature Guide

## 🛒 Shopping Cart Features

### Adding Items to Cart

1. **From Menu Page**

   - Browse the menu section
   - Click "**Add to Cart**" button on any item
   - Toast notification confirms addition
   - Cart badge updates with item count

2. **From Featured Section**
   - Click "**Add to Cart**" on featured dishes
   - Same confirmation and badge update

### Viewing Your Cart

- Click the **shopping cart icon** in the top navigation
- Cart panel slides in from the right side
- Shows all items you've added

### Cart Item Details

Each cart item displays:

- 🖼️ **Product Image** (emoji representation)
- 📝 **Product Name**
- 💵 **Unit Price** ($X.XX each)
- 🔢 **Quantity** (with +/- controls)
- 💰 **Item Subtotal** (price × quantity)
- 🗑️ **Remove Button** (trash icon)

### Managing Cart Items

**Increase Quantity:**

- Click the **+** button
- Subtotal updates instantly

**Decrease Quantity:**

- Click the **-** button
- If quantity reaches 0, item is removed
- Subtotal updates instantly

**Remove Item:**

- Click the **trash icon**
- Item removed immediately
- Totals recalculate

### Cart Summary

The cart footer shows:

- **Subtotal**: Sum of all item subtotals
- **Tax**: 8% of subtotal
- **Total**: Subtotal + Tax

All calculations update in **real-time** as you modify quantities.

### Cart Persistence

- Your cart is saved in **localStorage**
- Items remain even after:
  - Closing the browser
  - Refreshing the page
  - Navigating away
- Cart clears only when you complete an order

---

## ❤️ Wishlist Features

### What is a Wishlist?

Save items you're interested in but not ready to purchase. Perfect for:

- Planning future orders
- Saving favorite items
- Quick access to preferred dishes

### Adding to Wishlist

1. **From Menu Cards**

   - Look for the **heart icon** in the top-left of each menu item
   - Click the heart to add to wishlist
   - Heart turns **red** and animates with a heartbeat
   - Toast notification: "Item added to wishlist! ❤️"

2. **Visual Feedback**
   - Red heart = Item in wishlist
   - Gray heart = Not in wishlist
   - Wishlist badge shows total count

### Viewing Your Wishlist

1. Click the **red heart icon** in the navigation bar
2. Wishlist panel slides in from the right
3. See all your saved items

### Wishlist Item Details

Each wishlist item shows:

- 🖼️ **Product Image** (emoji)
- 📝 **Product Name**
- 💵 **Price**
- 🛒 **"Add to Cart" Button**
- 🗑️ **Remove Button**

### Managing Wishlist

**Add to Cart from Wishlist:**

- Click "**Add to Cart**" button
- Item goes straight to shopping cart
- Item stays in wishlist (you can keep it saved)
- Toast notification confirms addition

**Remove from Wishlist:**

- Click the **trash icon**
- Item removed immediately
- Badge count updates
- Heart icon on menu card turns gray

**Wishlist Persistence:**

- Saved in localStorage
- Survives browser closes
- Remains until you remove items

---

## 🔍 Search & Filter Features

### Search

- **Location**: Search bar in menu section
- **Features**:
  - Real-time search as you type
  - Searches item names and descriptions
  - Case-insensitive
  - Autocomplete suggestions (up to 5 items)
  - Shows "No items found" if no matches

**How to Use:**

1. Click in the search bar
2. Start typing (e.g., "pizza", "burger")
3. See live results
4. Click autocomplete suggestion to select

### Category Filters

**Available Categories:**

- **All** - Shows all 28 items
- **Starters** - 6 appetizers
- **Main Dishes** - 10 entrées
- **Desserts** - 6 sweet treats
- **Beverages** - 6 drinks

**How to Use:**

1. Click any category button
2. Menu updates instantly
3. Active filter is highlighted
4. Combine with search for precise results

---

## 💳 Checkout Process

### Starting Checkout

1. Add items to cart
2. Click "**Proceed to Checkout**"
3. Checkout page displays

### Checkout Page Layout

**Left Side - Delivery Form:**

- Full Name (required)
- Email Address (required, validated)
- Phone Number (required, validated)
- Delivery Address (required)
- Payment Method (dropdown)

**Right Side - Order Summary:**

- List of all cart items with quantities
- Subtotal
- Tax (8%)
- Total

### Form Validation

**Real-time Validation:**

- Fields validate as you type/exit
- Red border = Error
- Error message appears below field

**Validation Rules:**

- **Name**: Cannot be empty
- **Email**: Must be valid format (user@domain.com)
- **Phone**: Must be valid (at least 10 digits)
- **Address**: Cannot be empty
- **Payment**: Must select an option

### Placing Order

1. Fill all required fields correctly
2. Click "**Place Order**"
3. Confirmation modal appears showing:
   - Success checkmark
   - Order number (FF########)
   - Estimated delivery: 30-45 minutes
4. Click "**Back to Home**"
5. Cart automatically clears
6. Form resets

---

## 🌙 Dark Mode

### Activating Dark Mode

1. Click the **moon icon** in navigation
2. Page transitions to dark theme
3. Icon changes to **sun**

### Dark Mode Features

- Dark background colors
- Light text for readability
- Adjusted shadows and borders
- All sections adapt
- Saved to localStorage
- Persists across sessions

### Deactivating

- Click the **sun icon**
- Returns to light mode

---

## 📱 Mobile Experience

### Mobile Navigation

- Tap **hamburger menu** (≡) icon
- Navigation menu slides down
- Tap any link to navigate
- Menu auto-closes

### Mobile Cart & Wishlist

- Full-screen width on mobile
- Touch-friendly buttons
- Easy quantity adjustment
- Smooth swipe gestures

### Responsive Layouts

- **Mobile** (320px - 767px): 1-column grid
- **Tablet** (768px - 1023px): 2-column grid
- **Desktop** (1024px+): 3-4 column grid

---

## 🎨 Additional Features

### Featured Dishes

- Appears on homepage
- Showcases 3 special items
- Add to cart directly
- Add to wishlist with heart icon

### Contact Form

1. Fill name, email, message
2. Click "**Send Message**"
3. Form validates
4. Success toast appears
5. Form clears

### Newsletter

1. Enter email in footer
2. Click paper plane icon
3. Validates email
4. Success toast confirms

### Smooth Scrolling

- Click navigation links
- Page scrolls smoothly to section
- Proper offset for fixed header

---

## 💾 Data Storage

### What's Saved

- **Cart Items**: Products, quantities, prices
- **Wishlist Items**: Saved favorites
- **Theme Preference**: Light/dark mode

### Where It's Saved

- Browser's localStorage
- Specific to your browser
- No server/cloud storage
- Private to your device

### Clearing Data

- **Cart**: Completes on checkout or manual removal
- **Wishlist**: Remove items individually
- **Browser**: Clear browser data to reset all

---

## ⌨️ Keyboard Navigation

- **Tab**: Move between interactive elements
- **Enter/Space**: Activate buttons
- **Esc**: Close modals/panels (future feature)
- **Arrow Keys**: Navigate autocomplete (when visible)

---

## 🎯 Pro Tips

### Shopping Efficiently

1. ✅ Use wishlist to save items while browsing
2. ✅ Add multiple items before checkout
3. ✅ Check cart subtotals before proceeding
4. ✅ Use search for quick item finding
5. ✅ Filter by category to explore

### Best Practices

- 📱 Add to wishlist on mobile, checkout on desktop
- 🔍 Search first for known items
- 🛒 Review cart totals before checkout
- ❤️ Use wishlist for meal planning
- 🌙 Try dark mode for evening browsing

### Hidden Features

- 🎨 Cart items slide when you hover
- 💓 Heart button animates when clicked
- 🔔 Toast auto-dismisses after 3 seconds
- ⚡ Search debounces for performance
- 📊 Real-time price calculations

---

## 🆘 Troubleshooting

### Cart Not Updating?

- Refresh the page
- Check browser console for errors
- Ensure JavaScript is enabled

### Wishlist Not Saving?

- Check localStorage is enabled
- Clear browser cache
- Try a different browser

### Items Not Appearing?

- Clear search/filters
- Check "All" category is selected
- Refresh the page

### Checkout Not Working?

- Fill all required fields
- Check email/phone format
- Look for red error messages

---

## 📊 Statistics

- **Total Menu Items**: 28
- **Categories**: 4
- **Featured Items**: 3
- **Max Cart Items**: Unlimited
- **Max Wishlist Items**: Unlimited
- **Tax Rate**: 8%
- **Delivery Time**: 30-45 minutes

---

## 🎉 That's Everything!

You now know all the features of FoodFrenzy. Enjoy your shopping experience!

**Questions?** Use the contact form on the website.

**Happy Ordering! 🍔🍕🍰**
