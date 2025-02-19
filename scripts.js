// Load third-party script after page load
window.onload = function() {
    var script1 = document.createElement('script');
    script1.src = "https://third-party-script.com";
    script1.async = true;
    document.body.appendChild(script1);

    // Load non-critical script after page load
    var script2 = document.createElement('script');
    script2.src = "https://posityonline.github.io/posityonline-scripts/non-critical.js";
    script2.async = true;
    document.body.appendChild(script2);
};

// Load non-essential script after DOM content loads
document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = "https://posityonline.github.io/posityonline-scripts/non-essential.js";
    document.body.appendChild(script);
});
