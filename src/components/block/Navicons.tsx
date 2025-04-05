import { useState, useRef, useEffect } from "react";
import {
  AlignJustify,
  Bell,
  CirclePlus,
  LayoutDashboard,
  Package,
  Rocket,
  Biohazard,
  Calendar1,
  NotebookPen,
  Settings,
  X,
} from "lucide-react";
import profilePic from "../../assets/cesar.jpg";

const NotificationDropdown = ({ notifications }: { notifications: any[] }) => (
  <div className="absolute top-12 right-0 w-80 bg-white shadow-lg rounded-lg p-4 text-left">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <h4 className="font-medium text-gray-800 mb-1">
            {notification.title}
          </h4>
          <p className="text-sm text-gray-600">{notification.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProfileDropdown = ({ userDetails, menuOptions }: any) => (
  <div className="absolute top-12 right-0 w-64 bg-white shadow-lg rounded-lg p-4 text-left">
    <div className="flex items-center gap-3 border-b pb-3">
      <img
        src={userDetails.profilePic}
        alt="User Avatar"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold text-gray-700">{userDetails.name}</p>
        <p className="text-sm text-gray-500">{userDetails.email}</p>
      </div>
    </div>
    <div className="mt-3">
      {menuOptions.map((option: any, index: number) => (
        <div
          key={index}
          className="flex items-center gap-2 cursor-pointer hover:text-gray-500 p-2 rounded"
        >
          {option.icon}
          <p>{option.label}</p>
        </div>
      ))}
    </div>
  </div>
);

const Navicons = () => {
  const userDetails = {
    profilePic: profilePic,
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const menuOptions = [
    { icon: <LayoutDashboard />, label: "Dashboard" },
    { icon: <Package />, label: "Cargo Management" },
    { icon: <Rocket />, label: "Retrival System" },
    { icon: <Biohazard />, label: "Waste Management" },
    { icon: <Calendar1 />, label: "Time Simulation" },
    { icon: <NotebookPen />, label: "Logs and Reports" },
    { icon: <Settings />, label: "Settings" },
  ];

  const notifications = [
    { title: "Notification 1", description: "This is the first notification." },
    {
      title: "Notification 2",
      description: "This is the second notification.",
    },
    { title: "Notification 3", description: "This is the third notification." },
  ];

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const notificationRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-6">
      {/* Add Icon */}
      <button
        className="text-gray-300 hidden md:block hover:text-white transition-colors"
        aria-label="Add"
      >
        <CirclePlus />
      </button>

      {/* Notification Icon */}
      <button
        ref={notificationRef}
        className="relative text-gray-300 hidden md:block hover:text-white transition-colors"
        onClick={() => {
          setIsNotificationOpen(!isNotificationOpen);
          setIsProfileOpen(false);
        }}
        aria-label="Toggle notifications"
        aria-expanded={isNotificationOpen}
      >
        <Bell />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {notifications.length}
        </span>
        {isNotificationOpen && (
          <NotificationDropdown notifications={notifications} />
        )}
      </button>

      {/* Profile Icon */}
      <button
        ref={profileRef}
        className="relative hidden md:block text-gray-300"
        onClick={() => {
          setIsProfileOpen(!isProfileOpen);
          setIsNotificationOpen(false);
        }}
        aria-label="Toggle profile"
        aria-expanded={isProfileOpen}
      >
        <img
          src={userDetails.profilePic}
          alt="User Avatar"
          className="w-6 h-6 rounded-full"
        />
        {isProfileOpen && (
          <ProfileDropdown
            userDetails={userDetails}
            menuOptions={menuOptions}
          />
        )}
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="text-gray-300 md:hidden hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X /> : <AlignJustify />}
      </button>
    </div>
  );
};

export default Navicons;
