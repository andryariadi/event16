import EventDetails from "@/components/EventDetails";
import EventDetailsSkeleton from "@/components/skeleton/EventDetailsSkeleton";
import { Suspense } from "react";

const EventDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = params.then((p) => p.slug);

  return (
    <section className="b-amber-600">
      <Suspense fallback={<EventDetailsSkeleton />}>
        <EventDetails params={slug} />
      </Suspense>
    </section>
  );
};

export default EventDetailPage;
