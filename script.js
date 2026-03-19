function orderNow(productName) {

  let message = `नमस्कार 🙏
मला खालील प्रॉडक्ट पाहिजे:

Product: ${productName}

नाव:
गाव:
मोबाईल:

कृपया माहिती द्या.`;

  let phoneNumber = "918830265249"; // YOUR NUMBER

  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url, '_blank');
}
