const EventDetailsSkeleton = () => {
  return (
    <div id="event" className="animate-pulse">
      {/* Heading Skeleton */}
      <div className="header mb-8">
        <div className="h-10 bg-gray-400 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-400 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-400 rounded w-5/6"></div>
      </div>

      {/* Event Content Skeleton */}
      <div className="details flex flex-col lg:flex-row gap-8">
        {/* Left side - Event Content Skeleton */}
        <div className="content flex-1 space-y-8">
          {/* Image Skeleton */}
          <div className="banner h-64 md:h-80 lg:h-96 bg-gray-400 rounded-xl"></div>

          {/* Overview Skeleton */}
          <section className="space-y-3">
            <div className="h-7 bg-gray-400 rounded w-1/4"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          </section>

          {/* Event Details Skeleton */}
          <section className="space-y-4">
            <div className="h-7 bg-gray-400 rounded w-1/3"></div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-5 w-5 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-1/4"></div>
              </div>
            ))}
          </section>

          {/* Agenda Skeleton */}
          <section className="space-y-3">
            <div className="h-7 bg-gray-400 rounded w-1/4"></div>
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="h-4 bg-gray-400 rounded w-full"></li>
              ))}
            </ul>
          </section>

          {/* Organizer Skeleton */}
          <section className="space-y-3">
            <div className="h-7 bg-gray-400 rounded w-2/5"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
          </section>

          {/* Tags Skeleton */}
          <div className="flex flex-row gap-2 flex-wrap">
            {[1, 2, 3, 4].map((tag) => (
              <div key={tag} className="h-8 bg-gray-400 rounded-full w-20"></div>
            ))}
          </div>
        </div>

        {/* Right side - Booking Skeleton */}
        <aside className="booking lg:w-96">
          <div className="signup-card p-6 bg-gray-50 rounded-xl space-y-4">
            <div className="h-7 bg-gray-400 rounded w-2/3"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="space-y-3 pt-4">
              <div className="h-4 bg-gray-400 rounded w-1/4"></div>
              <div className="h-10 bg-gray-400 rounded"></div>
              <div className="h-12 bg-gray-300 rounded mt-4"></div>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Events Skeleton */}
      <div className="pt-20">
        <div className="h-7 bg-gray-400 rounded w-1/3 mb-6"></div>
        <div className="events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm p-4 space-y-3">
              <div className="h-48 bg-gray-400 rounded"></div>
              <div className="h-5 bg-gray-400 rounded w-3/4"></div>
              <div className="h-4 bg-gray-400 rounded w-full"></div>
              <div className="h-4 bg-gray-400 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSkeleton;
