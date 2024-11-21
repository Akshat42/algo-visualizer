import './global.css';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Sidebar from '@components/sidebar/sidebar';
import RajdhaniFontClass from '@typography/font';

export const metadata = {
    title: 'Welcome to algo-visualizer',
    description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={RajdhaniFontClass.className}>
                {/* container */}
                <div className="w-full flex h-svh max-h-svh">
                    {/* left sidebar container */}

                    <Sidebar />

                    <div className="h-full flex-1">
                        <div className="flex h-full flex-col justify-between overflow-y-scroll">
                            <div className="sticky top-0 w-full z-30">
                                <Header />
                            </div>

                            {/** Main Content */}
                            <div className="h-full w-full">{children}</div>

                            {/** Footer */}
                            <div className="w-full">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
