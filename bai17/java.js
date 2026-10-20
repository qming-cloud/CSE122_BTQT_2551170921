function showResult(id, message) {
  let input = document.getElementById(id);
  let error = document.getElementById(id + '-error');
  error.textContent = message;
  if (message == '') {
    input.className = 'valid';
    input.setAttribute('aria-invalid', 'false');
    return true;
  }
  input.className = 'invalid';
  input.setAttribute('aria-invalid', 'true');
  return false;
}

document.getElementById('register-form').onsubmit = function (event) {
  event.preventDefault();
  let fullname = document.getElementById('fullname').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm').value;
  let nameError = '';
  let emailError = '';
  let passwordError = '';
  let confirmError = '';

  if (fullname == '') nameError = 'Vui lòng nhập họ và tên.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) emailError = 'Email không đúng định dạng.';
  if (password.length < 6) passwordError = 'Mật khẩu cần ít nhất 6 ký tự.';
  if (confirm == '' || confirm != password) confirmError = 'Xác nhận mật khẩu chưa khớp.';

  let nameOK = showResult('fullname', nameError);
  let emailOK = showResult('email', emailError);
  let passwordOK = showResult('password', passwordError);
  let confirmOK = showResult('confirm', confirmError);
  let message = document.getElementById('message');
  message.textContent = '';
  if (nameOK && emailOK && passwordOK && confirmOK) {
    message.textContent = 'Thông tin hợp lệ! Đăng ký demo thành công.';
  }
};