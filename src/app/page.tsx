import Image from "next/image";
import Layout from '@/app/layout';
import Navbar from "@/components/layout/Navbar";
import Report from "@/components/layout/Report";
import AnimeCarousel from "@/components/features/Carousel";
import MainCalendar from "@/components/features/Calendar";
import Footer from "@/components/layout/Footer";
import MainComments from "@/components/features/Comments";
import Colection from "@/components/features/Colection";


export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <Report/>
      <AnimeCarousel/>
      <MainCalendar/>
      <MainComments/>
      <Colection/>
      <Footer/>
    </Layout>
  );
}
