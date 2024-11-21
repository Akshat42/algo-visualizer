import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className="p-4 bg-gray-800 text-white text-lg flex justify-between">
            <div>
                <h2 className="font-medium md:text-2xl">ALGO VISUALIZER</h2>
                <Link
                    href="https://my-portfolio-0327.web.app"
                    className="hover:underline md:text-xl"
                >
                    Akshat Divya
                </Link>
            </div>
            <div>
                <h2 className="font-medium md:text-2xl">Reference</h2>
                <Link
                    href="https://github.com/Akshat42/algo-visualizer"
                    className="flex gap-1 items-center"
                >
                    <IconBrandGithub stroke={2} />
                    <p className="hover:underline md:text-xl">Github</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
