import { ContactForm } from '@/components/ContactForm';
import GrainOverlay from '@/components/GrainOverlay';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const runtime = "edge";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#f4f4f4] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
            <GrainOverlay />
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-8 max-w-3xl mx-auto relative z-10">
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}
