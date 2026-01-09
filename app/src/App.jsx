import "./App.css";

function App() {
  const base = import.meta.env.BASE_URL; // GitHub Pages-safe paths

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[1100px] p-6 text-left">
        {/* HERO / HEADER */}
        <section className="animate-fade-in">
          {/* ✅ Removed rounded border + border styling from the header wrapper */}
          <div className="bg-white p-[18px] animate-fade-in delay-1">
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
                  {/* Primary button */}
                  <a
                    href="#"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg bg-[#111827] px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-white no-underline transition-all duration-200 hover:bg-[rgba(17,24,39,0.9)] hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
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

                  {/* Secondary button */}
                  <a
                    href="mailto:you@example.com"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg border border-gray-200 bg-white px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-[#111827] no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
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

        {/* GRID SECTION (BENTO GRID like your reference) */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-2 animate-fade-in delay-5">
          {/* Educational Background (vertical, LEFT side on md+) */}
          <div className="bento-card p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 animate-fade-in animation-delay-200 md:order-1">
            <h3 className="text-lg font-extrabold">Educational Background</h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>

            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">School / University</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum — degree, year, honors, etc.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">Certifications</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum — cert name, issuer, date.
                </p>
              </div>
            </div>
          </div>

          {/* About (horizontal, RIGHT side on md+) */}
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in md:order-2">
            <h2 className="text-xl font-extrabold">About</h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in md:order-3">
            <h2 className="text-xl font-extrabold">Tech Stack</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat velit at
              pellentesque luctus.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm">
                Lorem
              </span>
              <span className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm">
                Ipsum
              </span>
              <span className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm">
                Dolor
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in md:order-4">
            <h2 className="text-xl font-extrabold">Socials</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor
              in reprehenderit.
            </p>
            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #1
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #2
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #3
              </div>
            </div>
          </div>

          {/* Projects (full width row) */}
          <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-2 group animate-fade-in md:order-5">
            <h2 className="text-xl font-extrabold">Projects</h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem.
            </p>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="font-bold">Project Title</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum summary placeholder.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="font-bold">Project Title</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum summary placeholder.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="font-bold">Project Title</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum summary placeholder.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
