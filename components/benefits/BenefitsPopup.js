import { cn } from "@/lib/utils";

export default function BenefitsPopup({ 
  isVisible, 
  onClose,
  className,
  position = 'bottom-right'
}) {
  if (!isVisible) return null;

  const benefits = [
    "24/7 Concierge Service",
    "Exclusive Property Access",
    "Personalized Experience",
    "Best Price Guarantee",
    "Instant Booking Confirmation"
  ];

  return (
    <div 
      className={cn(
        "fixed z-50 bg-white rounded-lg shadow-xl p-6 w-80",
        position === 'bottom-right' && "bottom-24 right-4",
        position === 'bottom-left' && "bottom-24 left-4",
        className
      )}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      <h3 className="text-lg font-semibold mb-4">Why Contact Us?</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
