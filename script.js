document.addEventListener("DOMContentLoaded", function () {
    
    const cursor = document.querySelector(".custom-cursor");
    
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    const interactiveElements = document.querySelectorAll("a, button, .work-preview");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.style.backgroundColor = "rgba(205, 162, 116, 0.2)";
            cursor.style.border = "1px solid var(--accent-gold)";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.width = "8px";
            cursor.style.height = "8px";
            cursor.style.backgroundColor = "var(--accent-gold)";
            cursor.style.border = "none";
        });
    });

    // 2. Premium Light / Dark Minimalist Switcher
    const themeBtn = document.getElementById("themeModeToggle");
    themeBtn.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        document.documentElement.setAttribute("data-theme", isLight ? "dark" : "light");
    });

    // 3. Grid Filtering Animatif untuk Showcase Proyek Masif
    const filterLinks = document.querySelectorAll(".filter-link");
    const workItems = document.querySelectorAll(".work-item");

    filterLinks.forEach(link => {
        link.addEventListener("click", () => {
            filterLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            const currentCategory = link.getAttribute("data-filter");

            workItems.forEach(item => {
                if (currentCategory === "all" || item.getAttribute("data-category") === currentCategory) {
                    item.style.display = "block";
                    setTimeout(() => { item.style.opacity = "1"; item.style.transform = "scale(1)"; }, 10);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.95)";
                    setTimeout(() => { item.style.display = "none"; }, 300);
                }
            });
        });
    });
});