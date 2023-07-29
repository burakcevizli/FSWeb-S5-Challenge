import axios from "axios"

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div")
  cardDiv.setAttribute("class","card")

  const headlineDiv = document.createElement("div")
  headlineDiv.setAttribute("class","headline")
  headlineDiv.textContent = makale.anabaslik

  const authorDiv = document.createElement("div")
  authorDiv.setAttribute("class","author")

  const imgDiv = document.createElement("div")
  imgDiv.setAttribute("class","img-container")

  const img = document.createElement("img")
  img.setAttribute("src","makale.yazarFoto")

  const span = document.createElement("span")
  span.textContent = makale.yazarAdı + " tarafından"

  imgDiv.append(img)
  authorDiv.append(imgDiv)
  cardDiv.append(headlineDiv,authorDiv,span)

  cardDiv.addEventListener("click",(element)=>{
    console.log(makale.anabaslik)
  })

  return cardDiv;

}


const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const seciciUc = document.querySelector(secici)

  async function gorevAlti(){
    await  axios.get(`http://localhost:5001/api/makaleler`).then((response)=>{
      const makaleler = response.data.makaleler
      seciciUc.append(makaleler)
    })
  }
    gorevAlti()

  
}

export { Card, cardEkleyici }
