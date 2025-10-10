document.addEventListener('DOMContentLoaded', () => {
  const USER_API = "https://script.google.com/macros/s/AKfycbwAGJsclDN5hMGjQrudkgFbvTwFQMOjzuHWHQaUOZbU7N3wwmLzjbUh51QJXDADmB4qNA/exec";

// --- Translations ---
const translations = {
  en: {
    home: "Home",
    products: "Products & Services",
    contact: "Contact",
    logout: "Logout",
    farmerUpload: "Farmer Upload",
    loginBtn: "Login",
    registerNow: "Register Now",
    welcome: "Welcome",
    invalidCredentials: "Invalid credentials or account not verified.",
    accountPendingVerification: "Your account is pending admin verification.",
    loginFailed: "Login failed. Please try again.",
    uploadFailed: "Upload failed",
    completeProfile: "Complete Profile",
    profile: "Profile",
    editProfile: "Edit Profile",
    pendingVerification: " (Pending verification)",

    // 👇 NEW
    welcomeAgrofy: "Welcome to Agrofy",
    empoweringText: "Empowering farmers and connecting buyers with fresh, quality agricultural products and services.",
    addToCart: "Add to Cart",
    registerTitle: "Register",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    selectType: "-- Select User Type --",
    buyerOption: "Buyer",
    farmerOption: "Farmer",
    transportOption: "Transport",
    phonePlaceholder: "Phone",
    addressPlaceholder: "Address",
    idTypeLabel: "Select ID Type:",
    govtDoc: "Government Document",
    selfDecl: "Self Declaration",
    farmSizePlaceholder: "Farm size (optional)",
    businessPlaceholder: "Business (optional)",
    vehiclePlaceholder: "Vehicle (optional)",
    licensePlaceholder: "License (optional)",
    registerBtn: "Register",
    uploadTitle: "📤 Upload Your Product or Service",
  productName: "Product/Service Name",
  selectType: "-- Select Type --",
  productOption: "Product",
  serviceOption: "Service",
  description: "Description",
  price: "Price (₹)",
  quantity: "Quantity",
  imageUpload: "Upload Image",
  uploadBtn: "Upload for Verification",
  loginTitle: "Login",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  loginBtn: "Login",
    contactTitle: "Contact Us",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactMessage: "Your Message",
  sendMessageBtn: "Send Message",
    faq: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faq1q: "Who can register on Agrofy?",
  faq1a: "Farmers, buyers, and transport providers can register on Agrofy to connect and grow their business.",
  faq2q: "How do I upload my products?",
  faq2a: "After login, verified users can go to the upload page, fill details, and submit for admin verification.",
  faq3q: "Is Agrofy free to use?",
  faq3a: "Yes, Agrofy is completely free for all users to register, connect, and explore services.",
  faq4q: "How can I contact support?",
  faq4a: "You can visit our Contact page or send an email through the contact form available there."

  },
  hi: {
    home: "मुखपृष्ठ",
    products: "उत्पाद और सेवाएँ",
    contact: "संपर्क करें",
    logout: "लॉगआउट",
    farmerUpload: "किसान अपलोड",
    loginBtn: "लॉगिन",
    registerNow: "अभी रजिस्टर करें",
    welcome: "स्वागत",
    invalidCredentials: "गलत क्रेडेंशियल या सत्यापित नहीं।",
    accountPendingVerification: "आपका अकाउंट एडमिन सत्यापन के लिए लंबित है।",
    loginFailed: "लॉगिन विफल रहा। कृपया फिर प्रयास करें।",
    uploadFailed: "अपलोड विफल",
    completeProfile: "प्रोफ़ाइल पूरी करें",
    profile: "प्रोफ़ाइल",
    editProfile: "प्रोफ़ाइल संपादित करें",
    pendingVerification: " (सत्यापन लंबित)",

    // 👇 NEW
    welcomeAgrofy: "एग्रोफाई में आपका स्वागत है",
    empoweringText: "किसानों को सशक्त बनाना और खरीदारों को ताज़ा, उच्च गुणवत्ता वाले कृषि उत्पादों और सेवाओं से जोड़ना।",
    addToCart: "कार्ट में जोड़ें",
    registerTitle: "पंजीकरण",
namePlaceholder: "नाम",
emailPlaceholder: "ईमेल",
passwordPlaceholder: "पासवर्ड",
selectType: "-- उपयोगकर्ता प्रकार चुनें --",
buyerOption: "खरीदार",
farmerOption: "किसान",
transportOption: "परिवहन",
phonePlaceholder: "फ़ोन",
addressPlaceholder: "पता",
idTypeLabel: "पहचान प्रकार चुनें:",
govtDoc: "सरकारी दस्तावेज़",
selfDecl: "स्व-घोषणा",
farmSizePlaceholder: "खेती का आकार (वैकल्पिक)",
businessPlaceholder: "व्यवसाय (वैकल्पिक)",
vehiclePlaceholder: "वाहन (वैकल्पिक)",
licensePlaceholder: "लाइसेंस (वैकल्पिक)",
registerBtn: "पंजीकरण करें",
  uploadTitle: "📤 अपना उत्पाद या सेवा अपलोड करें",
  productName: "उत्पाद/सेवा का नाम",
  selectType: "-- प्रकार चुनें --",
  productOption: "उत्पाद",
  serviceOption: "सेवा",
  description: "विवरण",
  price: "कीमत (₹)",
  quantity: "मात्रा",
  imageUpload: "छवि अपलोड करें",
  uploadBtn: "सत्यापन के लिए अपलोड करें",
    loginTitle: "लॉगिन करें",
  emailPlaceholder: "ईमेल",
  passwordPlaceholder: "पासवर्ड",
  loginBtn: "लॉगिन करें",
    contactTitle: "संपर्क करें",
  contactName: "आपका नाम",
  contactEmail: "आपका ईमेल",
  contactMessage: "आपका संदेश",
  sendMessageBtn: "संदेश भेजें",
    faq: "सामान्य प्रश्न",
  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  faq1q: "Agrofy पर कौन पंजीकरण कर सकता है?",
  faq1a: "किसान, खरीदार और परिवहन प्रदाता Agrofy पर पंजीकरण कर सकते हैं और अपना व्यवसाय बढ़ा सकते हैं।",
  faq2q: "मैं अपने उत्पाद कैसे अपलोड कर सकता हूँ?",
  faq2a: "लॉगिन के बाद, सत्यापित उपयोगकर्ता अपलोड पेज पर जाकर विवरण भर सकते हैं और सत्यापन के लिए सबमिट कर सकते हैं।",
  faq3q: "क्या Agrofy का उपयोग मुफ्त है?",
  faq3a: "हाँ, Agrofy सभी उपयोगकर्ताओं के लिए पूरी तरह से मुफ्त है।",
  faq4q: "मैं सहायता से कैसे संपर्क कर सकता हूँ?",
  faq4a: "आप हमारे संपर्क पेज पर जा सकते हैं या वहाँ उपलब्ध संपर्क फॉर्म के माध्यम से ईमेल भेज सकते हैं।"

  },
  mr: {
    home: "मुखपृष्ठ",
    products: "उत्पादने आणि सेवा",
    contact: "संपर्क",
    logout: "लॉगआउट",
    farmerUpload: "शेतकरी अपलोड",
    loginBtn: "लॉगिन",
    registerNow: "नोंदणी करा",
    welcome: "स्वागत आहे",
    invalidCredentials: "अवैध क्रेडेन्शिअल किंवा खातं सत्यापित नाही.",
    accountPendingVerification: "तुमचे खाते अॅडमिनची पडताळणी अपेक्षित आहे.",
    loginFailed: "लॉगिन अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    uploadFailed: "अपलोड अयशस्वी",
    completeProfile: "प्रोफाईल पूर्ण करा",
    profile: "प्रोफाईल",
    editProfile: "प्रोफाईल संपादित करा",
    pendingVerification: " (प्रतीक्षा झाली आहे)",

    // 👇 NEW
    welcomeAgrofy: "अ‍ॅग्रोफायमध्ये आपले स्वागत आहे",
    empoweringText: "शेतकऱ्यांना सक्षम बनवणे आणि खरेदीदारांना ताज्या, उच्च-गुणवत्तेच्या कृषी उत्पादनांशी आणि सेवांशी जोडणे.",
    addToCart: "कार्टमध्ये जोडा",
    registerTitle: "नोंदणी",
namePlaceholder: "नाव",
emailPlaceholder: "ईमेल",
passwordPlaceholder: "पासवर्ड",
selectType: "-- वापरकर्ता प्रकार निवडा --",
buyerOption: "खरेदीदार",
farmerOption: "शेतकरी",
transportOption: "वाहतूक",
phonePlaceholder: "फोन",
addressPlaceholder: "पत्ता",
idTypeLabel: "ओळख प्रकार निवडा:",
govtDoc: "शासकीय दस्तऐवज",
selfDecl: "स्वघोषणा",
farmSizePlaceholder: "शेतीचा आकार (पर्यायी)",
businessPlaceholder: "व्यवसाय (पर्यायी)",
vehiclePlaceholder: "वाहन (पर्यायी)",
licensePlaceholder: "परवाना (पर्यायी)",
registerBtn: "नोंदणी करा",
  uploadTitle: "📤 तुमचा उत्पादन किंवा सेवा अपलोड करा",
  productName: "उत्पादन/सेवेचे नाव",
  selectType: "-- प्रकार निवडा --",
  productOption: "उत्पादन",
  serviceOption: "सेवा",
  description: "वर्णन",
  price: "किंमत (₹)",
  quantity: "प्रमाण",
  imageUpload: "प्रतिमा अपलोड करा",
  uploadBtn: "पडताळणीसाठी अपलोड करा",
    loginTitle: "लॉगिन करा",
  emailPlaceholder: "ईमेल",
  passwordPlaceholder: "पासवर्ड",
  loginBtn: "लॉगिन करा",
    contactTitle: "आमच्याशी संपर्क साधा",
  contactName: "तुमचे नाव",
  contactEmail: "तुमचा ईमेल",
  contactMessage: "तुमचा संदेश",
  sendMessageBtn: "संदेश पाठवा",
    faq: "नेहमी विचारले जाणारे प्रश्न",
  faqTitle: "वारंवार विचारले जाणारे प्रश्न",
  faq1q: "Agrofy वर कोण नोंदणी करू शकतो?",
  faq1a: "शेतकरी, खरेदीदार आणि वाहतूकदार Agrofy वर नोंदणी करून आपला व्यवसाय वाढवू शकतात.",
  faq2q: "मी माझी उत्पादने कशी अपलोड करू शकतो?",
  faq2a: "लॉगिन केल्यानंतर, सत्यापित वापरकर्ते अपलोड पृष्ठावर जाऊन तपशील भरू शकतात आणि पडताळणीसाठी सबमिट करू शकतात.",
  faq3q: "Agrofy वापरण्यासाठी मोफत आहे का?",
  faq3a: "होय, Agrofy सर्व वापरकर्त्यांसाठी पूर्णपणे मोफत आहे.",
  faq4q: "मी सहाय्याशी कसा संपर्क साधू शकतो?",
  faq4a: "तुम्ही आमच्या संपर्क पृष्ठाला भेट देऊ शकता किंवा तिथे उपलब्ध असलेल्या फॉर्मद्वारे ईमेल पाठवू शकता."


  }
};
// Get saved language or default to English
let lang = sessionStorage.getItem('lang') || 'en';

// Apply translations to elements
function applyTranslations() {
  document.querySelectorAll('[data-i18]').forEach(el => {
    const key = el.getAttribute('data-i18');
    if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18-placeholder');
    if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

// Set language
function setLang(newLang) {
  lang = newLang;
  sessionStorage.setItem('lang', lang);
  applyTranslations();

  // Update sticky button text
  const btn = document.getElementById('langToggleBtn');
  if (btn) {
    btn.textContent = lang.toUpperCase();
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 300);
  }
}


  // Language toggle

  // Fetch user by email
  async function findUserByEmail(email){
    const res = await fetch(USER_API+`?action=find&email=${encodeURIComponent(email)}`);
    const data = await res.json();
    return data.user || null;
  }

  async function updateNav() {
    const navLinks = document.querySelector('.navbar-links');
    if (!navLinks) return;

    // Clear previous dynamic links
    Array.from(navLinks.querySelectorAll('.dynamic-link, .user-dropdown')).forEach(el=>el.remove());

    const email = localStorage.getItem('userEmail') || '';
    const userType = localStorage.getItem('userType') || '';
    const verified = localStorage.getItem('verified') || 'no';
    const profileComplete = sessionStorage.getItem('profile_complete') || 'no';

    // Left and right container
    navLinks.innerHTML = `<div class="navbar-left">
        <a href="index.html" data-i18="home">Home</a>
        <a href="products.html" data-i18="products">Products & Services</a>
      </div>
      <div class="navbar-right">
        <a href="contact.html" data-i18="contact">Contact</a>
      </div>`;

    const rightContainer = navLinks.querySelector('.navbar-right');

    if(!email){
      // Login/Register dropdown
      const dropdown = document.createElement('div');
      dropdown.className = 'dynamic-dropdown user-dropdown';
      dropdown.innerHTML = `<button>${translations[lang].loginBtn}/${translations[lang].registerNow}</button>
        <div class="dropdown-content">
          <a href="login.html">${translations[lang].loginBtn}</a>
          <a href="register.html">${translations[lang].registerNow}</a>
        </div>`;
      rightContainer.appendChild(dropdown);
      dropdown.querySelector('button').addEventListener('click',(e)=>{ e.stopPropagation(); dropdown.classList.toggle('show'); });
      window.addEventListener('click',()=>dropdown.classList.remove('show'));
    } else {
      // Logged in user dropdown
      const userDropdown = document.createElement('div');
      userDropdown.className = 'dynamic-dropdown user-dropdown';
      const displayName = sessionStorage.getItem('userName') || email.split('@')[0];
      userDropdown.innerHTML = `<button>👤 ${translations[lang].welcome}, ${displayName}</button>
        <div class="dropdown-content"></div>`;
      const ddContent = userDropdown.querySelector('.dropdown-content');

      // Profile / Complete profile
      const profileLink = document.createElement('a');
      profileLink.href = 'profile.html';
      profileLink.textContent = (profileComplete==='yes' || verified==='yes')?translations[lang].profile:translations[lang].completeProfile;
      ddContent.appendChild(profileLink);

      // Farmer upload if farmer & verified
      if(userType==='farmer' && verified==='yes'){
        const farmerLink = document.createElement('a');
        farmerLink.href = 'farmer_upload.html';
        farmerLink.textContent = translations[lang].farmerUpload;
        ddContent.appendChild(farmerLink);
      }

      // Logout
      const logoutLink = document.createElement('a');
      logoutLink.href='#';
      logoutLink.textContent = translations[lang].logout;
      logoutLink.addEventListener('click', (e)=>{
        e.preventDefault();
        if(confirm('Are you sure you want to logout?')){
          localStorage.clear();
          sessionStorage.clear();
          alert('Logged out successfully!');
          setTimeout(()=>window.location.href='index.html',500);
        }
      });
      ddContent.appendChild(logoutLink);

      rightContainer.appendChild(userDropdown);
      userDropdown.querySelector('button').addEventListener('click',(e)=>{ e.stopPropagation(); userDropdown.classList.toggle('show'); });
      window.addEventListener('click',()=>userDropdown.classList.remove('show'));
    }
    applyTranslations();
  }
  // Create sticky language button outside navbar
if (!document.getElementById('langToggleBtn')) {
  const langBtn = document.createElement('button');
  langBtn.id = 'langToggleBtn';
  langBtn.className = 'lang-switch';
  langBtn.textContent = lang.toUpperCase();
  langBtn.title = 'Change Language';

  // Sticky CSS
  langBtn.style.cssText = `
    position: fixed;
    top: 80px;          /* below navbar */
    right: 20px;        /* distance from right edge */
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #4CAF50; /* visible background */
    color: hsla(0, 20%, 99%, 1.00);      /* ensure visible text */
    font-weight: 600;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(langBtn);

  // Dropdown menu
  const menu = document.createElement('div');
  menu.id = 'langMenu';
  menu.style.cssText = `
    position: fixed;
    top: 120px;      /* below button */
    right: 20px;
    background: #d2f175ff;
    padding: 8px;
    border-radius: 12px;
    display: none;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    z-index: 1000;
    min-width: 140px;
    
  `;
  menu.innerHTML = `
    <div style="padding:10px; cursor:pointer;" data-lang="en">🇬🇧 English</div>
    <div style="padding:10px; cursor:pointer;" data-lang="hi">🇮🇳 हिन्दी</div>
    <div style="padding:10px; cursor:pointer;" data-lang="mr">🇮🇳 मराठी</div>
  `;
  document.body.appendChild(menu);

  // Toggle dropdown
  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  // Language selection
  menu.querySelectorAll('[data-lang]').forEach(item => {
    item.addEventListener('click', () => {
      setLang(item.getAttribute('data-lang'));
      menu.style.display = 'none';
      updateNav(); // refresh navbar links if needed
    });
  });

  // Close menu when clicking outside
  window.addEventListener('click', () => { menu.style.display = 'none'; });
}



  applyTranslations();
  updateNav();

  window.Agrofy = {
    setLang,
    getLang: ()=>lang,
    updateNav,
    findUserByEmail
  };
});
