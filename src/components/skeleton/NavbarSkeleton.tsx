// File: src/components/skeleton/NavbarSkeleton.tsx
const NavbarSkeleton = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between animate-pulse">
        {/* Logo Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
          <div className="h-5 bg-gray-700 rounded w-20"></div>
        </div>

        {/* Nav Links Skeleton */}
        <div className="flex items-center gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-16"></div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavbarSkeleton;
