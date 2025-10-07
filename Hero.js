function Hero() {
  try {
    const scrollToConsultation = () => {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary-color)] rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-[var(--accent-color)] rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--primary-color)] rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow">
                <span className="text-[var(--primary-color)]">Natural Healing</span><br/>
                <span className="text-2xl lg:text-3xl">Through Ayurveda</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-[var(--primary-color)]">
                आयुर्वेद के माध्यम से प्राकृतिक उपचार
              </h2>
              
              <p className="text-lg lg:text-xl mb-8 text-gray-700 max-w-2xl">
                Personalized Dip Diet Plans & Ayurvedic Care for Every Health Problem<br/>
                <span className="font-medium text-[var(--primary-color)]">
                  हर स्वास्थ्य समस्या के लिए व्यक्तिगत डिप डायट और आयुर्वेदिक देखभाल
                </span>
              </p>
              
              <button 
                onClick={scrollToConsultation}
                className="btn-primary text-xl px-8 py-4 shadow-[var(--soft-shadow)] hover:scale-105 transform"
              >
                <div className="icon-stethoscope text-xl mr-3 text-white"></div>
                Consult Now | अभी सलाह लें
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Ayurvedic healing" 
                    className="w-72 h-72 lg:w-84 lg:h-84 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--accent-color)] rounded-full flex items-center justify-center animate-float">
                  <div className="icon-leaf text-2xl text-white"></div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="icon-heart text-2xl text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}