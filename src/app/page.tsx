import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import EventsGridSkeleton from "@/components/skeleton/EventCardSkeleton";
import SplitText from "@/components/SplitText";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

const EventList = async () => {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);
  const { events } = await res.json();

  return (
    <div id="events" className="b-purple-500 mt-20 space-y-7">
      <h3>Featured Events</h3>
      {events.length > 0 ? (
        <ul className="events">
          {events.map((event: IEvent) => (
            <li key={event.slug} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No events available</p>
      )}
    </div>
  );
};

export default async function Home() {
  return (
    <section className="b-rose-500 min-h-[calc(100vh+18rem)]">
      {/* Heading */}
      <h1 className="text-center font-bold">
        <SplitText
          text="The Hub for Every Dev"
          tag="span"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <br />
        <SplitText text="Event You Can't Miss" tag="span" delay={180} duration={0.6} ease="power3.out" splitType="words, chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
      </h1>

      {/* Subheading */}
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

      {/* Explore Button */}
      <ExploreBtn />

      {/* Events Section */}
      <Suspense fallback={<EventsGridSkeleton count={3} />}>
        <EventList />
      </Suspense>
    </section>
  );
}
