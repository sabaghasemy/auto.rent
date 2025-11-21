fetch('http://localhost:3000/cards') 
  .then(response => response.json()) // تبدیل به شیء JS
  .then(data => {
    console.log(data); // استفاده از داده‌ها
  })
  .catch(error => console.error('Error:', error));