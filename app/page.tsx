import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Blog } from '@/components/Blog';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Blog />
      <About />
      <Testimonials />
    </main>
  );
}