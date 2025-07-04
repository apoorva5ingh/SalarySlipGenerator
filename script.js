function calculateSalary() {
    const earnings = document.querySelectorAll('.earning');
    const deductions = document.querySelectorAll('.deduction');

    let totalEarnings = 0;
    let totalDeductions = 0;

    earnings.forEach(e => totalEarnings += Number(e.value || 0));
    deductions.forEach(d => totalDeductions += Number(d.value || 0));

    const net = totalEarnings - totalDeductions;

    document.getElementById('gross').value = totalEarnings.toLocaleString("en-IN");
    document.getElementById('ctc').value = totalEarnings.toLocaleString("en-IN");
    document.getElementById('deductions').value = totalDeductions.toLocaleString("en-IN");
    document.getElementById('net').value = net.toLocaleString("en-IN");
}

document.querySelectorAll('.earning, .deduction').forEach(input => {
    input.addEventListener('input', calculateSalary);
});

window.onload = calculateSalary;
