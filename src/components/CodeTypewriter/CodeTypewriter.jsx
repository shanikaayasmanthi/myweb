import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const CODE_SEGMENTS = [
  { text: "// portfolio.js\n", type: "comment" },
  { text: "import ", type: "keyword" },
  { text: "{ SoftwareEngineer }", type: "variable" },
  { text: " from ", type: "keyword" },
  { text: '"./core"', type: "string" },
  { text: ";\n\n", type: "plain" },
  { text: "async ", type: "keyword" },
  { text: "function ", type: "keyword" },
  { text: "buildCareer", type: "variable" },
  { text: "() {\n", type: "plain" },
  { text: "  const ", type: "keyword" },
  { text: "engineer", type: "variable" },
  { text: " = ", type: "plain" },
  { text: "new ", type: "keyword" },
  { text: "SoftwareEngineer", type: "variable" },
  { text: "({\n", type: "plain" },
  { text: "    name", type: "property" },
  { text: ": ", type: "plain" },
  { text: '"Shanika Ayasmanthi"', type: "string" },
  { text: ",\n", type: "plain" },
  { text: "    role", type: "property" },
  { text: ": ", type: "plain" },
  { text: '"Software Engineer"', type: "string" },
  { text: ",\n  });\n\n", type: "plain" },
  { text: "  const ", type: "keyword" },
  { text: "stack", type: "variable" },
  { text: " = [", type: "plain" },
  { text: '"React"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"Node.js"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"Flutter"', type: "string" },
  { text: ", ", type: "plain" },
  { text: '"Firebase"', type: "string" },
  { text: "];\n\n", type: "plain" },
  { text: "  for ", type: "keyword" },
  { text: "(", type: "plain" },
  { text: "const ", type: "keyword" },
  { text: "tech ", type: "variable" },
  { text: "of ", type: "keyword" },
  { text: "stack", type: "variable" },
  { text: ") {\n", type: "plain" },
  { text: "    await ", type: "keyword" },
  { text: "engineer", type: "variable" },
  { text: ".learn(tech);\n  }\n\n", type: "plain" },
  { text: "  engineer", type: "variable" },
  { text: ".on(", type: "plain" },
  { text: '"challenge"', type: "string" },
  { text: ", (problem) => {\n", type: "plain" },
  { text: "    return ", type: "keyword" },
  { text: "engineer", type: "variable" },
  { text: ".solve(problem, {\n", type: "plain" },
  { text: "      approach", type: "property" },
  { text: ": ", type: "plain" },
  { text: '"clean, scalable code"', type: "string" },
  { text: ",\n    });\n  });\n\n", type: "plain" },
  { text: "  return ", type: "keyword" },
  { text: "engineer.deploy();\n", type: "plain" },
  { text: "}\n\n", type: "plain" },
  { text: "buildCareer", type: "variable" },
  { text: "().then(() => {\n", type: "plain" },
  { text: "  console", type: "variable" },
  { text: ".log(", type: "plain" },
  { text: '"Building impactful solutions..."', type: "string" },
  { text: ");\n});", type: "plain" },
];

const TYPE_COLORS = {
  keyword: "text-primary",
  variable: "text-sky-300",
  property: "text-cyan-300",
  string: "text-emerald-300",
  comment: "text-slate-500",
  plain: "text-gray-400",
};

const TYPING_SPEED = 20;
const HOLD_DURATION = 2000;
const DELETE_SPEED = 6;

const CodeTypewriter = () => {
  const chars = useMemo(
    () =>
      CODE_SEGMENTS.flatMap((seg) =>
        seg.text.split("").map((char) => ({ char, type: seg.type }))
      ),
    []
  );

  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (count < chars.length) {
        timeout = setTimeout(() => setCount((c) => c + 1), TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), HOLD_DURATION);
      }
    } else {
      if (count > 0) {
        timeout = setTimeout(() => setCount((c) => c - 1), DELETE_SPEED);
      } else {
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [count, phase, chars.length]);

  return (
    <pre className="w-full overflow-hidden font-mono text-xs leading-relaxed text-left whitespace-pre-wrap select-none md:text-sm">
      {chars.slice(0, count).map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className={TYPE_COLORS[item.type]}
          style={{
            textShadow: "0 0 12px currentColor",
            WebkitTextStroke: "0.5px rgb(var(--color-primary))",
          }}
        >
          {item.char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[16px] bg-primary ml-0.5 align-middle"
        style={{ boxShadow: "0 0 10px rgb(var(--color-primary))" }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </pre>
  );
};

export default CodeTypewriter;
