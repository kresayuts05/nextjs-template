/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">SCUDERIA FERRARI</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/logo.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Description</h2>
          <p>
            SCUDERIA FERRARI is absolutely the best F1 team in the whole history of motor racing. Its magnificient is unspeacale.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Drivers info</h2>
          <p>
            Charles Leclerc is th emost beautiful man alive. He is a very skillful driver. In my opinion the greatest racer in history.
           <br/>
            Sainz is NAH...
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/4b74226db14b1d8a57b0ef112e2c23d9.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/1c76896640ed47dd16234926299c8a18.jpg" alt="image01" />
          <img className="gallery-image" src="/6c32ad35f74acbafe2994b8f35d0c53e.jpg" alt="image01" />
          <img className="gallery-image" src="/e2675c25e3fdd8f7ca90013b2a0fca04.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/Charles.jpg" alt="avatar" />
            <h3 className="card-name">CHARLES LECLERC</h3>
            <p>
              Simply the best!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/max-verstappen.jpg" alt="avatar" />
            <h3 className="card-name">Max Verstapen</h3>
            <p>
              No comment!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/Lewis-Hamilton.jpg" alt="avatar" />
            <h3 className="card-name">Lewis Hamilton</h3>
            <p>
              Seven time World Champion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
