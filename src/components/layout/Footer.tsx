import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-none footer-border py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href='/' className="flex gap-5 items-center opacity-40 hover:opacity-80 transition-opacity duration-300">
                    <img src="logo.png" alt="Anisign logo" />
                    <p className='text-white text-[14px]'>Anisign.com</p>
                </Link>
                <div className="text-white flex items-center space-x-4">
                    <Link href='mailto:support@anisign.com' className="text-[#CCBAE4] opacity-100 hover:opacity-50 transition-opacity duration-300">support@anisign.com</Link>
                    <p className="text-[#787878]">© 2024 Anisign</p>
                </div>
            </div>
        </footer>
    );
}
