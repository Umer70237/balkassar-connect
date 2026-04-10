// Sample data - Replace with your actual workers
const workers = [
 //tent service
  {
    name: "Rao Sohail",
    phone: "+923348718337",
    category: "tent-service",
    type: "راجپوت ٹینٹ سروس اینڈ پکوان سینٹر",
    subtype: "راجپوت ٹینٹ سروس اینڈ پکوان سینٹر",
    location:"لاری اڈہ / پرانا اڈہ",
  },

  {
    name: "Chaudhry Sajid",
    phone: "+923005389714",
    category: "tent-service",
    type: "ساجد ٹینٹ سروس اینڈ پکوان سینٹر",
    subtype: "ساجد ٹینٹ سروس اینڈ پکوان سینٹر",
    location:"لاری اڈہ / پرانا اڈہ",
  },

  {
    name: "Aqeedat Murtaza",
    phone: "+9203215101472",
    category: "tent-service",
    type: "اشہل ٹینٹ سروس اینڈ پکوان سینٹر",
    subtype: "اشہل ٹینٹ سروس اینڈ پکوان سینٹر",
    location:"بلکسر",
  },



    //drivers
  {
    name: "Rana Tabi",
    phone: "+923105543782",
    category: "driver",
    type: "ڈرائیور (کار) ",    
    subtype: "کار",
    location:"لاری اڈہ / پرانا اڈہ",
  },

  {
    name: "Rana Tajammal",
    phone: "+923199705655",
    category: "driver",
    type: "ڈرائیور (کار) ",    
    subtype: "کار",
    location:"بلکسر گاؤں",
  },


  //plumber



  {
    name: "Rana Aamir",
    phone: "+923100961379",
    category: "plumber",
    type: "پلمبر",
    subtype: "پلمبر",
    location:"لاری اڈہ / پرانا اڈہ",

  },

   {
    name: "Nauman Ali",
    phone: "+923104819572",
    category: "plumber",
    type: "الیکٹریشن + پلمبر",
    subtype: " پلمبر",
    location:"بلکسر",
  },
  {
    name: "Mudassir one",
    phone: "+923135890243",
    category: "plumber",
    type: "الیکٹریشن + پلمبر",
    subtype: " پلمبر",
    location:"بلکسر",
  },
  {
    name: "Mudassir two",
    phone: "+923171597203",
    category: "plumber",
    type: "الیکٹریشن + پلمبر",
    subtype: " پلمبر",
    location:"بلکسر",
  },

  {
    name: "Hameed",
    phone: "+923115441380",
    category: "plumber",
    type: "الیکٹریشن + پلمبر",
    subtype: " پلمبر",
    location:"بلکسر",
  },

   //Painter

  {
    name: "Sajawal Abbas",
    phone: "+923149412302",
    category: "painter",
    type: "پینٹر (رنگ کرنے والا)",
    subtype: "پینٹر",
    location:"بلکسر",
  },


  //electrician
  {
    name: "Rao Habib",
    phone: "+923075678201",
    category: "electrician",
    type: "الیکٹریشن",
    subtype: "الیکٹریشن",
    location:"لاری اڈہ / پرانا اڈہ",
  },

  {
    name: "Rana Mubashir Raza",
    phone: "+923145669484 ",
    category: "electrician",
    type: "الیکٹریشن ",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },

  {
    name: "Rana Irfan",
    phone: "+923076489850",
    category: "electrician",
    type: "الیکٹریشن",
    subtype: "الیکٹریشن",
    location:"بلکسر چوک",
  },
  {
    name: "Kashif Abbas",
    phone: "+923125621430",
    category: "electrician",
    type: "الیکٹریشن",
    subtype: "الیکٹریشن",
    location:"بلکسر چوک",
  },

  {
    name: "Nauman Ali",
    phone: "+923104819572",
    category: "electrician",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن",
    location:"بلکسر",
  },
  {
    name: "Mudassir one",
    phone: "+923135890243",
    category: "electrician",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن",
    location:"بلکسر",
  },
  {
    name: "Mudassir two",
    phone: "+923171597203",
    category: "electrician",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن",
    location:"بلکسر",
  },

  {
    name: "Hameed",
    phone: "+923115441380",
    category: "electrician",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن",
    location:"بلکسر",
  },



  //Multi-service


  
{
    name: "Rana Mubashir Raza",
    phone: "+923145669484 ",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },


{
    name: "Muzammil Hussain",
    phone: "+9233165729339 ",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },

  
  {
    name: "Nauman Ali",
    phone: "+923104819572",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },

  {
    name: "Muhammad Hanzalah",
    phone: "+923161559231",
    category: "multi-service",
    type: " موٹر وائنڈنگ / آلات کی مرمت/ریپئر AC",
    subtype:" موٹر وائنڈنگ / آلات کی مرمت/ریپئر AC",
    location:"وی ٹی آئی والی گلی",
     location:"وی ٹی آئی والی گلی",
    
  },
  {
    name: "Mudassir one",
    phone: "+923135890243",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },
  {
    name: "Mudassir two",
    phone: "+923171597203",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },

  {
    name: "Hameed",
    phone: "+923115441380",
    category: "multi-service",
    type: "الیکٹریشن + پلمبر",
    subtype: "الیکٹریشن + پلمبر",
     location:"بلکسر",
  },
  
  //carpenter
  {
    name: "Rana Kamran",
    phone: "+923165637395",
    category: "carpenter",
    type: "ووڈ ورک (لکڑی کا کام)",
    subtype: "کارپینٹر",
    location:"لاری اڈہ / پرانا اڈہ",
  },

   {
    name: "Zain Ali",
    phone: "+923135417258",
    category: "carpenter",
    type: "ووڈ ورک (لکڑی کا کام)",
    subtype: "کارپینٹر",
    location:"  سر( نزد گورنمنٹ ہائی اسکول)",
  },

  {
    name: "Nazir Sultan",
    phone: "+923115678565",
    category: "carpenter",
    type: "ووڈ ورک (لکڑی کا کام)",
    subtype: "کارپینٹر",
    location:"لاری اڈہ / پرانا اڈہ",
  },

  {
    name: "Muzammil nazir",
    phone: "+923105723818",
    category: "carpenter",
    type: "ووڈ ورک (لکڑی کا کام)",
    subtype: "کارپینٹر",
    location:"بلکسر",
  },
  


  //Rickshaw
  {
    name: "Rana Nadeem",
    phone: "+923137402514",
    category: "rickshaw-service",
    type: "رکشہ (سواری )",
    subtype: "سواری ",
    location:"بلکسر چوک",
  },
  {
    name: "Rashid Mehmood",
    phone: "+923146433359",
    category: "rickshaw-service",
    type:"رکشہ (سواری )",
    subtype: "سواری ",
    location:"بلکسر چوک",
    
  },

   {
    name: "Rana Zohaib sheri",
    phone: "+923161561452",
    category: "rickshaw-service",
    type: "رکشہ ( لوڈر)",
    subtype: " لوڈر",
    location:"بلکسر چوک",
  },

  
 {
    name: "Farooq",
    phone: "+923105528481",
    category: "rickshaw-service",
    type: "رکشہ (سواری و لوڈر)",
    subtype: "سواری و لوڈر",
    location:"بلکسر چوک",
  },

  {
    name: "Mazahir Ali",
    phone: "+923125017890",
    category: "rickshaw-service",
    type: "رکشہ ( لوڈر)",
    subtype: " لوڈر",
    location:"بلکسر چوک",
  },

  //mechanic motor winding
  {
    name: "Safeer Abbas",
    phone: "+923125727278",
    category: "mechanic",
    type: "موٹر وائنڈنگ / آلات کی مرمت",
    subtype: "موٹر وائنڈنگ / آلات کی مرمت",
    location:"بلکسر چوک",
  },
  {
    name: "Ehsan Ul Haq",
    phone: "+923068585390",
    category: "mechanic",
    type: "موٹر وائنڈنگ / آلات کی مرمت",
    subtype: "موٹر وائنڈنگ / آلات کی مرمت",
     location:"وی ٹی آئی والی گلی",
  },

  {
    name: "Muhammad Hanzalah",
    phone: "+923161559231",
    category: "mechanic",
    type: " موٹر وائنڈنگ / آلات کی مرمت/ریپئر AC",
    subtype: "ریپئر AC /موٹر وائنڈنگ / آلات کی مرمت",
     location:"وی ٹی آئی والی گلی",
  },

  

  
  //mobile repair
  {
    name: "Shayan Mobile",
    phone: "+923164725407",
    category: "mobile-repair",
    type: "موبائل ریپئرنگ",
    subtype: "موبائل ریپئرنگ",
    location:"بلکسر چوک",
  },
  {
    name: "Khurram Shehzad",
    phone: "+923115637521",
    category: "mobile-repair",
    type: "موبائل ریپئرنگ",
    subtype: "موبائل ریپئرنگ",
    location:"بلکسر چوک",
  },

   {
    name: "Pak Korea Mobile",
    phone: "+923415653678",
    category: "mobile-repair",
    type: "موبائل ریپئرنگ",
    subtype: "موبائل ریپئرنگ",
    location:"بلکسر چوک",
  },

//Food delivery
  {
    name: "Dewan-e-Khas",
    phone: "+923308531177",
    category: "food-delivery",
    type: "ریسٹورنٹ (فوڈ ڈیلیوری)",
    subtype: "ریسٹورنٹ (فوڈ ڈیلیوری)",
    location:"بلکسر",
  },
  {
    name: "Baba Prince",
    phone: "+923102354777",
    category: "food-delivery",
    type: "ریسٹورنٹ (فوڈ ڈیلیوری)",
    subtype: "ریسٹورنٹ (فوڈ ڈیلیوری)",
    location:"بلکسر",
  },

   {
    name: "Shehryar Restaurant",
    phone: "+923375908000",
    category: "food-delivery",
    type: "ریسٹورنٹ",
    subtype: "ریسٹورنٹ",
    location:"بلکسر",
  },

  {
    name: "Al Shams Bites",
    phone: "+923149208767",
    category: "food-delivery",
    type: "فوڈ ڈیلیوری",
    subtype: "فوڈ ڈیلیوری",
    location:"بلکسر چوک",
  },


  //دکانیں، اسٹورز اور بچت مال
  
{
    name: "Rana Masood",
    phone: "+923125347108",
    category: "shops",
    type: "مکہ جنرل اسٹور",
    subtype: "مکہ جنرل اسٹور",
    location:"بلکسر چوک",
  },


  {
    name: "Rana Javed",
    phone: "+923120465112",
    category: "shops",
    type: "امبالہ ہارڈویئر اینڈ پینٹ",
    subtype: "امبالہ ہارڈویئر اینڈ پینٹ",
    location:"بلکسر چوک",
  },

  {
    name: "Rana Majid",
    phone: "+923255056218",
    category: "shops",
    type: "امبالہ سینٹری اینڈ الیکٹرک",
    subtype: "امبالہ سینٹری اینڈ الیکٹرک",
    location:"بلکسر چوک",
  },


  {
    name: "Jahan Khan",
    phone: "+923215471472",
    category: "shops",
    type: "اشہل بچت مال اینڈ الیکٹرانکس قسط سینٹر",
    subtype: "اشہل بچت مال اینڈ الیکٹرانکس قسط سینٹر",
    location:"بلکسر چوک",
  },

  

  {
    name: "Saqib",
    phone: "+923340580512",
    category: "shops",
    type: " بچت مال",
    subtype: " بچت مال",
    location:"یو بی ایل بینک کے قریب",
  },

  {
    name: "Ansar Mehmood",
    phone: "+923359212298",
    category: "shops",
    type: "کینٹ بک شاپ",
    subtype: "کینٹ بک شاپ",
    location:"بلکسر چوک",
  },

  //medical services

   {
    name: "MC Lab Services",
    phone: "+923345296314",
    category: "medical",
    type: "لیب سروسز",
    subtype: "لیب سروسز",
    location:"یو بی ایل بینک کے قریب",
  },

  {
    name: "MKB Pharmacy",
    phone: "+923173692655",
    category: "medical",
    type: "میڈیکل سروسز",
    subtype: "میڈیکل سروسز",
    location:"بلکسر چوک",
  },

  {
    name: "Rana Abubakar",
    phone: "+923135434162",
    category: "medical",
    type: "ہوم میڈیکل سروسز (انجیکشن، پٹی، ڈرپ وغیرہ)",
    subtype: "ہوم میڈیکل سروسز (انجیکشن، پٹی، ڈرپ وغیرہ)",
    location:"بلکسر ",
  },

  //milk shops

   {
    name: "Zaigham Abbas",
    phone: "+923141737214",
    category: "milk",
    type: "مِلک شاپ/دودھ والے",
    subtype: "مِلک شاپ/دودھ والے",
    location:"بلکسر (راؤ عمر فاروق مارکیٹ)",
  },

  {
    name: "Rana Ghulam Raza",
    phone: "+923145671068",
    category: "milk",
    type: "مِلک شاپ/دودھ والے",
    subtype: "مِلک شاپ/دودھ والے",
    location:"بکھاری کلاں (ٹالی والا اڈہ)",
  },

  //مستری

  {
    name: "Rana Waseem Raza ",
    phone: "+923195336904",
    category: "labour",
    type: "مستری",
    subtype: "مستری",
    location:"بلکسر",
  },
  
  {
    name: "Mudassir Alvi ",
    phone: "+923155706244",
    category: "labour",
    type: "مستری",
    subtype: "مستری",
    location:"بلکسر",
  },

  {
    name: "Rizwan Haider",
    phone: "+923123086572",
    category: "Auto-repair",
    type: "آٹو الیکٹریشن اینڈ بیٹری سروس",
    subtype: "آٹو الیکٹریشن اینڈ بیٹری سروس",
    location:"لاری اڈہ / پرانا اڈہ",
  },
  
  {
    name: "Shakeel Ikram ",
    phone: "+923105736638",
    category: "Auto-repair",
    type: "آٹو ڈیکوریشن",
    subtype: "آٹو ڈیکوریشن",
    location:"نزد ریڈو کمپلیکس",
  },

   {
    name: "Shahbaz Ali",
    phone: "+923145584582",
    category: "Auto-repair",
    type: "آٹو پارٹس میکینک",
    subtype: "آٹو پارٹس میکینک",
    location:"بلکسر",
  },

  //دیگر خدمات

{
    name: "Rana Adeel",
    phone: "+923026266960",
    category: "other-services",
    type: "جیولری شاپ",
    subtype: "جیولری شاپ",
    location:"بلکسر گاؤں",
  },

  {
    name: "Kamran Sajid",
    phone: "+923145387233",
    category: "other-services",
    type: "بی۔کے سیلنگ اینڈ ڈیکوریڑر",
    subtype: "بی۔کے سیلنگ اینڈ ڈیکوریڑر",
    location:"علی مارکیٹ بلکسر",
  },

   {
    name: "Amir Altaf",
    phone: "+923145668633",
    category: "other-services",
    type: "پلائی ووڈ اینڈ سریا اسٹور",
    subtype: "پلائی ووڈ اینڈ سریا اسٹور",
    location:"لاری اڈہ / پرانا اڈہ",
  },



  
  

];

//Whatsapp Groups

const whatsappGroups = [
  {
    groupName: "Balkassar News Updates",
    adminName: " Rana Mubashir and Imran Umar",
    description: "ہم لاتے ہیں وہ خبریں جو اہم ہوں — نہ کہ صرف وہ جو توجہ حاصل کریں ۔",
    category: "whatsapp-group",
    link: "https://chat.whatsapp.com/E6DZeWkTau1HZrexzl6rM9?mode=hqctcla"
  },

  {
    groupName: "Balkassar Press Club",
    adminName: "Zawar Qasim Awan",
    description: "بلکسر اور گردونواح کی خبریں اور ہر قسم کی معلومات حاصل کریں۔",
    category: "whatsapp-group",
    link: "https://chat.whatsapp.com/1RegLpRnT4GHyEjrcVUCYp?mode=gi_t"
  },

   {
    groupName: "Bhagwal Media House",
    adminName: "Jaleel Naqvi",
    description: "آپ کی آواز، آپ کی خبر — مکمل رازداری کے ساتھ — ہر خبر پر نظر",
    category: "whatsapp-group",
    link: "https://chat.whatsapp.com/CMweZPxZ9cFGekgS9gVoQg"
  },

  {
    groupName: "Ch Iftakhar Al Fasal",
    adminName:"Ch Iftakhar",
    description: "Trade Test Center Rawalpindi Chandni Chowk Iran Road",
    category: "whatsapp-group",
    link: "https://whatsapp.com/channel/0029Vb7Ig1nISTkSpgqaTl1D"
  },

  

 
];

      

      const categoryButtons = document.querySelectorAll(".category-btn");
      const workersList = document.getElementById("workers-list");
      const sectionTitle = document.getElementById("section-title");
      const scrollTopBtn = document.getElementById("scrollTopBtn");

    function renderWorkers(category) {
  const filteredWorkers = category === "all"
    ? workers
    : workers.filter((w) => w.category === category);

  const workersHTML = filteredWorkers.map((worker) => {
    const showSubtype = (worker.category === "driver" || worker.category === "tent-service" || worker.category === "multi-service" || worker.category === "shops" || worker.category === "food-delivery" || worker.category === "rickshaw-service " || worker.category === "medical" || worker.category === "other-services" || worker.category === "Auto-repair") && worker.subtype;

const badge = category === "all"
  ? `<span class="category-badge">${worker.type}</span>`
  : showSubtype
    ? `<span class="category-badge">${worker.subtype}</span>`
    : "";
    return `
      <div class="worker-card">
        <div class="worker-info">
          <div class="worker-name">
            <span>${worker.name}</span>
            ${badge}
          </div>
          <div class="worker-location">${worker.location}</div>
        </div>
        <div class="worker-buttons">
          <a href="https://wa.me/${worker.phone.replace(/\+/g, "")}" class="whatsapp-btn">
            <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="tel:${worker.phone}" class="call-btn">
            <svg class="call-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call
          </a>
        </div>
      </div>
    `;
  }).join("");

  const groupsHTML = (category === "all" || category === "whatsapp-group")
    ? renderGroups()
    : "";

  workersList.innerHTML = workersHTML + groupsHTML;
}

function renderGroups() {
  return whatsappGroups.map((group) => {
    return `
      <div class="group-card">
        <div class="group-info">
          <div class="group-title">${group.groupName}</div>

          <div class="group-admin">
            Admin: ${group.adminName}
          </div>

          <div class="group-desc">
            ${group.description}
          </div>
        </div>

        <div class="group-button">
          <a href="${group.link}" target="_blank">
            گروپ میں شامل ہونے کے لیے یہاں کلک کریں
          </a>
        </div>
      </div>
    `;
  }).join("");
}
      function updateCategory(category) {
        // Update active button
        categoryButtons.forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.category === category);
        });

        // Update section title
        const titles = {
          all: "تمام خدمات",
          plumber: "پلمبر",
          electrician: "الیکٹریشن",
          carpenter: "ووڈ ورک (لکڑی کا کام)",
          mechanic: "موٹر وائنڈنگ / آلات کی مرمت",
          driver: "ڈرائیور / گاڑی کی بکنگ",
          "tent-service": "ٹینٹ سروس",
          "rickshaw-service": "رکشہ سروس (سواری و لوڈر)",
          "mobile-repair": "موبائل ریپئرنگ",
          "multi-service": "ایک سے زائد کام کرنے والے",
          painter: "پینٹر (رنگ کرنے والا)",
          "whatsapp-group": "بلکسر کے نامور واٹس ایپ گروپس",
          shops: "دکانیں، اسٹورز اور بچت مال",
          medical: "میڈیکل سروسز/لیب سروسز",
          milk: "مِلک شاپ/دودھ والے",
          "food-delivery":"ریسٹورنٹ (فوڈ ڈیلیوری)",
           "other-services": "دیگر خدمات",
          "Auto-repair": "آٹو مکینک (گاڑیاں و بائیک)",
          labour: "مستری",        

        };
        sectionTitle.textContent = titles[category];

        // Render workers
        renderWorkers(category);

        // Smooth scroll to workers section
        setTimeout(() => {
          document.querySelector(".workers-section").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
         
      }

      // Event listeners for category buttons
      categoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          updateCategory(btn.dataset.category);
        });
      });



     // Track which category button was clicked
let lastClickedButton = null;

// Event listeners for category buttons
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    lastClickedButton = btn; // Remember which button was clicked
    updateCategory(btn.dataset.category);
  });
});

// Scroll arrow - go back to the category button that was clicked
scrollTopBtn.addEventListener("click", () => {
  if (lastClickedButton) {
    // Scroll to the specific button that was clicked
    lastClickedButton.scrollIntoView({
      behavior: "smooth",
      block: "center", // Makes sure button is centered/fully visible
    });
  } else {
    // If no button was clicked (shouldn't happen), go to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// Show/hide scroll button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 1100) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});
     // Initial render
renderWorkers("all");

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
