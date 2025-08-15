{/* CSS dosyaları*/}
import './globals.css'
import './css_dosyalari/navigation_bar/navigationBar.css'
import './css_dosyalari/navigation_bar/navBarDropdown.css'

import './css_dosyalari/footer.css'
import 'react-datepicker/dist/react-datepicker.css'

import './css_dosyalari/ust_resim/ustResimAramaButonu.css'
import './css_dosyalari/ust_resim/ustResimYazi.css'
import './css_dosyalari/ust_resim/ustResim.css'
import './css_dosyalari/ust_resim/ustResimDestination.css'

import './css_dosyalari/alt_resim/altResim.css'
import './css_dosyalari/alt_resim/altResimYazi.css'
import './css_dosyalari/alt_resim/altResimİkonlar.css'

import './css_dosyalari/offer/offerYazisi.css'
import './css_dosyalari/offer/offerResimleri.css'

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        
        <header className="header">

          <div className="logo-text">
          <h1 className="myLogo">TRAVEL AGENCY</h1>
          </div>

          <nav>
          <ul className="nav-list">
              <li className="nav-item">Home</li>

              <li className="nav-item about-dropdown">
               Tours
              <ul className="about-dropdown-menu">
              <li>Domestıc Tours</li>
              <li>Internatıonal Tours</li>
              </ul>
              </li>
              
              <li className="nav-item about-dropdown">
              About Us
               <ul className="about-dropdown-menu">
               <li>Our Story</li>
               <li>Our Team</li>
               <li>Careers</li>
               </ul>
               </li>     
                        
              <li className="nav-item about-dropdown">
              Events
               <ul className="about-dropdown-menu">
               <li>Past Events</li>
               <li>Comıng Soon</li>
               </ul>
               </li>

              <li className="nav-item about-dropdown">
              Travel Blog
               <ul className="about-dropdown-menu">
               <li>Travel Tıps</li>
               <li>Photo Gallery</li>
               </ul>
               </li>

              <li className="nav-item about-dropdown">
              Discover
               <ul className="about-dropdown-menu">
               <li>Destınatıons </li>
               <li>Local Experıences</li>
               <li>Hıdden Gems</li>
               <li>Food & Cuısıne </li>
               </ul>
               </li>

              <li className="nav-item about-dropdown">
              Contact Us
               <ul className="about-dropdown-menu">
               <li>Phone Number</li>
               <li>Email</li>
               <li>Address</li>
               </ul>
               </li>
          </ul>
          </nav>

        </header>

        <main className="main-content">{children}</main>

        <footer className="custom-footer">
  <div className="footer-left">
    <p><i className="fas fa-map-marker-alt"></i> 888 Explorer Avenue, İzmir, Turkiye</p>
    <p><i className="fas fa-phone-alt"></i> +90 555 123 4567</p>
    <p><i className="fas fa-envelope"></i> info@travelagency.com</p>
    <p className="footer-copyright">© 2025 Defne Melis Batmaz. All rights reserved.</p>

  </div>

  <div className="footer-right">
    <h3>About the Company</h3>
    <p>We are passionate about crafting unforgettable travel experiences.  
       With global destinations and expert guidance, we turn dreams into journeys.  
       Explore the world with confidence and ease.  
       Your next adventure starts here.</p>

    <div className="social-icons">
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-linkedin-in"></i>
    </div>
  </div>

        </footer>


      </body>
    </html>
  )
}
