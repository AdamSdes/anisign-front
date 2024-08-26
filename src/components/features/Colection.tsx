import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AnimeCard = ({ backgroundImage, title, username, avatar }) => {
    return (
        <button className="relative w-[220px] h-[309px] rounded-lg overflow-hidden image-colection group">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform image-colection duration-500 ease-in-out transform group-hover:scale-125"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold mb-2 text-start">{title}</p>
                <div className="flex items-center gap-3">
                    <Avatar className='w-[35px] h-[35px]'>
                        <AvatarImage className="object-cover" src={avatar}  alt={username} />
                        <AvatarFallback>JU</AvatarFallback>
                    </Avatar>
                    <p className="text-white text-sm">{username}</p>
                </div>
            </div>
        </button>
    );
};


export default function Colection() {
    const animeCollection = [
        {
            backgroundImage: 'https://i.pinimg.com/originals/86/8d/b2/868db2e73dd159f7148fcb449f06cb11.gif',
            title: 'Аниме, которое стоит посмотреть',
            username: '@AdamS',
            avatar: '/Rectangle.png',
        },
        {
            backgroundImage: '/col1.png',
            title: 'Захватывающий сюжет',
            username: '@JuliaB',
            avatar: '',
        },
        {
            backgroundImage: 'https://i.pinimg.com/originals/f5/e1/ff/f5e1ffa90eda66410123c92f1dbe7dc5.gif',
            title: 'Новое аниме сезона',
            username: '@JohnK',
            avatar: 'https://i.pinimg.com/736x/4f/d4/da/4fd4da8de765d16b8e396b188f6e1592.jpg',
        },
        {
            backgroundImage: 'https://i.pinimg.com/236x/1d/ea/1e/1dea1ea2086a1b7e2f0e4e57bb0854a1.jpg',
            title: 'Новое аниме сезона',
            username: '@JohnK',
            avatar: 'https://i.pinimg.com/564x/22/dd/f9/22ddf919e3dfe46c7d629bf92c6ac96b.jpg',
        },
        {
            backgroundImage: 'https://i.pinimg.com/564x/e2/ce/5e/e2ce5eae791dafd93f31aebbc697e8dd.jpg',
            title: 'Новое',
            username: '@JohnK',
            avatar: 'https://i.pinimg.com/564x/da/ea/59/daea5903baf212cb94f7fa214e4b3f43.jpg',
        },
    ];

    return (
        <main>
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <p className='text-[20px] font-bold'>Колекции</p>
                <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="container mx-auto px-2 py-5 flex gap-2 justify-between items-center">
                <button className="group flex items-center border bg-[rgba(255,255,255,0.02)] px-[92px] h-[308px] rounded-[12px] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300">
                    <img className="group-hover:scale-90 transition-all duration-300" src="add-col.svg" alt="Добавить коллекцию" />
                </button>

                {animeCollection.map((anime, index) => (
                    <AnimeCard
                        key={index}
                        backgroundImage={anime.backgroundImage}
                        title={anime.title}
                        username={anime.username}
                        avatar={anime.avatar}
                    />
                ))}
            </div>
        </main>
    );
}
