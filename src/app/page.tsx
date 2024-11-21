import Image from 'next/image';
import backgroundBanner from '@assets/images/background.svg';
import AlgoBanner from '@components/algo-banner/algo-banner';

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
            <div className="h-full flex center mr-[10%] items-center justify-end">
                <AlgoBanner />
            </div>
        </main>
    );
}
