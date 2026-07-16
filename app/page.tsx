"use client";

import { useState } from "react";

const PAPER_TITLE = "Robot Planning and Situation Handling with Active Perception";
const CONFERENCE = "IROS 2026";

const PAPER_URL = "https://arxiv.org/pdf/2604.26988";

const BIBTEX = `@article{oloo2026robot,
  title={Robot Planning and Situation Handling with Active Perception},
  author={Oloo, Austine and Altaweel, Zainab and Hayamizu, Yohei and Liu, Peiqi and Ding, Yan and Amiri, Saeid and Yang, Hao and Kaminski, Andy and Esselink, Chad and Paxton, Chris and others},
  journal={arXiv preprint arXiv:2604.26988},
  year={2026}
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
    "flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-base font-semibold transition-all " +
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
      <span className="text-gray-400 text-base font-mono">[{label}]</span>
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
        <span className="inline-block bg-blue-600 text-white text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          {CONFERENCE}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          {PAPER_TITLE}
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Austine Oloo, Zainab Altaweel, Yohei Hayamizu, Peiqi Liu, Yan Ding, Saeid Amiri,
          Hao Yang, Andy Kaminski, Chad Esselink, Chris Paxton, et&nbsp;al.
        </p>

        <p className="text-gray-500 text-base italic mb-8">
          Accepted to the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton
            href={PAPER_URL}
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
        <img
          src="/vap-tamp/figures/teaser.png"
          alt="Examples of unforeseen situations during execution"
          className="w-full rounded-xl border border-gray-100 shadow-sm"
        />
        <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Two examples of unforeseen situations during action execution.
          On the left, the robot attempted to navigate through a doorway — it was expected that the
          door would be fully open and passable, while the door was only half-open.
          On the right, the robot is cutting a lemon — it was expected that both lemon halves would
          remain in the plate, while one half had fallen outside.
        </p>
      </section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── ABSTRACT ── */}
      <Section id="abstract" title="Abstract">
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-lg leading-relaxed text-gray-700 border border-gray-100">
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
        <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
          VAP-TAMP maintains a scene graph as the symbolic world state and uses VLMs for plan
          monitoring. When the current view is insufficient for situation assessment, the robot
          actively selects new viewpoints. Once the situation is identified, VAP-TAMP updates the
          scene graph and replans using integrated task and motion planning.
        </p>

        {/* Overview figure */}
        <img
          src="/vap-tamp/figures/overview-hires.png"
          alt="VAP-TAMP System Overview"
          className="w-full rounded-xl border border-gray-100 shadow-sm"
        />
        <p className="text-center text-lg text-gray-500 mt-3 italic mb-10">
          <strong>VAP-TAMP System Overview.</strong> Given RGB-D observations and a
          natural language goal, VAP-TAMP builds a 3D point cloud, extracts an instance memory
          and scene graph, and translates to PDDL for planning. During execution, preconditions
          are verified before each action and effects after, with uncertainty detection triggering
          active perception when needed.
        </p>

        <div className="space-y-10 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">TAMP Planner</h3>
            <img
              src="/vap-tamp/figures/situation-handling-hires.png"
              alt="Situation Handling"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-lg text-gray-500 mt-3 italic">
              VAP-TAMP integrates robot perception with domain
              knowledge by formulating action preconditions and effects as VQA queries. Before
              executing the next action (left), preconditions are verified; after execution
              (right), expected effects are monitored. Violations trigger replanning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Perception</h3>
            <img
              src="/vap-tamp/figures/active-perception-hires.png"
              alt="Active Perception"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-lg text-gray-500 mt-3 italic">
              Active perception resolving visual ambiguity during
              predicate verification. (a) Initial observation with inconsistent VLM responses.
              (b) VLM suggests a better viewing direction. (c) Improved close-up view yields
              consistent responses, enabling confident verification and plan continuation.
            </p>
          </div>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── VIDEO ── */}
      <Section id="video" title="Project Videos">
        <div className="space-y-8">
          <div>
            <p className="text-lg text-gray-600 mb-3 font-medium">System Overview: A complete walkthrough of the VAP-TAMP framework — watch this first for a full understanding of our approach.</p>
            <video
              className="w-full rounded-lg shadow-md"
              controls
              preload="metadata"
            >
              <source src="/vap-tamp/videos/IROS26_3741_VI_i.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-3 font-medium">Halve a Lemon: The robot navigates to find a knife, returns to the table to halve a lemon, encounters an adversarial disturbance, and recovers to complete the task.</p>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src="https://drive.google.com/file/d/1YM_sx0-C2Gjhem2NH8Hbjt_0JasC54TL/preview"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-3 font-medium">Collect Firewood: The robot navigates to collect firewood and encounters a half-open door, detects the situation, and recovers to complete the task.</p>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src="https://drive.google.com/file/d/1TQmRD-XYekJUuRnm3jwyP5w7JCrsbTGa/preview"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── RESULTS ── */}
      <Section id="results" title="Results">
        <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
          We evaluated VAP-TAMP on service tasks in both simulation and on a real mobile manipulation
          platform. VAP-TAMP consistently outperforms baselines by actively detecting and recovering
          from unforeseen situations during plan execution.
        </p>

        <div className="space-y-8">
          <div>
            <img
              src="/vap-tamp/figures/success_rate-1.png"
              alt="Success rates by task"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-lg text-gray-500 mt-3 italic">
              Success rates by task. VAP-TAMP maintains consistent
              performance across all tasks, while baselines show larger variance.
            </p>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              VAP-TAMP achieves the highest success rate on every task, with particularly large
              gains on tasks involving navigation through doors and multi-step object rearrangement
              where unforeseen situations are most frequent.
            </p>
          </div>
          <div>
            <img
              src="/vap-tamp/figures/success_vs_time-1.png"
              alt="Success rate vs execution time"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-lg text-gray-500 mt-3 italic">
              Success rate vs. execution time.
            </p>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              Points closer to the top-left indicate better overall performance. VAP-TAMP achieves
              both the highest success rate and competitive execution time, demonstrating that active
              perception adds minimal overhead while substantially improving reliability.
            </p>
          </div>
          <div>
            <img
              src="/vap-tamp/figures/situation_distribution-1.png"
              alt="Distribution of situations across tasks"
              className="w-full rounded-xl border border-gray-100 shadow-sm"
            />
            <p className="text-lg text-gray-500 mt-3 italic">
              Distribution of situations across tasks.
            </p>
            <p className="text-lg text-gray-600 mt-2 leading-relaxed">
              Flows connect tasks (left) to situation types (right), with occurrence counts.
              Navigation and pick-and-place tasks trigger the widest variety of situations,
              while door-related situations are the most frequent across all tasks.
            </p>
          </div>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── BIBTEX ── */}
      <Section id="bibtex" title="BibTeX">
        <p className="text-center text-gray-500 text-base mb-6">
          If you find this work useful, please cite:
        </p>
        <div className="relative">
          <pre className="bibtex-block">{BIBTEX}</pre>
          <button
            onClick={copyBibtex}
            className="absolute top-3 right-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 text-sm px-3 py-1.5 rounded-md transition-all"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </Section>

      <hr className="border-t border-gray-200 my-8 max-w-4xl mx-auto" />

      {/* ── APPENDIX ── */}
      <AppendixSection />

      {/* ── FOOTER ── */}
      <footer className="text-center text-sm text-gray-400 py-10 border-t border-gray-100 mt-8">
        VAP-TAMP &mdash; Accepted to {CONFERENCE}
      </footer>
    </main>
  );
}

function PromptBox({ title, color, children }: { title: string; color: "gray" | "blue"; children: React.ReactNode }) {
  const border = color === "blue" ? "border-blue-200 bg-blue-50" : "border-gray-300 bg-gray-50";
  return (
    <div className={`rounded-lg border ${border} overflow-hidden mb-6`}>
      <div className={`px-4 py-2 text-sm font-bold uppercase tracking-wide ${color === "blue" ? "bg-blue-100 text-blue-700 border-b border-blue-200" : "bg-gray-100 text-gray-600 border-b border-gray-300"}`}>
        {title}
      </div>
      <div className="px-4 py-4 font-mono text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
}

function AppendixSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="appendix" className="max-w-4xl mx-auto px-6 py-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-6 py-4 transition-all group"
      >
        <span className="text-xl font-bold text-gray-800">Appendix: VLM Prompt Templates</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-6 space-y-10 text-gray-700 text-base leading-relaxed">
          <p>
            This appendix provides the complete set of prompt templates used for VLM queries in VAP-TAMP.
            The system uses VLMs for: (1) parsing natural language goals into PDDL specifications,
            (2) verifying predicates through paraphrased queries, (3) assessing view sufficiency,
            and (4) suggesting better viewpoints when needed. All prompts are designed to elicit
            binary or structured responses for reliable automated parsing.
          </p>

          {/* Goal Parsing */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A.1 Goal Parsing</h3>
            <p className="mb-4">
              Given a natural language instruction, the system uses the VLM to generate a PDDL goal
              specification based on the current scene graph and domain knowledge.
            </p>
            <PromptBox title="Goal Parsing Prompt" color="gray">
{`You are a robot task planner. Convert the natural language instruction into a goal state.

Instruction: {instruction}

Available objects: {object_list}

Available predicates: {predicate_list}

Output the goal as a list of predicates that should be true when the task is complete.

Format: predicate(object1, object2), predicate(object), ...

Goal:

Example:
  Input:  Instruction = "Put the cup in the cabinet"
          Objects = [cup, cabinet, table, plate]
          Predicates = [on(X,Y), inside(X,Y), holding(X), open(X)]
  Output: inside(cup, cabinet)`}
            </PromptBox>
          </div>

          {/* Predicate Verification */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A.2 Predicate Verification</h3>
            <p className="mb-4">
              Predicate verification uses <em>N</em>=5 semantically equivalent paraphrases to improve
              reliability. Each paraphrase is sent to the VLM with the current observation, and the
              final predicate value is determined by majority vote.
            </p>
            <PromptBox title="Predicate Query Template" color="gray">
{`[Image attached]

Analyze this image carefully.

Question: {paraphrased_question}

Respond with only "yes" or "no".`}
            </PromptBox>
          </div>

          {/* View Sufficiency */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A.3 View Sufficiency Check</h3>
            <p className="mb-4">
              When predicate verification produces consistent responses, the system queries the VLM to
              determine whether the current viewpoint provides adequate visual information. If
              insufficient, viewpoint selection is triggered.
            </p>
            <PromptBox title="View Sufficiency Prompt" color="gray">
{`[Image attached]

You are assessing whether this camera view provides sufficient information to answer the following question:

"{predicate_question}"

Consider:
  - Is the target object clearly visible?
  - Are relevant spatial relationships observable?
  - Is the view free from significant occlusion?

Respond "yes" if the current view is sufficient.
Respond "no" if a different viewpoint would provide clearer evidence.

Answer:`}
            </PromptBox>
          </div>

          {/* Viewpoint Selection */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A.4 Viewpoint Selection</h3>
            <p className="mb-4">
              When the view is insufficient, the system queries the VLM to suggest a better viewing
              direction. The robot navigates in the suggested direction and re-attempts predicate
              verification, repeating until the view is sufficient or the viewpoint budget <em>K</em> is exhausted.
            </p>
            <PromptBox title="Viewpoint Selection Prompt" color="gray">
{`[Image attached]

The robot is trying to verify: "{predicate_question}"

The current view does not provide sufficient visual evidence. Suggest which direction the robot should move to get a clearer view of the {target_object}.

Options: left, right, front, behind, above, closer

Choose the single best direction:`}
            </PromptBox>
          </div>

          {/* Paraphrase Templates */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A.5 Predicate Paraphrase Templates</h3>
            <p className="mb-6">
              For each predicate type in the domain, we define <em>N</em>=5 semantically equivalent
              phrasings. These reduce sensitivity to specific wording and enable majority voting for
              robust verification.
            </p>

            {[
              {
                title: "on(X, Y) — Object Resting on Surface",
                items: [
                  "Is the {X} on the {Y}?",
                  "Is the {X} resting on the {Y} surface?",
                  "Is the {X} placed on top of the {Y}?",
                  "Is the {X} positioned on the {Y}?",
                  "Is the {X} sitting on the {Y}?",
                ],
              },
              {
                title: "inside(X, Y) — Containment",
                items: [
                  "Is the {X} inside the {Y}?",
                  "Is the {X} contained within the {Y}?",
                  "Can you see the {X} stored inside the {Y}?",
                  "Is the {X} located within the {Y}?",
                  "Is the {X} placed inside the {Y}?",
                ],
              },
              {
                title: "holding(robot, X) — Gripper Grasping Object",
                items: [
                  "Is the robot holding the {X}?",
                  "Is the {X} grasped by the robot gripper?",
                  "Does the robot have the {X} in its gripper?",
                  "Is the robot's gripper gripping the {X}?",
                  "Is the {X} held by the robot?",
                ],
              },
              {
                title: "hand_empty — Empty Gripper",
                items: [
                  "Is the robot gripper empty?",
                  "Is the robot holding nothing?",
                  "Is the robot's gripper free and not grasping anything?",
                  "Are the robot's fingers not holding any object?",
                  "Is there nothing in the robot's gripper?",
                ],
              },
              {
                title: "open(X) — Door or Container State",
                items: [
                  "Is the {X} open?",
                  "Is the {X} in an open position?",
                  "Can you see inside the {X}, indicating it is open?",
                  "Is the {X} door/lid currently opened?",
                  "Is the interior of the {X} visible and accessible?",
                ],
              },
              {
                title: "reachable(X) — Object Accessibility",
                items: [
                  "Can the robot reach the {X}?",
                  "Is the {X} accessible to the robot arm?",
                  "Is there a clear path for the robot to reach the {X}?",
                  "Can the robot arm access the {X} without obstruction?",
                  "Is the {X} within the robot's reachable workspace?",
                ],
              },
              {
                title: "blocking(X, Y) — Obstruction",
                items: [
                  "Is the {X} blocking access to the {Y}?",
                  "Is the {X} obstructing the {Y}?",
                  "Does the {X} prevent reaching the {Y}?",
                  "Is the {X} in the way of the {Y}?",
                  "Would the {X} need to be moved to access the {Y}?",
                ],
              },
              {
                title: "clear(X) — Surface Unoccupied",
                items: [
                  "Is the top of the {X} clear?",
                  "Is there nothing on top of the {X}?",
                  "Is the {X} surface empty?",
                  "Is the top of the {X} free of objects?",
                  "Can an object be placed on the {X} without obstruction?",
                ],
              },
              {
                title: "inview(X) — Object Visibility",
                items: [
                  "Is the {X} visible in this image?",
                  "Can you see the {X} in this view?",
                  "Is the {X} present and visible in this image?",
                  "Does this image contain the {X}?",
                  "Is the {X} observable from this viewpoint?",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="mb-4">
                <h4 className="text-base font-semibold text-gray-700 mb-2">{title}</h4>
                <PromptBox title="" color="blue">
                  {items.map((q, i) => `${i + 1}. ${q}`).join("\n")}
                </PromptBox>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
