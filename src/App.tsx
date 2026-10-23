import React from 'react'
import {
  author,
  stats,
  posts,
  evaluationSummary,
  certificateModules,
  reflectionQuote
} from './data'

const mono = { fontFamily: '"IBM Plex Mono", monospace' }

export function App() {
  return (
    <div className="bg-[#fafaf9] text-[#171f28] min-h-screen" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
      
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-[#e2e5e9] bg-[#fafaf9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-12 py-4">
          <div>
            <a href="#top" className="font-semibold text-base tracking-tight hover:text-[#0b5cad] transition-colors">
              {author.name}
            </a>
            <p className="text-xs text-[#5a6775]" style={mono}>
              NEMSU × Miles Computer Ventures
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-[#5a6775]">
            <a href="#journey" className="transition-colors hover:text-[#0b5cad]">Journey</a>
            <a href="#takeaways" className="transition-colors hover:text-[#0b5cad]">Takeaways</a>
            <a href="#credentials" className="transition-colors hover:text-[#0b5cad]">Credentials</a>
            <a href="#reflection" className="transition-colors hover:text-[#0b5cad]">Reflection</a>
            <a href={author.portfolioUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0b5cad]">Portfolio</a>
            <a href="#contact" className="transition-colors hover:text-[#0b5cad]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="mx-auto max-w-6xl px-6 sm:px-12 pt-20 pb-16">
        <p className="text-sm font-medium text-[#0b5cad]" style={mono}>
          {author.role} · {author.period}
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl sm:text-6xl font-semibold leading-[1.08] tracking-tight text-[#111822]">
          Seven weeks at Miles Computer Ventures, told one week at a time.
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#404e5d]">
          {author.bio}
        </p>

        {/* 4 Stats Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 border-t border-[#171f28] pt-6 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111822]" style={mono}>
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[#5a6775]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Journey Section */}
      <section id="journey" className="border-t border-[#e2e5e9]">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111822]">
              The journey
            </h2>
            <p className="mt-2 text-lg text-[#5a6775]">
              Seven weekly milestones that shaped the summer—from crimping network cables on day one to shipping 40 desktop units.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[#e2e5e9]">
            {posts.map((p, i) => (
              <article
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-[180px_1fr_260px] gap-8 lg:gap-12 py-12"
              >
                {/* Meta Column */}
                <div>
                  <p className="text-4xl font-semibold text-[#0b5cad]" style={mono}>
                    W{String(p.id).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-xs text-[#5a6775]" style={mono}>
                    {p.date} · {p.read}
                  </p>
                  <p className="mt-1 text-xs text-[#5a6775]">
                    Felt <span className="text-[#171f28] font-medium">{p.mood.toLowerCase()}</span>
                  </p>
                </div>

                {/* Content Column */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-[#111822]">
                    {p.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-[#404e5d]">
                    {p.excerpt}
                  </p>
                  {p.images.length > 0 && (
                    <div
                      className={
                        p.images.length === 1
                          ? 'pt-2'
                          : 'grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2'
                      }
                    >
                      {p.images.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${p.week} practicum — ${src.split('/').pop()?.replace(/^week_\d+_/, '').replace(/\.jpg$/i, '').replace(/_/g, ' ') ?? 'photo'}`}
                          className="w-full rounded-lg border border-[#e2e5e9] object-cover aspect-[4/3] bg-[#f0f2f5]"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                  <div className="space-y-3 text-[15px] sm:text-base leading-relaxed text-[#171f28] pt-1">
                    {p.body.map((t, j) => (
                      <p key={j}>{t}</p>
                    ))}
                  </div>
                </div>

                {/* Takeaway Card Column */}
                <aside className="self-start rounded-lg bg-[#ebf3fc] p-5 border border-[#d2e4f7]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0b5cad]" style={mono}>
                    Takeaway {i + 1} of {posts.length}
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-[#0c3b6d]">
                    "{p.lesson}"
                  </p>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Taking With Me (Takeaways) */}
      <section id="takeaways" className="bg-[#111822] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 px-6 sm:px-12 py-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              What I'm taking with me
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#9eacba]">
              The core rules from 324 hours on the workshop floor, for anyone starting an IT or computer science practicum.
            </p>
          </div>

          <ol className="divide-y divide-white/10">
            {posts.map((p) => (
              <li key={p.id} className="flex gap-4 sm:gap-6 py-4">
                <span className="w-10 shrink-0 pt-0.5 text-xs text-[#7dc0fb]" style={mono}>
                  W{String(p.id).padStart(2, '0')}
                </span>
                <span className="text-base sm:text-lg text-[#e6edf5] leading-snug">
                  {p.lesson}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Credentials & Evaluation Section */}
      <section id="credentials" className="border-t border-[#e2e5e9]">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111822]">
              Credentials & Evaluation
            </h2>
            <p className="mt-2 text-lg text-[#5a6775]">
              Official training completion and performance assessment from Miles Computer Ventures Corp.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Certificate Summary Card */}
            <div className="rounded-xl border border-[#e2e5e9] bg-white p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#f0f2f5] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0b5cad]" style={mono}>
                  Certificate of Training
                </span>
                <span className="text-xs text-[#5a6775]" style={mono}>
                  Aug 1, 2026
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111822]">
                  John Ivan Ariate Regaspi
                </h3>
                <p className="text-xs text-[#5a6775] mt-0.5">
                  Conducted at Miles Computer Ventures Corp., Davao City
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-medium text-[#5a6775] mb-2 uppercase" style={mono}>
                  Certified Modules:
                </p>
                <ul className="space-y-1.5 text-sm text-[#171f28]">
                  {certificateModules.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0b5cad]"></span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#f0f2f5] pt-4 text-xs text-[#5a6775] flex justify-between">
                <span>Signatories:</span>
                <span className="text-[#171f28] font-medium">Edison John Tayco & Rutheil Cabandez</span>
              </div>
            </div>

            {/* Performance Evaluation Card */}
            <div className="rounded-xl border border-[#e2e5e9] bg-white p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#f0f2f5] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0b5cad]" style={mono}>
                  Supervisor Evaluation
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded" style={mono}>
                  {evaluationSummary.verdict}
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-[#111822]" style={mono}>
                  {evaluationSummary.average}
                </span>
                <span className="text-sm text-[#5a6775]">
                  Score: {evaluationSummary.score}
                </span>
              </div>

              <div className="space-y-2 text-sm pt-1">
                <div>
                  <span className="text-xs text-[#5a6775] block uppercase font-mono">Identified Strengths:</span>
                  <span className="font-medium text-[#111822]">{evaluationSummary.strengths}</span>
                </div>
                <div>
                  <span className="text-xs text-[#5a6775] block uppercase font-mono">Growth Areas:</span>
                  <span className="font-medium text-[#111822]">{evaluationSummary.growthArea}</span>
                </div>
                <div>
                  <span className="text-xs text-[#5a6775] block uppercase font-mono">Mentor's Note:</span>
                  <span className="font-medium italic text-[#0b5cad]">"{evaluationSummary.mentorNote}"</span>
                </div>
              </div>

              <div className="border-t border-[#f0f2f5] pt-4 text-xs text-[#5a6775] flex justify-between">
                <span>Evaluator:</span>
                <span className="text-[#171f28] font-medium">{evaluationSummary.evaluator}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Personal Reflection Section */}
      <section id="reflection" className="border-t border-[#e2e5e9] bg-[#f5f6f8]">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0b5cad]" style={mono}>
            Personal Reflection
          </p>
          <blockquote className="mt-4 text-xl sm:text-2xl font-serif italic leading-relaxed text-[#171f28]">
            "{reflectionQuote}"
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-[#111822]">
            — John Ivan A. Regaspi
          </p>
          <p className="text-xs text-[#5a6775]">
            North Eastern Mindanao State University (NEMSU) · Practicum CS331
          </p>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="border-t border-[#e2e5e9]">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 py-20">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold tracking-tight text-[#111822]">
            Practicum complete. Ready for what comes next.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#5a6775]">
            Have an open software or hardware role, or want to discuss the training? Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${author.email}`}
              className="rounded-md bg-[#0b5cad] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#094a8d]"
            >
              Email {author.name}
            </a>
            <a
              href={author.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#171f28] px-6 py-3 text-sm font-medium text-[#171f28] transition-colors hover:bg-[#eaecee]"
            >
              View Portfolio
            </a>
            <a
              href="#top"
              className="rounded-md border border-[#171f28] px-6 py-3 text-sm font-medium text-[#171f28] transition-colors hover:bg-[#eaecee]"
            >
              Back to Top ↑
            </a>
          </div>

          <div className="mt-16 border-t border-[#e2e5e9] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5a6775]">
            <p>
              {author.name} · {author.role} · {author.institution}
            </p>
            <p style={mono}>
              CS331 Practicum Report · Supervised by Virgilio F. Tuga Jr., MSCS (CAR)
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
export default App
