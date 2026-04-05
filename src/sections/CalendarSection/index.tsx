import { useState } from 'react';
import { Link } from 'react-router-dom';

export type CalendarSectionProps = {
  onApplyClick: () => void;
};

export const CalendarSection = ({ onApplyClick }: CalendarSectionProps) => {
  // Start with April 2026 (Q2)
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Define events for each month (4 events per month, well-spaced)
  const monthlyEvents: { [key: number]: { [key: number]: { title: string; color: string; time: string; location: string; calendarLink?: string } } } = {
    0: { // January
      2: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'NYC' },
      9: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' },
      16: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' },
      23: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'SF' }
    },
    1: { // February
      3: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' },
      10: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'LA' },
      17: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' },
      24: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' }
    },
    2: { // March
      10: { title: 'AI Growth Webinar', color: 'bg-zinc-900', time: '2:00 PM IST', location: 'Online', calendarLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmVmanNpN280OG9tZnI5MjQ0cWZhODlwbTIgZGFuaXRiZW5zaW1vbkBt&tmsrc=danitbensimon%40gmail.com' },
      16: { title: 'New Club Benefit Announcement', color: 'bg-zinc-900', time: '2:00 PM', location: 'Online', calendarLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWYwMmhjNG5jMmpib3V0YTFsOG85aTRjaWogZGFuaXRiZW5zaW1vbkBt&tmsrc=danitbensimon%40gmail.com' },
      23: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Online', calendarLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXRuamFtODEwYm81cTRwY285YnRnZzZkYzIgZGFuaXRiZW5zaW1vbkBt&tmsrc=danitbensimon%40gmail.com' },
      29: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM IST', location: 'Ramat Gan', calendarLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmVmanNpN280OG9tZnI5MjQ0cWZhODlwbTIgZGFuaXRiZW5zaW1vbkBt&tmsrc=danitbensimon%40gmail.com' }
    },
    3: { // April
      12: { title: '1:1 Reddit Webinar', color: 'bg-zinc-900', time: '2:00 PM', location: 'Online' },
      13: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Ramat Gan' },
      23: { title: 'Leadership Program - Nir Elharar Ater\'a CMO', color: 'bg-zinc-900', time: '10:00 AM', location: 'Online' },
      27: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Online' }
    },
    4: { // May
      4: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Online' },
      11: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Ramat Gan' },
      18: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Online' },
      25: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Online' }
    },
    5: { // June
      1: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Online' },
      8: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Ramat Gan' },
      15: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Online' },
      22: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Online' }
    },
    6: { // July
      6: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Portland' },
      13: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'NYC' },
      20: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' },
      27: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' }
    },
    7: { // August
      3: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' },
      10: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'LA' },
      17: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'SF' },
      24: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' }
    },
    8: { // September
      7: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' },
      14: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Boston' },
      21: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' },
      28: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Chicago' }
    },
    9: { // October
      5: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' },
      12: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Austin' },
      19: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' },
      26: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' }
    },
    10: { // November
      2: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Seattle' },
      9: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Denver' },
      16: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' },
      23: { title: 'New Book Release', color: 'bg-zinc-900', time: '6:00 PM', location: 'Virtual' }
    },
    11: { // December
      7: { title: '1:1 Free Reddit Consults', color: 'bg-zinc-900', time: '2:00 PM', location: 'Virtual' },
      14: { title: 'CMO Dinner', color: 'bg-zinc-900', time: '7:00 PM', location: 'Miami' },
      21: { title: 'Leadership Program', color: 'bg-zinc-900', time: '10:00 AM', location: 'Portland' },
      28: { title: '1:1 AI-Growth Workshop', color: 'bg-zinc-900', time: '3:00 PM', location: 'Virtual' }
    }
  };

  const events = monthlyEvents[currentMonth] || {};
  const today = new Date();
  const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
  const todayDate = isCurrentMonth ? today.getDate() : null;

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Get list of events for the current month
  const eventsList = Object.entries(events)
    .map(([day, event]) => ({
      day: parseInt(day),
      ...event
    }))
    .sort((a, b) => a.day - b.day);

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sky-600 text-sm font-semibold tracking-wider uppercase mb-3">
            Upcoming Events
          </p>
          <h2 className="text-zinc-900 text-[42px] font-bold tracking-tight mb-4">
            Q2+3, 2026
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Join exclusive member events, workshops, and networking dinners
          </p>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[calc(100vh-16rem)]">
          {/* Month Navigation */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 px-8 py-6 flex items-center justify-between flex-shrink-0">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            
            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Next month"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Events List */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            {eventsList.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {eventsList.map((event, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-neutral-50 border border-[#e9e9e9] rounded-xl p-4 sm:p-5 hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Date Badge */}
                      <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 ${event.color} rounded-lg sm:rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <span className="text-white/80 text-[0.625rem] sm:text-xs font-bold uppercase tracking-wide">
                          {monthNames[currentMonth].slice(0, 3)}
                        </span>
                        <span className="text-white text-2xl sm:text-3xl font-bold leading-none mt-0.5 sm:mt-1">
                          {event.day}
                        </span>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-zinc-900 text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                          {event.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-medium">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-zinc-500 text-[0.625rem] sm:text-xs md:text-sm mt-1.5 sm:mt-2 md:mt-3 hidden sm:block">
                          Exclusive for members only
                        </p>
                      </div>

                      {/* Add to Calendar CTA */}
                      <button
                        onClick={() => {
                          // Use custom calendar link if available, otherwise generate one
                          if (event.calendarLink) {
                            window.open(event.calendarLink, '_blank');
                          } else {
                            // Create calendar event
                            const eventDate = new Date(currentYear, currentMonth, event.day);
                            const eventTitle = encodeURIComponent(event.title);
                            const eventDetails = encodeURIComponent(`${event.location} - ${event.time}`);
                            const eventDateStr = eventDate.toISOString().replace(/-|:|\.\d+/g, '');
                            
                            // Google Calendar URL
                            const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&dates=${eventDateStr}/${eventDateStr}`;
                            window.open(calendarUrl, '_blank');
                          }
                        }}
                        className="flex-shrink-0 px-3 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap"
                      >
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-zinc-500 text-lg">No events scheduled for this month</p>
                <p className="text-zinc-400 text-sm mt-2">Check back soon for upcoming events</p>
              </div>
            )}
          </div>

          {/* CTA Footer */}
          <div className="bg-gradient-to-r from-zinc-50 to-neutral-100 px-8 py-6 border-t border-zinc-200 flex-shrink-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-zinc-900 font-semibold text-lg">Not a member yet?</p>
                <p className="text-zinc-600 text-sm">Join to access exclusive events and networking opportunities</p>
              </div>
              <Link
                to="/membership"
                className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors shadow-lg whitespace-nowrap"
              >
                View Membership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
