// src/pages/DestinationPackages.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


interface Destination {
  name: string;
  description: string;
  image: string;
  price: string;
  slug: string;
}

const destinations: Destination[] = [
  { name: 'Goa', description: 'Beach paradise with vibrant nightlife', image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹8,999', slug: 'goa' },
  { name: 'Kerala', description: 'Gods own country with backwaters', image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹12,999', slug: 'kerala' },
  { name: 'Rajasthan', description: 'Royal heritage and desert culture', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹9,999', slug: 'rajasthan' },
  { name: 'Himachal Pradesh', description: 'Mountain adventures and hill stations', image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹7,999', slug: 'himachal-pradesh' },
  { name: 'Tamil Nadu', description: 'Temple trails and cultural heritage', image: 'https://images.pexels.com/photos/3585004/pexels-photo-3585004.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹6,999', slug: 'tamil-nadu' },
  { name: 'Karnataka', description: 'Tech hub with natural wonders', image: 'https://images.pexels.com/photos/12974228/pexels-photo-12974228.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'From ₹8,499', slug: 'karnataka' }
];

const DestinationPackages: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const destination = destinations.find(d => d.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    startDate: '',
    endDate: '',
    roomType: '',
    notes: ''
  });

  const [errors, setErrors] = useState<any>({});

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Destination not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateStep = () => {
    let valid = true;
    const newErrors: any = {};

    if (step === 1) {
      if (!formData.name.trim()) { newErrors.name = 'Name is required'; valid = false; }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Valid email is required'; valid = false; }
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) { newErrors.phone = 'Valid 10-digit phone required'; valid = false; }
    }

    if (step === 2) {
      if (!formData.travelers || formData.travelers < 1) { newErrors.travelers = 'Enter number of travelers'; valid = false; }
      if (!formData.startDate) { newErrors.startDate = 'Select start date'; valid = false; }
      if (!formData.endDate) { newErrors.endDate = 'Select end date'; valid = false; }
      if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) { newErrors.endDate = 'End date should be after start date'; valid = false; }
    }

    if (step === 3) {
      if (!formData.roomType) { newErrors.roomType = 'Select room type'; valid = false; }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => { if (validateStep()) setStep(step + 1); };
  const handlePrev = () => setStep(step - 1);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Booking confirmed for ${destination.name}!\nDetails: ${JSON.stringify(formData, null, 2)}`);
//     setIsModalOpen(false);
//     setStep(1);
//     setFormData({ name: '', email: '', phone: '', travelers: 1, startDate: '', endDate: '', roomType: '', notes: '' });
//   };
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  Swal.fire({
    title: 'Booking Confirmed!',
    html: `
      <p><strong>Destination:</strong> ${destination.name}</p>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Travelers:</strong> ${formData.travelers}</p>
      <p><strong>Dates:</strong> ${formData.startDate} to ${formData.endDate}</p>
      <p><strong>Room Type:</strong> ${formData.roomType}</p>
      ${formData.notes ? `<p><strong>Notes:</strong> ${formData.notes}</p>` : ''}
      <p class="text-[#40a1ef] font-semibold">${destination.price}</p>
    `,
    icon: 'success',
    confirmButtonText: 'OK',
  }).then(() => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ name: '', email: '', phone: '', travelers: 1, startDate: '', endDate: '', roomType: '', notes: '' });
  });
};


  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={destination.image} alt={destination.name} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <p className="text-2xl font-semibold text-[#40a1ef] mb-6">{destination.price}</p>

          <h2 className="text-2xl font-bold mb-2">Package Highlights:</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Hotel stay included</li>
            <li>All meals included</li>
            <li>Sightseeing tours and excursions</li>
            <li>Transport from airport/train station</li>
          </ul>

          <div className="flex gap-4">
            <button onClick={() => navigate(-1)} className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-400 transition-colors font-medium">Back</button>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#40a1ef] text-white px-6 py-3 rounded-full hover:bg-[#3b8ac1] transition-colors font-medium">Book Now</button>
          </div>
        </div>
      </div>

      {/* Multi-step Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold">X</button>
            <h2 className="text-2xl font-bold mb-4">Book {destination.name}</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Step 1: Traveler Info */}
              {step === 1 && (
                <>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </>
              )}

              {/* Step 2: Travel Details */}
              {step === 2 && (
                <>
                  <input type="number" name="travelers" min={1} placeholder="Number of Travelers" value={formData.travelers} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.travelers && <p className="text-red-500 text-sm">{errors.travelers}</p>}

                  <label>Start Date:</label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}

                  <label>End Date:</label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="border p-2 rounded w-full" />
                  {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
                </>
              )}
      {step === 3 && (
                <>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                  </select>
                  {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}

                  <textarea
                    name="notes"
                    placeholder="Additional Notes (optional)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                  />
                </>
              )}

              {/* Step 4: Summary / Confirm */}
              {step === 4 && (
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-xl font-semibold mb-2">Review Your Booking</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Travelers:</strong> {formData.travelers}</p>
                  <p><strong>Dates:</strong> {formData.startDate} to {formData.endDate}</p>
                  <p><strong>Room Type:</strong> {formData.roomType}</p>
                  {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                  <p className="mt-2 text-[#40a1ef] font-semibold">{destination.price}</p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition-colors font-medium"
                  >
                    Previous
                  </button>
                )}
                {step < 4 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#40a1ef] text-white px-4 py-2 rounded-full hover:bg-[#3b8ac1] transition-colors font-medium ml-auto"
                  >
                    Next
                  </button>
                )}
                {step === 4 && (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors font-medium ml-auto"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPackages;
    
