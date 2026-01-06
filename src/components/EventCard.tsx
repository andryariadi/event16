import { EventProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ title, image, slug, location, date, time }: EventProps) => {
  return (
    <Link href={`/events/${slug}`} id="event-card" className="b-pink-600 group hover:bg-popover hover:rounded-md transition-all duration-300">
      <div className="overflow-hidden rounded-md">
        <Image src={image} alt={title} width={410} height={300} className="poster hover:scale-110 transition-all duration-300" />
      </div>
      <div className="flex flex-row gap-2 card-hover">
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <span>{location}</span>
      </div>

      <p className="title card-hover">{title}</p>

      <div className="datetime card-hover">
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
