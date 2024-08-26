import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

const CommentCard = ({ avatar, username, time, commentText, animeTitle }) => {
    return (
        <div className="flex flex-col rounded-[10px] border bg-[rgba(255,255,255,0.02)] p-[25px] justify-between gap-[15px] min-w-[300px]">
            <div className="flex gap-2">
                <Avatar className='w-[47px] h-[47px]'>
                    <AvatarImage src={avatar} alt={username} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <Link className='text-[14px] font-semibold hover:opacity-50 transition-opacity duration-300' href="">
                        {username}
                    </Link>
                    <p className='text-[12px] opacity-60 font-medium'>{time}</p>
                </div>
            </div>
            <p className='max-w-[480px]'>{commentText}</p>
            <button className='flex items-center gap-2 hover:opacity-50 transition-opacity duration-300'>
                <img src="doc.svg" alt="doc" />
                <p className='text-[#B6D0F7]'>{animeTitle}</p>
                <img src="right.svg" alt="right arrow" />
            </button>
        </div>
    );
};

export default function MainComments() {

    const commentsData = [
        {
            avatar: '',
            username: '@AdamS',
            time: '8 минут назад',
            commentText: 'Середина норм, концовкааааааа.... Нууууу... Вообще незаинтриговала. Эпизод высосанный и какой-то искусственный.',
            animeTitle: 'Аля иногда кокетничает со мной',
        },
        {
            avatar: '',
            username: '@JuliaB',
            time: '15 минут назад',
            commentText: 'Эпизод был потрясающим! Не могу дождаться следующего. Всем советую!',
            animeTitle: 'Башня бога',
        },
        {
            avatar: '',
            username: '@JohnK',
            time: '30 минут назад',
            commentText: 'Не понравилась концовка, но сюжет держал до конца. Возможно, это не последний эпизод.',
            animeTitle: 'Психопаспорт',
        },
    ];

    return (
        <main>
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <p className='text-[20px] font-bold'>Лучшие онгоинги</p>
                <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="container justify-between mx-auto px-2 py-5 flex gap-5 flex-row overflow-x-auto">
                {commentsData.map((comment, index) => (
                    <CommentCard
                        key={index}
                        avatar={comment.avatar}
                        username={comment.username}
                        time={comment.time}
                        commentText={comment.commentText}
                        animeTitle={comment.animeTitle}
                    />
                ))}
            </div>
        </main>
    );
}
