// Personal Profile — starter configuration
// Replace the values below when you are ready to personalize the page.

const profile = {
  name: "Mr. Jay Khatri J.",
  email: "khatri.jai.98@gmail.com",
  socialUrl: "https://www.instagram.com/jaykhatri_49/"
};

// Basic visitor counter placeholder.
// For real visitor analytics after hosting, connect Google Analytics,
// Cloudflare Web Analytics, or another privacy-conscious analytics service.
// Do NOT rely on this localStorage counter for real visitor statistics.

const key = "jay_profile_local_views";
const current = Number(localStorage.getItem(key) || 0) + 1;
localStorage.setItem(key, current);
console.log(`Local browser views: ${current}`);
