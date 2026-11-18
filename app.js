/* =================================================================
   JM CAKES - INTERACTIVE ENGINE & STORE SCRIPT
================================================================= */

// Catalog Data with rich photography, dietary metadata and occasions
const cakeProducts = [
  {
    id: 'cake-1',
    name: 'Belgian Truffle Silk Drip',
    category: 'chocolate',
    occasions: ['birthday', 'anniversary'],
    dietary: 'Signature',
    price: 88.00,
    rating: 5.0,
    reviews: 48,
    slices: '12 - 16 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs. Nut-free batch available.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    description: 'Triple-layer 70% dark Belgian cocoa sponge coated with hand-dripped ganache, whipped rosettes and fresh cherries.',
    flavorNotes: 'Bittersweet chocolate, Madagascan vanilla, rich dark cocoa truffle.'
  },
  {
    id: 'cake-2',
    name: 'Tasmanian Berry Chiffon (GF)',
    category: 'dietary',
    occasions: ['birthday', 'anniversary', 'wedding'],
    dietary: 'Gluten-Free',
    price: 92.00,
    rating: 4.9,
    reviews: 34,
    slices: '14 - 18 Slices',
    allergens: 'Gluten-Free. Contains Almond Meal, Dairy, Eggs.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
    description: 'Fine almond flour sponge with whipped white chocolate mousse, layered with fresh local raspberries, strawberries, and coulis drip.',
    flavorNotes: 'Fresh mountain berries, subtle almond crumb, creamy white ganache.'
  },
  {
    id: 'cake-3',
    name: 'Midnight Chocolate Bow Showstopper',
    category: 'chocolate',
    occasions: ['anniversary', 'wedding'],
    dietary: 'Best Seller',
    price: 110.00,
    rating: 5.0,
    reviews: 52,
    slices: '16 - 22 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80',
    description: 'Sculpted chocolate silk ribbons resting atop dense fudge cake with sea-salt caramel crunch layers.',
    flavorNotes: 'Salted butter caramel, 72% Belgian dark chocolate, silky ribbon chocolate art.'
  },
  {
    id: 'cake-4',
    name: 'Rose Gold Botanical 2-Tier',
    category: 'wedding',
    occasions: ['wedding', 'anniversary'],
    dietary: 'Wedding Tier',
    price: 240.00,
    rating: 5.0,
    reviews: 29,
    slices: '35 - 45 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs. Can be made GF upon request.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    description: 'Pure Tahitian vanilla crumb, hand-painted edible 24k gold leaf and fresh organic edible roses on silky buttercream.',
    flavorNotes: 'Floral rose essence, Tahitian vanilla, light Swiss meringue.'
  },
  {
    id: 'cake-5',
    name: 'Candlelight Confetti Joy',
    category: 'birthday',
    occasions: ['birthday'],
    dietary: 'Celebration',
    price: 78.00,
    rating: 4.8,
    reviews: 63,
    slices: '12 - 16 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80',
    description: 'Funfetti vanilla sponge filled with strawberry coulis and frosted in pastel swiss meringue buttercream.',
    flavorNotes: 'Sweet cream, strawberry compote, birthday confetti excitement.'
  },
  {
    id: 'cake-6',
    name: 'Oat Ganache Velvet Fudge (Vegan)',
    category: 'dietary',
    occasions: ['birthday', 'holiday'],
    dietary: '100% Vegan',
    price: 95.00,
    rating: 4.9,
    reviews: 41,
    slices: '12 - 16 Slices',
    allergens: '100% Dairy-Free & Egg-Free. Contains Gluten & Pecans (Nut-free option available).',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
    description: 'Completely dairy & egg-free chocolate velvet paired with whipped oat milk ganache and roasted pecans.',
    flavorNotes: 'Rich cocoa, toasted pecans, velvety oat milk creaminess.'
  },
  {
    id: 'cake-7',
    name: 'Golden Salted Honeycomb',
    category: 'birthday',
    occasions: ['birthday', 'anniversary'],
    dietary: 'Artisan',
    price: 85.00,
    rating: 4.9,
    reviews: 27,
    slices: '12 - 16 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    description: 'Caramelised sponge, Tasmanian honeycomb shards, Madagascar vanilla and salted butter caramel drip.',
    flavorNotes: 'Crunchy golden honeycomb, toffee caramel, vanilla bean.'
  },
  {
    id: 'cake-8',
    name: 'Artisan Macaron Cupcake Box (6pk)',
    category: 'pastry',
    occasions: ['birthday', 'holiday'],
    dietary: 'Boxed Gift',
    price: 42.00,
    rating: 4.9,
    reviews: 88,
    slices: '6 Individual Gourmet Cupcakes',
    allergens: 'Contains Dairy, Almonds (Macarons), Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
    description: 'Six artisanal dark cocoa cupcakes crowned with handcrafted chocolate macarons and edible gold dust.',
    flavorNotes: 'Almond macarons, dark chocolate fudge sponge, ganache swirls.'
  },
  {
    id: 'cake-9',
    name: 'Vintage Baroque White Wedding',
    category: 'wedding',
    occasions: ['wedding', 'anniversary'],
    dietary: 'Luxury',
    price: 320.00,
    rating: 5.0,
    reviews: 19,
    slices: '50 - 70 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=600&q=80',
    description: 'Regal piped Lambeth technique in royal white buttercream with champagne infusion and pearl dragées.',
    flavorNotes: 'Vintage champagne buttercream, moist white velvet crumb.'
  },
  {
    id: 'cake-10',
    name: 'Tasmanian Spiced Dark Choc Log',
    category: 'holiday',
    occasions: ['holiday'],
    dietary: 'Festive Special',
    price: 89.00,
    rating: 5.0,
    reviews: 38,
    slices: '12 - 14 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&q=80',
    description: 'Traditional holiday yule log with rich spiced dark chocolate mousse, winter cherries and dusting of snow sugar.',
    flavorNotes: 'Cinnamon clove, cherry liqueur, rich dark Belgian cocoa.'
  },
  {
    id: 'cake-11',
    name: 'Cranberry & White Gold Garland',
    category: 'holiday',
    occasions: ['holiday', 'anniversary'],
    dietary: 'Seasonal',
    price: 94.00,
    rating: 4.9,
    reviews: 24,
    slices: '14 - 18 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs. Gluten-free option available.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    description: 'Spiced vanilla sponge with tart Tasmanian cranberry compote, white chocolate drip and rosemary wreath decor.',
    flavorNotes: 'Tart wild cranberry, white chocolate silk, festive aromatics.'
  },
  {
    id: 'cake-12',
    name: 'Ruby Romance Velvet & Pearls',
    category: 'anniversary',
    occasions: ['anniversary', 'wedding'],
    dietary: 'Romantic Choice',
    price: 96.00,
    rating: 5.0,
    reviews: 43,
    slices: '12 - 16 Slices',
    allergens: 'Contains Dairy, Gluten, Eggs.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
    description: 'Layered crimson velvet sponge paired with vanilla bean cream cheese frosting, hand-crafted chocolate pearls and red berry drip.',
    flavorNotes: 'Cream cheese tang, red velvet cocoa notes, fresh raspberry.'
  }
];

// Shopping Cart State
let shoppingCart = [];
let activeCategoryFilter = 'all';
let searchQuery = '';

// Delivery Fee Matrix
let selectedDeliveryMethod = 'pickup';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initFilterTabs();
  initMobileNav();
  initHeaderScroll();
  initGlobalKeyboardShortcuts();
  updateCakeCustomizer(); // initialize customizer preview
  
  // Set default min date for consultation and checkout forms (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];
  const cDateInput = document.getElementById('cDate');
  const chkDateInput = document.getElementById('chkDate');
  if (cDateInput) cDateInput.min = minDateStr;
  if (chkDateInput) chkDateInput.min = minDateStr;
});

/* ================= PRODUCT CATALOG RENDERING ================= */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = cakeProducts.filter(cake => {
    // Category check
    let matchesCategory = false;
    if (activeCategoryFilter === 'all') {
      matchesCategory = true;
    } else if (activeCategoryFilter === 'dietary' || activeCategoryFilter === 'gluten-free') {
      matchesCategory = cake.dietary.toLowerCase().includes('gluten-free') || cake.category === 'dietary';
    } else if (activeCategoryFilter === 'vegan') {
      matchesCategory = cake.dietary.toLowerCase().includes('vegan') || cake.category === 'dietary';
    } else if (activeCategoryFilter === 'nut-safe') {
      matchesCategory = cake.allergens.toLowerCase().includes('nut-free');
    } else {
      matchesCategory = (cake.category === activeCategoryFilter) || 
                        (cake.occasions && cake.occasions.includes(activeCategoryFilter));
    }

    // Search query check
    let matchesSearch = true;
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      matchesSearch = cake.name.toLowerCase().includes(q) ||
                      cake.description.toLowerCase().includes(q) ||
                      cake.dietary.toLowerCase().includes(q) ||
                      cake.flavorNotes.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: #e5b958; margin-bottom: 16px; display: block;"></i>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff; margin-bottom: 8px;">No Sweet Matches Found</h3>
        <p style="color: #ebd8c3; max-width: 480px; margin: 0 auto 20px;">We couldn't find any cakes matching "${searchQuery}". Try a different keyword or explore our custom cake builder!</p>
        <button class="btn-gold-pill" onclick="clearCatalogSearch()">View All Cakes</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(cake => `
    <article class="cake-product-card" data-category="${cake.category}">
      <div class="card-img-wrap" onclick="openQuickView('${cake.id}')" title="Click to inspect cake details">
        <img src="${cake.image}" alt="${cake.name}" loading="lazy">
        <span class="card-badge">${cake.dietary}</span>
        <div class="card-hover-overlay">
          <span><i class="fa-solid fa-eye"></i> Quick View</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-rating">
          ${'★'.repeat(Math.floor(cake.rating))}
          <span>(${cake.reviews} reviews)</span>
        </div>
        <h3 class="card-title" onclick="openQuickView('${cake.id}')">${cake.name}</h3>
        <p class="card-desc">${cake.description}</p>
        <div class="card-meta-line">
          <span><i class="fa-solid fa-users"></i> ${cake.slices}</span>
        </div>
        <div class="card-footer">
          <span class="card-price">$${cake.price.toFixed(2)}</span>
          <button class="btn-add-card" onclick="addToCart('${cake.id}')" aria-label="Add ${cake.name} to bag">
            <i class="fa-solid fa-cart-plus"></i> Add to Bag
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function initFilterTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategoryFilter = tab.getAttribute('data-filter') || 'all';
      renderProducts();
    });
  });
}

function filterCakes(categoryName) {
  activeCategoryFilter = categoryName;

  const tabs = document.querySelectorAll('.tab-btn');
  let matched = false;
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === categoryName) {
      t.classList.add('active');
      matched = true;
    } else {
      t.classList.remove('active');
    }
  });

  // If specific dietary like 'gluten-free' or 'vegan' doesn't have an exact tab, keep dietary active
  if (!matched && (categoryName === 'gluten-free' || categoryName === 'vegan' || categoryName === 'nut-safe')) {
    tabs.forEach(t => {
      if (t.getAttribute('data-filter') === 'dietary') t.classList.add('active');
    });
  }

  renderProducts();
  
  // Smooth scroll to catalog section
  const catalogSec = document.getElementById('cakes');
  if (catalogSec) {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleCatalogSearch(query) {
  searchQuery = query;
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }
  renderProducts();
}

function clearCatalogSearch() {
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  activeCategoryFilter = 'all';
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-filter') === 'all') t.classList.add('active');
    else t.classList.remove('active');
  });
  renderProducts();
}

/* ================= PRODUCT QUICK VIEW MODAL ================= */
function openQuickView(productId) {
  const cake = cakeProducts.find(p => p.id === productId);
  if (!cake) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContent');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="qv-img-col">
      <img src="${cake.image}" alt="${cake.name}" class="qv-image">
      <div class="qv-dietary-badge">${cake.dietary}</div>
    </div>
    <div class="qv-details-col">
      <span class="qv-badge"><i class="fa-solid fa-crown"></i> Hobart Atelier Fresh Daily</span>
      <h2 class="qv-title">${cake.name}</h2>
      <div class="card-rating" style="margin-bottom: 12px;">
        ${'★'.repeat(Math.floor(cake.rating))}
        <span>${cake.rating}.0 (${cake.reviews} verified customer reviews)</span>
      </div>
      <div class="qv-price">$${cake.price.toFixed(2)} AUD</div>
      <p class="qv-desc">${cake.description}</p>
      
      <div class="qv-specs-box">
        <div class="qv-spec-row">
          <strong><i class="fa-solid fa-users"></i> Servings:</strong>
          <span>${cake.slices}</span>
        </div>
        <div class="qv-spec-row">
          <strong><i class="fa-solid fa-utensils"></i> Flavour Profile:</strong>
          <span>${cake.flavorNotes}</span>
        </div>
        <div class="qv-spec-row">
          <strong><i class="fa-solid fa-triangle-exclamation"></i> Allergen Info:</strong>
          <span>${cake.allergens}</span>
        </div>
        <div class="qv-spec-row">
          <strong><i class="fa-solid fa-temperature-arrow-down"></i> Shelf Life & Storage:</strong>
          <span>Keeps chilled at 4°C for up to 5 days. Best enjoyed at room temp.</span>
        </div>
      </div>

      <div class="qv-action-row">
        <button class="btn-gold btn-block" onclick="addToCart('${cake.id}'); closeQuickView();">
          <i class="fa-solid fa-cart-plus"></i> Add to Bag &bull; $${cake.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
}

/* ================= SHOPPING CART FUNCTIONS ================= */
function addToCart(productId) {
  const product = cakeProducts.find(p => p.id === productId);
  if (!product) return;

  const existing = shoppingCart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    shoppingCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      dietary: product.dietary,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Added "${product.name}" to your bag! 🎂`);
  openCart();
}

function updateCartUI() {
  const cartList = document.getElementById('cartItemsList');
  const cartCountBadges = [
    document.getElementById('cartCount'),
    document.getElementById('cartDrawerCount')
  ];
  const subtotalDisplay = document.getElementById('cartSubtotal');
  const progressText = document.getElementById('deliveryProgressText');
  const progressBar = document.getElementById('deliveryProgressBar');

  const totalCount = shoppingCart.reduce((sum, item) => sum + item.qty, 0);
  const itemsSubtotal = shoppingCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  cartCountBadges.forEach(badge => {
    if (badge) badge.innerText = totalCount;
  });

  // Calculate Delivery Fee
  let deliveryFee = 0;
  if (selectedDeliveryMethod === 'courier') {
    deliveryFee = itemsSubtotal >= 120 ? 0 : 12.00;
  } else if (selectedDeliveryMethod === 'regional') {
    deliveryFee = 25.00;
  }

  const deliveryCostElem = document.getElementById('cartDeliveryCost');
  if (deliveryCostElem) {
    if (deliveryFee === 0) {
      deliveryCostElem.innerText = 'FREE';
      deliveryCostElem.className = 'green-text';
    } else {
      deliveryCostElem.innerText = `$${deliveryFee.toFixed(2)}`;
      deliveryCostElem.className = '';
    }
  }

  const finalTotal = itemsSubtotal + deliveryFee;
  if (subtotalDisplay) {
    subtotalDisplay.innerText = `$${finalTotal.toFixed(2)}`;
  }

  // Delivery Progress Bar Logic
  if (progressText && progressBar) {
    if (itemsSubtotal >= 120) {
      progressText.innerHTML = '🎉 You unlocked <strong>FREE Hobart delivery!</strong>';
      progressBar.style.width = '100%';
    } else {
      const needed = (120 - itemsSubtotal).toFixed(2);
      const percent = Math.min(100, Math.round((itemsSubtotal / 120) * 100));
      progressText.innerHTML = `Add <strong>$${needed}</strong> more for Free Local Delivery!`;
      progressBar.style.width = `${percent}%`;
    }
  }

  if (!cartList) return;

  if (shoppingCart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-cake-candles"></i>
        <h4>Your sweet bag is empty</h4>
        <p>Explore our artisan creations and add your favorite treats!</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = shoppingCart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-meta">${item.dietary || 'Bespoke Order'}</span>
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)" aria-label="Decrease">&minus;</button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)" aria-label="Increase">&#43;</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-remove-item" onclick="removeCartItem(${index})" title="Remove item">&times;</button>
      </div>
    </div>
  `).join('');
}

function changeCartQty(index, change) {
  if (!shoppingCart[index]) return;
  shoppingCart[index].qty += change;
  if (shoppingCart[index].qty <= 0) {
    shoppingCart.splice(index, 1);
  }
  updateCartUI();
}

function removeCartItem(index) {
  if (!shoppingCart[index]) return;
  const removedName = shoppingCart[index].name;
  shoppingCart.splice(index, 1);
  updateCartUI();
  showToast(`Removed "${removedName}" from bag.`);
}

function updateCartDelivery() {
  const select = document.getElementById('cartDeliveryMethod');
  if (select) {
    selectedDeliveryMethod = select.value;
    updateCartUI();
  }
}

function openCart() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
}

function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
}

document.getElementById('openCartBtn')?.addEventListener('click', openCart);

/* ================= CHECKOUT MODAL FLOW ================= */
function openCheckoutModal() {
  if (shoppingCart.length === 0) {
    showToast('Your bag is empty! Please add some delicious cakes first. 🎂');
    return;
  }
  closeCart();
  const modal = document.getElementById('checkoutModal');
  const summaryBox = document.getElementById('checkoutSummaryBox');
  if (!modal || !summaryBox) return;

  const subtotal = shoppingCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let deliveryFee = 0;
  if (selectedDeliveryMethod === 'courier') deliveryFee = subtotal >= 120 ? 0 : 12.00;
  else if (selectedDeliveryMethod === 'regional') deliveryFee = 25.00;
  const total = subtotal + deliveryFee;

  summaryBox.innerHTML = `
    <div class="sum-row">
      <span>Order Items (${shoppingCart.reduce((s, i) => s + i.qty, 0)}):</span>
      <strong>$${subtotal.toFixed(2)}</strong>
    </div>
    <div class="sum-row">
      <span>Delivery (${selectedDeliveryMethod === 'pickup' ? 'Atelier Pickup' : 'Courier'}):</span>
      <strong>${deliveryFee === 0 ? 'FREE' : '$' + deliveryFee.toFixed(2)}</strong>
    </div>
    <div class="sum-row price-highlight">
      <span>Final Total to Pay:</span>
      <span class="total-price">$${total.toFixed(2)} AUD</span>
    </div>
  `;

  modal.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
}

function processOrderCheckout(e) {
  e.preventDefault();
  const name = document.getElementById('chkName')?.value;
  const email = document.getElementById('chkEmail')?.value;
  const date = document.getElementById('chkDate')?.value;
  const total = document.getElementById('cartSubtotal')?.innerText || '$0.00';

  alert(`🎉 Thank you, ${name}!\n\nYour JM Cakes order for ${date} has been confirmed.\nA receipt and chilled delivery tracking link have been dispatched to ${email}.\nTotal Paid: ${total}`);

  shoppingCart = [];
  updateCartUI();
  closeCheckoutModal();
  showToast('Order confirmed! We are preparing your celebration cake.');
}

/* ================= 3D / LIVE CAKE CUSTOMIZER ENGINE ================= */
function openCustomizerModal() {
  const modal = document.getElementById('customizerModal');
  if (modal) {
    modal.classList.add('active');
    updateCakeCustomizer();
  }
}

function closeCustomizerModal() {
  const modal = document.getElementById('customizerModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function updateCakeCustomizer() {
  // 1. Tiers
  const tierRadios = document.getElementsByName('cakeTiers');
  let selectedTiers = '2';
  for (let r of tierRadios) {
    if (r.checked) selectedTiers = r.value;
  }

  // 2. Sponge Flavor
  const spongeSelect = document.getElementById('spongeFlavor');
  let spongeColor = '#3d1e15';
  let spongeName = 'Belgian Dark Chocolate';
  if (spongeSelect) {
    const selectedOption = spongeSelect.options[spongeSelect.selectedIndex];
    spongeColor = selectedOption.getAttribute('data-color') || '#3d1e15';
    spongeName = selectedOption.getAttribute('data-name') || 'Belgian Chocolate';
  }

  // 3. Drip finish
  const dripRadios = document.getElementsByName('cakeDrip');
  let selectedDrip = 'chocolate';
  for (let r of dripRadios) {
    if (r.checked) selectedDrip = r.value;
  }

  // 4. Topping Crown
  const toppingRadios = document.getElementsByName('cakeTopping');
  let selectedTopping = 'berries';
  for (let r of toppingRadios) {
    if (r.checked) selectedTopping = r.value;
  }

  // 5. Dietary options
  const isGF = document.getElementById('dietGF')?.checked;
  const isVegan = document.getElementById('dietVegan')?.checked;

  // Pricing & Sizing Calculation
  let basePrice = 95;
  let servings = '12 - 16 Guests';
  if (selectedTiers === '2') {
    basePrice = 185;
    servings = '25 - 35 Guests';
  } else if (selectedTiers === '3') {
    basePrice = 290;
    servings = '50 - 75 Guests';
  }

  if (isGF) basePrice += 15;
  if (isVegan) basePrice += 15;

  let toppingLabel = 'Fresh Berries & Gold Flakes';
  let toppingEmoji = '🍓 ✨ 🍒';
  if (selectedTopping === 'macarons') {
    basePrice += 10;
    toppingLabel = 'Chocolate Macarons & Truffles';
    toppingEmoji = '🍬 🍫 ✨';
  } else if (selectedTopping === 'floral') {
    basePrice += 12;
    toppingLabel = 'Organic Edible Rose Florals';
    toppingEmoji = '🌸 🌹 ✨';
  } else if (selectedTopping === 'minimal') {
    toppingLabel = 'Whipped Rosettes';
    toppingEmoji = '✨ 🧁';
  }

  // Visual Updates to Cake Stage
  const visTop = document.getElementById('visTierTop');
  const visMid = document.getElementById('visTierMid');
  const visBase = document.getElementById('visTierBase');
  const visDrip = document.getElementById('visDrip');
  const visToppingElem = document.getElementById('visTopping');

  if (visTop && visMid && visBase) {
    visTop.style.backgroundColor = spongeColor;
    visMid.style.backgroundColor = spongeColor;
    visBase.style.backgroundColor = spongeColor;

    if (selectedTiers === '1') {
      visTop.style.display = 'block';
      visMid.style.display = 'none';
      visBase.style.display = 'none';
      visTop.style.width = '180px';
      visTop.style.height = '85px';
    } else if (selectedTiers === '2') {
      visTop.style.display = 'block';
      visMid.style.display = 'none';
      visBase.style.display = 'block';
      visTop.style.width = '130px';
      visTop.style.height = '65px';
    } else {
      visTop.style.display = 'block';
      visMid.style.display = 'block';
      visBase.style.display = 'block';
      visTop.style.width = '110px';
      visTop.style.height = '55px';
    }
  }

  // Drip styling
  if (visDrip) {
    if (selectedDrip === 'chocolate') {
      visDrip.style.display = 'block';
      visDrip.style.background = 'repeating-linear-gradient(90deg, #1f0b0d, #1f0b0d 14px, transparent 14px, transparent 20px)';
    } else if (selectedDrip === 'gold') {
      visDrip.style.display = 'block';
      visDrip.style.background = 'repeating-linear-gradient(90deg, #e5b958, #e5b958 14px, transparent 14px, transparent 20px)';
    } else if (selectedDrip === 'berry') {
      visDrip.style.display = 'block';
      visDrip.style.background = 'repeating-linear-gradient(90deg, #c71f37, #c71f37 14px, transparent 14px, transparent 20px)';
    } else {
      visDrip.style.display = 'none';
    }
  }

  if (visToppingElem) {
    visToppingElem.innerText = toppingEmoji;
  }

  // Summary labels
  const sumSummary = document.getElementById('sumSummary');
  const sumServings = document.getElementById('sumServings');
  const sumTopping = document.getElementById('sumTopping');
  const priceDisplay = document.getElementById('customPriceDisplay');

  if (sumSummary) sumSummary.innerText = `${selectedTiers} Tier${selectedTiers > 1 ? 's' : ''} • ${spongeName}`;
  if (sumServings) sumServings.innerText = servings;
  if (sumTopping) sumTopping.innerText = toppingLabel;
  if (priceDisplay) priceDisplay.innerText = `$${basePrice.toFixed(2)}`;
}

function updateInscriptionPreview(text) {
  const badge = document.getElementById('visInscriptionBadge');
  if (!badge) return;
  if (text.trim().length > 0) {
    badge.innerText = `"${text.trim()}"`;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

function handleCustomOrderSubmit(e) {
  e.preventDefault();
  const priceDisplay = document.getElementById('customPriceDisplay');
  const price = priceDisplay ? parseFloat(priceDisplay.innerText.replace('$', '')) : 185;
  const summary = document.getElementById('sumSummary')?.innerText || 'Custom Artisan Cake';
  const inscription = document.getElementById('customInscription')?.value;
  const topping = document.getElementById('sumTopping')?.innerText;

  const customItem = {
    id: 'custom-' + Date.now(),
    name: `Custom Designed Cake (${summary})`,
    price: price,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80',
    dietary: `${topping} ${inscription ? `&bull; Plaque: "${inscription}"` : ''}`,
    qty: 1
  };

  shoppingCart.push(customItem);
  updateCartUI();
  closeCustomizerModal();
  showToast('Your custom cake creation has been added to your bag! 🍰');
  openCart();
}

/* ================= CONSULTATION & NEWSLETTER HANDLERS ================= */
function handleConsultSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cName')?.value;
  const occasion = document.getElementById('cOccasion')?.value;
  const date = document.getElementById('cDate')?.value;

  alert(`Thank you, ${name}!\n\nYour consultation request for your ${occasion} on ${date} has been submitted.\nChef Julian & our wedding design team will contact you within 24 hours with tasting availability.`);
  e.target.reset();
  showToast('Consultation request received! 🥂');
}

function handleNewsletter(e) {
  e.preventDefault();
  alert('Welcome to the JM Cakes Hobart Sweet Club! Check your inbox for your 10% welcome coupon on your first order.');
  e.target.reset();
  showToast('Subscribed to Sweet Club!');
}

/* ================= TOAST NOTIFICATION SYSTEM ================= */
function showToast(message) {
  const container = document.getElementById('toastBox');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ================= MODAL BACKDROP CLICK & KEYBOARD ESCAPE ================= */
function handleBackdropClick(e, modalId) {
  if (e.target.id === modalId) {
    if (modalId === 'customizerModal') closeCustomizerModal();
    if (modalId === 'quickViewModal') closeQuickView();
    if (modalId === 'checkoutModal') closeCheckoutModal();
  }
}

function initGlobalKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomizerModal();
      closeQuickView();
      closeCheckoutModal();
      closeCart();
      document.getElementById('mobileDrawer')?.classList.remove('active');
    }
  });
}

/* ================= NAVIGATION & HEADER BEHAVIOR ================= */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    }

    const mobileLinks = drawer.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });
  }
}

function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.backgroundColor = 'rgba(38, 12, 16, 0.98)';
      header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
    } else {
      header.style.backgroundColor = 'rgba(61, 22, 28, 0.94)';
      header.style.boxShadow = 'none';
    }
  });
}
