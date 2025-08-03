


document.getElementById('oModal').onclick = function() {
  document.getElementById('contactModal').style.display = 'block';
};

document.querySelector('.cls').onclick = function() {
  document.getElementById('contactModal').style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == document.getElementById('contactModal')) {
    document.getElementById('contactModal').style.display = 'none';
  }
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const phone = this.phone.value;
  const message = this.message.value;
  const type = this.type.value;
  const text = `Заявка с сайта Town Jalyuzi:\nИмя: ${name}\nТелефон: ${phone}\nРазмер жалюзи: 
   ${message}\nВид жалюзи: ${type}`;

  // Замените TOKEN и CHAT_ID на ваши значения
  const TOKEN = '7838735275:AAHVGzV4X5LsYUQ01yx3Z-OWu0f17eRkCjA';
  const CHAT_ID = '5675827541';

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  }).then(res => {
    alert("Спасибо! Заявка отправлена.");
    document.getElementById('contactModal').style.display = 'none';
    this.reset();
  }).catch(err => {
    alert("Ошибка при отправке. Попробуйте позже.");
  });
});



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

function closeModal() {
  modal.style.display = "none";
}




function formatPhone(input) {
  let value = input.value;

  // Удаляем все символы, кроме цифр
  let digits = value.replace(/\D/g, '');

  // Добавляем +998 только в начале
  if (!digits.startsWith('998')) {
    digits = '998';
  }

  input.value = '+' + digits;
}



function formatUzbekPhone(input) {
  let digits = input.value.replace(/\D/g, '');

  // Убираем лишние цифры, если их больше 12 (998 + 9 цифр)
  if (digits.startsWith('998')) {
    digits = digits.slice(0, 12);
  } else {
    digits = '998';
  }

  let formatted = '+998';

  if (digits.length > 3) {
    formatted += ' (' + digits.slice(3, 5);
  }
  if (digits.length >= 5) {
    formatted += ') ' + digits.slice(5, 8);
  }
  if (digits.length >= 8) {
    formatted += '-' + digits.slice(8, 10);
  }
  if (digits.length >= 10) {
    formatted += '-' + digits.slice(10, 12);
  }

  input.value = formatted;
}


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("close-modal");

  // Показываем окно при загрузке
  modal.style.display = "block";

  // Закрытие по кнопке
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Закрытие по клику вне окна
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
