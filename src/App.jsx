
import {
  Footer,
  Hero,
  Products,
  Press,
  Contact,
  AboutUs,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <AboutUs />
      </section>
      <section className='padding-x py-10'>
        <Products />
      </section>
      <section className='padding'>
        <Press />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Contact />
      </section>
      <section className=''>
        <Footer />
      </section>
    </main>
  );
};

export default App;
