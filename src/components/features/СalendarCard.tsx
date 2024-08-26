import React from 'react';

const AnimeCard = ({ image, rating, title, episodeInfo, timeInfo }) => {
    return (
        <button className='flex bg-[rgba(255,255,255,0.02)] pr-[107px] rounded-[12px] gap-5 items-center '>
            <img className="w-[112px] h-[165px] rounded-[12px] object-cover" src={image} alt={title}/>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex gap-1 items-center'>
                        <img src="star.svg" alt="Rating" />
                        <p className='text-[#E4DBBA]'>{rating}</p>
                    </div>
                    <p className='text-[14px] max-w-[206px] font-semibold text-start'>{title}</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex text-[14px] px-[15px] py-[10px] items-center bg-[rgba(204,186,228,0.10)] w-fit font-semibold text-[#CCBAE4] rounded-[9px]">
                        <div>{episodeInfo}</div>
                    </div>
                    <div className="flex px-[15px] text-[12px] py-[10px] items-center bg-none w-fit border font-medium text-[#D7D7D7] rounded-[9px]">
                        {timeInfo}
                    </div>
                </div>
            </div>
        </button>
    );
};

export default AnimeCard;
