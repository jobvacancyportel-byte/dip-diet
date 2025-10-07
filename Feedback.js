function Feedback() {
  try {
    const testimonials = [
      {
        name: "प्रिया शर्मा",
        location: "दिल्ली",
        disease: "मधुमेह",
        feedback: "डिप डायट के आयुर्वेदिक उपचार से मेरा शुगर कंट्रोल हो गया। बहुत खुश हूं!",
        rating: 5
      },
      {
        name: "राज कुमार",
        location: "मुंबई", 
        disease: "गठिया",
        feedback: "जोड़ों का दर्द पूरी तरह ठीक हो गया। प्राकृतिक इलाज वाकई कमाल का है।",
        rating: 5
      },
      {
        name: "सुनीता देवी",
        location: "बैंगलोर",
        disease: "बवासीर",
        feedback: "बिना ऑपरेशन के ही बवासीर का इलाज हो गया। डॉक्टर साहब का धन्यवाद!",
        rating: 5
      }
    ];

    return (
      <section className="section-padding bg-[var(--light-green)]" data-name="feedback" data-file="components/Feedback.js">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--primary-color)]">
              Your Experience Matters
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-[var(--text-color)]">
              आपका अनुभव महत्वपूर्ण है
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              If you've benefited from our treatment, please like and share your feedback<br/>
              <span className="font-medium text-[var(--primary-color)]">
                जिन लोगों को हमारे यहाँ से फायदा हुआ, लाइक और फीडबैक ज़रूर दें।
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-xl text-[var(--accent-color)] mr-1"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-[var(--primary-color)]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-[var(--primary-color)]">({testimonial.disease})</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-secondary">
              <div className="icon-heart text-xl mr-3 text-[var(--text-color)]"></div>
              Share Feedback | अपना अनुभव बताएं
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Feedback component error:', error);
    return null;
  }
}