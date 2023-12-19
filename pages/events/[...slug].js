import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";
export default function EventSpecificPage() {
    const router = useRouter();

    const filtersApplied = router.query.slug;

    if(!filtersApplied) {
        return <p className="center"> Loading....</p>
    }

    const filterYear = +filtersApplied[0];
    const filterMonth = +filtersApplied[1];

    if (
      isNaN(filterYear) ||
      isNaN(filterMonth) ||
      filterYear > 2030 ||
      filterYear < 2021 ||
      filterMonth > 12 ||
      filterMonth < 0
    ) {
      return <p> Invalid Filter! </p>;
    }

    const filteredEvents = getFilteredEvents({
        year: filterYear,
        month: filterMonth,
    })

    if (!filteredEvents || filteredEvents.length === 0) {
      return (
        <Fragment>
          <p> No events found for the chosen filter </p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </Fragment>
      );
    }

    const date = new Date(filterYear, filterMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList eventList={filteredEvents} />
        </Fragment>
    );
}