import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08090D] px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-cyan">
          <span className="font-mono text-2xl font-bold">404</span>
        </div>

        <h1 className="text-3xl font-display font-bold text-white">
          Coordinates Not Found
        </h1>

        <p className="text-sm text-content-secondary leading-relaxed">
          The requested page route does not exist or has been shifted in the digital matrix.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-blue-600 text-white text-xs font-medium transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
