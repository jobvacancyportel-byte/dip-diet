function ConsultationForm({ onSubmit }) {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      mobile: '',
      email: '',
      disease: '',
      preferredTime: 'morning'
    });

    const diseases = [
      'मस्सा (Warts)', 'बवासीर (Piles)', 'साइटिका (Sciatica)', 'गठिया (Arthritis)',
      'मधुमेह (Diabetes)', 'ब्लड प्रेशर (Blood Pressure)', 'माइग्रेन (Migraine)',
      'थायरॉयड (Thyroid)', 'कब्ज (Constipation)', 'गैस्ट्रिक (Gastric)',
      'सोरायसिस (Psoriasis)', 'अनिद्रा (Insomnia)', 'मोटापा (Obesity)',
      'बाल झड़ना (Hair Fall)', 'एलर्जी (Allergy)', 'पेट दर्द (Stomach Pain)',
      'महिलाओं की समस्या (Women\'s Health)', 'पुरुष कमजोरी (Male Weakness)',
      'लीवर की समस्या (Liver Problem)', 'किडनी की समस्या (Kidney Problem)',
      'जोड़ दर्द (Joint Pain)', 'तनाव (Stress)', 'अन्य (Other)'
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.mobile || !formData.disease) {
        alert('कृपया सभी आवश्यक फील्ड भरें | Please fill all required fields');
        return;
      }
      onSubmit(formData);
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <section id="consultation" className="section-padding bg-white" data-name="consultation" data-file="components/ConsultationForm.js">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--primary-color)]">
              Book Your Consultation Now
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-[var(--text-color)]">
              अभी अपनी सलाह बुक करें
            </h3>
            <p className="text-lg text-gray-700">
              Consult our Ayurvedic Doctors Online | हमारे आयुर्वेदिक डॉक्टर से ऑनलाइन सलाह लें
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-color)]">
                  Name | नाम *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Enter your full name | अपना पूरा नाम दर्ज करें"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-color)]">
                  Mobile Number | मोबाइल नंबर *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Enter your mobile number | अपना मोबाइल नंबर दर्ज करें"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-color)]">
                  Email | ईमेल
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Enter your email | अपना ईमेल दर्ज करें"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-color)]">
                  Disease / Health Issue | कौन सी बीमारी *
                </label>
                <select
                  name="disease"
                  value={formData.disease}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                >
                  <option value="">Select your health issue | अपनी स्वास्थ्य समस्या चुनें</option>
                  {diseases.map((disease, index) => (
                    <option key={index} value={disease}>{disease}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--text-color)]">
                  Preferred Time | पसंदीदा समय
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="morning"
                      checked={formData.preferredTime === 'morning'}
                      onChange={handleChange}
                      className="mr-2 text-[var(--primary-color)]"
                    />
                    Morning | सुबह
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="evening"
                      checked={formData.preferredTime === 'evening'}
                      onChange={handleChange}
                      className="mr-2 text-[var(--primary-color)]"
                    />
                    Evening | शाम
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4">
                <div className="icon-phone text-xl mr-3 text-white"></div>
                Consult Doctor | डॉक्टर से सलाह लें
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ConsultationForm component error:', error);
    return null;
  }
}
