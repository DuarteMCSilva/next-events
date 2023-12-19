import Link from "next/link";
export default function Events() {
    return (
        <>
            <div>
                Events page!
            </div>
            <ul>
                <li>
                    <Link href={'/'} > Home </Link>
                </li>
                <li>
                    <Link href={'events/event1'} > Event 1 </Link>
                </li>
                <li>
                    <Link href={'events/event2/2023'} > Event 2 / 2023</Link>
                </li>
            </ul>
        </>

    );
}