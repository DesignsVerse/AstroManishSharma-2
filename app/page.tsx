import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Blog } from '@/components/Blog';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { AboutServices } from '@/components/aboutServices';
import StatsCircle from '@/components/Achivement';
import StatisticsCard from '@/components/Achivement';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <StatisticsCard/>
      <AboutServices/>
      <Blog />
      <Testimonials />
    </main>
  );
}