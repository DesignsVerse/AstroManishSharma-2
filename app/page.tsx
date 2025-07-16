import Hero  from '@/components/Home/Hero';
import { Services } from '@/components/Home/Services';
import { Blog } from '@/components/Home/Blog';
import About  from '@/components/Home/About';
import { Testimonials } from '@/components/Home/Testimonials';
import AboutServices  from '@/components/Home/aboutServices';
import StatsCircle from '@/components/Home/Achivement';
import StatisticsCard from '@/components/Home/Achivement';

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