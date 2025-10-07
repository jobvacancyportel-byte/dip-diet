function Diseases() {
  try {
    const diseases = [
      { hindi: "मस्सा (Warts)", english: "Natural herbal treatment for skin growths", icon: "droplets" },
      { hindi: "बवासीर (Piles)", english: "Ayurvedic cure for pain and bleeding", icon: "heart" },
      { hindi: "साइटिका (Sciatica)", english: "Relieve nerve pain naturally", icon: "zap" },
      { hindi: "गठिया (Arthritis)", english: "Herbal oils for joint pain relief", icon: "bone" },
      { hindi: "मधुमेह (Diabetes)", english: "Control sugar naturally", icon: "activity" },
      { hindi: "ब्लड प्रेशर (High Blood Pressure)", english: "Balance BP through Ayurveda", icon: "heart-pulse" },
      { hindi: "माइग्रेन (Migraine)", english: "Detox-based headache relief", icon: "brain" },
      { hindi: "थायरॉयड (Thyroid)", english: "Regulate hormones naturally", icon: "circle" },
      { hindi: "कब्ज (Constipation)", english: "Herbal digestive care", icon: "pill" },
      { hindi: "गैस्ट्रिक (Gastric)", english: "Gut healing herbs", icon: "shield" },
      { hindi: "सोरायसिस (Psoriasis)", english: "Skin healing remedies", icon: "sun" },
      { hindi: "अनिद्रा (Insomnia)", english: "Improve sleep with natural herbs", icon: "moon" },
      { hindi: "मोटापा (Obesity)", english: "Personalized diet for weight loss", icon: "trending-down" },
      { hindi: "बाल झड़ना (Hair Fall)", english: "Strengthen roots naturally", icon: "scissors" },
      { hindi: "एलर्जी (Allergy)", english: "Herbal breathing support", icon: "wind" },
      { hindi: "पेट दर्द (Indigestion)", english: "Natural stomach care", icon: "circle-dot" },
      { hindi: "महिलाओं की समस्या", english: "Hormone & period balance", icon: "flower" },
      { hindi: "सफेद पानी (Leucorrhoea)", english: "Natural female care", icon: "droplet" },
      { hindi: "पुरुष कमजोरी", english: "Boost stamina & vitality naturally", icon: "trending-up" },
      { hindi: "लीवर की समस्या", english: "Detox liver with herbs", icon: "hexagon" },
      { hindi: "किडनी की समस्या", english: "Natural kidney cleansing", icon: "filter" },
      { hindi: "जोड़ दर्द (Joint Pain)", english: "Ayurvedic oil therapy", icon: "move" },
      { hindi: "तनाव (Stress)", english: "Mind relaxation therapy", icon: "smile" },
      { hindi: "इम्यूनिटी की कमी", english: "Boost with Ayurveda", icon: "shield-check" },
      { hindi: "हार्मोनल असंतुलन", english: "Balance body naturally", icon: "balance-scale" },
      { hindi: "एनीमिया (Anemia)", english: "Iron-rich Ayurvedic remedies", icon: "droplets" },
      { hindi: "सर्दी-जुकाम", english: "Herbal immunity boosters", icon: "thermometer" },
      { hindi: "नर्व दर्द", english: "Ayurvedic nerve relaxation", icon: "zap-off" },
      { hindi: "फैटी लीवर", english: "Herbal detox plan", icon: "recycle" },
      { hindi: "स्लीप डिसऑर्डर", english: "Relaxing herbal therapy", icon: "bed" }
    ];

    return (
      <section className="section-padding bg-[var(--secondary-color)]" data-name="diseases" data-file="components/Diseases.js">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--primary-color)]">
              Diseases We Treat
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-[var(--text-color)]">
              जिन बीमारियों का इलाज हम करते हैं
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Natural and effective Ayurvedic treatments for comprehensive health solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {diseases.map((disease, index) => (
              <div key={index} className="card hover:scale-105 transform transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className={`icon-${disease.icon} text-xl text-white`}></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary-color)] mb-2">
                      {disease.hindi}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {disease.english}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-[var(--accent-color)] px-8 py-4 rounded-xl shadow-lg">
              <p className="text-lg font-semibold text-[var(--text-color)]">
                और भी अनेक बीमारियों का प्राकृतिक समाधान यहाँ उपलब्ध है<br/>
                <span className="text-base">Treatment for many more diseases available here</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Diseases component error:', error);
    return null;
  }
}