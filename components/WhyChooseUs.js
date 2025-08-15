import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <div className="alt-image-wrapper">
      <Image
        src="/arkaplan/altresim.jpg"
        alt="Alt görsel"
        width={1200}
        height={500}
        className="alt-featured-img"
      />

      <div className="alt-image-overlay">
        <p className="alt-line-1">WHY CHOOSE US?</p>
        <p className="alt-line-2">A BRAND NAME YOU CAN TRUST AND RELY ON</p>

        <div className="icon-section">
          <div className="icon-box">
            <i className="fas fa-suitcase icon-circle"></i>
            <p className="icon-text">AFFORDABLE PRICE GUARANTEE</p>
            <p className="icon-alt-text">
              We offer the best travel experiences at prices you can afford. No hidden fees, just pure adventure.
            </p>
          </div>
          <div className="icon-box">
            <i className="fas fa-globe icon-circle"></i>
            <p className="icon-text">WIDE VARIETY OF DESTINATIONS</p>
            <p className="icon-alt-text">
              From city escapes to tropical getaways, we’ve got it all. Your perfect destination is just a click away.
            </p>
          </div>
          <div className="icon-box">
            <i className="fas fa-thumbs-up icon-circle"></i>
            <p className="icon-text">HIGHLY QUALIFIED SERVICE</p>
            <p className="icon-alt-text">
              Our expert team is here to guide you every step of the journey. Excellence and care come standard with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
