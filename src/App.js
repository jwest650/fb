import './App.css';

function App() {
  return (
    <div>
<header className="navbar">
      <div>
        <img src="./images/horizons-offices.png" alt="" className="img-fluid" />
      </div>
      <section className="img-con d-flex">
        <div>
          <img src="./images/Flag_of_Ghana.svg" alt="" className="img-fluid" />
        </div>
        <div>
          <img src="./images/flat-nigeria-flag.webp" alt="" className="img-fluid" />
        </div>
        <div>
          <img src="./images/Flag-Kenya.jpg" alt="" className="img-fluid" />
        </div>
      </section>
      <div>
        <a href="">About Us</a>
      </div>
    </header>
    <main>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/azzedine-rouichi-ZRIze8UXYGY-unsplash.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/alejandro-C3CF_u3kewI-unsplash.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/gary-ellis-VDkIcAMEzI4-unsplash.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </main>
    <h2 className="text-center">Plans</h2>
    <article className="card-deck">
      <div className="card">
        <img
          src="./images/slidebean-_6rmAEDLtiQ-unsplash.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5>Virtual offices</h5>
          <p>
            Our virtual offices Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat in quam commodi rem, praesentium
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="./images/jeff-sheldon-9dI3g8owHiI-unsplash.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5>Custom offices</h5>
          <p>
            Our custom offices Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi repellendus accusantium autem debitis
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="./images/arlington-research-Kz8nHVg_tGI-unsplash.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5>Service offices</h5>
          <p>
            Our service offices Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Harum iure nihil reprehenderit praesentium quae
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="./images/crew-7cPNnx13Qpo-unsplash.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5>Meeting rooms</h5>
          <p>
            Our meeting rooms Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellat commodi eaque recusandae magnam ad?
          </p>
        </div>
      </div>
    </article>

    <footer>
      <div>
        <h3>visit us in kanya</h3>
        <small>nairoi kenya</small>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis dolor vero ut, sit at.
        </h4>
      </div>

      <div>
        <h3>visit us in ghana</h3>
        <small>accra ghana</small>
        <h4>Lorem ipsum dolor sit amet .</h4>
      </div>

      <div>
        <h3>visit us in nigeria</h3>
        <small>lagos nigeria</small>
        <h4>Lorem ipsum dolor .</h4>
      </div>
    </footer>








    </div>
  );
}

export default App;
