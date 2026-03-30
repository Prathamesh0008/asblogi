import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GetQuoteModal from './GetQuoteModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const goToContact = () => router.push('/contact');

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-medium mb-5 tracking-wide">
  <span className="bg-gradient-to-r 
    from-gray-100/90 via-gray-100/80 to-[#FF8C00]/90 
    bg-clip-text text-transparent opacity-100 animate-shine">
    Ready to Ship?
  </span>
</h2>

<p className="text-lg text-gray-300/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
  Join thousands of satisfied clients worldwide. Get a quote today!
</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-[#FAB045] to-[#f8c468] hover:from-[#e8a035] hover:to-[#e8a035] text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Request Quote 
          </button>
          <button 
            onClick={goToContact}
            className="border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300"
          >
            Contact Sales
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <GetQuoteModal isOpen={isModalOpen} onClose={closeModal} />}
    </section>
  );
}