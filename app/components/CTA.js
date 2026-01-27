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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Ship?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
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