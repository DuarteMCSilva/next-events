import EventItem from "./event-item";
import classes from './event-list.module.css';

export default function EventList( { eventList }) {
    return (
            <ul className={classes.list}>
                { eventList.map( (event) => {
                    return (<EventItem key={event.id} event={event}/>)
                }) }
            </ul>
    );
}
