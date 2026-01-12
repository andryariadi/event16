// File: src/components/EventsGridSkeleton.tsx
const EventsGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group animate-pulse">
          {/* Card Container */}
          <div className="border border-gray-500 rounded-lg overflow-hidden shadow-sm bg-white">
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200"></div>

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
                <div className="h-3 bg-gray-400 rounded w-24"></div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded w-4/5"></div>
                <div className="h-3 bg-gray-400 rounded w-full"></div>
                <div className="h-3 bg-gray-400 rounded w-2/3"></div>
              </div>

              {/* Date & Time */}
              <div className="flex justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-400 rounded"></div>
                  <div className="h-3 bg-gray-400 rounded w-16"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-400 rounded"></div>
                  <div className="h-3 bg-gray-400 rounded w-14"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsGridSkeleton;
