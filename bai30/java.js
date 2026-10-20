document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar .nav-link");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            menuItems.forEach(link => {
                link.classList.remove("active", "text-white");
                link.classList.add("text-white-50");
            });

            this.classList.add("active", "text-white");
            this.classList.remove("text-white-50");
        });
    });

    const btnExport = document.querySelector(".btn-primary");
    if (btnExport) {
        btnExport.addEventListener("click", function () {
            alert("Đang tiến hành xuất báo cáo tiến độ học tập!");
        });
    }
});