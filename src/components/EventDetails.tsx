import Image from "next/image";
import EventCard from "./EventCard";
import { getSimilarEventsBySlug } from "@/lib/actions/events.action";
import { IEvent } from "@/database";
import BookEvent from "./BookEvent";

const EventDetailItem = ({ icon, alt, label }: { icon: string; alt: string; label: string }) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul className="space-y-2">
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);

const EventDetails = async ({ params }: { params: Promise<string> }) => {
  const slug = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${slug}`);
  const { event } = await res.json();

  const { description, image, overview, date, time, location, mode, agenda, audience, tags, organizer } = event;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  const bookings = 10;

  console.log({ event }, "<---eventDetailPage");

  return (
    <div id="event" className="b-fuchsia-500">
      {/* Heading */}
      <div className="b-green-500 header">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>

      {/* Event Content */}
      <div className="b-yellow-500 details">
        {/* Left side - Event Content */}
        <div className="b-blue-500 content">
          <Image src={event.image} alt={event.title} width={800} height={800} className="banner" />

          {/* Overview */}
          <section className="space-y-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          {/* Event Details */}
          <section className="flex-col-gap-2">
            <h2>Event Details</h2>

            <EventDetailItem icon="/icons/calendar.svg" alt="calendar" label={date} />
            <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailItem icon="/icons/audience.svg" alt="audience" label={audience} />
          </section>

          <EventAgenda agendaItems={agenda} />

          {/* Organizer */}
          <section className="space-y-2">
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>

          <EventTags tags={tags} />
        </div>

        {/* Right side - Book Event */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? <p className="text-sm">Join {bookings} people who have already booked their spot!</p> : <p className="text-sm">Be the first to book your spot!</p>}

            <BookEvent eventId={event._id} slug={event.slug} />
          </div>
        </aside>
      </div>

      {/* Similar Events */}
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">{similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => <EventCard key={similarEvent.title} {...similarEvent} />)}</div>
      </div>
    </div>
  );
};

export default EventDetails;
