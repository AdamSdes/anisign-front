import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <header className="navbar-style">
            <nav className="container mx-auto px-2 py-5 flex justify-between items-center">
                <div className="navbar-left flex gap-5 items-center">
                    <Link href='/' className="flex gap-5 items-center opacity-100 hover:opacity-50 transition-opacity duration-300">
                        <img src="logo.png" alt="" />
                        <p className='text-[rgba(255,255,255,0.8)] text-[14px]'>Anisign.com</p>
                    </Link>
                    <img src="line.svg" alt="" />
                    <Link href='/animelist' className="flex items-center text-[#CDCDCD] gap-1 font-semibold rounded-[12px] text-[14px] bg-[none] h-[48px] opacity-100 hover:translate-x-1 transition-all duration-300">
                        Cписок аниме
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 16L19.7929 12.7071C20.1834 12.3166 20.1834 11.6834 19.7929 11.2929L16.5 8M19.5 12L5.5 12" stroke="#CDCDCD" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <button className="flex items-center gap-20 border bg-[none] text-[#CDCDCD] px-[14px] h-[48px] text-[14px] font-medium rounded-[12px] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M13.7201 15.3002L9.3101 10.8902C8.9601 11.1702 8.5576 11.3919 8.1026 11.5552C7.6476 11.7185 7.16343 11.8002 6.6501 11.8002C5.37843 11.8002 4.3023 11.3597 3.4217 10.4786C2.5411 9.59753 2.10056 8.5214 2.1001 7.2502C2.09963 5.979 2.54016 4.90286 3.4217 4.0218C4.30323 3.14073 5.37936 2.7002 6.6501 2.7002C7.92083 2.7002 8.9972 3.14073 9.8792 4.0218C10.7612 4.90286 11.2015 5.979 11.2001 7.2502C11.2001 7.76353 11.1184 8.2477 10.9551 8.7027C10.7918 9.1577 10.5701 9.5602 10.2901 9.9102L14.7001 14.3202L13.7201 15.3002ZM6.6501 10.4002C7.5251 10.4002 8.26897 10.0941 8.8817 9.4818C9.49443 8.86953 9.80057 8.12566 9.8001 7.2502C9.79963 6.37473 9.4935 5.6311 8.8817 5.0193C8.2699 4.4075 7.52603 4.10113 6.6501 4.1002C5.77416 4.09926 5.03053 4.40563 4.4192 5.0193C3.80786 5.63296 3.5015 6.3766 3.5001 7.2502C3.4987 8.1238 3.80506 8.86766 4.4192 9.4818C5.03333 10.0959 5.77696 10.4021 6.6501 10.4002Z" fill="#FAFAFA" fill-opacity="0.6" />
                            </svg>
                            Поиск
                        </div>
                        <div className="py-[4px] px-[8px] bg-[rgba(255,255,255,0.05)] border rounded-[4px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="12" viewBox="0 0 4 12" fill="none">
                                <path d="M3.95028 0.775391L1.13778 11.2243H0L2.8125 0.775391H3.95028Z" fill="#FAFAFA" fill-opacity="0.6" />
                            </svg>
                        </div>
                    </button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 border bg-[rgba(255,255,255,0.02)] text-[#CDCDCD] px-[20px] h-[48px] text-[14px] font-semibold rounded-[12px] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300">
                                Страницы
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.54199 6.875L7.94715 10.6509C8.26547 10.9237 8.73518 10.9237 9.0535 10.6509L13.4587 6.875" stroke="#CDCDCD" stroke-width="1.0625" stroke-linecap="round" />
                                </svg>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 p-2">
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="p-3">
                                    Календарь
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3">
                                    Колекции
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3">
                                    Комментарии
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <img src="line.svg" alt="" />
                    <Link href="auth" className="flex items-center bg-[#DEDEDF] text-[#060606] px-[32px] h-[48px] text-[14px] font-semibold rounded-[12px] hover:bg-[#CCBAE4] transition-all duration-300">Аккаунт</Link>
                </div>
            </nav>
        </header>
    );
}
