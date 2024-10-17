import React from 'react';

interface Notification {
  date: string;
  content: string;
}

interface NotificationCardProps {
  title: string;
  notifications: Notification[];
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, notifications }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">
        {notifications.map((notification, index) => (
          <li key={index} className="flex">
            <span className="text-gray-500 mr-3">{notification.date}</span>
            <span>{notification.content}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 text-blue-600 hover:underline">すべて見る</button>
    </div>
  );
};

export default NotificationCard;