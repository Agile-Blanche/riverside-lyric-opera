"use client";
import { useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  time?: string;
  description?: string;
  location?: string;
  link?: string;
};

export default function CalendarContainer() {
  // Dummy events
  const events: Event[] = [
    {
      id: "1",
      title: "First Annual Opera Gala",
      date: "Saturday, March 7, 2026",
      time: "7:00 PM",
      location: "UC Riverside University Theater",
      description:
        "Join us for an unforgettable evening of exceptional music, elegance, and celebration as Riverside Lyric Opera reopens a cherished cultural tradition in our region.",
      link: "https://ucrfineartstickets.com/tickets/events/rlogala",
    },
  
  ];

  // Group events by month-year
  const eventsByMonth: Record<string, Event[]> = {};
  events.forEach((event) => {
    const dateObj = new Date(event.date);
    const monthName = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    const monthKey = `${monthName}-${year}`;
    if (!eventsByMonth[monthKey]) eventsByMonth[monthKey] = [];
    eventsByMonth[monthKey].push(event);
  });

  // Sorting events state for calendar
  const today = new Date();

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const nextEvent =
    sortedEvents.find((event) => new Date(event.date) >= today) ??
    sortedEvents[0]; // fallback if all events are in the past

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(
    nextEvent
      ? new Date(
          new Date(nextEvent.date).getFullYear(),
          new Date(nextEvent.date).getMonth(),
          1,
        )
      : new Date(),
  );
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  );

  const startingDayOfWeek = startOfMonth.getDay();

  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  );

  const daysInMonth = [];
  for (let day = 1; day <= endOfMonth.getDate(); day++) {
    daysInMonth.push(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day),
    );
  }

  const eventDates = new Set(
    events.map((e) => {
      const d = new Date(e.date);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }),
  );

  const [hasNavigatedForward, setHasNavigatedForward] = useState(false);

  const prevMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1,
    );
    setCurrentMonth(newMonth);

    // convert nextEvent.date string to Date
    const nextEventDate = new Date(nextEvent.date);

    const isOriginalMonth =
      newMonth.getFullYear() === nextEventDate.getFullYear() &&
      newMonth.getMonth() === nextEventDate.getMonth();

    setHasNavigatedForward(!isOriginalMonth);
  };

  const nextMonth = () => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1,
    );
    setCurrentMonth(newMonth);
    setHasNavigatedForward(true); // user has now navigated forward
  };

  // JSX
  return (
    <div>
      <div className="lg:h-[55vh] bg-black relative w-full aspect-[5/2]">
        <img
          src="images/rlo-calendar-img.jpeg"
          alt="caledendar page header"
          className="absolute inset-0 w-full h-full object-cover"
        />
          <div className="absolute inset-0 bg-black/20" />
            <h1 className="absolute inset-0 flex pt-10 pl-8 mt-[-2rem] sm:mt-0
                 justify-center items-center sm:items-start sm:justify-start text-[#ff6d2c] text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-.2rem] headline-font">
    CALENDAR
  </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-11 sm:px-15 pt-15">
        {/* Calendar Grid */}
        <div className="lg:w-2/5 min-w-xs px-10 sm:px-0">
          <div className="sticky top-38 bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-4">
              {hasNavigatedForward ? (
                <button
                  onClick={prevMonth}
                  className="px-2 py-1 cursor-pointer"
                >
                  &lt;
                </button>
              ) : (
                <div className="px-2 py-1 w-6" /> // placeholder to keep spacing
              )}

              <h2 className="text-3xl font-bold uppercase tracking-[-.04rem] body-font">
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button onClick={nextMonth} className="px-2 py-1 cursor-pointer">
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="font-semibold text-gray-600 text-sm uppercase"
                >
                  {day}
                </div>
              ))}

              {/* Empty leading days */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {/* Actual days */}
              {daysInMonth.map((date) => {
                const day = date.getDate();
                const dateKey = `${date.getFullYear()}-${date.getMonth()}-${day}`;
                const hasEvent = eventDates.has(dateKey);

                return (
                  <div
                    key={dateKey}
                    onClick={() => {
                      if (!hasEvent) return;

                      const element = document.getElementById(dateKey);
                      if (!element) return;

                      const yOffset = -230; // adjust if needed
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;

                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });
                    }}
                    className={`h-12 flex items-center justify-center rounded transition
        ${
          hasEvent
            ? "bg-brand-orange text-white cursor-pointer hover:scale-105"
            : "cursor-default"
        }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event List */}
        <div className="lg:w-2/3 bg-white py-4 lg:pl-4">
          {Object.entries(eventsByMonth).map(([monthKey, monthEvents]) => {
            const [monthName, year] = monthKey.split("-");

            return (
              <div key={monthKey}>
                {/* Month Header */}
                <div className="flex justify-center sm:justify-normal sticky top-24 z-10 text-[#ded6eb] text-5xl sm:text-6xl md:text-7xl font-bold sm:p-2 sm:pl-15 w-full bg-black h-[8rem] uppercase items-center border-b border-white/20 md:min-w-lg headling-font">
                  {monthName}
                  <span className="text-5xl sm:text-6xl md:text-7xl ml-4 text-[#ff6d2c]">
                    {year}
                  </span>
                </div>

                {/* Events for this month */}
                <div className="space-y-10 mt-1 pl-5 sm:pl-0 pb-15 sm:pb-15">
                  {monthEvents.map((event) => {
                    const dateObj = new Date(event.date);
                    const dayOfWeek = dateObj.toLocaleString("default", {
                      weekday: "short",
                    });
                    const dayOfMonth = dateObj.getDate();
                    const monthShort = dateObj.toLocaleString("default", {
                      month: "short",
                    });
                    const eventDateObj = new Date(event.date);
                    const eventDateKey = `${eventDateObj.getFullYear()}-${eventDateObj.getMonth()}-${eventDateObj.getDate()}`;

                    return (
                      <div
                        id={eventDateKey}
                        key={event.id}
                        className="pr-2 flex flex-col sm:flex-row items-start gap-4"
                      >
                        {/* Calendar Square */}
                        <div className="ml-5 sm:ml-0 flex flex-col items-start p-3 w-40 h-31 sm:h-35 md:h-40 border-5 text-center translate-y-10">
                          <span className="text-xl md:text-3xl font-bold uppercase tracking-[.05rem]">
                            {dayOfWeek}
                          </span>
                          <span className="text-lg md:text-2xl font-bold">
                            {dayOfMonth}
                          </span>
                        </div>

                        {/* Event Content */}
                        <div className="flex-1 -translate-y-[-.8rem] pl-3 sm:pl-7">
                          <h4 className="font-semibold text-2xl md:text-3xl uppercase text-[#ff6d2c] pb-2 pt-10 body-font">
                            {event.title}
                          </h4>
                          <span className="flex font-bold whitespace-nowrap">
                            <p className=" pr-2 text-sm md:text-md text-black body-font">
                              {event.date}
                            </p>
                            {event.time && (
                              <p className="text-sm md:text-md body-font">{event.time}</p>
                            )}
                          </span>
                          <p className="pt-1 font-bold text-sm md:text-base body-font">
                            {event.location}
                          </p>

                          {event.description && (
                            <p className=" mt-3 tracking-wider leading-7 text-sm md:text-based pr-15 sm:pr-0 body-font">
                              {event.description}
                            </p>
                          )}
                        </div>

                        {/* Button */}
                        <div>
                          {event.link && (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm md:text-base px-4 py-3 bg-[#ded6eb] text-white rounded-3xl sm:translate-y-18 sm:-translate-x-7 font-bold transition duration-600 ease-in-out active:scale-90 cursor-pointer ml-2 mt-4 sm:mt-0 sm:ml-6 sm:ml-8 inline-block whitespace-nowrap"
                            >
                              BUY TICKETS
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
