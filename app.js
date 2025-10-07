class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [showPaymentModal, setShowPaymentModal] = React.useState(false);
    const [formData, setFormData] = React.useState({});

    const handleConsultationSubmit = (data) => {
      setFormData(data);
      setShowPaymentModal(true);
    };

    const handlePaymentSuccess = () => {
      setShowPaymentModal(false);
      // Show success message and WhatsApp integration
      alert(`धन्यवाद! हमारे आयुर्वेदिक विशेषज्ञ जल्द ही आपसे व्हाट्सऐप पर संपर्क करेंगे।\n\nThank you! Our Ayurvedic Expert will contact you soon on WhatsApp.`);
      
      // Open WhatsApp with consultation details
      const message = `नमस्ते! मैं ${formData.name} हूं। मुझे ${formData.disease} की समस्या है। कृपया सलाह दें।\n\nHello! I am ${formData.name}. I have ${formData.disease} problem. Please advise.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Hero />
        <About />
        <Diseases />
        <ConsultationForm onSubmit={handleConsultationSubmit} />
        <Feedback />
        <Footer />
        
        {showPaymentModal && (
          <PaymentModal 
            onClose={() => setShowPaymentModal(false)}
            onSuccess={handlePaymentSuccess}
            formData={formData}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);