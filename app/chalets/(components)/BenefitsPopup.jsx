import {CheckCircle2, Zap , BadgeEuro} from 'lucide-react';

export function BenefitsPopup() {
  return <div className="bg-white rounded-lg shadow-xl p-4 mb-2 max-w-xs mx-auto">
    <div className="flex items-center gap-2 mb-2">
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 animate-ping"></div>
      </div>
      <span className="text-sm font-semibold text-green-600">Concierge Online</span>
    </div>
    <ul className="space-y-2 text-sm text-gray-600">
      <li className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-green-500"/>
        <span>Skip the endless searching</span>
      </li>
      <li className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-green-500"/>
        <span>Instant personalized matches</span>
      </li>
      <li className="flex items-center gap-2">
        <BadgeEuro className="w-4 h-4 text-green-500"/>
        <span>Best rates guaranteed</span>
      </li>
    </ul>
  </div>;
}
