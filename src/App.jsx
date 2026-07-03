import { useEffect, useState } from 'react'
import './App.css'
import heroWhite from './assets/dreamstime_xxl_11185393_White240.jpg'
import slideOne from './assets/dreamstime_xxl_9064750_Wide5500.jpg'
import slideTwo from './assets/dreamstime_xxl_11185393_Black125.jpg'
import slideThree from './assets/dreamstime_xxl_73817519.jpg'

const SLIDES = [
  { src: slideOne, alt: 'The Mercy Seat landscape', eager: true },
  { src: slideTwo, alt: 'The Mercy Seat monochrome', eager: false },
  { src: slideThree, alt: 'The Mercy Seat horizon', eager: false },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % SLIDES.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const goToPrev = () => {
    setActiveSlide((previous) => (previous - 1 + SLIDES.length) % SLIDES.length)
  }

  const goToNext = () => {
    setActiveSlide((previous) => (previous + 1) % SLIDES.length)
  }

  const handleBlurCapture = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <main className="page">
      <nav className="nav">
        <div className="container">
          <a className="brand" href="/">
            The Mercy Seat
          </a>
        </div>
      </nav>

      <section className="parallax" style={{ backgroundImage: `url(${heroWhite})` }}>
        <div className="container">
          <div
            className="carousel"
            role="region"
            aria-label="Featured images carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={handleBlurCapture}
          >
            <button
              type="button"
              className="carousel-control prev"
              onClick={goToPrev}
              aria-label="Previous slide"
              aria-controls="hero-slides"
            >
              Prev
            </button>
            <div className="slides-window" id="hero-slides" aria-live="polite">
              <div className="slides-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {SLIDES.map((slide, index) => (
                  <figure
                    className="slide"
                    key={slide.src}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
                    aria-hidden={index !== activeSlide}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={slide.eager ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={slide.eager ? 'high' : 'auto'}
                      sizes="(max-width: 900px) 92vw, 1050px"
                    />
                    <figcaption>
                      <h2>The Mercy Seat</h2>
                      <p>Covering</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="carousel-control next"
              onClick={goToNext}
              aria-label="Next slide"
              aria-controls="hero-slides"
            >
              Next
            </button>
            <div className="carousel-dots" role="group" aria-label="Slide selector">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.src + index}
                  type="button"
                  className={index === activeSlide ? 'dot active' : 'dot'}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlide}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container narrow">
          <h3>EXODUS 25:22</h3>
          <p>
            And there I will meet with you, and I will speak with you from above the mercy seat.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h3>Approach My Soul The Mercy Seat</h3>
            <h4>- Sojourn Music</h4>
            <p>
              A soulful rendition of one of John Newton&apos;s Olney Hymns by Jamie Barnes of
              Sojourn Community Church.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=mqMcVKHLg4E" target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            </p>
          </div>
          <div>
            <iframe
              title="Approach My Soul The Mercy Seat"
              src="https://www.youtube.com/embed/mqMcVKHLg4E?feature=oembed"
              allow="encrypted-media"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container narrow">
          <h3>The Mercy Seat translated from the Hebrew word kapporeth</h3>
          <p>
            &quot;...the gold lid with two cherubim at the ends cover and create the space into
            which God would appear. This gold cover was placed on the Ark of the Covenant.&quot;
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Mercy_seat" target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
