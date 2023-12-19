import Link from "next/link";
export default function Home() {
    
    return (
        <>
            <div>
                Home page!
            </div>
            <ul>
                <li>
                    <Link href={'/events'} > Events Page </Link>
                </li>
            </ul>
        </>

    );
}
