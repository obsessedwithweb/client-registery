import Image from "next/image";

export default function Logo () {
    return (
        <Image
            src="/next.svg"
            alt="CarePulse Logo"
            width={150}
            height={500}
            unoptimized
        />
    );
}