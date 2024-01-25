const boxsContainer = document.querySelector('.boxs');
const scrollIndicator = document.querySelector('.scroll-indicator');
let isMouseDown = false;
let startX;
let scrollLeft;

boxsContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - boxsContainer.offsetLeft;
  scrollLeft = boxsContainer.scrollLeft;
});

boxsContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

boxsContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
});

boxsContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - boxsContainer.offsetLeft;
  const walk = (x - startX) * 3;
  boxsContainer.scrollLeft = scrollLeft - walk;
});









function submitData() {
  var emailInput = document.getElementById('emailInput');
  var emailValue = emailInput.value.trim(); // استخراج قيمة البريد الإلكتروني وإزالة الفراغات الزائدة
  var errorText = document.getElementById('errorText');

  if (emailValue === '') {
    errorText.textContent = 'please insert vatld email.';
  } else if (!isValidEmail(emailValue)) {
    errorText.textContent = 'please insert vatld email.';
  } else {
    console.log('تم إرسال البريد الإلكتروني: ' + emailValue);
    errorText.textContent = ''; // مسح نص رسالة الخطأ إذا تم إدخال بريد إلكتروني صحيح
    // يمكنك هنا إجراء إجراءات إضافية، مثل إرسال البيانات إلى الخادم
    emailInput.value = '';
  }

}

function isValidEmail(email) {
  // استخدم تعبيرًا منتظمًا للتحقق من صحة البريد الإلكتروني
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}







//onclick opan and close

//said  . overlay .. iconhumer . close1

document.getElementById("hamburger").addEventListener("click" , function(){
  document.querySelector('.overlay').style.transform = 'translateY(0)';
  document.querySelector('.said').style.transform = 'translate(-50%, 55%)';
  document.getElementById('closess').style.transform='translatey(235%)'
  document.getElementById('hamburger').style.transform='translatey(-100%)'
  document.getElementById('hamburger').style.top='-55px'
  document.querySelector('body').style.overflowY='hidden'



  
})

document.getElementById("closess").addEventListener("click" , function(){
  document.querySelector('.overlay').style.transform='translateY(-100%)';
  document.querySelector('.said').style.transform = 'translate(-50%, -100%)';
  document.getElementById('closess').style.transform='translatey(-100%)'
  document.getElementById('hamburger').style.transform='unset'
  document.getElementById('hamburger').style.top='unset'
  document.querySelector('body').style.overflowY='scroll'

})