const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const header = document.createElement("div")
  header.setAttribute("class", "header")

  const span = document.createElement("span")
  span.setAttribute("class", "date")
  span.textContent = tarih

  const h1 = document.createElement("h1")
  h1.textContent = baslik

  const spaniki = document.createElement("span")
  spaniki.setAttribute("class", "temp")
  spaniki.textContent = yazi

  header.append(span);
  header.append(h1);
  header.append(spaniki);

  return header;

}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const bilesen = Header("Burak CEVİZLİ Teknoloji Sayfası", "29/07/23", "Buraya yazı yazalım bakalım ne oluyor.")

  const secicibir = document.querySelector(secici)

  secicibir.append(bilesen)

  return secicibir;

}

export { Header, headerEkleyici }
