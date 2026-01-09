import "./App.css";

function App() {
  return (
    <main className="page">
      {/* HERO / HEADER */}
      <section className="hero animate-fade-in">
        <div className="hero__card animate-fade-in delay-1">
          <div className="hero__row">
            <img
              className="hero__avatar animate-fade-in delay-2"
              src="/jason-profile-pic-160.jpg"
              srcSet="/jason-profile-pic-160.jpg 160w, /jason-profile-pic-320.jpg 320w, /jason-profile-pic-480.jpg 480w"
              sizes="160px"
              alt="Jason Angeles"
              width="160"
              height="160"
            />



            <div className="hero__content">
              <div className="hero__top animate-fade-in delay-2">
                <div className="hero__titleBlock">
                  <div className="hero__nameRow">
                    <h1 className="hero__name">Jason Angeles</h1>
                  </div>

                  <div className="hero__meta">
                    <img
                      className="icon"
                      src="src/assets/location.png"
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span>Metro Manila, Philippines</span>
                  </div>
                </div>
              </div>

              <p className="hero__tagline animate-fade-in delay-3">
                Software Developer - 4th Year BS Information Technology at National
                University Philippines
              </p>

              <div className="hero__actions animate-fade-in delay-4">
                <a
                  className="btn btn--primary inline-flex h-7 md:h-8 items-center rounded-lg px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  href="#"
                >
                  <img
                    className="icon"
                    src="/icons/calendar.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                  />
                  <span>Want to Schedule a Meeting?</span>
                  <img
                    className="icon"
                    src="/icons/arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                  />
                </a>


                <a
                  className="btn btn--secondary inline-flex h-7 md:h-8 items-center rounded-lg px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  href="mailto:you@example.com"
                >
                  <img
                    className="icon"
                    src="src/assets/email.png"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                  />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF PAGE */}
      <section className="content animate-fade-in delay-5">
        <h2>About</h2>
        <p>Filler text — you’ll replace this with your bio.</p>
      </section>
    </main>
  );
}

export default App;
