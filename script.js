

window.addEventListener('DOMContentLoaded', () => {
    const fadeUps = document.querySelectorAll('.fade-up');
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    fadeUps.forEach(el => {
      observer.observe(el);
    });
  });
  // Добавим задержку анимации по очереди
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});


const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === n) slide.classList.add('active');
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // автопрокрутка каждые 5 секунд




  const phrases = [
    "Жалюзи под ваш стиль",
    "Комфорт и уют в вашем доме",
    "Элегантность и функциональность"
  ];
  const element = document.getElementById("typewriter");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      element.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      element.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? 40 : 100);
  }

  type();





  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // const materialsData = {
  //   plisse: {
  //     "Лизбон (125)": 125000,
  //     "Ривер (175)": 175000,
  //     "Блекаут (240)": 240000,
  //     "Блекаут Китай (360)": 360000
  //   },
  //   combo: {
  //     "Бежевый (90)": 90000,
  //     "Бежевый (110)": 110000,
  //     "Шоколад (140)": 140000
  //   },
  //   dikey: {
  //     "Классик (280) ": 280000,
  //     "Люкс (350)": 350000
  //   }
  // };
  
  // const typeSelect = document.getElementById('type');
  // const materialSelect = document.getElementById('material');
  // const form = document.getElementById('calc-form');
  // const resultDiv = document.getElementById('result');
  
  // typeSelect.addEventListener('change', () => {
  //   const selectedType = typeSelect.value;
  //   const materials = materialsData[selectedType];
  
  //   // очистка и обновление опций
  //   materialSelect.innerHTML = '<option disabled selected>Выберите материал</option>';
  //   for (let name in materials) {
  //     const opt = document.createElement('option');
  //     opt.value = name;
  //     opt.textContent = name;
  //     materialSelect.appendChild(opt);
  //   }
  // });
  
  // form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   const type = typeSelect.value;
  //   const material = materialSelect.value;
  //   const price = materialsData[type][material];
  
  //   const width = parseFloat(document.getElementById('width').value);
  //   const height = parseFloat(document.getElementById('height').value);
  
  //   if (isNaN(width) || isNaN(height)) {
  //     resultDiv.textContent = 'Введите корректные размеры.';
  //     return;
  //   }
  
  //   const area = (width / 100) * (height / 100); // в м²
  //   const total = area < 1 ? price : Math.round(area * price);
  //   resultDiv.textContent = `Итого: ${total.toLocaleString()} сум`;
  // });
    




 




  // Бургер меню

  const burger = document.getElementById("burger");
  const navMenu = document.querySelector("nav.main-nav ul");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });




  // показать кнопку при прокрутке

  // const scrollBtn = document.getElementById("scrollTopBtn");

  // window.addEventListener("scroll", () => {
  //   scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  // });

  // scrollBtn.addEventListener("click", () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // });










const reviewTrack = document.getElementById("reviewSliderTrack");
const reviewSlides = document.querySelectorAll(".review-slide");
const reviewPrev = document.getElementById("reviewPrev");
const reviewNext = document.getElementById("reviewNext");

let reviewIndex = 0;

function updateReviewSlide() {
  reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
}

reviewPrev.addEventListener("click", () => {
  reviewIndex = (reviewIndex - 1 + reviewSlides.length) % reviewSlides.length;
  updateReviewSlide();
});

reviewNext.addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % reviewSlides.length;
  updateReviewSlide();
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

 


document.getElementById('oModal').onclick = function() {
  document.getElementById('contactModal').style.display = 'block';
};
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



// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.querySelector('input[type="text"]').value;
//   const phone = document.getElementById("phone").value;
//   const type = document.getElementById("type").value;
//   const size = document.getElementById("size").value;
//   const photoInput = document.getElementById("photo");
//   const photoFiles = Array.from(photoInput.files).slice(0, 3); // максимум 3 файла

//   const token = "7838735275:AAHVGzV4X5LsYUQ01yx3Z-OWu0f17eRkCjA";
//   const chat_id = "5675827541";

//   const message = `🆕 *Новая заявка:*\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🪟 Тип жалюзи: ${type}\n📐 Размеры:\n${size}`;

//   if (photoFiles.length > 0) {
//     const formData = new FormData();
//     formData.append("chat_id", chat_id);
//     formData.append("parse_mode", "Markdown");

//     // Собираем массив media
//     const media = [];
//     photoFiles.forEach((file, index) => {
//       formData.append(`photo${index}`, file); // фото как отдельные поля
//       media.push({
//         type: "photo",
//         media: `attach://photo${index}`,
//         ...(index === 0 && { caption: message }) // только первое фото с подписью
//       });
//     });

//     formData.append("media", JSON.stringify(media));

//     fetch(`https://api.telegram.org/bot${token}/sendMediaGroup`, {
//       method: "POST",
//       body: formData
//     })
//     .then(response => {
//       if (response.ok) {
//         alert("Заявка с фото отправлена!");
//         document.querySelector("form").reset();
//         document.getElementById("phone").value = "";
//       } else {
//         alert("Ошибка при отправке фото.");
//       }
//     })
//     .catch(error => {
//       console.error("Ошибка:", error);
//       alert("Ошибка при подключении.");
//     });
//   } else {
//     // Если фото нет — просто отправляем текст
//     fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         chat_id: chat_id,
//         text: message,
//         parse_mode: "Markdown"
//       })
//     })
//     .then(response => {
//       if (response.ok) {
//         alert("Заявка отправлена!");
//         document.querySelector("form").reset();
//         document.getElementById("phone").value = "";
//       } else {
//         alert("Ошибка при отправке.");
//       }
//     })
//     .catch(error => {
//       console.error("Ошибка:", error);
//       alert("Ошибка при подключении.");
//     });
//   }
// });





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

const message = `🆕 *Новая заявка:*\n\n👤 Имя: ${name}\n📞 Телефон: ${phoneNumberForLink}"\n🪟 Тип жалюзи: ${type}\n📐 Размеры:\n${size}`;

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





 





document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function () {
    let digits = phoneInput.value.replace(/\D/g, ""); // Удаляем всё, кроме цифр
    digits = digits.slice(0, 12); // Максимум 12 цифр (вместе с 998)

    if (digits.startsWith("998")) {
      digits = digits.slice(3); // убираем "998", оно уже в шаблоне
    }

    let formatted = "+998";

    if (digits.length > 0) {
      formatted += " (" + digits.substring(0, 2);
    }
    if (digits.length >= 2) {
      formatted += ") " + digits.substring(2, 5);
    }
    if (digits.length >= 5) {
      formatted += "-" + digits.substring(5, 7);
    }
    if (digits.length >= 7) {
      formatted += "-" + digits.substring(7, 9);
    }

    phoneInput.value = formatted;
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("cls");

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




