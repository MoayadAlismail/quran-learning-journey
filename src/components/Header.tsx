
import { useState } from "react";
import { Settings, User, Bell } from "lucide-react";

interface HeaderProps {
  userXP: number;
}

export const Header = ({ userXP }: HeaderProps) => {
  const [notifications] = useState(2);

  return (
    <header className="bg-white shadow-sm border-b border-emerald-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ق</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">QuranLearn</h1>
              <p className="text-sm text-gray-600">Learn with devotion</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            {/* XP Display */}
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-3 py-2 rounded-full">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-800 text-xs font-bold">★</span>
              </div>
              <span className="font-semibold text-yellow-800">{userXP} XP</span>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:block font-medium text-gray-700">Ahmad</span>
            </div>

            {/* Settings */}
            <Settings className="w-6 h-6 text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};
