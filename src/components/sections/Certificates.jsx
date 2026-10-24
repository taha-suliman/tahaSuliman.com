import { useState } from 'react'; // أضفنا useState للتحكم في ظهور الصورة
import { useApp } from '../../context/AppContext';
import { useIntersection } from '../../hooks/useIntersection';
import CertificateCard from '../cards/CertificateCard';
import certificates from '../../data/certificates';

export default function Certificates() {
  const { t, theme } = useApp();
  const [ref, visible] = useIntersection();
  const isLight = theme === 'light';

  // State لتخزين الصورة التي سيتم عرضها بشكل كامل
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-24 relative ${isLight ? 'bg-[#f5f0eb]' : 'bg-[#080717]'}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-72 bg-[#3d1308]/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">
            {t.certificates.title}
          </h2>
          <p className={`font-body text-base mt-3 ${isLight ? 'text-[#1a0d0a]/60' : 'text-[#e2e0ff]/50'}`}>
            {t.certificates.subtitle}
          </p>
          <hr className="section-divider w-24 mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className={`transition-all duration-700 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelectedImg(cert.image)} // عند الضغط يفتح الصورة
            >
              <CertificateCard cert={cert} />
            </div>
          ))}
        </div>
      </div>

      {/* --- Overlay / Modal لعرض الشهادة بحجم كامل --- */}
      {/* --- نافذة العرض (Modal) للـ PDF أو الصور --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // عشان ما يقفل لما تضغط جوا الشهادة
          >
            {/* زر إغلاق واضح */}
            <button
              className="absolute top-2 right-4 z-10 text-black text-3xl font-bold hover:text-red-600"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>

            {/* التحقق: لو الملف PDF استخدم iframe، لو صورة استخدم img */}
            {selectedImg.endsWith('.pdf') ? (
              <iframe
                src={`${selectedImg}#toolbar=0`} // #toolbar=0 عشان تخفي الأدوات الزايدة لو حبيت
                className="w-full h-full"
                title="Certificate View"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-[#1a1a1a]">
                <img
                  src={selectedImg}
                  className="max-h-full max-w-full object-contain"
                  alt="Certificate"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}