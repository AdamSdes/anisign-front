import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Report() {
    return (
        <div className="bg-[rgba(255,255,255,0.02)]">
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <p className='text-[14px] opacity-80 text-'>Сайт находиться в бета версии, если вам удалось найти баг обратитесь в поддержку</p>
                <Button variant="outline" className='bg-[none] rounded-[9px] px-4 py-5 opacity-90'>Репорт</Button>
            </div>
        </div>
    );
}
