import { cn } from "@/lib/utils";

export default function ScheduleCallPopup({ 
  isVisible, 
  onClose,
  className,
  position = 'bottom-right',
  onSchedule
}) {
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSchedule({
      date: formData.get('date'),
      time: formData.get('time')
    });
  };

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
      <h3 className="text-lg font-semibold mb-4">Schedule a Call</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Preferred Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          Schedule Call
        </button>
      </form>
    </div>
  );
}
