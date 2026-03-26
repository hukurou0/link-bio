/**
 * Design Philosophy: Neomorphism + Soft Minimalism
 * - Soft shadows and light for depth
 * - Neutral base with pastel accents
 * - Floating card design with breathing space
 * - Smooth, natural interactions
 * - Poppins for headlines, Inter for body
 */

import { useState } from "react";
import { Youtube, Linkedin, ChevronDown, ChevronUp, Share2, X } from "lucide-react";

export default function Home() {
  const imageBase = `${import.meta.env.BASE_URL}images`;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  return (
    <div className="min-h-screen py-8 px-4 pb-28">
      {/* Main Container */}
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
            <img
              src={`${imageBase}/owl-avatar.png`}
              alt="フク"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            フク
          </h1>
          <div className="max-w-sm mx-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-white/80 shadow-[0_4px_12px_rgb(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgb(0,0,0,0.12)] hover:bg-white transition-all duration-200 border border-border/50"
              aria-expanded={isExpanded}
              aria-controls="profile-details"
              type="button"
            >
              <span className="text-foreground/80">AI技術にベットするエンジニア</span>
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-primary" />
                )}
              </div>
            </button>
            {isExpanded && (
              <div
                id="profile-details"
                className="mt-3 p-4 bg-white/50 rounded-xl shadow-[inset_0_2px_8px_rgb(0,0,0,0.06)] text-sm text-foreground/80 leading-relaxed animate-fade-in text-center"
                style={{ animationDuration: "0.2s" }}
              >
                <p className="mb-2">
                  ChatGPTの衝撃からAI技術へ注力し、株式会社OmlucにDifyリードエンジニアとして参画。事業立ち上げから売上1億円規模までの成長を技術面から牽引。
                </p>
                <p>
                  現在は、技術の適用領域そのものに関心を移し、医療分野でソフトウェア開発に携わる。
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Youtube Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">Youtube</h2>
          <a
            href="https://www.youtube.com/@engineer-tamariba"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-2xl overflow-hidden border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full h-40 bg-white flex items-center justify-center p-6">
              <img
                src={`${imageBase}/youtube-logo.png`}
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

        {/* コントリビュートOSS Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">コントリビュートOSS</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Dify */}
            <a
              href="https://github.com/langgenius/dify"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/dify-logo.png`}
                    alt="Dify"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70 font-medium">Dify</p>
              </div>
            </a>

            {/* GPT-OSS */}
            <a
              href="https://github.com/openai/gpt-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/openai-logo.png`}
                    alt="GPT-OSS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70 font-medium">GPT-OSS</p>
              </div>
            </a>
          </div>
        </section>

        {/* アプリケーション Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">アプリケーション</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* 定点観測 */}
            <a
              href="https://fixed-point-observation.hukuapp.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/fixed-point-observation-icon.svg`}
                    alt="定点観測"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">定点観測</p>
              </div>
            </a>

            {/* Vibe Planning */}
            <a
              href="https://vibe-planning.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/vibe-planning-icon.ico`}
                    alt="Vibe Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">Vibe Planning</p>
              </div>
            </a>

            {/* AI新聞 */}
            <a
              href="https://ai-news-paper.hukuapp.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/ai-news-paper-icon.png`}
                    alt="AI新聞"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">AI新聞</p>
              </div>
            </a>

            {/* Connect */}
            <a
              href="https://www.universitytask.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/connect-icon.ico`}
                    alt="Connect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">Connect</p>
              </div>
            </a>
          </div>
        </section>

        {/* 記事・資料 Section */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-sm font-medium mb-3 text-foreground/80">記事・登壇資料</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* note */}
            <a
              href="https://note.com/huku_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/note-icon.ico`}
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
              className="bg-card rounded-2xl p-4 border border-foreground/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-md">
                  <img
                    src={`${imageBase}/speakerdeck-icon.png`}
                    alt="SpeakerDeck"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-foreground/70">登壇資料</p>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pb-4 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          <div className="w-16 h-px bg-foreground/10 mx-auto mb-6"></div>
          <p className="text-xs text-foreground/50">ご連絡は右下のSNSからお願いします</p>
        </footer>
      </div>

      <div className="fixed right-5 bottom-5 md:right-[calc(50%-15rem)] z-50">
        <div className="relative flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/%E5%BA%B7%E4%BB%8B-%E7%A6%8F%E5%B3%B6-548b362a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white border border-foreground/10 text-[#0A66C2] shadow-[0_8px_24px_rgb(0,0,0,0.10)] hover:shadow-[0_12px_32px_rgb(0,0,0,0.14)] hover:border-[#0A66C2]/30 transition-all duration-300"
            style={{
              transform: isSocialMenuOpen ? "translate(-80px, -80px) scale(1)" : "translate(0, 0) scale(0.6)",
              opacity: isSocialMenuOpen ? 1 : 0,
              pointerEvents: isSocialMenuOpen ? "auto" : "none",
            }}
          >
            <Linkedin className="h-7 w-7" fill="currentColor" />
          </a>

          <a
            href="https://x.com/huku_developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white border border-foreground/10 text-foreground shadow-[0_8px_24px_rgb(0,0,0,0.10)] hover:shadow-[0_12px_32px_rgb(0,0,0,0.14)] hover:border-foreground/25 transition-all duration-300"
            style={{
              transform: isSocialMenuOpen ? "translate(-110px, -10px) scale(1)" : "translate(0, 0) scale(0.6)",
              opacity: isSocialMenuOpen ? 1 : 0,
              pointerEvents: isSocialMenuOpen ? "auto" : "none",
            }}
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <button
            type="button"
            aria-label={isSocialMenuOpen ? "SNSメニューを閉じる" : "SNSメニューを開く"}
            aria-expanded={isSocialMenuOpen}
            onClick={() => setIsSocialMenuOpen((open) => !open)}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-[0_8px_24px_rgba(29,78,216,0.35)] hover:shadow-[0_12px_32px_rgba(29,78,216,0.45)] hover:bg-blue-800 hover:scale-105 transition-all duration-300"
          >
            {isSocialMenuOpen ? <X className="h-6 w-6" /> : <Share2 className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  );
}
