export default function OffersSection() {
  const offers = [
    {
      city: 'Prague',
      price: '$3.000',
      img: '/offers/offer1.jpg',
      desc: 'Stroll across the Charles Bridge and explore Old Town. Don’t miss the Astronomical Clock!',
    },
    {
      city: 'New York',
      price: '$5.000',
      img: '/offers/offer2.jpg',
      desc: 'Walk Central Park, see a Broadway show, and explore Times Square’s lights.',
    },
    {
      city: 'Paris',
      price: '$4.000',
      img: '/offers/offer3.jpg',
      desc: 'Savor croissants under the Eiffel Tower and stroll along the Seine river.',
    },
    {
      city: 'Tokyo',
      price: '$3.500',
      img: '/offers/offer4.jpg',
      desc: 'Experience vibrant nightlife, fresh sushi, and historic temples in one city.',
    },
    {
      city: 'Cairo',
      price: '$2.500',
      img: '/offers/offer5.jpg',
      desc: 'Visit the Pyramids of Giza and take a magical cruise along the Nile.',
    },
    {
      city: 'Rio de Janeiro',
      price: '$4.000',
      img: '/offers/offer6.jpg',
      desc: 'Feel the rhythm of samba, relax on Copacabana, and soar up Sugarloaf Mountain.',
    },
  ]

  return (
    <div className="offers-section">
      <div className="offers-text">
        <h2 className="offers-title">BEST OFFERS</h2>
        <p className="offers-subtitle">CHECK OUT OUR TOP-RATED TOURS</p>
      </div>

      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-img-container">
              <img src={offer.img} alt={offer.city} className="offer-img" />
              <div className="offer-hover-content">
                <h4>{offer.city}</h4>
                <p>{offer.desc}</p>
                <span className="arrow-link">→</span>
              </div>
            </div>
            <div className="offer-info">
              <span>{offer.city}</span>
              <span>{offer.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
