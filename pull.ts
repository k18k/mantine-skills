import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("./skills/mantine", { recursive: true });

const res = await fetch("https://mantine.dev/llms.txt");
const content = await res.text();

writeFileSync(
  "./skills/mantine/SKILL.md",
  [
    `---`,
    `name: mantine`,
    `description: >
  Full reference for Mantine UI library, including all components, hooks and utilities. Use this skill when you need to find information about any Mantine component or hook, or when you want to understand how to use a specific feature of the library.`,
    `---`,
    ``,
    content,
  ].join("\n"),
);
