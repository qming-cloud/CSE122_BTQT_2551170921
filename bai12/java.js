const weekends = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
document.getElementById('calendar-form').addEventListener('submit',function (event) {
    event.preventDefault();

    const day = Number(document.getElementById('input-day').value);
    const month = Number(document.getElementById('input-month').value);
    const year = Number(document.getElementById('input-year').value);
    const date = new Date(year,month - 1,day);

    document.getElementById('calendar-year').textContent = date.getFullYear();
    document.getElementById('calendar-month').textContent = 'Tháng ' + (date.getMonth() + 1);
    document.getElementById('calendar-day').textContent = date.getDate();
    document.getElementById('calendar-weekday').textContent = weekends[date.getDay()];

    const hour = new Date().getHours();
    let greeting = 'Chào buổi tối';
    if(hour < 11) greeting = 'Chào buổi sáng!';
    else if (hour < 13) greeting = 'Chào buổi trưa!';
    else if (hour < 18) greeting = 'Chào buổi chiều!';
    document.getElementById('greeting').textContent = greeting;
});