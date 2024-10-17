import React from 'react';

const ScheduleCard: React.FC = () => {
  const schedules = [
    { time: '1限', subject: '国際関係史' },
    { time: '2限', subject: '実践ゼミⅢ D' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">本日のスケジュール</h2>
      <ul className="space-y-3">
        {schedules.map((schedule, index) => (
          <li key={index} className="flex justify-between">
            <span className="font-medium">{schedule.time}</span>
            <span>{schedule.subject}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 text-blue-600 hover:underline">詳細を見る</button>
    </div>
  );
};

export default ScheduleCard;