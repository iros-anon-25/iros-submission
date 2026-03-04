"use client";

import { useState } from "react";

const PAPER_TITLE = "Robot Planning and Situation Handling with Active Perception";
const CONFERENCE = "IROS 2025";

const BIBTEX = `@inproceedings{anonymous2025vaptamp,
  title     = {Robot Planning and Situation Handling with Active Perception},
  author    = {Anonymous},
  booktitle = {Proceedings of the IEEE/RSJ International Conference
               on Intelligent Robots and Systems (IROS)},
  year      = {2025},
  note      = {Anonymous submission}
}`;

function LinkButton({
  href,
  icon,
  label,
  disabled,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
}) {
  const cls =
    "flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all " +
    (disabled
      ? "border-gray-300 text-gray-400 cursor-not-allowed"
      : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white");
  return disabled ? (
    <span className={cls} title="Coming soon">
      {icon}
      {label}
    </span>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon}
      {label}
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{title}</h2>
      {children}
    </section>
  );
}

function Placeholder({
  label,
  aspect = "video",
}: {
  label: string;
  aspect?: "video" | "square" | "wide";
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
      ? "aspect-square"
      : "aspect-[3/1]";
  return (
    <div
      className={`${aspectClass} w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center`}
    >
      <span className="text-gray-400 text-sm font-mono">[{label}]</span>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  function copyBibtex() {
    navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ── HEADER ── */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          {CONFERENCE}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          {PAPER_TITLE}
        </h1>

        <p className="text-gray-500 text-base italic mb-8">
          Anonymous Authors &mdash; Under Review
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton
            href="#"
            disabled
            label="Paper"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 4h5v7h7v9H6V4z" />
              </svg>
            }
          />
          <LinkButton
            href="#video"
            label="Video"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            }
          />
          <LinkButton
            href="#"
            disabled
            label="Code"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            }
          />
        </div>
      </header>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── TEASER ── */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <Placeholder label="Teaser figure or video" aspect="wide" />
        <p className="text-center text-sm text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          <strong>VAP-TAMP</strong> is a TAMP framework that performs situation handling through{" "}
          <span className="underline">V</span>LM-based{" "}
          <span className="underline">A</span>ctive{" "}
          <span className="underline">P</span>erception,
          actively selecting viewpoints to disambiguate unforeseen situations and replanning with
          updated world state when action conditions are not met.
        </p>
      </section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── ABSTRACT ── */}
      <Section id="abstract" title="Abstract">
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-base leading-relaxed text-gray-700 border border-gray-100">
          <p>
            Current robots are capable of computing plans to accomplish complex tasks.
            However, real-world environments are inherently open and dynamic, and unforeseen
            situations frequently arise during plan execution, such as jamming doors and fallen
            objects on the floor. These situations may result from the robot&apos;s own action failures
            or from external disturbances, such as human activities. Detecting and handling such
            execution-time situations remains a significant challenge, limiting those robots&apos;
            ability to achieve long-term autonomy. In this paper, we develop a planning and
            situation-handling framework, called VAP-TAMP, that enables robots to actively perceive
            and address unforeseen situations during plan execution. VAP-TAMP leverages action
            knowledge to strategically prompt vision-language models for active view selection and
            situation assessment, while constructing and reasoning over scene graphs for integrated
            task and motion planning. We evaluated VAP-TAMP using service tasks in simulation and
            on a mobile manipulation platform.
          </p>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── METHOD ── */}
      <Section id="method" title="Method Overview">
        <p className="text-center text-gray-600 mb-8 text-base max-w-2xl mx-auto leading-relaxed">
          VAP-TAMP maintains a scene graph as the symbolic world state and uses VLMs for plan
          monitoring. When the current view is insufficient for situation assessment, the robot
          actively selects new viewpoints. Once the situation is identified, VAP-TAMP updates the
          scene graph and replans using integrated task and motion planning.
        </p>

        {/* Overview figure */}
        <img
          src="https://docs.google.com/drawings/d/1Xe8Uqj2lsfOZ4iCLSyxKKJJC6xO02GQLL752yRJ4_IE/export/png"
          alt="VAP-TAMP System Overview"
          className="w-full rounded-xl border border-gray-100 shadow-sm"
        />
        <p className="text-center text-sm text-gray-500 mt-3 italic mb-10">
          <strong>Figure 1: VAP-TAMP System Overview.</strong> Given RGB-D observations and a
          natural language goal, VAP-TAMP builds a 3D point cloud, extracts an instance memory
          and scene graph, and translates to PDDL for planning. During execution, preconditions
          are verified before each action and effects after, with uncertainty detection triggering
          active perception when needed.
        </p>

        {/* Sub-figures: Situation Handling + Active Perception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="text-center">
            <img
              src="https://docs.google.com/drawings/d/1ezrSE4fgXy_BYTNFtM8AtVuhm_MfNesHLCJv11SWkic/export/png"
              alt="Situation Handling"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-xs text-gray-500 mt-2 italic text-left">
              <strong>Figure 2:</strong> VAP-TAMP integrates robot perception with domain
              knowledge by formulating action preconditions and effects as VQA queries. Before
              executing the next action (left), preconditions are verified; after execution
              (right), expected effects are monitored. Violations trigger replanning.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://docs.google.com/drawings/d/1UwNrxvD0cLISPkdJcGuXCBhKOVWTdZBaBLGfMBr5YIc/export/png"
              alt="Active Perception"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-xs text-gray-500 mt-2 italic text-left">
              <strong>Figure 3:</strong> Active perception resolving visual ambiguity during
              predicate verification. (a) Initial observation with inconsistent VLM responses.
              (b) VLM suggests a better viewing direction. (c) Improved close-up view yields
              consistent responses, enabling confident verification and plan continuation.
            </p>
          </div>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── VIDEO ── */}
      <Section id="video" title="Video">
        <p className="text-center text-gray-600 mb-6 text-base">
          [Main results / demo video]
        </p>
        <Placeholder label="Embed video here — YouTube / Vimeo / hosted MP4" aspect="video" />
        <p className="text-center text-xs text-gray-400 mt-3">
          Replace the placeholder with an{" "}
          <code className="bg-gray-100 px-1 rounded">&lt;iframe&gt;</code> or{" "}
          <code className="bg-gray-100 px-1 rounded">&lt;video&gt;</code> tag.
        </p>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── RESULTS ── */}
      <Section id="results" title="Results">
        <p className="text-center text-gray-600 mb-8 text-base">
          [Summary sentence about your experimental results.]
        </p>

        <div className="overflow-x-auto mb-10">
          <div className="min-w-full bg-gray-50 rounded-xl border border-gray-200 p-6 text-center text-gray-400 text-sm font-mono">
            [Quantitative results table — e.g., comparison with baselines]
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Qualitative Results
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Scenario A", "Scenario B", "Scenario C", "Scenario D"].map((s) => (
            <div key={s} className="text-center">
              <Placeholder label={`Result — ${s}`} aspect="video" />
              <p className="text-xs text-gray-500 mt-2 italic">
                [{s}: caption here]
              </p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── BIBTEX ── */}
      <Section id="bibtex" title="BibTeX">
        <p className="text-center text-gray-500 text-sm mb-6">
          If you find this work useful, please cite:
        </p>
        <div className="relative">
          <pre className="bibtex-block">{BIBTEX}</pre>
          <button
            onClick={copyBibtex}
            className="absolute top-3 right-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-md transition-all"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="text-center text-xs text-gray-400 py-10 border-t border-gray-100 mt-8">
        Anonymous submission &mdash; {CONFERENCE} &mdash; Do not distribute.
      </footer>
    </main>
  );
}
