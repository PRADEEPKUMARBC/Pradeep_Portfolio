import { CertificationItem } from "@/types";

export const certificationsData: CertificationItem[] = [
  {
    id: "hackerrank-software-engineer",
    title: "Software Engineer Role Certification",
    issuer: "HackerRank",
    issueDate: "03 October, 2026",
    credentialId: "6CF9D1277524",
    verifyUrl: "https://www.hackerrank.com/certificates/6CF9D1277524",
    pdfUrl: "/certificates/hackerrank_software_engineer_certificate.pdf",
    type: "Role",
    badgeColor: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300"
  },
  {
    id: "hackerrank-python-basic",
    title: "Python (Basic) Skill Certification",
    issuer: "HackerRank",
    issueDate: "16 May, 2026",
    credentialId: "6D4620133F33",
    verifyUrl: "https://www.hackerrank.com/certificates/6D4620133F33",
    pdfUrl: "/certificates/hackerrank_python_certificate.pdf",
    type: "Skill",
    badgeColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300"
  },
  {
    id: "udemy-100-days-python",
    title: "100 Days of Code: Complete Python Bootcamp",
    issuer: "Udemy",
    issueDate: "Completed Curriculum",
    type: "Course",
    badgeColor: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300"
  }
];
