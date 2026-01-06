import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import SplitText from "@/components/SplitText";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section className="b-rose-500">
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
      <div id="events" className="b-purple-500 mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event) => (
              <li key={event.slug} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
