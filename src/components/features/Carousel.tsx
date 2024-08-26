import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { m } from 'framer-motion';

export default function AnimeCarousel() {
    return ( 
        <main className='anim-list-background'>
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <p className='text-[20px] font-bold'>Лучшие онгоинги</p>
                <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="">
                <Carousel className="container mx-auto px-2 py-5 flex justify-between items-center w-full">
                    <CarouselContent className="flex gap-4">
                        {[
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                            {
                                title: "А я непопулярная...",
                                year: "2024",
                                type: "ONA",
                                image: "anime1.png",
                            },
                        ].map((anime, index) => (
                            <CarouselItem key={index} className="min-w-[260px] max-w-[260px]">
                                <div className="p-1 border-none">
                                    <Card className="border-none bg-[none] rounded-xl w-[260px] h-[368px] overflow-hidden">
                                        <img src={anime.image} alt={anime.title} className="object-cover w-full h-full" />
                                        <CardContent className="absolute bottom-0 w-full p-4 text-white">
                                            <p className="text-[14px] font-semibold">{anime.title}</p>
                                            <div className="opacity-70 flex gap-[10px] text-sm mt-2">
                                                <p className='text-[12px]'>{anime.year}</p>
                                                <span>/</span>
                                                <p className='text-[12px]'>{anime.type}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    );
}
