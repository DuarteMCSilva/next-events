import Link from "next/link";
import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from  "../../components/event-detail/event-content";

export default function EventPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event) {
        return <p> No event found with index {eventId} </p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics 
                date={event.date}
                address={event.date}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p> {event.description} </p>
            </EventContent>
        </Fragment>

    );
}