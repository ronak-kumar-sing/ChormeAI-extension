document.addEventListener("DOMContentLoaded", function() {
    // Get all the elements with class 'tool'
    var tools = document.querySelectorAll('.tool');

    // Loop through each tool
    tools.forEach(function(tool) {
        // Add click event listener
        tool.addEventListener('click', function() {
            // Find the 'Get Started' link inside the clicked tool
            var link = this.querySelector('.btn');

            // Get the href attribute value of the link
            var url = link.getAttribute('href');

            // Open the link in a new tab
            window.open(url, '_blank');
        });
    });
});
