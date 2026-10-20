let calculation = '';
let open = 0;
let finished = false;
let result = document.getElementById('result');
let expression = document.getElementById('expression');

function pressKey(key) {
    if (key == 'C') {
        calculation = '';
        open = 0;
        finished = false;
        expression.textContent = 'Nhập phép tính';
        result.textContent = '0';
        return;
    }

    if (finished && !'+−×÷%='.includes(key)) calculation = '';
    finished = false;

    if (key == '()') {
        let last = calculation[calculation.length - 1];
        if (open > 0 && last != '(' && !'+−×÷'.includes(last)) {
            calculation += ')';
            open--;
        } else {
            calculation += '(';
            open++;
        }
    } else if (key == '=') {
        if (calculation == '') return;
        while (open > 0) {
            calculation += ')';
            open--;
        }
        expression.textContent = calculation + ' =';
        let formula = calculation.replaceAll('×', '*').replaceAll('÷', '/')
            .replaceAll('−', '-').replaceAll('%', '/100');
        try {
            calculation = String(eval(formula));
            result.textContent = calculation;
        } catch {
            calculation = '';
            result.textContent = 'Lỗi';
        }
        finished = true;
        return;
    } else {
        calculation += key;
    }
    expression.textContent = 'Biểu thức';
    result.textContent = calculation;
}

let buttons = document.querySelectorAll('#keys button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        pressKey(this.textContent);
    };
}