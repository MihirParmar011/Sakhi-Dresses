const placeId = "ChIJFT6C-i8l4jsR1PaOiW1lpyI"; // Replace with Sakhi Dresses's actual Place ID
const shopName = "Sakhi Dresses";
const searchURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shopName)}`;
const shopMapURL = `https://search.google.com/local/writereview?placeid=${placeId}`;

const reviews = [
  "Sakhi Dresses has an amazing collection of ethnic wear! I bought a beautiful lehenga for my sister's wedding and received so many compliments. The stitching and fabric quality is top-notch.",
  "The kurtis at Sakhi Dresses are so comfortable and stylish. I love how they combine traditional designs with modern cuts. Perfect for both casual and formal occasions.",
  "Found my dream Punjabi suit at Sakhi Dresses! The embroidery work is exquisite and the fit was perfect. The staff helped me choose the right fabric for the summer season.",
  "I'm impressed with the variety of dress materials available. Got a gorgeous silk saree blouse piece stitched here and the craftsmanship was impeccable.",
  "Sakhi Dresses is my go-to place for all ethnic wear needs. Their ready-made outfits are so convenient when you need something quickly for an event.",
  "The color combinations in their dress pairs are so trendy yet elegant. Bought a yellow and white combination that looks absolutely stunning!",
  "Their collection of wedding lehengas is breathtaking. Found a beautiful red lehenga with intricate zari work that made me feel like a princess.",
  "The fitting of my custom-made anarkali suit was perfect. They took all my measurements carefully and delivered exactly what I wanted.",
  "Sakhi Dresses offers such unique designs that you won't find elsewhere. Their collection stands out in every festival season.",
  "I appreciate how they keep up with the latest fashion trends while maintaining traditional aesthetics. Their fusion wear is particularly impressive.",
  "The staff at Sakhi Dresses is so helpful. They understand your requirements and suggest options that suit your body type and occasion.",
  "Found the perfect office wear kurtis here - professional yet stylish. The cotton fabric is so breathable in this hot weather.",
  "Their collection of festive wear is extensive. Whether you need something for Diwali, Eid, or weddings, they have beautiful options.",
  "The detailing on their embroidered suits is remarkable. You can see the quality in every stitch and sequin.",
  "Sakhi Dresses offers great value for money. The quality you get for the price is unmatched in the market.",
  "I love how they display their outfits - makes it so easy to visualize how the complete ensemble would look.",
  "Their seasonal collections are always on point. Recently bought a beautiful pastel-colored suit perfect for spring.",
  "The fitting rooms are spacious and well-lit, making it easy to try on multiple outfits comfortably.",
  "Sakhi Dresses has become my one-stop shop for all ethnic wear needs. I no longer need to visit multiple stores.",
  "Their customer service is excellent. They remembered my preferences from previous visits and made great recommendations.",
  "The packaging of purchased items is so elegant - makes you feel like you're receiving a special gift.",
  "I appreciate that they offer both traditional and contemporary designs. There's something for every taste and age group.",
  "Their collection of silk sarees and blouse pieces is exquisite. Found the perfect combination for a family wedding.",
  "The stitching quality is consistent across all their garments. You can tell they pay attention to every detail.",
  "Sakhi Dresses offers a perfect blend of affordability and luxury. You get premium looks without breaking the bank.",
  "Their selection of dupattas is amazing - so many colors and designs to mix and match with different outfits.",
  "I love how they organize their store by occasion - makes shopping so much easier when you have a specific event in mind.",
  "The staff is knowledgeable about fabrics and can guide you on what would work best for different seasons and events.",
  "Found a beautiful georgette suit that drapes so elegantly. The color hasn't faded even after multiple washes.",
  "Sakhi Dresses has spoiled me - I can't buy ethnic wear anywhere else now! The quality difference is noticeable.",
  "Their collection of Indo-western outfits is fantastic. Perfect for those who want to blend traditional and modern styles.",
  "The embroidery on their suits is so fine and durable. Doesn't come off even after multiple wears and washes.",
  "I appreciate that they offer customization options. Got a suit stitched with slight modifications to the neck design.",
  "Their festive season discounts are amazing. Got beautiful outfits for the whole family at great prices.",
  "The trial process for stitched clothes is thorough. They ensure perfect fit before final delivery.",
  "Sakhi Dresses has a great selection of accessories too - found the perfect potli bag to match my outfit.",
  "Their collection of summer suits in breathable fabrics is a lifesaver in this heat.",
  "The color options are so vibrant yet tasteful. Found a beautiful peacock blue suit that's become my favorite.",
  "I love how they display complete ensembles - makes it easy to visualize how everything would look together.",
  "Their collection of wedding guest outfits is extensive. Found the perfect balance of elegance and comfort.",
  "The stitching on my blouse was perfect - no pulling or tightness anywhere. So comfortable to wear all day.",
  "Sakhi Dresses offers such unique prints that you won't find in other stores. Their designers have great taste.",
  "The quality of their fabrics is consistently good. No shrinkage or color bleeding after washing.",
  "I appreciate that they offer outfits for all age groups. Found beautiful matching suits for me and my daughter.",
  "Their collection of office-appropriate ethnic wear is impressive. Professional yet stylish.",
  "The staff helped me put together a complete wedding trousseau - from heavy lehengas to reception gowns.",
  "Found the perfect balance of traditional and contemporary in their anarkali collection.",
  "Sakhi Dresses has become my secret weapon for looking great at every event without much effort.",
  "Their collection of winter fabrics is so cozy yet stylish. Perfect for holiday parties.",
  "The attention to detail in their garments is remarkable - from lining to finishing touches.",
  "I love how they keep introducing new designs regularly. There's always something fresh to discover."
];

const detailedTips = [
  "Pro tip: Visit Sakhi Dresses during weekdays for a more relaxed shopping experience. The store tends to get crowded on weekends and during festival seasons.",
  "Helpful hint: Ask to see their new arrivals first. They often get fresh stock of unique designs that sell out quickly.",
  "Insider advice: If you're shopping for a wedding, visit at least 2-3 months in advance to allow time for alterations and customizations.",
  "Local know-how: Sakhi Dresses offers free basic alterations on ready-made outfits purchased from them. Don't hesitate to ask!",
  "Seasonal tip: During summer, look for their collection in breathable fabrics like cotton and linen that keep you cool and comfortable.",
  "Fit tip: When trying outfits, move around in them to ensure comfort. A good ethnic outfit should look great AND feel comfortable.",
  "Fabric tip: For durability, choose fabrics with some synthetic blend for daily wear, while pure fabrics are great for special occasions.",
  "Detail tip: Pay attention to the stitching quality - small, even stitches indicate better craftsmanship that will last longer.",
  "Color tip: If unsure about colors, try holding fabrics near your face in natural light to see what complements your skin tone best.",
  "Care tip: Always follow the washing instructions for each outfit to maintain color and shape. Many ethnic outfits require special care.",
  "Festival tip: Shop a few weeks before major festivals for the best selection, as popular sizes and designs sell out quickly.",
  "Budget tip: Check their sale section first - you might find beautiful outfits at discounted prices.",
  "Occasion tip: For weddings, consider outfits with detachable dupattas or overlays that can create multiple looks from one outfit.",
  "Storage tip: Store your ethnic wear in breathable cotton bags to prevent moisture buildup and preserve the fabrics.",
  "Accessory tip: Sakhi Dresses often has matching jewelry and bags - complete your look in one place.",
  "Trend tip: Follow their social media to stay updated on new arrivals and fashion trends in ethnic wear.",
  "Gifting tip: Their beautifully packaged outfits make excellent gifts for weddings and festivals.",
  "Customization tip: Don't hesitate to ask for minor design changes - many outfits can be slightly altered to suit your preferences.",
  "Comfort tip: For all-day events, choose outfits with comfortable blouse cuts and manageable dupatta lengths.",
  "Seasonal advice: Their winter collection features beautiful velvets and heavier silks perfect for cooler months.",
  "Measurement tip: For custom stitching, wear the undergarments you plan to wear with the outfit when getting measured for perfect fit.",
  "Style tip: If unsure what suits you, ask the staff for recommendations based on your body type and skin tone.",
  "Travel tip: Their wrinkle-resistant fabrics are perfect for travel - look for these when shopping for destination weddings.",
  "Mix-and-match tip: Choose separates in neutral colors that can be mixed with different pieces to create multiple outfits.",
  "Wedding tip: For bridesmaids, consider coordinating colors rather than identical outfits for a more interesting look.",
  "Fitting tip: Schedule your final fitting at the same time of day you'll be wearing the outfit, as body measurements can fluctuate.",
  "Preservation tip: Store heavy embroidered outfits flat to prevent the embroidery from stretching the fabric.",
  "Value tip: Invest in classic designs that won't go out of style for longer wardrobe longevity.",
  "Trend advice: Currently, pastels and earth tones are very popular for daytime ethnic wear.",
  "Final tip: Build a relationship with the staff - they'll remember your preferences and alert you to new arrivals you might like."
];

// Generate more natural review with occasional tips
function generateNaturalReview() {
  const mainReview = reviews[Math.floor(Math.random() * reviews.length)];
  const includeTip = Math.random() > 0.7; // 30% chance to include a tip
  
  if (includeTip) {
    const tip = detailedTips[Math.floor(Math.random() * detailedTips.length)];
    return `${mainReview}\n\n${tip}`;
  }
  return mainReview;
}

// Generate and display random review
const randomReview = generateNaturalReview();
if (document.getElementById("reviewBox")) {
    document.getElementById("reviewBox").value = randomReview;
}

// Auto-copy function with enhanced feedback
function copyToClipboard(text) {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(resolve).catch(reject);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(textarea);
    }
  });
}

// Auto-copy on page load
if (document.readyState === "complete" || document.readyState === "interactive") {
    copyToClipboard(randomReview).then(() => {
        console.log("Review copied to clipboard automatically");
    }).catch(err => {
        console.error("Auto-copy failed:", err);
    });
} else {
    document.addEventListener('DOMContentLoaded', () => {
        copyToClipboard(randomReview).then(() => {
            console.log("Review copied to clipboard automatically");
        }).catch(err => {
            console.error("Auto-copy failed:", err);
        });
    });
}

// Copy button handler
function copyReview() {
  const currentReview = document.getElementById("reviewBox") ? document.getElementById("reviewBox").value : randomReview;
  copyToClipboard(currentReview).then(() => {
    const copyBtn = document.querySelector('button[onclick="copyReview()"]');
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }
  }).catch(err => {
    alert("Could not copy automatically. Please select and copy the text manually.");
    console.error("Copy failed:", err);
  });
}

// Open Google Maps to search shop name (initial step to find place ID)
function findPlaceId() {
  window.open(searchURL, '_blank');
}

// Open review page using Place ID (once known)
function openShop() {
  const currentReview = document.getElementById("reviewBox") ? document.getElementById("reviewBox").value : randomReview;
  copyToClipboard(currentReview).then(() => {
    const newWindow = window.open(shopMapURL, '_blank');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const instructions = isMobile
      ? `1. In the review page that opened\n2. Tap star rating\n3. Paste review (already copied)\n4. Post your review`
      : `1. In the new tab that opened\n2. Click star rating\n3. Paste review (Ctrl+V)\n4. Click Post`;

    alert(`✅ Review copied to clipboard!\n\nPlease:\n${instructions}\n\nThank you for supporting Sakhi Dresses!`);

    if (newWindow) {
      setTimeout(() => newWindow.focus(), 500);
    }
  }).catch(err => {
    console.error("Copy failed:", err);
    window.open(shopMapURL, '_blank');
    alert("Please manually copy the review text and paste it after opening the review page.");
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Generate new review on page load
  const newReview = generateNaturalReview();
  if (document.getElementById("reviewBox")) {
    document.getElementById("reviewBox").value = newReview;
  }
  
  // Set up event listeners if elements exist
  const copyBtn = document.querySelector('button[onclick="copyReview()"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyReview);
  }
  
  const findBtn = document.querySelector('button[onclick="findPlaceId()"]');
  if (findBtn) {
    findBtn.addEventListener('click', findPlaceId);
  }
  
  const openBtn = document.querySelector('button[onclick="openShop()"]');
  if (openBtn) {
    openBtn.addEventListener('click', openShop);
  }
});