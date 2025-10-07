function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-[var(--text-color)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--accent-color)]">
                Dip Diet
              </h3>
              <p className="text-gray-300 mb-4">
                Natural Ayurvedic Healing Center<br/>
                आयुर्वेदिक प्राकृतिक उपचार केंद्र
              </p>
              <p className="text-sm text-gray-400">
                Healing Naturally with Ayurveda | आयुर्वेद के साथ प्राकृतिक उपचार
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[var(--accent-color)]">
                Contact Us | संपर्क करें
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <div className="icon-phone text-lg mr-3 text-[var(--accent-color)]"></div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-lg mr-3 text-[var(--accent-color)]"></div>
                  <span>info@dipdiet.com</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-map-pin text-lg mr-3 text-[var(--accent-color)]"></div>
                  <span>Ayurveda Clinic, Health Street, Wellness City</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[var(--accent-color)]">
                Follow Us | हमें फॉलो करें
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <div className="icon-facebook text-lg text-white"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <div className="icon-instagram text-lg text-white"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <div className="icon-youtube text-lg text-white"></div>
                </a>
                <a href="https://wa.me/919876543210" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <div className="icon-message-circle text-lg text-white"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © {currentYear} Dip Diet - Natural Ayurvedic Healing Center. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Disclaimer: Results may vary from person to person. Consult with qualified Ayurvedic practitioners.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}