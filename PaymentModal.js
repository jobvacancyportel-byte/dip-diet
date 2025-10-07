function PaymentModal({ onClose, onSuccess, formData }) {
  try {
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handlePayment = (method) => {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        onSuccess();
      }, 2000);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-name="payment-modal" data-file="components/PaymentModal.js">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <div className="icon-x text-xl"></div>
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-stethoscope text-2xl text-white"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-2">
              Consultation Fee | सलाह शुल्क
            </h3>
            <p className="text-gray-600">
              Complete payment to book your consultation | सलाह बुक करने के लिए भुगतान पूरा करें
            </p>
          </div>

          <div className="bg-[var(--light-green)] p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Consultation Fee:</span>
              <span className="text-2xl font-bold text-[var(--primary-color)]">₹500</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Patient: {formData.name}</p>
              <p>Issue: {formData.disease}</p>
            </div>
          </div>

          {isProcessing ? (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-[var(--primary-color)] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-[var(--primary-color)]">Processing payment... | भुगतान प्रक्रिया में...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => handlePayment('upi')}
                className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <div className="icon-smartphone text-xl mr-3 text-white"></div>
                Pay with UPI | UPI से भुगतान करें
              </button>
              
              <button
                onClick={() => handlePayment('card')}
                className="w-full bg-[var(--accent-color)] text-[var(--text-color)] py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                <div className="icon-credit-card text-xl mr-3 text-[var(--text-color)]"></div>
                Pay with Card | कार्ड से भुगतान करें
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('PaymentModal component error:', error);
    return null;
  }
}