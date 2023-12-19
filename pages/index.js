import Link from "next/link";
import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <>
            <div>
                <EventList eventList={featuredEvents}/>
            </div>
            <ul>
                <li>
                    <Link href={'/events'} > Events Page </Link>
                </li>
            </ul>
        </>

    );
}
