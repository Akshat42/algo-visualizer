import Image from 'next/image';
import backgroundBanner from '@assets/images/background.svg';

export default function Index() {
    return (
        <main className="relative h-full">
            <Image
                src={backgroundBanner}
                alt="background image"
                fill
                objectFit="cover"
                objectPosition="left"
            />
        </main>
    );
}
