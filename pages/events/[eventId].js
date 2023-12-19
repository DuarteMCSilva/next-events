import Link from "next/link";
import { useRouter } from "next/router";
export default function EventPage() {
    const router = useRouter();
    return (
        <>
            <div>
              This is {router.query.eventId}  page!
            </div>
            <ul>
                <li>
                    <Link href={'/'} > Home </Link>
                </li>
            </ul>
        </>

    );
}