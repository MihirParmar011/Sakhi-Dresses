// --- Button Actions ---
document.getElementById('callBtn').addEventListener('click', function() {
  window.location.href = 'tel:+919924573140';
});

document.getElementById('directionsBtn').addEventListener('click', function() {
  window.open('https://www.google.com/maps/dir/?api=1&destination=Sakhi+Dresses+Mahuva', '_blank');
});

document.getElementById('shareBtn').addEventListener('click', function() {
  if (navigator.share) {
    navigator.share({
      title: 'Sakhi Dresses',
      text: 'Check out Sakhi Dresses for beautiful ethnic wear!',
      url: window.location.href
    }).catch(err => console.error('Error sharing:', err));
  } else {
    // Fallback for desktop
    const shareUrl = `https://wa.me/?text=Check%20out%20Sakhi%20Dresses%20${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
  }
});

// --- Google Review Button ---
document.getElementById('googleReviewBtn').addEventListener('click', function() {
  const placeId = 'ChIJFT6C-i8l4jsR1PaOiW1lpyI'; // Your Place ID
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  // Copy URL
  const tempInput = document.createElement('input');
  tempInput.value = reviewUrl;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Open page
  window.open(reviewUrl, '_blank');

  // Show copied message
  const status = document.createElement('div');
  status.className = 'status-message';
  status.innerHTML = '<i class="fas fa-check-circle"></i> Google review link copied and opened!';
  document.getElementById('googleReviewBtn').after(status);

  setTimeout(() => status.remove(), 3000);
});

// --- Review Star Rating ---
const stars = document.querySelectorAll('.rating-input i');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', function() {
    const rating = this.getAttribute('data-rating');
    highlightStars(rating);
  });

  star.addEventListener('click', function() {
    selectedRating = this.getAttribute('data-rating');
    highlightStars(selectedRating);
  });

  star.addEventListener('mouseout', function() {
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    if (star.getAttribute('data-rating') <= rating) {
      star.classList.add('fas');
      star.classList.remove('far');
      star.style.color = '#FBBC05';
    } else {
      star.classList.add('far');
      star.classList.remove('fas');
      star.style.color = '#ccc';
    }
  });
}

// --- Generate Random Review ---
const sampleReviews = [
  "Wonderful experience shopping at Sakhi Dresses! The staff was very helpful and the collection is amazing.",
  "Amazing collection, and great quality fabrics! Will definitely shop here again.",
  "Friendly staff and excellent designs. Found perfect outfits for the wedding season!",
  "Best store for traditional dresses in the area. Prices are reasonable for the quality.",
  "Loved the collection of kurtis and lehengas! The stitching quality is excellent.",
  "Bought a ready-made suit set and it fits perfectly. Great fabric and fine finishing!",
  "Kurti materials are so soft and comfortable. The prints are vibrant and don't fade after wash.",
  "The western tops collection is trendy and fabric is really breathable.",
  "Purchased a dress pair and the fitting was absolutely spot on. Highly recommend!",
  "Best place to shop for ready-made dresses. The tailoring is precise and modern.",
  "Amazing quality of cotton kurtis. Perfect for daily wear and office wear.",
  "Their Indo-western collection is very stylish yet traditional. Great blend!",
  "The stitching and fitting are top-notch. Totally satisfied with my purchase.",
  "Beautiful dress materials at reasonable prices. Huge variety of colors and patterns.",
  "The ready-made outfits are designed to perfection. No alterations needed.",
  "Loved their collection of Punjabi dresses. Very authentic and colorful.",
  "Customer service is very attentive. Helped me pick the perfect dress material.",
  "The leggings I bought are very stretchable and of premium quality.",
  "Their western dresses are very comfortable and stylish at the same time.",
  "I ordered a custom-stitched kurti, and the fitting was like second skin!",
  "Found the best dupattas here — soft, elegant, and detailed work.",
  "The price range is affordable considering the premium fabric quality they offer.",
  "Excellent collection for festive wear — got tons of compliments!",
  "Visited for a last-minute outfit and they tailored it perfectly within a day.",
  "Their cotton dress materials are super breathable and ideal for summer.",
  "Huge variety of party wear gowns. Loved the designs and fabric flow.",
  "Bought a western top — the fabric is wrinkle-free and easy to maintain.",
  "Stylish yet traditional ready-made kurtis available in all sizes.",
  "Loved the collection of designer dress pairs — matched perfectly with accessories.",
  "The store ambiance is very welcoming, and staff are super friendly.",
  "Their plus-size collection is very trendy. Loved the fitting and material.",
  "Excellent place for shopping ethnic wear under one roof!",
  "Highly satisfied with the customized stitching service. Timely delivery and great fitting.",
  "The embroidery work on kurtis is so intricate and neat.",
  "Loved the premium rayon material used in their kurtis. Soft and flowy.",
  "Bought a maxi dress and the fabric felt luxurious and breathable.",
  "Their ready-to-wear dresses are a savior for busy schedules. Great styles too!",
  "Soft georgette material dresses are very lightweight and comfortable.",
  "Superb quality leggings that retain color even after multiple washes.",
  "Amazing craftsmanship in their hand-embroidered outfits.",
  "Trendy crop tops and palazzos available at reasonable prices.",
  "The dupattas are made from pure chiffon — light and elegant.",
  "One-stop destination for party, casual, and formal dresses.",
  "Their collection of pastel-colored kurtis is just beautiful!",
  "Bought a pair of leggings and they are super stretchable and durable.",
  "The fitting of the stitched salwar suit was just perfect, no adjustments needed!",
  "Absolutely loved the western co-ord sets — very fashionable!",
  "The material of kurti sets is skin-friendly, perfect for long day wear.",
  "Received so many compliments on the lehenga I purchased from here!",
  "They have matching accessories for almost every outfit, very convenient.",
  "Customer service is very knowledgeable about fabric and fitting advice.",
  "Loved the heavy work kurtis for festive occasions — detailed and vibrant.",
  "Purchased a linen kurti and it feels cool and breezy during hot days.",
  "Unique designs you won’t easily find elsewhere — loved the exclusivity!",
  "Soft silk dress material collection was exquisite — great for weddings.",
  "Kids' ethnic collection is also very cute and affordable!",
  "Every fabric here is carefully selected — you can feel the difference.",
  "Ready-made anarkalis fit beautifully and are very flowy.",
  "Bought a western dress for a party and got endless compliments!",
  "Their simple cotton suits are the best for daily office wear.",
  "Wonderful tailor support; they understood exactly what I needed.",
  "Fabric colors are very fast and do not fade even after washing.",
  "Huge collection of stylish short kurtis — perfect for college wear.",
  "Staff helped me select a dress according to my body type. Very thoughtful!",
  "They have amazing deals on combo sets — very budget-friendly.",
  "Purchased a satin dress material and the shine is luxurious!",
  "Their customer follow-up after delivery is very impressive.",
  "Stylish and breathable western dresses ideal for summers.",
  "Love their floral printed kurtis — the colors and patterns are cheerful.",
  "Very happy with the customized ready-made dress fitting. Perfect!",
  "Wide range of fabrics from cotton, georgette, silk to rayon!",
  "Lovely boutique experience — every piece looks designer!",
  "The mirror work on their ethnic dresses is beautiful and neatly finished.",
  "Modern cuts with traditional designs — the best of both worlds!",
  "Their festive collection makes shopping for Diwali or weddings easy!",
  "Had a wonderful time shopping here — found everything under one roof!",
];


document.getElementById('generateBtn').addEventListener('click', function() {
  const randomReview = sampleReviews[Math.floor(Math.random() * sampleReviews.length)];
  document.getElementById('reviewBox').value = randomReview;

  if (selectedRating === 0) {
    selectedRating = 4 + Math.floor(Math.random() * 2); // Random 4 or 5 star
    highlightStars(selectedRating);
  }
});

// --- Submit Review (Main Part Updated) ---
document.getElementById('reviewBtn').addEventListener('click', function() {
  const reviewText = document.getElementById('reviewBox').value.trim();
  const reviewStatus = document.getElementById('reviewStatus');

  if (selectedRating === 0) {
    reviewStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please select a star rating!';
    reviewStatus.style.color = "#EA4335";
    return;
  }

  if (reviewText.length < 10) {
    reviewStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please write at least 10 characters for the review.';
    reviewStatus.style.color = "#EA4335";
    return;
  }

  // ✅ Copy Review Text to Clipboard
  const tempInput = document.createElement('textarea');
  tempInput.value = reviewText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // ✅ Open Google Review Page
  const shopReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJFT6C-i8l4jsR1PaOiW1lpyI';
  window.open(shopReviewUrl, '_blank');

  // ✅ Show Success Message
  reviewStatus.innerHTML = '<i class="fas fa-check-circle"></i> Review copied! Paste it on the Google Review page.';
  reviewStatus.style.color = "#34A853";

  // ✅ Reset Form
  document.getElementById('reviewBox').value = '';
  highlightStars(0);
  selectedRating = 0;

  // Scroll to status
  reviewStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});