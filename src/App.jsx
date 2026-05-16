import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function StarhelaInspiredLandingPage() {
  const earningMethods = [
    {
      icon: '💬',
      title: 'Chat Watch & Earn',
      description: 'Talk to lonely foreigners and earn for every conversation.',
    },
    {
      icon: '🎥',
      title: 'TikTok Tasks',
      description: 'Watch TikTok videos and get rewarded instantly.',
    },
    {
      icon: '📺',
      title: 'YouTube Earnings',
      description: 'Watch, like and engage with YouTube content.',
    },
    {
      icon: '📢',
      title: 'Ads Earnings',
      description: 'Earn daily by viewing advertisements.',
    },
    {
      icon: '📱',
      title: 'Reels Earnings',
      description: 'Watch Instagram and Facebook reels for rewards.',
    },
    {
      icon: '📋',
      title: 'Survey Challenge',
      description: 'Complete surveys and receive instant rewards.',
    },
    {
      icon: '⚽',
      title: 'Fixed Bets Tips',
      description: 'Access daily betting tips and predictions.',
    },
    {
      icon: '🎰',
      title: 'Spin & Win',
      description: 'Spin daily and unlock bonuses and cash rewards.',
    },
  ];
  const features = [
    {
      title: 'Earn Through Referrals',
      description:
        'Invite friends and grow your earnings with our smart affiliate system.',
    },
    {
      title: 'Instant Withdrawals',
      description:
        'Withdraw your earnings quickly and securely through integrated payment methods.',
    },
    {
      title: 'Daily Tasks',
      description:
        'Complete engaging tasks every day and increase your rewards effortlessly.',
    },
  ];

  const testimonialImages = [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  ];

  const withdrawalScreenshots = [
    {
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
      country: 'Kenya 🇰🇪',
      amount: 'KES 12,500',
      note:
        'Daily earnings withdrawn successfully through M-PESA.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop',
      country: 'Ghana 🇬🇭',
      amount: 'GHC 2,300',
      note:
        'Verified withdrawal processed instantly for active member.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop',
      country: 'Uganda 🇺🇬',
      amount: 'UGX 320,000',
      note:
        'Referral and chatting rewards paid successfully.',
    },
  ];

  const testimonials = [
    {
      name: 'Brian R.',
      text: 'This platform completely changed how I earn online. The dashboard is smooth and easy to use.',
    },
    {
      name: 'Sarah K.',
      text: 'The referral system works perfectly and withdrawals are very fast.',
    },
    {
      name: 'James M.',
      text: 'Clean interface, mobile friendly, and very professional design.',
    },
  ];

  const liveNotifications = [
    'Kevin from Nairobi just earned KES 2,300',
    'Sarah from Accra withdrew GHC 450',
    'James from Kampala completed TikTok tasks earned UGX 45,000',
    'Mercy from Tanzania earned TSH 25,000',
  ];

  const faqs = [
    {
      q: 'How do I start earning?',
      a: 'Create an account, complete tasks, and invite friends using your referral link.',
    },
    {
      q: 'How do withdrawals work?',
      a: 'Withdrawals are processed through integrated payment systems after reaching the minimum threshold.',
    },
    {
      q: 'Is the platform mobile friendly?',
      a: 'Yes. The entire platform is fully responsive across all devices.',
    },
    
  ];
const message = encodeURIComponent(
  "Hi Mentor Lux, I am __ and ready to earn"
);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-cyan-950 text-white overflow-hidden relative">

  {/* Animated Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

  {/* Floating Money Animation */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 text-5xl animate-bounce opacity-20">
      💸
    </div>

    <div className="absolute top-1/2 right-20 text-6xl animate-pulse opacity-20">
      💰
    </div>

    <div className="absolute bottom-20 left-1/3 text-5xl animate-bounce opacity-20">
      💵
    </div>
  </div>
      {/* Live Notification */}
      <div className="fixed top-24 right-6 z-50 hidden lg:block animate-pulse">
        <div className="bg-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-4 max-w-sm shadow-2xl">
          <p className="text-cyan-400 font-bold mb-1">
            🔥 Live Activity
          </p>

          <p className="text-gray-300 text-sm">
            {liveNotifications[0]}
          </p>
        </div>
      </div>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">
            Star<span className="text-cyan-400">Hela</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </nav>

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/30">
            Join Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-6">
              🚀 Modern Chatting Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Earn Online
              <span className="block text-cyan-400">The Smart Way</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              Build your income through chatting lonely people, video tasks, and a modern digital platform designed for speed, simplicity, and growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://starhela.com/register.php?ref=Luxiouske"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold transition shadow-2xl shadow-cyan-500/40 inline-block"
              >
                Join to chat 
              </a>

              <div className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-2xl font-semibold transition bg-white/5 text-left max-w-md">
                <p className="text-cyan-400 font-bold mb-3 text-lg">
                  🌍 Worldwide Earnings
                </p>

                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span>🇰🇪 Kenya • Earn KES 2,000+</span>
                    <span className="text-cyan-400">Karibu</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>🇬🇭 Ghana • Earn GHC 200+</span>
                    <span className="text-cyan-400">Akwaaba</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>🇺🇬 Uganda • Earn UGX 30,000+</span>
                    <span className="text-cyan-400">Tusanyuse okukulaba</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span>🇹🇿 Tanzania • Earn TSH 25,000+</span>
                    <span className="text-cyan-400">Karibu Sana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Total Earnings</p>
                  <h2 className="text-4xl font-black mt-2">KES 195,000</h2>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl">
                  💰
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Chatting Income</span>
                    <span className="text-cyan-400 font-bold">+ KES 45,000</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-4/5 bg-cyan-400 rounded-full" />
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Task Completion</span>
                    <span className="text-green-400 font-bold">+ KES 87,500</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/5 bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Social Platforms */}
<section className="py-20 px-6 relative z-10">
  <div className="max-w-7xl mx-auto text-center">

    <div className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6 border border-cyan-500/20">
      Social Earnings Platforms
    </div>

    <h2 className="text-4xl md:text-6xl font-black mb-6">
      Earn Through Popular Platforms
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
      Connect, engage and earn daily through social media tasks and chatting opportunities.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* TikTok */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-pink-500 transition duration-300 hover:-translate-y-2">
        <div className="w-20 h-20 rounded-2xl bg-pink-500/10 flex items-center justify-center text-5xl mx-auto mb-6">
          <FaTiktok />
        </div>

        <h3 className="text-2xl font-black mb-4">
          TikTok Tasks
        </h3>

        <p className="text-gray-400 mb-6">
          Watch videos, engage with creators and earn rewards instantly.
        </p>

        <a
          href="https://starhela.com/register.php?ref=Luxiouske"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-xl font-bold inline-block transition"
        >
          Start TikTok Earnings
        </a>
      </div>

      {/* YouTube */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300 hover:-translate-y-2">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center text-5xl mx-auto mb-6 text-red-500">
          <FaYoutube />
        </div>

        <h3 className="text-2xl font-black mb-4">
          YouTube Earnings
        </h3>

        <p className="text-gray-400 mb-6">
          Watch, subscribe and interact with trending YouTube content.
        </p>

        <a
          href="https://starhela.com/register.php?ref=Luxiouske"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-xl font-bold inline-block transition"
        >
          Start YouTube Tasks
        </a>
      </div>

      {/* Instagram */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
        <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center text-5xl mx-auto mb-6 text-pink-400">
          <FaInstagram />
        </div>

        <h3 className="text-2xl font-black mb-4">
          Instagram Reels
        </h3>

        <p className="text-gray-400 mb-6">
          Earn by watching reels and engaging with trending posts.
        </p>

        <a
          href="https://starhela.com/register.php?ref=Luxiouske"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-xl font-bold inline-block transition"
        >
          Start Instagram Earnings
        </a>
      </div>

      {/* Chat Earnings */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-5xl mx-auto mb-6">
          💬
        </div>

        <h3 className="text-2xl font-black mb-4">
          Chat & Earn
        </h3>

        <p className="text-gray-400 mb-6">
          Chat with foreigners and earn daily through conversations.
        </p>

        <a
          href="https://starhela.com/register.php?ref=Luxiouske"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold inline-block transition"
        >
          Start Chatting
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Features */}
            {/* Ways To Earn */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6 border border-cyan-500/20">
            Multiple Income Streams
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ways To Earn Online Daily
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
            Use your smartphone to complete simple online tasks and earn daily from anywhere.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {earningMethods.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 text-left transition hover:-translate-y-2 duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <a
                  href="https://starhela.com/register.php?ref=Luxiouske"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold transition"
                >
                  Start Earning
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Trusted By Thousands
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Thousands of users are already earning daily through referrals, tasks, and rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">50K+</h3>
              <p className="text-gray-300 text-lg">Active Members</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">KES 3M+</h3>
              <p className="text-gray-300 text-lg">Paid Out</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">24/7</h3>
              <p className="text-gray-300 text-lg">Support System</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-green-400 font-bold mb-3">Recent Withdrawal</p>
              <h3 className="text-2xl font-black mb-3">KES 2,500</h3>
              <p className="text-gray-400">Kevin from Nairobi withdrew successfully.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-green-400 font-bold mb-3">Recent Withdrawal</p>
              <h3 className="text-2xl font-black mb-3">GHC 2,000</h3>
              <p className="text-gray-400">Mercy from Accra earned through Chatting.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-green-400 font-bold mb-3">Recent Earnings</p>
              <h3 className="text-2xl font-black mb-3">UGX 31,200</h3>
              <p className="text-gray-400">Brian from Uganga earned today.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6 border border-cyan-500/20">
            Platform Features
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Users Love Our Platform
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            A modern ecosystem built to help users grow online income efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-5xl font-black text-cyan-400 mb-3">50K+</h3>
            <p className="text-gray-400">Active Users</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-5xl font-black text-cyan-400 mb-3">KES 8M+</h3>
            <p className="text-gray-400">Paid To Members</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-5xl font-black text-cyan-400 mb-3">24/7</h3>
            <p className="text-gray-400">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
            {/* Chat Earning Preview */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6 border border-cyan-500/20">
              Live Chat Earnings
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Earn By Chatting With Foreigners
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Users interact through simple conversations and earn rewards for engagement, replies, and active participation.
            </p>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                    alt="Foreign user"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-bold text-cyan-400 mb-1">James • USA</p>
                  <p className="text-gray-300">
                    Hey 👋 I enjoyed our conversation today.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 ml-10">
                <p className="text-white">
                  Thanks 😊 Glad to connect with you.
                </p>

                <p className="text-green-400 font-bold mt-3">
                  +KES 350 Earned
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Chatting online"
                className="rounded-3xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawal Proofs */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Withdrawal Proofs
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
            Real earning screenshots and payment confirmations from active members.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {withdrawalScreenshots.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <p className="text-cyan-400 font-bold text-lg mb-2">
                      {item.country}
                    </p>

                    <h3 className="text-3xl font-black mb-2">
                      {item.amount}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What Users Say
          </h2>

          <p className="text-gray-400 mb-16">
            Trusted by thousands of users across different regions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left"
              >
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={testimonialImages[index]}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border border-cyan-400/30"
                  />

                  <div className="font-bold text-cyan-400 text-lg">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400">
              Everything you need to know about the platform.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 rounded-[40px] p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready To Join Via Referral?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of users building online income using our powerful referral and task ecosystem.
          </p>

          <a
            href="https://starhela.com/register.php?ref=Luxiouske"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-5 rounded-2xl font-black text-lg transition shadow-2xl shadow-cyan-500/40 inline-block"
          >
            Join Starhela Now
          </a>
        </div>
      </section>

      {/* Footer */}
   
{/* Floating Contact Buttons */}
<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

  {/* WhatsApp (supports prefilled message) */}
  <a
    href={`https://wa.me/254743991974?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"
  >
    <FaWhatsapp />
  </a>

  {/* Telegram (supports prefilled message) */}
  <a
    href={`https://t.me/share/url?url=&text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"
  >
    <FaTelegramPlane />
  </a>

  {/* Messenger (limited: uses ref, not true message prefill) */}
  <a
    href="https://m.me/LuxiousKe?ref=earn_join"
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"
  >
    <FaFacebookMessenger />
  </a>
</div>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500">
        <p>© 2026 StarHela. All rights reserved.</p>
      </footer>
    </div>
  );
}
