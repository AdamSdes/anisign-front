import Image from "next/image";
import Layout from '@/app/layout';
import Navbar from "@/components/layout/Navbar";
import Report from "@/components/layout/Report";
import PagesListComponent from "@/components/features/AnimeList/PagesListComponent";
import ListComponent from "@/components/features/AnimeList/ListComponent";
import FilterComponent from "@/components/features/AnimeList/FilterComponent";
import Footer from "@/components/layout/Footer";

export default function List() {
  return (
    <Layout>
      <Navbar/>
      <Report/>
      <PagesListComponent/>
      <main className="container mx-auto px-2 gap-5 py-5 flex justify-between flex-start">
      <ListComponent/>
      <FilterComponent/>
      </main>
    </Layout>
  );
}