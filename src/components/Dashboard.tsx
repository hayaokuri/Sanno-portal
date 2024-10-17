import React from 'react';
import NotificationCard from './NotificationCard';
import ScheduleCard from './ScheduleCard';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NotificationCard
        title="あなた宛のお知らせ"
        notifications={[
          { date: '9/19 (木)', content: '履修登録を受け付けました' },
          { date: '9/13 (金)', content: '履修登録を受け付けました' },
          { date: '9/13 (金)', content: '履修登録を受け付けました' },
        ]}
      />
      <NotificationCard
        title="大学からのお知らせ"
        notifications={[
          { date: '10/1 (火)', content: 'オフィスアワー変更（10/1更新）' },
          { date: '10/1 (火)', content: '【重要】＜再掲＞湘南10月30日(月)から10月4日(金)のバスダイヤについて' },
          { date: '10/1 (火)', content: '【重要】履修登録結果の開示' },
        ]}
      />
      <ScheduleCard />
    </div>
  );
};

export default Dashboard;