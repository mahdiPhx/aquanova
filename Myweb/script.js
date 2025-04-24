document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {
        // Toggle sidebar visibility
        menuButton.addEventListener("click", function () {
            sidebar.style.left = (sidebar.style.left === "0px" ? "-250px" : "0px");
        });

        // Auto-close sidebar on link click
        const sidebarLinks = sidebar.querySelectorAll("a");
        sidebarLinks.forEach(link => {
            link.addEventListener("click", () => {
                sidebar.style.left = "-250px";
            });
        });
    }

    //  // const modelViewer = document.querySelector("model-viewer");
    // if (modelViewer) {
    //     modelViewer.addEventListener("click", () => {
    //         alert("This is our amazing 3D component!");
    //     });
    // }
});
