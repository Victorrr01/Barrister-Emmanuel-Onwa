import fs from 'fs';

let content = fs.readFileSync('src/components/BookingModal.tsx', 'utf-8');

// 1. Add isError state
content = content.replace(
  /const \[isSuccess, setIsSuccess\] = useState\(false\);/,
  "const [isSuccess, setIsSuccess] = useState(false);\n  const [isError, setIsError] = useState(false);"
);

// 2. Add isError reset to useEffect
content = content.replace(
  /setIsSuccess\(false\);/,
  "setIsSuccess(false);\n        setIsError(false);"
);

// 3. Rewrite handleSubmit
const oldSubmit = `const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      const storedBookings = JSON.parse(localStorage.getItem('redemption_bookings') || '[]');
      const newBooking = {
        ...formData,
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('redemption_bookings', JSON.stringify([...storedBookings, newBooking]));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };`;

const newSubmit = `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      // NOTE: Replace YOUR_FORM_ID with the actual Formspree form ID once created
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Consultation Request - Redemption Chambers",
          "Full Name": formData.fullName,
          "Email": formData.email,
          "Phone": formData.phone,
          "Practice Area": formData.practiceArea,
          "Preferred Lawyer": formData.lawyer || "No preference",
          "Preferred Date": formData.date,
          "Preferred Time": formData.time,
          "Consultation Type": formData.type,
          "Description": formData.description,
          "Consent": formData.consent ? "Yes" : "No"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };`;

content = content.replace(oldSubmit, newSubmit);

// 4. Add error message UI inside form
const errorUI = `
              {isError && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-sm">
                  We encountered an error submitting your request. Please try again, or contact the firm directly by phone.
                </div>
              )}
`;

content = content.replace(/<form onSubmit=\{handleSubmit\} className="space-y-6">/, '<form onSubmit={handleSubmit} className="space-y-6">' + errorUI);

fs.writeFileSync('src/components/BookingModal.tsx', content);

