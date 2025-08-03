


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
  const rawPhone = this.phone.value.replace(/[^\d]/g, ''); // Удаляем всё кроме цифр
const phone = `+${rawPhone}`; // Добавляем код страны (если он не вводится вручную)

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




document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const phone = document.getElementById("phone").value.replace(/[^\d]/g, '');  // Убираем все ненужные символы
  const type = document.getElementById("type").value;
  const size = document.getElementById("size").value;
  const photoInput = document.getElementById("photo");
  const photoStatus = document.getElementById("photo-status");

photoInput.addEventListener("change", function () {
  const files = Array.from(photoInput.files);
  if (files.length === 0) {
    photoStatus.textContent = "Файлы не выбраны";
  } else if (files.length > 3) {
    photoStatus.textContent = `Вы выбрали ${files.length}, но будет использовано только 3 фото`;
  } else {
    photoStatus.textContent = `Выбрано фото: ${files.length} из 3`;
  }
});

  const photoFiles = Array.from(photoInput.files).slice(0, 3); // максимум 3 файла

  const token = "7838735275:AAHVGzV4X5LsYUQ01yx3Z-OWu0f17eRkCjA";
  const chat_id = "5675827541";

  const phoneNumberForLink = `tel:+${phone}`;

const message = `🆕 *Новая заявка:*\n\n👤 Имя: ${name}\n📞 Телефон: ${phoneNumberForLink}\n🪟 Тип жалюзи: ${type}\n📐 Размеры:\n${size}`;

  if (photoFiles.length > 0) {
    const formData = new FormData();
    const media = [];

    // Загружаем файлы и создаём структуру media[]
    photoFiles.forEach((file, index) => {
      const fieldName = `file${index}`;
      formData.append(fieldName, file);
      media.push({
        type: "photo",
        media: `attach://${fieldName}`,
        ...(index === 0 && { caption: message }),
        parse_mode: "Markdown"
      });
    });

    formData.append("chat_id", chat_id);
    formData.append("media", JSON.stringify(media));

    fetch(`https://api.telegram.org/bot${token}/sendMediaGroup`, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Заявка с фото отправлена!");
        document.querySelector("form").reset();
        document.getElementById("phone").value = "";
      } else {
        response.text().then(text => console.error("Ошибка: ", text));
        alert("Ошибка при отправке фото.");
      }
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка при подключении.");
    });

  } else {
    // Если фото нет — просто текст
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
        parse_mode: "Markdown"
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Заявка отправлена!");
        document.querySelector("form").reset();
        document.getElementById("phone").value = "";
      } else {
        alert("Ошибка при отправке.");
      }
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка при подключении.");
    });
  }
});
