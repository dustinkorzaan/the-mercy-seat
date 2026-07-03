import './App.css'
import heroWhite from './assets/dreamstime_xxl_11185393_White240.jpg'
import slideOne from './assets/dreamstime_xxl_9064750_Wide5500.jpg'
import slideTwo from './assets/dreamstime_xxl_11185393_Black125.jpg'
import slideThree from './assets/dreamstime_xxl_73817519.jpg'

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="container">
          <a className="brand" href="#">
            The Mercy Seat
          </a>
        </div>
      </nav>

      <section className="parallax" style={{ backgroundImage: `url(${heroWhite})` }}>
        <div className="container">
          <div className="slides">
            <figure className="slide">
              <img src={slideOne} alt="The Mercy Seat landscape" />
              <figcaption>
                <h2>The Mercy Seat</h2>
                <p>Covering</p>
              </figcaption>
            </figure>
            <figure className="slide">
              <img src={slideTwo} alt="The Mercy Seat monochrome" />
              <figcaption>
                <h2>The Mercy Seat</h2>
                <p>Covering</p>
              </figcaption>
            </figure>
            <figure className="slide">
              <img src={slideThree} alt="The Mercy Seat horizon" />
              <figcaption>
                <h2>The Mercy Seat</h2>
                <p>Covering</p>
              </figcaption>
            </figure>
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
