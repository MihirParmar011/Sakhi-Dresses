// Business information
const businessInfo = {
  name: "Sakhi Dresses",
  phone: "+919924573140",
  address: "Your Shop Address, City, State - Zip Code",
  coordinates: "21.088857,71.766113",
  placeId: "ChIJFT6C-i8l4jsR1PaOiW1lpyI"
};

// Reviews data
const reviews = [
  "Sakhi Dresses has an amazing collection of ethnic wear! I bought a beautiful lehenga for my sister's wedding and received so many compliments. The stitching and fabric quality is top-notch.",
  "The kurtis at Sakhi Dresses are so comfortable and stylish. I love how they combine traditional designs with modern cuts. Perfect for both casual and formal occasions.",
  "Found my dream Punjabi suit at Sakhi Dresses! The embroidery work is exquisite and the fit was perfect. The staff helped me choose the right fabric for the summer season.",
  "I'm impressed with the variety of dress materials available. Got a gorgeous silk saree blouse piece stitched here and the craftsmanship was impeccable.",
  "Sakhi Dresses is my go-to place for all ethnic wear needs. Their ready-made outfits are so convenient when you need something quickly for an event."
];

const detailedTips = [
  "Pro tip: Visit during weekdays for a more relaxed shopping experience.",
  "Helpful hint: Ask to see their new arrivals first - they often get unique designs.",
  "Insider advice: Shop 2-3 months in advance for weddings to allow time for alterations."
];

// Generate a random review
function generateReview() {
  const mainReview = reviews[Math.floor(Math.random() * reviews.length)];
  const includeTip = Math.random() > 0.7;
  
  if (includeTip) {
    const tip = detailedTips[Math.floor(Math.random() * detailedTips.length)];
    return `${mainReview}\n\n${tip}`;
  }
  return mainReview;
}

// Initialize the review text
document.addEventListener('DOMContentLoaded', function() {
  const reviewBox = document.getElementById('reviewBox');
  if (reviewBox) {
    reviewBox.value = generateReview();
  }

  // Set up star rating
  const stars = document.querySelectorAll('.rating-input i');
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      stars.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  // Button functionality
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
        text: 'Check out Sakhi Dresses for beautiful ethnic wear!',
        url: window.location.href
      }).catch(err => {
        console.log('Error sharing:', err);
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('Share this page: ' + window.location.href);
    }
  });

  document.getElementById('copyBtn').addEventListener('click', function() {
    const reviewText = document.getElementById('reviewBox').value;
    navigator.clipboard.writeText(reviewText).then(() => {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      alert('Please copy the text manually');
    });
  });

  document.getElementById('reviewBtn').addEventListener('click', function() {
    const reviewText = document.getElementById('reviewBox').value;
    navigator.clipboard.writeText(reviewText).then(() => {
      window.open(`https://search.google.com/local/writereview?placeid=${businessInfo.placeId}`);
      alert('Review copied to clipboard! Please paste it in the Google review page that opened.');
    }).catch(err => {
      console.error('Failed to copy:', err);
      window.open(`https://search.google.com/local/writereview?placeid=${businessInfo.placeId}`);
      alert('Please copy your review manually and paste it in the Google review page.');
    });
  });
});