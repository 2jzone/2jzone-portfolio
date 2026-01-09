import "./App.css";

function App() {
  const base = import.meta.env.BASE_URL; // GitHub Pages-safe paths

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[1100px] p-6 text-left">
        {/* HERO / HEADER */}
        <section className="animate-fade-in">
          <div className="rounded-2xl border border-gray-200 bg-white p-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.06)] animate-fade-in delay-1">
            <div className="flex items-center gap-6">
              <img
                className="h-40 w-40 flex-shrink-0 rounded-2xl object-cover bg-gray-100 animate-fade-in delay-2"
                src={`${base}jason-profile-pic-160.jpg`}
                srcSet={`${base}jason-profile-pic-160.jpg 160w, ${base}jason-profile-pic-320.jpg 320w, ${base}jason-profile-pic-480.jpg 480w`}
                sizes="160px"
                alt="Jason Angeles"
                width="160"
                height="160"
              />

              <div className="min-w-0 flex-1">
                <div className="animate-fade-in delay-2">
                  <h1 className="m-0 text-[34px] leading-[1.1] font-extrabold">
                    Jason Angeles
                  </h1>

                  <div className="mt-[6px] flex items-center gap-2 text-sm text-gray-700">
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/location.png`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="truncate">Metro Manila, Philippines</span>
                  </div>
                </div>

                <p className="mt-[14px] text-[18px] text-gray-900 animate-fade-in delay-3">
                  Software Developer - 4th Year BS Information Technology at National
                  University Philippines
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 animate-fade-in delay-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#111827] px-[14px] py-3 text-sm font-bold text-white no-underline transition-all duration-200 hover:bg-[rgba(17,24,39,0.9)] hover:-translate-y-0.5"
                  >
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/calendar.svg`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="text-white">Want to Schedule a Meeting?</span>
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/arrow.svg`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                  </a>

                  <a
                    href="mailto:you@example.com"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-[14px] py-3 text-sm font-bold text-[#111827] no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5"
                  >
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/email.png`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="text-black">Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REST OF PAGE */}
        <section className="mt-6 animate-fade-in delay-5">
          <h2 className="text-xl font-bold">About</h2>
          <p className="mt-2 text-base text-gray-700">
            Filler text — you’ll replace this with your bio.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
