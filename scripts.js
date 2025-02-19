// Load third-party script after page load
window.onload = function() {
    var script = document.createElement('script');
    script.src = "https://third-party-script.com";
    script.async = true;
    document.body.appendChild(script);
};

// Load non-essential script after DOM content loads
document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = "https://posityonline.github.io/posityonline-scripts/non-essential.js";
    document.body.appendChild(script);
});

// Function to load non-critical script asynchronously
function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}

// Load non-critical script after page load
window.onload = function() {
    loadScript('https://posityonline.github.io/posityonline-scripts/non-critical.js');
};
