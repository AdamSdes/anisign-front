import Image from "next/image"

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";

export function Auth() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[600px]">
            <div className="relative h-screen max-h-screen bg-black">
                <img src="/1.gif" className="absolute h-screen w-full object-cover" alt=""/>
                <div
                    className="absolute inset-0 backdrop-blur-xl bg-[rgba(6,6,6,0.9)] from-background to-transparent"></div>
                <div className="absolute p-[40px] inset-0 flex flex-col gap-5 justify-end items-start">
                    <h1 className="font-bold text-[40px] text-start">Нельзя знать, что такое победа,<br/>не испытав
                        поражения.</h1>
                    <div className="flex gap-4 items-center">
                        <img src="/logo.png" alt=""/>
                        <p>Anisign</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[360px] gap-[40px]">
                    <div className="flex gap-4 items-center">
                        <div className="flex justify-between items-center w-full">
                            <h1 className="text-1xl font-bold">✌️ Добро пожаловать</h1>
                            <Link href="/" className="px-[10px] rounded-[8px] py-[8px] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.8)] hover:bg-[#CCBAE4] hover:text-black transition-all duration-200">
                                На сайт
                            </Link>
                        </div>


                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="grid gap-2">
                            <input
                                id="email"
                                type="email"
                                placeholder="Почта"
                                required
                                className="px-[13px] py-[17px] rounded-[12px] bg-[#060606] border placeholder-zinc-300 outline-none focus:bg-[#0E0E0E]"
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="Пароль"
                                required
                                className="px-[13px] py-[17px] rounded-[12px] bg-[#060606] border placeholder-zinc-300 outline-none focus:bg-[#0E0E0E] transition-all duration-300"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode"/>
                            <Label htmlFor="airplane-mode" className="opacity-70 font-normal">Запомнить пароль</Label>
                        </div>
                        <div className="flex gap-2">
                            <button type="submit"
                                    className="flex justify-center font-semibold px-[13px] py-[17px] w-full bg-[#DEDEDF] text-[#060606] rounded-[12px]">
                                Войти
                            </button>
                            <Link href='auth/registration'
                                  className="flex items-center py-[18px] px-[19px] bg-[rgba(255,255,255,0.02)] border rounded-[12px]">
                                <img src="/add-user.svg" alt=""/>
                            </Link>
                        </div>
                        <div className="w-full h-[1px] bg-white opacity-10"></div>
                        <button variant="outline"
                                className="w-full px-[13px] py-[17px] rounded-[12px] bg-[rgba(255,255,255,0.02)] border">
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;