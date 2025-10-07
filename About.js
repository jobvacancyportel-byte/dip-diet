function About() {
  try {
    return (
      <section className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--primary-color)]">
                About Dip Diet | डिप डायट के बारे में
              </h2>
              
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                At Dip Diet, we believe in natural healing through Ayurveda and food-based wellness. 
                Our expert doctors provide personalized diet and treatment plans that target the root 
                cause of every disease.
              </p>
              
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                <span className="font-medium text-[var(--primary-color)]">
                  डिप डायट में हम आयुर्वेद और भोजन आधारित उपचार के माध्यम से प्राकृतिक रूप से स्वास्थ्य 
                  सुधारने में विश्वास करते हैं। हमारे विशेषज्ञ डॉक्टर हर रोग के मूल कारण को समझकर 
                  व्यक्तिगत उपचार और आहार योजनाएँ बनाते हैं।
                </span>
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-[var(--light-green)] px-4 py-2 rounded-full">
                  <div className="icon-check-circle text-xl text-[var(--primary-color)] mr-2"></div>
                  <span className="font-medium">Natural Healing</span>
                </div>
                <div className="flex items-center bg-[var(--light-green)] px-4 py-2 rounded-full">
                  <div className="icon-check-circle text-xl text-[var(--primary-color)] mr-2"></div>
                  <span className="font-medium">Personalized Care</span>
                </div>
                <div className="flex items-center bg-[var(--light-green)] px-4 py-2 rounded-full">
                  <div className="icon-check-circle text-xl text-[var(--primary-color)] mr-2"></div>
                  <span className="font-medium">Expert Doctors</span>
                </div>
              </div>
              
              <button className="btn-secondary">
                <div className="icon-users text-xl mr-3 text-[var(--text-color)]"></div>
                Meet Our Experts | हमारे विशेषज्ञों से मिलें
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Ayurvedic Doctor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                      <div className="icon-award text-xl text-white"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Certified</p>
                      <p className="text-xs text-gray-600">Ayurvedic Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}