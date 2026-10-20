document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const statusText = document.getElementById("status-text");

    function updateStatusText(isDark) {
        if (isDark) {
            statusText.textContent = "Đây là giao diện ở chế độ TỐI (đang bật).";
        } else {
            statusText.textContent = "Đây là giao diện ở chế độ SÁNG (đang tắt).";
        }
    }

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("toi");
            updateStatusText(true);
        } else {
            document.body.classList.remove("toi");
            updateStatusText(false);
        }
    });

    updateStatusText(themeToggle.checked);
});