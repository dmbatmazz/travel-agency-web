'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import citiesData from '@/data/cities.json'

export default function HeroSection() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  // Tüm şehirleri tek diziye dönüştür
  const allCities = citiesData.flatMap(item => item.cities)

  // Harfe göre filtrele
  useEffect(() => {
    if (query.length === 0) {
      setSuggestions([])
    } else {
      const filtered = allCities.filter(city =>
        city.toLowerCase().startsWith(query.toLowerCase())
      )
      setSuggestions(filtered)
    }
  }, [query])

  return (
    <div className="image-wrapper">
      <Image
        src="/arkaplan/holiday-image.jpg"
        alt="Giriş görseli"
        width={700}
        height={450}
        className="featured-img"
      />

      <div className="image-text-overlay">
        <p className="text-line-1">LET US TAKE YOU TO YOUR</p>
        <p className="text-line-2">DREAM DESTINATIONS</p>

   <div className="unified-search-bar">
  <div className="autocomplete-wrapper">
    <input
      type="text"
      placeholder="Location"
      className="search-destination"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    {suggestions.length > 0 && (
      <ul className="autocomplete-dropdown">
        {suggestions.map((city, index) => (
          <li
            key={index}
            onClick={() => {
              setQuery(city)
              setSuggestions([]) // setTimeout gerek yok
            }}
            className="autocomplete-item"
          >
            {city}
          </li>
        ))}
      </ul>
    )}
  </div>

  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    selectsStart
    startDate={startDate}
    endDate={endDate}
    placeholderText="Start Date"
    className="search-date"
  />

  <DatePicker
    selected={endDate}
    onChange={(date) => setEndDate(date)}
    selectsEnd
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
    placeholderText="End Date"
    className="search-date"
  />

  <button className="search-button">Search</button>
</div>


      </div>
    </div>
  )
}
