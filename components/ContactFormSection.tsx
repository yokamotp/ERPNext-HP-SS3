import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <section id="contact-section" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="container-width section-padding">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お問い合わせ・資料請求
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ERPNextの導入に関するご質問やご相談、資料請求など、お気軽にお問い合わせください。
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">メール対応</h3>
              <p className="text-gray-600 text-sm">24時間受付、1営業日以内にご返信</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">お電話対応</h3>
              <p className="text-gray-600 text-sm">平日 9:00-18:00</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">オンライン相談</h3>
              <p className="text-gray-600 text-sm">Google Meet・Zoomに対応</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8" data-aos="fade-up" data-aos-delay="400">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}