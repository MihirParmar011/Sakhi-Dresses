// Enhanced Business Information
const businessInfo = {
  name: "Sakhi Dresses",
  phone: "+919924573140",
  address: "Shop No. 5, Gokul Complex, Near Railway Station, Amreli, Gujarat - 365601",
  coordinates: "21.088857,71.766113",
  placeId: "ChIJFT6C-i8l4jsR1PaOiW1lpyI",
  collections: [
    "Traditional Lehengas",
    "Punjabi Suits",
    "Dress Materials",
    "Kurtis & Tops",
    "Bridal Wear",
    "Winter Collection"
  ]
};

// Enhanced Reviews Database
const reviews = {
  positive: [
    "The lehenga I bought from Sakhi Dresses was absolutely stunning! The intricate embroidery and perfect fit made me feel like a princess at my cousin's wedding.",
    "Their collection of Punjabi suits is the best in town. The fabric quality is excellent and the designs are so trendy yet traditional.",
    "I'm amazed by the variety of dress materials available. Got a gorgeous silk saree blouse piece stitched here and the craftsmanship was impeccable."
  ],
  constructive: [
    "Good quality material and reasonable prices. The only suggestion would be to expand the men's section as well.",
    "Nice variety but could improve on delivery timelines for custom stitching. Staff is very courteous and helpful."
  ],
  tips: [
    "Pro tip: Visit during weekdays for personalized attention from the staff.",
    "Insider advice: Check their Instagram @SakhiDressesAmreli for new arrivals before visiting.",
    "Shopping tip: They offer great discounts when you buy complete outfits (top+bottom+dupatta)."
  ]
};

// Generate a contextual review based on selected rating
function generateReview(rating) {
  let reviewPool = rating >= 4 ? reviews.positive : reviews.constructive;
  let mainReview = reviewPool[Math.floor(Math.random() * reviewPool.length)];
  
  // Randomly select a collection to mention
  const collection = businessInfo.collections[Math.floor(Math.random() * businessInfo.collections.length)];
  mainReview = mainReview.replace(/(lehenga|Punjabi suit|dress material)/i, collection);
  
  // Add a tip 40% of the time for positive reviews
  if (rating >= 4 && Math.random() > 0.6) {
    const tip = reviews.tips[Math.floor(Math.random() * reviews.tips.length)];
    return `${mainReview}\n\n${tip}`;
  }
  return mainReview;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  const reviewTextarea = document.getElementById('reviewBox');
  const generateBtn = document.getElementById('generateBtn');
  const submitBtn = document.getElementById('reviewBtn');
  const statusMessage = document.getElementById('reviewStatus');
  let currentRating = 0;

  // Star rating functionality with hover effects
  const stars = document.querySelectorAll('.rating-input i');
  stars.forEach(star => {
    star.addEventListener('click', function() {
      currentRating = parseInt(this.getAttribute('data-rating'));
      updateStars(currentRating);
      generateBtn.disabled = false;
    });

    star.addEventListener('mouseover', function() {
      if (!currentRating) {
        const hoverRating = parseInt(this.getAttribute('data-rating'));
        updateStars(hoverRating, true);
      }
    });

    star.addEventListener('mouseout', function() {
      if (!currentRating) {
        updateStars(0);
      } else {
        updateStars(currentRating);
      }
    });
  });

  function updateStars(rating, isHover = false) {
    stars.forEach((star, index) => {
      star.classList.toggle('fas', index < rating);
      star.classList.toggle('far', index >= rating);
      star.classList.toggle('hover', isHover && index < rating);
      star.classList.toggle('active', !isHover && index < rating);
    });
  }

  // Generate review button
  generateBtn.addEventListener('click', function() {
    if (currentRating === 0) {
      statusMessage.textContent = "Please select a rating first";
      statusMessage.className = "status-message status-error";
      return;
    }
    
    reviewTextarea.value = generateReview(currentRating);
    submitBtn.disabled = false;
    statusMessage.textContent = "Review generated! Feel free to edit before submitting.";
    statusMessage.className = "status-message status-success";
  });

  // Submit to Google button
  submitBtn.addEventListener('click', function() {
    if (reviewTextarea.value.trim() === "") {
      statusMessage.textContent = "Please generate or write a review first";
      statusMessage.className = "status-message status-error";
      return;
    }

    navigator.clipboard.writeText(reviewTextarea.value).then(() => {
      window.open(`https://search.google.com/local/writereview?placeid=${businessInfo.placeId}`, '_blank');
      statusMessage.textContent = "Review copied! Please paste it on the Google review page that opened.";
      statusMessage.className = "status-message status-success";
    }).catch(err => {
      console.error('Failed to copy:', err);
      statusMessage.textContent = "Failed to copy review. Please copy it manually.";
      statusMessage.className = "status-message status-error";
    });
  });

  // Other existing button functionalities remain the same
  document.getElementById('directionsBtn').addEventListener('click', function() {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${businessInfo.coordinates}&destination_place_id=${businessInfo.placeId}`);
  });

  document.getElementById('callBtn').addEventListener('click', function() {
    window.open(`tel:${businessInfo.phone}`);
  });

  document.getElementById('shareBtn').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: businessInfo.name,
        text: 'Check out Sakhi Dresses for beautiful ethnic wear in Amreli!',
        url: window.location.href
      }).catch(err => {
        console.log('Error sharing:', err);
      });
    } else {
      alert('Share this page: ' + window.location.href);
    }
  });
});