import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// A simple placeholder page for routes that haven't been fully fleshed out yet.
export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 section-padding">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-600">This page is currently under construction for the prototype.</p>
      </main>
      <Footer />
    </div>
  );
}
