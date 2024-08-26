"use client";

import React, { useState } from 'react';
import AnimeCard from './СalendarCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from "lucide-react";

export default function AnimeList() {
    const [selectedCard, setSelectedCard] = useState(null);

    const animeData = [
        {
            image: 'ala.png',
            rating: '7.5',
            title: 'Аля иногда кокетничает со мной по-русски',
            episodeInfo: 'Серия 7/10',
            timeInfo: '1 ч. назад',
        },
        {
            image: 'https://animego.org/upload/anime/images/66794a340e8fc726798800.jpg',
            rating: '7.5',
            title: 'Аля иногда кокетничает со мной по-русски',
            episodeInfo: 'Серия 7/10',
            timeInfo: '1 ч. назад',
        },
        {
            image: 'https://animego.org/upload/anime/images/668bb6719b398536161167.jpg',
            rating: '7.5',
            title: 'Аля иногда кокетничает со мной по-русски',
            episodeInfo: 'Серия 7/10',
            timeInfo: '1 ч. назад',
        },
        {
            image: 'https://animego.org/upload/anime/images/6682a2876ed6e012590171.jpg',
            rating: '7.5',
            title: 'Аля иногда кокетничает со мной по-русски',
            episodeInfo: 'Серия 7/10',
            timeInfo: '1 ч. назад',
        },
        {
            image: 'https://animego.org/upload/anime/images/66781e6ed31d4804836571.jpg',
            rating: '7.1',
            title: 'Башня Бога 2',
            episodeInfo: 'Серия 7/10',
            timeInfo: '1 ч. назад',
        },
    ];

    return (
        <main className='flex flex-col gap-3 items-center'>
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <p className='text-[20px] font-bold '>Календарь</p>
                <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="container mx-auto px-2 py-5 flex flex-col">
                <div className='flex gap-[23px] flex-wrap'>
                    {animeData.map((anime, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setSelectedCard(index)}
                            onMouseLeave={() => setSelectedCard(null)}
                            className={`transition-opacity duration-300 ${selectedCard !== null && selectedCard !== index ? 'opacity-40' : 'opacity-100'
                                }`}
                        >
                            <AnimeCard
                                image={anime.image}
                                rating={anime.rating}
                                title={anime.title}
                                episodeInfo={anime.episodeInfo}
                                timeInfo={anime.timeInfo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
