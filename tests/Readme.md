# 🎭 Playwright Automation Sandbox

A dedicated playground for learning, practicing, and refining E2E testing skills using Playwright. This repository serves as a personal laboratory for experimenting with browser automation, testing workflows, and debugging strategies.

---

## 🚀 Overview

The goal of this repository is to build a strong foundation in test automation through practical scenarios. It tracks progress from basic element interactions to advanced Playwright capabilities like dynamic assertions, custom configurations, and trace visualizer analysis.

---

## 📚 Key Concepts Practiced

- Locator Strategies: Writing resilient selectors (CSS, XPath, visual roles) and avoiding fragile selectors.
- Auto-Waiting & Actionability: Leveraging Playwright’s built-in wait mechanisms to eliminate test flakiness.
- Web-First Assertions: Utilizing async DOM polling (`expect().toContainText()`) rather than manual static text extraction.
- Test Configuration: Configuring custom timeouts, reporters (HTML, Trace Viewer), and multi-browser execution setups in `playwright.config.js`.
- Debugging Tools: Inspecting test runs with Playwright Inspector (`--debug`) and evaluating failed steps via Trace Viewer.

---

🛠️ Tech Stack

Language: JavaScript / Node.js / TypeScript
Test Runner: `@playwright/test`
Target Applications: Public QA practice environments (e.g., Rahul Shetty Academy, Google)

---

🏁 Getting Started

Prerequisites

[Node.js](https://nodejs.org/) (v16+ recommended)
