'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Video, Users, Clock, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface ConsultationSlot {
  date: string;
  dayOfWeek: string;
  time: string;
  googleCalendarUrl: string;
}

export default function ConsultationSection() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(0); // 0: 今月, 1: 来月

  // 予約可能な日程データ
  const consultationSlots: ConsultationSlot[] = [
    {
      date: '2025-01-21',
      dayOfWeek: '火',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250121T063000Z/20250121T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-01-23',
      dayOfWeek: '木',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250123T063000Z/20250123T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-01-28',
      dayOfWeek: '火',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250128T063000Z/20250128T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-01-30',
      dayOfWeek: '木',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250130T063000Z/20250130T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-02-04',
      dayOfWeek: '火',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250204T063000Z/20250204T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-02-06',
      dayOfWeek: '木',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250206T063000Z/20250206T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-02-11',
      dayOfWeek: '火',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250211T063000Z/20250211T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    },
    {
      date: '2025-02-13',
      dayOfWeek: '木',
      time: '15:30〜17:00',
      googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=ERPNext相談会&dates=20250213T063000Z/20250213T080000Z&details=Google+Meetリンクは後日メールにてご案内します&location=Google+Meet'
    }
  ];

  // カレンダー生成用の関数
  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const calendar = [];
    const current = new Date(startDate);
    
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const dateStr = current.toISOString().split('T')[0];
        const isCurrentMonth = current.getMonth() === month;
        const hasSlot = consultationSlots.some(slot => slot.date === dateStr);
        
        weekDays.push({
          date: new Date(current),
          dateStr,
          day: current.getDate(),
          isCurrentMonth,
          hasSlot
        });
        
        current.setDate(current.getDate() + 1);
      }
      calendar.push(weekDays);
    }
    
    return calendar;
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthNum = currentDate.getMonth();
  
  const thisMonth = generateCalendar(currentYear, currentMonthNum);
  const nextMonth = generateCalendar(currentYear, currentMonthNum + 1);
  
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  const getSlotForDate = (dateStr: string) => {
    return consultationSlots.find(slot => slot.date === dateStr);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}月${date.getDate()}日（${consultationSlots.find(s => s.date === dateStr)?.dayOfWeek}）`;
  };

  return (
    <>
      {/* セクション①：案内説明 */}
      <section id="consultation-section" className="py-16 bg-white scroll-mt-24">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ERPNext駆け込み寺｜無料相談会のご案内
            </h2>
            <h3 className="text-xl text-gray-700 font-medium mb-6">
              ERPの悩み、30分でスッキリしませんか？｜無料オンライン相談・毎週開催中
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ERPNextやFrappeアプリについて悩んでいる方、導入を検討中の方に向けて、無料相談会『ERPNext駆け込み寺』を開催しています。導入効果の確認から、カスタマイズのご相談まで、ERPNextに関することなら何でもOK！
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 開催情報 */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📅 開催日時</h4>
                    <p className="text-gray-700">毎週 火・木 15:30〜17:00（祝日除く）</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🧑‍💼 対象</h4>
                    <p className="text-gray-700">ERPNextやFrappe導入を検討中・導入済みの企業担当者</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📍 形式</h4>
                    <p className="text-gray-700">Google Meet によるオンライン相談</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💬 相談内容</h4>
                    <p className="text-gray-700">ERP導入効果／他システムとの比較／見積・カスタマイズ など</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション②：カレンダー予約 */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 border-t border-orange-200">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              駆け込み寺の無料相談会に参加する
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              カレンダーから希望日時を選んでご予約ください
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* PC表示：2か月並列 */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 今月 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {currentYear}年{monthNames[currentMonthNum]}
                  </h3>
                  
                  {/* 曜日ヘッダー */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* カレンダー */}
                  <div className="space-y-1">
                    {thisMonth.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => {
                          const slot = getSlotForDate(day.dateStr);
                          return (
                            <div
                              key={dayIndex}
                              className={`
                                aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-all duration-200
                                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                                ${day.hasSlot && day.isCurrentMonth 
                                  ? 'bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-md' 
                                  : day.isCurrentMonth 
                                    ? 'hover:bg-gray-100' 
                                    : ''
                                }
                                ${selectedDate === day.dateStr ? 'ring-2 ring-orange-300' : ''}
                              `}
                              onClick={() => day.hasSlot && setSelectedDate(selectedDate === day.dateStr ? null : day.dateStr)}
                            >
                              {day.day}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  
                  {/* 選択された日の予約ボタン */}
                  {selectedDate && thisMonth.some(week => week.some(day => day.dateStr === selectedDate)) && (
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {formatDate(selectedDate)}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {getSlotForDate(selectedDate)?.time}
                        </p>
                        <a
                          href={getSlotForDate(selectedDate)?.googleCalendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors shadow-sm"
                        >
                          👉 Googleカレンダーで予約
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* 来月 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {currentMonthNum === 11 ? currentYear + 1 : currentYear}年{monthNames[(currentMonthNum + 1) % 12]}
                  </h3>
                  
                  {/* 曜日ヘッダー */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* カレンダー */}
                  <div className="space-y-1">
                    {nextMonth.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => {
                          const slot = getSlotForDate(day.dateStr);
                          return (
                            <div
                              key={dayIndex}
                              className={`
                                aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-all duration-200
                                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                                ${day.hasSlot && day.isCurrentMonth 
                                  ? 'bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-md' 
                                  : day.isCurrentMonth 
                                    ? 'hover:bg-gray-100' 
                                    : ''
                                }
                                ${selectedDate === day.dateStr ? 'ring-2 ring-orange-300' : ''}
                              `}
                              onClick={() => day.hasSlot && setSelectedDate(selectedDate === day.dateStr ? null : day.dateStr)}
                            >
                              {day.day}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  
                  {/* 選択された日の予約ボタン */}
                  {selectedDate && nextMonth.some(week => week.some(day => day.dateStr === selectedDate)) && (
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {formatDate(selectedDate)}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {getSlotForDate(selectedDate)?.time}
                        </p>
                        <a
                          href={getSlotForDate(selectedDate)?.googleCalendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors shadow-sm"
                        >
                          👉 Googleカレンダーで予約
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* モバイル表示：縦スクロール */}
            <div className="lg:hidden">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* 月切り替えヘッダー */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                  <button
                    onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                    disabled={currentMonth === 0}
                    className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <h3 className="text-lg font-bold text-gray-900">
                    {currentMonth === 0 
                      ? `${currentYear}年${monthNames[currentMonthNum]}`
                      : `${currentMonthNum === 11 ? currentYear + 1 : currentYear}年${monthNames[(currentMonthNum + 1) % 12]}`
                    }
                  </h3>
                  
                  <button
                    onClick={() => setCurrentMonth(Math.min(1, currentMonth + 1))}
                    disabled={currentMonth === 1}
                    className="p-2 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4">
                  {/* 曜日ヘッダー */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* カレンダー */}
                  <div className="space-y-1 mb-6">
                    {(currentMonth === 0 ? thisMonth : nextMonth).map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-1">
                        {week.map((day, dayIndex) => {
                          const slot = getSlotForDate(day.dateStr);
                          return (
                            <div
                              key={dayIndex}
                              className={`
                                aspect-square flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200
                                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                                ${day.hasSlot && day.isCurrentMonth 
                                  ? 'bg-orange-500 text-white font-bold shadow-md' 
                                  : day.isCurrentMonth 
                                    ? 'hover:bg-gray-100' 
                                    : ''
                                }
                                ${selectedDate === day.dateStr ? 'ring-2 ring-orange-300' : ''}
                              `}
                              onClick={() => day.hasSlot && setSelectedDate(selectedDate === day.dateStr ? null : day.dateStr)}
                            >
                              {day.day}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  
                  {/* 選択された日の予約ボタン */}
                  {selectedDate && (
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-center space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {formatDate(selectedDate)}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {getSlotForDate(selectedDate)?.time}
                          </p>
                        </div>
                        <a
                          href={getSlotForDate(selectedDate)?.googleCalendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors text-center"
                        >
                          👉 Googleカレンダーで予約
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                上記日程が合わない場合は、お気軽にお問い合わせください
              </p>
              <Link href="/contact" className="cta-secondary">
                個別相談を依頼する
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}