'use client'; // Директива для указания клиентского компонента

import React, { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function ListComponent() {
    const [animeList, setAnimeList] = useState([]);
    const [filteredAnimeList, setFilteredAnimeList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Параметры для пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    useEffect(() => {
        // Загрузка JSON файла
        fetch('/animeList.json')
            .then(response => response.json())
            .then(data => {
                setAnimeList(data);
                setFilteredAnimeList(data); // Изначально показываем весь список
            })
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }, []);

    useEffect(() => {
        // Фильтрация списка по поисковому запросу
        if (searchTerm === "") {
            setFilteredAnimeList(animeList); // Показываем полный список, если поле поиска пустое
        } else {
            const filtered = animeList.filter(anime =>
                anime.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredAnimeList(filtered);
        }
        setCurrentPage(1); // Сбрасываем текущую страницу при поиске
    }, [searchTerm, animeList]);

    // Определяем элементы, которые должны отображаться на текущей странице
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAnimeList.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredAnimeList.length / itemsPerPage);

    // Функция для обрезки текста до 40 символов
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    // Обработчики переключения страниц
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Логика для отображения ограниченного количества номеров страниц
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5; // Максимум страниц, которые нужно показывать одновременно
        const half = Math.floor(maxPagesToShow / 2);

        let startPage = Math.max(1, currentPage - half);
        let endPage = Math.min(totalPages, currentPage + half);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - (maxPagesToShow - 1));
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <main className="">
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-3 min-w-[100%] rounded-[12px] bg-[#060606] border text-white outline-none focus:bg-[#0B0B0B] transition-all duration-300"
                />
            </div>

            {/* Список карточек */}
            <div className="flex flex-row flex-wrap max-w-[960px] gap-[16px]">
                {currentItems.map((anime, index) => (
                    <button
                        key={index}
                        className="relative overflow-hidden rounded-xl bg-[none] group w-[228px] h-[321px] focus:outline-none"
                    >
                        {/* Изображение с эффектом увеличения при наведении */}
                        <div className="overflow-hidden w-full h-full rounded-xl">
                            <img
                                src={anime.image_url}
                                alt={anime.title}
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            />
                        </div>

                        {/* Текстовая информация */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent p-4 flex flex-col justify-end">
                            <p className="text-white font-semibold mb-2 text-start">
                                {truncateText(anime.title, 25)}
                            </p>
                            <div className="flex gap-2 text-sm text-white opacity-80">
                                <p>{anime.year}</p>
                                <span>/</span>
                                <p>{anime.тип}</p>
                            </div>
                        </div>

                        {/* Рейтинг */}
                        <div className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full px-2 py-1 text-white text-xs">
                            {anime.rating || 'N/A'}
                        </div>
                    </button>
                ))}
            </div>

            {/* Пагинация */}
            <Pagination className="fixed bottom-0 left-0 w-full  text-center py-3 overflow-auto">
                <PaginationContent className="flex justify-center p-4 bg-black/80 backdrop-blur p-4 rounded-[14px] space-x-2">
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={handlePreviousPage} />
                    </PaginationItem>

                    {getPageNumbers().map((pageNumber) => (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink
                                href="#"
                                onClick={() => handlePageChange(pageNumber)}
                                isActive={currentPage === pageNumber}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    {totalPages > 5 && currentPage + 2 < totalPages && (
                        <>
                            <PaginationEllipsis />
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    onClick={() => handlePageChange(totalPages)}
                                >
                                    {totalPages}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

                    <PaginationItem>
                        <PaginationNext href="#" onClick={handleNextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </main>
    );
}

