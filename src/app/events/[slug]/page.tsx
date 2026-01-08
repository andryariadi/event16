import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

const EventDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = params.then((p) => p.slug);

  console.log(slug);

  return (
    <section className="b-amber-600">
      <Suspense fallback={<div>Loading event details...</div>}>
        <EventDetails params={slug} />
      </Suspense>
    </section>
  );
};

export default EventDetailPage;
