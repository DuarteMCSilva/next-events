import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
export default function Events() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <>
            <h2>Sign up</h2>
            <button>Sign up</button>
            <div>
                Events page!
            </div>
            <div>
                <EventSearch onSubmit={findEventsHandler}></EventSearch>
                <EventList eventList={events}/>
            </div>
        </>

    );
}