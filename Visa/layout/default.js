// function renderHeader() {
//     const header = document.createElement('header');
//     header.className = 'navbar';

//     header.innerHTML = `
//   <nav>
//     <a href="/index.html">Главная</a>
//     <a href="/pages/wallets/index.html">Кошельки</a>
//     <a href="index.html" class="active">Транзакции</a>
//   </nav>
//   <div class="left">
//     <a href="#" class="user-email">alexadams@google.com</a>
//     <img src="login.png" alt="">
//   </div>
//     `;
//     // document.body.prepend(header);

// }


// export function renderLayout() {
//     const body = document.querySelector('body');
//     const header = renderHeader();

//     body.prepend(header);

// }

let logout = document.querySelector('.logout');

logout.onclick = (e) => {
    e.preventDefault();

    if (confirm('Вы действительно хотите выйти?')) {
        window.location.href = '/pages/login/index.html'
        alert("Пока!");
    } else {
        alert("ОКАК");
    }
};