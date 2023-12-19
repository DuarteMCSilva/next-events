import Link from "next/link";
import { useRouter } from "next/router";
export default function EventSpecificPage() {
    const router = useRouter();
    return (
        <>
            <div>
              This is {router.query.slug}  specific page!
            </div>
            <ul>
                <li>
                    <Link href={'/'} > Home </Link>
                </li>
            </ul>
        </>

    );
}