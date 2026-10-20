let students = [
    ['SV001', 'Nguyễn Văn An', '66KTPM1', 8.5],
    ['SV002', 'Trần Thị Bình', '66KTPM1', 7.0],
    ['SV003', 'Lê Minh Cường', '66KTPM2', 4.0],
    ['SV004', 'Phạm Thu Dung', '66KTPM2', 9.0],
    ['SV005', 'Hoàng Gia Huy', '66CNTT1', 6.5],
    ['SV006', 'Đỗ Ngọc Hà', '66CNTT1', 8.0],
    ['SV007', 'Vũ Minh Khôi', '66KTPM1', 5.5],
    ['SV008', 'Bùi Thanh Lan', '66KTPM2', 3.5],
    ['SV009', 'Ngô Đức Long', '66CNTT1', 7.5],
    ['SV010', 'Dương Thảo Mai', '66KTPM1', 9.5],
    ['SV011', 'Đinh Hải Nam', '66KTPM2', 6.0],
    ['SV012', 'Trịnh Hồng Nhung', '66CNTT1', 8.5],
    ['SV013', 'Lý Minh Phúc', '66KTPM1', 4.5],
    ['SV014', 'Cao Thu Quỳnh', '66KTPM2', 7.0],
    ['SV015', 'Mai Hoàng Sơn', '66CNTT1', 8.0]
];
let currentPage = 1;
let pageSize = 5;
let totalPages = Math.ceil(students.length / pageSize);

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    let start = (page - 1) * pageSize;
    let rows = '';
    for (let i = start; i < start + pageSize && i < students.length; i++) {
        let student = students[i];
        let status = '<span class="badge bg-success">Đạt</span>';
        if (student[3] < 5) status = '<span class="badge bg-warning text-dark">Thi lại</span>';
        rows += '<tr><td>' + student[0] + '</td><td>' + student[1] + '</td><td>' + student[2] +
            '</td><td class="text-center">' + student[3].toFixed(1) + '</td><td>' + status + '</td></tr>';
    }
    document.getElementById('student-list').innerHTML = rows;

    let pages = document.querySelectorAll('.page-number');
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
        pages[i].removeAttribute('aria-current');
        if (i + 1 == page) {
            pages[i].classList.add('active');
            pages[i].setAttribute('aria-current', 'page');
        }
    }
    document.getElementById('previous').classList.toggle('disabled', page == 1);
    document.getElementById('next').classList.toggle('disabled', page == totalPages);
    document.querySelector('#previous button').disabled = page == 1;
    document.querySelector('#next button').disabled = page == totalPages;
}

changePage(1);