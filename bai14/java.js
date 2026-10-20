document.addEventListener("DOMContentLoaded", function () {
    const wondersData = [
        {
            id: 1,
            title: "Vịnh Hạ Long",
            desc: "Gần 2.000 đảo đá vôi, Di sản thiên nhiên thế giới, thuộc Quảng Ninh.",
            image: "Bai14/1-vinh-ha-long.jpg"
        },
        {
            id: 2,
            title: "Hang Sơn Đoòng",
            desc: "Hang động tự nhiên lớn nhất thế giới, thuộc Quảng Bình.",
            image: "Bai14/2-son-doong.jpg"
        },
        {
            id: 3,
            title: "Thác Bản Giốc",
            desc: "Thác nước đẹp nhất Việt Nam, nằm ở Cao Bằng.",
            image: "Bai14/3-thac-ban-gioc.jpg"
        },
        {
            id: 4,
            title: "Fansipan",
            desc: "\"Mái nhà Đông Dương\", cao 3.143 m, thuộc Lào Cai.",
            image: "Bai14/4-fansipan.jpg"
        },
        {
            id: 5,
            title: "Đồng bằng sông Cửu Long",
            desc: "Vựa lúa, miệt vườn sông nước trù phú miền Nam.",
            image: "Bai14/5-mekong.jpg"
        },
        {
            id: 6,
            title: "Động Phong Nha",
            desc: "Hệ thống hang động kỳ vĩ, Di sản thiên nhiên thế giới.",
            image: "Bai14/6-phong-nha.jpg"
        }
    ];

    const gridContainer = document.getElementById("wonders-grid");

    function renderWonders() {
        if (!gridContainer) return;

        gridContainer.innerHTML = wondersData.map(item => `
            <article class="wonder-card">
                <div class="wonder-img-box">
                    <img src="${item.image}" alt="${item.title}" class="wonder-img">
                </div>
                <div class="wonder-body">
                    <h2 class="wonder-title">${item.id}. ${item.title}</h2>
                    <p class="wonder-desc">${item.desc}</p>
                </div>
            </article>
        `).join('');
    }

    renderWonders();
});