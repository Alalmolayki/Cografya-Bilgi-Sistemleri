// Footer yüksekliğini al
var footerHeight = document.querySelector('footer').offsetHeight;

// İçeriğin altına footer yüksekliği kadar boşluk ekle
document.querySelector('#guncellemeler').style.marginBottom = footerHeight + 5 + 'px';

// Formu göndermeden önce alanları kontrol et
document.getElementById('gonderButton').addEventListener('click', function(event) {
  var adInput = document.getElementById('ad');
  var emailInput = document.getElementById('email');
  var selectInput = document.getElementById('tur');

  if (adInput.value.trim() === '' || emailInput.value.trim() === '' || selectInput.value === '0') {
      event.preventDefault(); // Formun gönderilmesini engelle
      alert('Lütfen tüm alanları doldurunuz ve bir başvuru tipi seçiniz.'); // Kullanıcıya uyarı mesajı göster
  } else {
      document.querySelector('form').submit(); // Tüm alanlar doluysa formu gönder
  }
});

// Formdaki butona tıklandığında sayfanın yenilenmesi
document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault(); // Formun gönderilmesini engelle
  location.reload(); // Sayfayı yeniden yükle
});