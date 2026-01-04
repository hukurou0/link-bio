/**
 * Design Philosophy: Neomorphism + Soft Minimalism
 * - Soft shadows and light for depth
 * - Neutral base with pastel accents
 * - Floating card design with breathing space
 * - Smooth, natural interactions
 * - Poppins for headlines, Inter for body
 */

import { Youtube, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4">
      {/* Main Container */}
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
            <img
              src="/images/owl-avatar.png"
              alt="フク"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            フク
          </h1>
          <p className="text-muted-foreground text-sm">
            AI技術にベットするエンジニア
          </p>
        </div>

        {/* Youtube Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">Youtube</h2>
          <a
            href="https://www.youtube.com/@engineer-tamariba"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full h-40 bg-white flex items-center justify-center p-6">
              <img
                src="/images/youtube-logo.png"
                alt="エンジニアのたまり場"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-2 py-3 bg-[#FFE4E6] text-[#BE123C]">
              <Youtube className="w-5 h-5" />
              <span className="font-medium text-sm">エンジニアのたまり場</span>
            </div>
          </a>
        </section>

        {/* SNS Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">SNS</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/huku_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <p className="text-xs text-[#525252]">@huku_developer</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Linkedin className="w-6 h-6 text-white" fill="white" />
                  </div>
                <p className="text-xs text-[#525252]">@福島康介</p>
              </div>
            </a>
          </div>
        </section>

        {/* 記事・資料 Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">記事・登壇資料</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* note */}
            <a
              href="https://note.com/huku_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src="/images/note-icon.ico"
                    alt="note"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">note記事</p>
              </div>
            </a>

            {/* SpeakerDeck */}
            <a
              href="https://speakerdeck.com/huku"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src="/images/speakerdeck-icon.png"
                    alt="SpeakerDeck"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">登壇資料</p>
              </div>
            </a>
          </div>
        </section>

        {/* アプリケーション Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">アプリケーション</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Vibe Planning */}
            <a
              href="https://vibe-planning.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src="/images/vibe-planning-icon.ico"
                    alt="Vibe Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">Vibe Planning</p>
              </div>
            </a>

            {/* Connect */}
            <a
              href="https://www.universitytask.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src="/images/connect-icon.ico"
                    alt="Connect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">Connect</p>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pb-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <div className="w-16 h-px bg-foreground/10 mx-auto mb-6"></div>
          <a
            href="https://x.com/huku_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-xs text-foreground/60">ご連絡はDMからお願いします</span>
          </a>
        </footer>
      </div>
    </div>
  );
}
