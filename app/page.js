import HeroSection from '../components/HeroSection'
import OffersSection from '../components/OffersSection'
import WhyChooseUs from '../components/WhyChooseUs'

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <OffersSection />
      <WhyChooseUs />
    </div>
  )
}
