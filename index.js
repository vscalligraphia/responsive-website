const darkMode =  document.querySelector('.dark-mode');
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function () {
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
            <td class='primary'>Details</td>
        `;
        tr.innerHTML = trContent;

        const tbody = document.querySelector('table tbody');
        if (tbody) {
            tbody.appendChild(tr);
        } else {
            console.error('Table body element not found.');
        }
    });
});
