import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

describe("Profile and Identity Verification", () => {
  test("Profile data contains accurate personal and educational credentials", async () => {
    // Read profile.ts directly
    const profileFile = fs.readFileSync("src/data/profile.ts", "utf8");
    assert.match(profileFile, /Pradeepkumar BC/, "Profile should have accurate name");
    assert.match(profileFile, /pradeepkumarbc138@gmail.com/, "Profile should have accurate email");
    assert.match(profileFile, /https:\/\/github\.com\/PRADEEPKUMARBC/, "Profile should have verified GitHub URL");
    assert.match(profileFile, /Davanagere, Karnataka, India/, "Profile should have accurate location");
  });

  test("Uploaded portrait and résumé files exist in public directory", () => {
    assert.ok(fs.existsSync("public/images/pradeepkumar.jpg"), "Portrait image must exist");
    assert.ok(fs.existsSync("public/documents/Pradeepkumar_BC_Resume.pdf"), "Resume PDF must exist");
    assert.ok(fs.existsSync("public/certificates/hackerrank_software_engineer_certificate.pdf"), "HackerRank Software Engineer PDF must exist");
    assert.ok(fs.existsSync("public/certificates/hackerrank_python_certificate.pdf"), "HackerRank Python PDF must exist");
  });
});

describe("Project Data Integrity", () => {
  test("All 5 verified projects from résumé exist with correct metadata", () => {
    const projectsFile = fs.readFileSync("src/data/projects.ts", "utf8");
    assert.match(projectsFile, /Credit Card Fraud Detection/);
    assert.match(projectsFile, /GreenCart — Grocery Delivery App/);
    assert.match(projectsFile, /Quick-GPT — AI Chat & Image Studio/);
    assert.match(projectsFile, /Smart Hospital & Vaidya Bandhu/);
    assert.match(projectsFile, /Smart Irrigation & Soil Telemetry/);
    assert.match(projectsFile, /https:\/\/github\.com\/PRADEEPKUMARBC\/Credit-Card-Fraud-Detection/, "Must link real Credit Card Fraud Detection repo");
  });
});

describe("Certifications Verification", () => {
  test("HackerRank certificates match real IDs and verification URLs", () => {
    const certsFile = fs.readFileSync("src/data/certifications.ts", "utf8");
    assert.match(certsFile, /6CF9D1277524/, "Must include verified Software Engineer Certificate ID");
    assert.match(certsFile, /6D4620133F33/, "Must include verified Python (Basic) Certificate ID");
    assert.match(certsFile, /https:\/\/www\.hackerrank\.com\/certificates\/6CF9D1277524/);
    assert.match(certsFile, /https:\/\/www\.hackerrank\.com\/certificates\/6D4620133F33/);
  });
});

describe("Experience & Education Data Integrity", () => {
  test("Experience records TechOrbit Python Programmer role", () => {
    const expFile = fs.readFileSync("src/data/experience.ts", "utf8");
    assert.match(expFile, /TechOrbit/);
    assert.match(expFile, /Python Programmer/);
    assert.match(expFile, /Oct 2026 – Present/);
  });

  test("Education records GM Institute of Technology, RTES, and Govt High School", () => {
    const eduFile = fs.readFileSync("src/data/education.ts", "utf8");
    assert.match(eduFile, /G M Institute of Technology/);
    assert.match(eduFile, /8\.5 \/ 10/);
    assert.match(eduFile, /RTES Pre-University College/);
    assert.match(eduFile, /97\.5%/);
    assert.match(eduFile, /Government High School Hulikatti/);
    assert.match(eduFile, /94\.0%/);
  });
});
