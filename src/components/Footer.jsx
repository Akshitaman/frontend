export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-[#f3f4f2]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <span className="text-xl font-bold text-slate-800">The Tactile Scholar</span>
          <p className="text-sm text-slate-500 mt-2">
            © 2024 The Tactile Scholar Coaching. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 hover:text-[#475ba2] transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-[#475ba2] transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-[#475ba2] transition-colors" href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
