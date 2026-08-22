<?php
/**
 * Naveed Showkat Malik - Executive Personal Portfolio
 * Performance Marketing & Business Growth Leader
 * 
 * Technology: PHP 8+, Tailwind CSS 3, HTML5, Vanilla JS, FontAwesome 6
 * Location: c:\xampp\htdocs\immnaveed\portfolio\portfolio.php
 */

// Form Submission Handling
$formStatus = null;
$formMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'contact_submit') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $budget = filter_input(INPUT_POST, 'budget', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $inquiry = [
            'timestamp' => date('Y-m-d H:i:s'),
            'name' => $name,
            'email' => $email,
            'phone' => $phone ?? 'N/A',
            'service' => $service ?? 'General Inquiry',
            'budget' => $budget ?? 'Not Specified',
            'message' => $message ?? ''
        ];

        $logDir = __DIR__ . '/data';
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        $logFile = $logDir . '/inquiries.json';
        $existing = [];
        if (file_exists($logFile)) {
            $existing = json_decode(file_get_contents($logFile), true) ?: [];
        }
        $existing[] = $inquiry;
        file_put_contents($logFile, json_encode($existing, JSON_PRETTY_PRINT));

        $formStatus = 'success';
        $formMessage = 'Thank you, ' . htmlspecialchars($name) . '! Your consultation inquiry has been received. Naveed will get back to you within 24 hours.';
    } else {
        $formStatus = 'error';
        $formMessage = 'Please provide a valid name and email address to proceed.';
    }
}
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naveed Showkat Malik | Performance Marketing & Business Growth Professional</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Official Portfolio of Naveed Showkat Malik — Performance Marketing, Paid Media (Meta/Google Ads), Lead Generation, Brand Building, and Business Growth Leader with MBA + B.Tech credentials.">
    <meta name="keywords" content="Naveed Showkat Malik, Performance Marketing Consultant, Business Growth Leader, Meta Ads Specialist, Lead Generation, Srinagar, Digital Transformation">
    <meta name="author" content="Naveed Showkat Malik">

    <!-- Open Graph / Social Media Meta -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Naveed Showkat Malik | Performance Marketing & Business Growth Leader">
    <meta property="og:description" content="Connecting business objectives with high-ROI digital marketing execution, lead generation, client acquisition, and technology solutions.">
    <meta property="og:site_name" content="Naveed Showkat Malik Portfolio">

    <!-- Favicon / Monogram -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23041E42%22/><text y=%2265%22 x=%2250%22 font-size=%2245%22 font-weight=%22900%22 fill=%22%2314B8C4%22 text-anchor=%22middle%22 font-family=%22system-ui%22>NM</text></svg>">

    <!-- Tailwind CSS 3 CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        navy: {
                            950: '#031730',
                            900: '#041E42',
                            850: '#05244C',
                            800: '#082852',
                            750: '#0B3060',
                            700: '#143B6E',
                        },
                        teal: {
                            400: '#00D4E0',
                            500: '#14B8C4',
                            600: '#0E8A94',
                            700: '#0B6870',
                        },
                        orange: {
                            400: '#FFA843',
                            500: '#F7931E',
                            600: '#D97A10',
                            700: '#B45309',
                        }
                    },
                    fontFamily: {
                        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 5s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-8px)' },
                        }
                    }
                }
            }
        }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- FontAwesome 6.5.1 CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

    <style>
        /* Custom Bespoke Styles - Cambridge Design System */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #031730;
            color: #FFFFFF;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        .font-display {
            font-family: 'Plus Jakarta Sans', sans-serif;
            letter-spacing: -0.03em;
        }

        /* Blueprint Grid Pattern */
        .bg-grid-blueprint {
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
            background-size: 4rem 4rem;
        }

        /* Gradients */
        .text-gradient-teal {
            background: linear-gradient(135deg, #14B8C4 0%, #00D4E0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .text-gradient-orange {
            background: linear-gradient(135deg, #F7931E 0%, #FFA843 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Decorative Teal Lines */
        .teal-divider-line {
            width: 60px;
            height: 4px;
            border-radius: 9999px;
            background: linear-gradient(to right, #14B8C4, transparent);
            margin: 0.75rem 0 1.25rem 0;
        }

        .teal-divider-line-center {
            width: 60px;
            height: 4px;
            border-radius: 9999px;
            background: linear-gradient(to right, #14B8C4, transparent);
            margin: 0.75rem auto 1.25rem auto;
        }

        /* Button Styles */
        .btn-orange {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #F7931E 0%, #D97A10 100%);
            color: #FFFFFF;
            font-size: 0.875rem;
            font-weight: 700;
            padding: 0.875rem 1.625rem;
            border-radius: 1rem;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 10px 25px -5px rgba(247, 147, 30, 0.35);
        }
        .btn-orange:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 30px -5px rgba(247, 147, 30, 0.45);
        }

        .btn-teal {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #14B8C4 0%, #0E8A94 100%);
            color: #FFFFFF;
            font-size: 0.875rem;
            font-weight: 700;
            padding: 0.625rem 1.25rem;
            border-radius: 0.75rem;
            transition: all 0.2s ease;
            box-shadow: 0 8px 20px -4px rgba(20, 184, 196, 0.35);
        }
        .btn-teal:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 25px -4px rgba(20, 184, 196, 0.45);
        }

        .btn-white {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: #FFFFFF;
            color: #041E42;
            font-size: 0.875rem;
            font-weight: 700;
            padding: 0.875rem 1.5rem;
            border-radius: 1rem;
            transition: all 0.2s ease;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .btn-white:hover {
            background: #F8FAFC;
            transform: translateY(-2px);
        }

        /* Pill Badges */
        .badge-teal {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            background: rgba(20, 184, 196, 0.12);
            color: #14B8C4;
            border: 1px solid rgba(20, 184, 196, 0.3);
        }

        .badge-navy {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            background: rgba(4, 30, 66, 0.9);
            color: #14B8C4;
            border: 1px solid rgba(20, 184, 196, 0.35);
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 7px;
        }
        ::-webkit-scrollbar-track {
            background: #031730;
        }
        ::-webkit-scrollbar-thumb {
            background: #0E8A94;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #14B8C4;
        }

        /* Printable Resume Styles */
        @media print {
            body {
                background: #ffffff !important;
                color: #000000 !important;
            }
            .no-print {
                display: none !important;
            }
            .print-only {
                display: block !important;
            }
        }
    </style>
</head>
<body class="bg-[#031730] text-slate-100 selection:bg-[#14B8C4] selection:text-[#031730] antialiased relative min-h-screen">

    <!-- Global Background Ambient Glows -->
    <div class="fixed top-0 left-1/4 w-96 h-96 bg-[#14B8C4]/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
    <div class="fixed bottom-10 right-1/4 w-[30rem] h-[30rem] bg-[#0E8A94]/20 rounded-full blur-[160px] pointer-events-none -z-10"></div>
    <div class="fixed top-1/2 left-0 w-80 h-80 bg-[#F7931E]/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

    <!-- 1. Top Urgent / Availability Bar -->
    <header class="no-print bg-[#041E42]/95 border-b border-slate-700/60 text-xs py-2.5 px-4 sm:px-8 sticky top-0 z-50 backdrop-blur-md">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div class="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
                <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#14B8C4]/15 border border-[#14B8C4]/30 text-[#14B8C4] text-[11px] font-semibold">
                    <span class="w-2 h-2 rounded-full bg-[#14B8C4] animate-ping"></span>
                    Available for Q3/Q4 Performance &amp; Growth Retainers
                </span>
                <span class="text-slate-500 hidden md:inline">•</span>
                <span class="text-slate-300 hidden md:inline">
                    <i class="fa-solid fa-location-dot text-[#F7931E] mr-1"></i> Srinagar, J&amp;K (Remote Worldwide)
                </span>
            </div>

            <div class="flex items-center gap-4 text-[11px] font-medium text-slate-300">
                <a href="tel:+917006113317" class="hover:text-[#14B8C4] transition-colors flex items-center gap-1.5">
                    <i class="fa-solid fa-phone text-[#14B8C4]"></i> +91 7006113317
                </a>
                <span class="text-slate-600">|</span>
                <a href="mailto:naveedshowkatmalik@gmail.com" class="hover:text-[#14B8C4] transition-colors flex items-center gap-1.5">
                    <i class="fa-solid fa-envelope text-[#14B8C4]"></i> naveedshowkatmalik@gmail.com
                </a>
                <span class="text-slate-600 hidden sm:inline">|</span>
                <a href="https://linkedin.com/in/naveedshowkatofficial" target="_blank" rel="noopener noreferrer" class="hover:text-[#14B8C4] transition-colors hidden sm:flex items-center gap-1.5">
                    <i class="fa-brands fa-linkedin text-sky-400"></i> LinkedIn
                </a>
            </div>
        </div>
    </header>

    <!-- 2. Main Executive Navigation -->
    <nav class="no-print sticky top-[39px] z-40 bg-[#041E42]/90 backdrop-blur-xl border-b border-slate-700/60 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
            
            <!-- Brand Logo / Monogram -->
            <a href="#hero" class="flex items-center gap-3 group">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#14B8C4] to-[#0E8A94] p-0.5 shadow-lg shadow-[#14B8C4]/20 group-hover:scale-105 transition-transform duration-300">
                    <div class="w-full h-full bg-[#031730] rounded-[10px] flex items-center justify-center">
                        <span class="text-lg font-black text-[#14B8C4] tracking-tighter">NM</span>
                    </div>
                </div>
                <div>
                    <span class="text-base font-bold text-white tracking-tight group-hover:text-[#14B8C4] transition-colors block font-display">
                        Naveed Showkat Malik
                    </span>
                    <span class="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                        Performance Marketing &amp; Growth Leader
                    </span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
                <a href="#about" class="hover:text-[#14B8C4] transition-colors py-1">About</a>
                <a href="#expertise" class="hover:text-[#14B8C4] transition-colors py-1">Core Expertise</a>
                <a href="#experience" class="hover:text-[#14B8C4] transition-colors py-1">Experience</a>
                <a href="#achievements" class="hover:text-[#14B8C4] transition-colors py-1">Key Impact</a>
                <a href="#tech" class="hover:text-[#14B8C4] transition-colors py-1">Tools &amp; Tech</a>
                <a href="#education" class="hover:text-[#14B8C4] transition-colors py-1">Education</a>
                <a href="#calculator" class="hover:text-[#14B8C4] transition-colors py-1">ROI Calculator</a>
                <a href="#contact" class="hover:text-[#14B8C4] transition-colors py-1">Contact</a>
            </div>

            <!-- Right Header Actions -->
            <div class="flex items-center gap-3">
                <button onclick="openResumeModal()" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#082852] hover:bg-[#0B3060] text-xs font-bold text-slate-200 border border-slate-700/80 transition-all shadow-sm cursor-pointer">
                    <i class="fa-solid fa-file-invoice text-[#14B8C4]"></i>
                    <span class="hidden sm:inline">View Resume</span>
                </button>

                <a href="#contact" class="btn-orange text-xs py-2 px-4 rounded-xl uppercase tracking-wider">
                    <span>Consultation</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </a>

                <!-- Mobile Menu Button -->
                <button id="mobileMenuBtn" class="lg:hidden p-2 rounded-xl bg-[#082852] text-slate-300 hover:text-white">
                    <i class="fa-solid fa-bars text-base"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div id="mobileMenu" class="hidden lg:hidden border-t border-slate-700/60 bg-[#041E42]/95 px-6 py-4 space-y-3 text-sm font-semibold">
            <a href="#about" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">About</a>
            <a href="#expertise" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Core Expertise</a>
            <a href="#experience" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Experience &amp; Roles</a>
            <a href="#achievements" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Key Impact &amp; Achievements</a>
            <a href="#tech" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Tools &amp; Tech Stack</a>
            <a href="#education" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Education &amp; Certifications</a>
            <a href="#calculator" class="block text-slate-300 hover:text-[#14B8C4] py-1" onclick="toggleMobileMenu()">Growth ROI Calculator</a>
            <a href="#contact" class="block text-[#F7931E] font-bold py-1" onclick="toggleMobileMenu()">Schedule Consultation</a>
        </div>
    </nav>

    <!-- Notification Toasts (PHP Backend Alert) -->
    <?php if ($formStatus): ?>
    <div class="no-print fixed bottom-6 right-6 z-50 max-w-md animate-bounce">
        <div class="p-4 rounded-xl shadow-2xl flex items-start gap-3 border <?= $formStatus === 'success' ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-200' : 'bg-rose-950/90 border-rose-500/50 text-rose-200' ?> backdrop-blur-xl">
            <i class="fa-solid <?= $formStatus === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-exclamation text-rose-400' ?> text-xl mt-0.5"></i>
            <div>
                <h4 class="font-bold text-sm <?= $formStatus === 'success' ? 'text-emerald-300' : 'text-rose-300' ?>">
                    <?= $formStatus === 'success' ? 'Inquiry Submitted Successfully' : 'Submission Alert' ?>
                </h4>
                <p class="text-xs mt-1 text-zinc-200 leading-relaxed"><?= htmlspecialchars($formMessage) ?></p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="text-zinc-400 hover:text-white text-sm ml-auto">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
    <?php endif; ?>

    <main class="relative z-10">

        <!-- ==========================================
             3. HERO SECTION (Cambridge Masterwork)
             ========================================== -->
        <section id="hero" class="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint border-b border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-8">
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Left Hero Content -->
                    <div class="lg:col-span-7 space-y-6">
                        
                        <!-- Badges -->
                        <div class="flex flex-wrap items-center gap-2.5">
                            <span class="badge-navy">
                                <span class="w-2 h-2 rounded-full bg-[#14B8C4] animate-pulse"></span>
                                Performance Marketing &amp; Growth Specialist
                            </span>
                            <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#082852] border border-slate-700/80 text-slate-300 text-xs font-semibold">
                                <i class="fa-solid fa-graduation-cap text-[#14B8C4]"></i> MBA + B.Tech (CS)
                            </span>
                        </div>

                        <!-- Main Heading -->
                        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                            Turning Ad Budgets into <span class="text-gradient-teal block sm:inline">Predictable Revenue</span> &amp; Scalable Growth.
                        </h1>

                        <!-- Lead Paragraph -->
                        <p class="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                            I am <strong class="text-white font-bold">Naveed Showkat Malik</strong> — a results-driven Performance Marketing and Business Growth Consultant. I bridge the gap between executive business strategy, conversion-focused paid social advertising (Meta/Google), and scalable digital software systems.
                        </p>

                        <!-- Value Proposition Callout Quote -->
                        <div class="p-4 rounded-2xl bg-[#041E42] border-l-4 border-[#14B8C4] border-y border-r border-slate-700/60 shadow-lg">
                            <p class="text-xs sm:text-sm text-slate-200 italic font-medium">
                                &ldquo;I combine strategy, creativity, and technology to build scalable growth engines that generate verified leads, maximize ROAS, and elevate digital market presence.&rdquo;
                            </p>
                        </div>

                        <!-- CTA Action Buttons -->
                        <div class="flex flex-wrap items-center gap-4 pt-2">
                            <a href="#contact" class="btn-orange text-sm">
                                <span>Book Direct Consultation</span>
                                <i class="fa-solid fa-calendar-check"></i>
                            </a>

                            <a href="https://wa.me/917006113317?text=Hi%20Naveed,%20I%20am%20interested%20in%20discussing%20Performance%20Marketing%20and%20Business%20Growth%20for%20my%20brand." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
                                <i class="fa-brands fa-whatsapp text-base"></i>
                                <span>WhatsApp (+91 7006113317)</span>
                            </a>

                            <button onclick="openResumeModal()" class="btn-white text-sm cursor-pointer">
                                <i class="fa-solid fa-download text-[#041E42]"></i>
                                <span>Curriculum Vitae</span>
                            </button>
                        </div>

                        <!-- Key Performance Metric Counters -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                            <div class="p-4 rounded-2xl bg-[#082852]/80 border border-slate-700/80 shadow-md">
                                <div class="text-2xl font-extrabold text-[#14B8C4] font-display">+60%</div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Engagement Surge</div>
                            </div>
                            <div class="p-4 rounded-2xl bg-[#082852]/80 border border-slate-700/80 shadow-md">
                                <div class="text-2xl font-extrabold text-emerald-400 font-display">+25%</div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Client Referrals</div>
                            </div>
                            <div class="p-4 rounded-2xl bg-[#082852]/80 border border-slate-700/80 shadow-md">
                                <div class="text-2xl font-extrabold text-white font-display">4.8×</div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Average ROAS</div>
                            </div>
                            <div class="p-4 rounded-2xl bg-[#082852]/80 border border-slate-700/80 shadow-md">
                                <div class="text-2xl font-extrabold text-[#F7931E] font-display">Oracle</div>
                                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Certified Excellence</div>
                            </div>
                        </div>

                    </div>

                    <!-- Right Hero Executive Profile Card -->
                    <div class="lg:col-span-5">
                        <div class="p-7 sm:p-8 rounded-[32px] bg-[#041E42] border border-slate-700/80 relative overflow-hidden shadow-2xl">
                            
                            <!-- Card Ambient Badge -->
                            <div class="absolute top-0 right-0 w-48 h-48 bg-[#14B8C4]/15 rounded-full blur-2xl pointer-events-none"></div>

                            <div class="relative z-10 flex flex-col items-center text-center">
                                
                                <!-- Profile Avatar Monogram / Badge -->
                                <div class="relative mb-5">
                                    <div class="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#14B8C4] via-[#0E8A94] to-[#00D4E0] p-1 shadow-2xl shadow-[#14B8C4]/30 animate-float">
                                        <div class="w-full h-full bg-[#031730] rounded-[22px] flex flex-col items-center justify-center border border-slate-700">
                                            <span class="text-4xl font-black text-[#14B8C4] font-display">NM</span>
                                            <span class="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 mt-1">Naveed Malik</span>
                                        </div>
                                    </div>
                                    <span class="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#031730] flex items-center justify-center" title="Online & Active">
                                        <span class="w-2 h-2 rounded-full bg-white"></span>
                                    </span>
                                </div>

                                <h2 class="text-2xl font-extrabold text-white tracking-tight font-display">Naveed Showkat Malik</h2>
                                <p class="text-xs font-bold text-[#14B8C4] uppercase tracking-widest mt-1">Performance Marketer &amp; Growth Strategist</p>
                                <p class="text-xs text-slate-400 mt-1">Founder / Consultant · Srinagar, J&amp;K, India</p>

                                <!-- Credentials Badges -->
                                <div class="w-full grid grid-cols-2 gap-2.5 my-5 text-left text-xs">
                                    <div class="bg-[#031730] p-3 rounded-xl border border-slate-700/80">
                                        <span class="text-[10px] uppercase font-bold text-slate-500 block">Academics</span>
                                        <span class="text-xs font-bold text-slate-200">MBA &amp; B.Tech (CS)</span>
                                    </div>
                                    <div class="bg-[#031730] p-3 rounded-xl border border-slate-700/80">
                                        <span class="text-[10px] uppercase font-bold text-slate-500 block">Core Discipline</span>
                                        <span class="text-xs font-bold text-slate-200">Paid Social &amp; Funnels</span>
                                    </div>
                                    <div class="bg-[#031730] p-3 rounded-xl border border-slate-700/80">
                                        <span class="text-[10px] uppercase font-bold text-slate-500 block">Tech Capabilities</span>
                                        <span class="text-xs font-bold text-slate-200">Next.js, PHP, MySQL</span>
                                    </div>
                                    <div class="bg-[#031730] p-3 rounded-xl border border-slate-700/80">
                                        <span class="text-[10px] uppercase font-bold text-slate-500 block">Languages</span>
                                        <span class="text-xs font-bold text-slate-200">English, Urdu, Kashmiri</span>
                                    </div>
                                </div>

                                <!-- Contact Quick Access -->
                                <div class="w-full space-y-2 text-xs">
                                    <button onclick="copyToClipboard('naveedshowkatmalik@gmail.com', 'Email copied!')" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#031730] hover:bg-[#05244C] border border-slate-700 text-slate-300 hover:text-white transition-colors group cursor-pointer">
                                        <span class="flex items-center gap-2 truncate">
                                            <i class="fa-solid fa-envelope text-[#14B8C4]"></i>
                                            <span class="truncate">naveedshowkatmalik@gmail.com</span>
                                        </span>
                                        <span class="text-[10px] font-semibold text-slate-500 group-hover:text-[#14B8C4]">Copy</span>
                                    </button>

                                    <button onclick="copyToClipboard('+917006113317', 'Phone copied!')" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#031730] hover:bg-[#05244C] border border-slate-700 text-slate-300 hover:text-white transition-colors group cursor-pointer">
                                        <span class="flex items-center gap-2">
                                            <i class="fa-solid fa-phone text-emerald-400"></i>
                                            <span>+91 7006113317</span>
                                        </span>
                                        <span class="text-[10px] font-semibold text-slate-500 group-hover:text-[#14B8C4]">Copy</span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- ==========================================
             4. PROOF MARQUEE SECTION (Clean Contrast)
             ========================================== -->
        <section class="py-16 bg-white text-[#0F172A] border-b border-slate-200 font-sans">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 text-center">
                <span class="badge-teal mb-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#14B8C4]"></span>
                    Verified Client Engagements &amp; Ecosystems
                </span>
                <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Trusted Execution Across High-Growth Verticals
                </h2>
                <div class="teal-divider-line-center"></div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div class="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#14B8C4] hover:shadow-lg transition-all text-left">
                        <div class="text-2xl mb-2">🎓</div>
                        <h4 class="font-bold text-sm text-[#0F172A]">Cambridge Education</h4>
                        <p class="text-xs text-slate-500 mt-1">Study Abroad &amp; Admissions Funnels</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#14B8C4] hover:shadow-lg transition-all text-left">
                        <div class="text-2xl mb-2">✈️</div>
                        <h4 class="font-bold text-sm text-[#0F172A]">GoStudy Abroad</h4>
                        <p class="text-xs text-slate-500 mt-1">Next.js Lead Matching Directory</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#14B8C4] hover:shadow-lg transition-all text-left">
                        <div class="text-2xl mb-2">💻</div>
                        <h4 class="font-bold text-sm text-[#0F172A]">Campus Disha</h4>
                        <p class="text-xs text-slate-500 mt-1">Counseling CRM &amp; Lead Management</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#14B8C4] hover:shadow-lg transition-all text-left">
                        <div class="text-2xl mb-2">🏛️</div>
                        <h4 class="font-bold text-sm text-[#0F172A]">Aura FinTech</h4>
                        <p class="text-xs text-slate-500 mt-1">Corporate Brand Architecture</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================
             5. CORE EXPERTISE & SERVICES (Bento Grid)
             ========================================== -->
        <section id="expertise" class="py-20 bg-gradient-to-b from-[#041E42] to-[#031730] border-b border-slate-800 font-sans">
            <div class="max-w-7xl mx-auto px-4 sm:px-8">
                
                <div class="text-left mb-12">
                    <span class="badge-teal mb-3">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse"></span>
                        Strategic Capabilities
                    </span>
                    <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Engineered Capabilities for <span class="text-gradient-teal">Market Dominance.</span>
                    </h2>
                    <div class="teal-divider-line"></div>
                    <p class="text-slate-300 text-sm sm:text-base max-w-2xl">
                        Combining quantitative advertising mechanics with full-stack software development to build impenetrable growth engines.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <!-- Capability Card 1 -->
                    <div class="p-7 rounded-3xl bg-[#082852]/90 border border-slate-700/80 hover:border-[#14B8C4] transition-all hover:-translate-y-1 shadow-xl group">
                        <div class="w-12 h-12 rounded-2xl bg-[#14B8C4]/15 border border-[#14B8C4]/30 flex items-center justify-center text-[#14B8C4] text-xl mb-5 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <h3 class="font-display text-xl font-bold text-white mb-2 group-hover:text-[#14B8C4] transition-colors">
                            Paid Social &amp; Performance Media
                        </h3>
                        <p class="text-xs text-slate-300 leading-relaxed mb-4">
                            Full-funnel Meta &amp; Google Ads management with strict multi-touch attribution, creative split testing, and high-intent targeting.
                        </p>
                        <ul class="space-y-2 text-xs text-slate-200 border-t border-slate-700/80 pt-4">
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> Meta Ads Manager &amp; CBO Scaling</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> Google Search &amp; PMax Architectures</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> 4.8× Average Verified Client ROAS</li>
                        </ul>
                    </div>

                    <!-- Capability Card 2 -->
                    <div class="p-7 rounded-3xl bg-[#082852]/90 border border-slate-700/80 hover:border-[#14B8C4] transition-all hover:-translate-y-1 shadow-xl group">
                        <div class="w-12 h-12 rounded-2xl bg-[#F7931E]/15 border border-[#F7931E]/30 flex items-center justify-center text-[#F7931E] text-xl mb-5 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <h3 class="font-display text-xl font-bold text-white mb-2 group-hover:text-[#14B8C4] transition-colors">
                            Next.js &amp; Web Engineering
                        </h3>
                        <p class="text-xs text-slate-300 leading-relaxed mb-4">
                            Engineering sub-1s load time digital portals using Next.js 15, PHP 8, and custom MySQL backends to maximize lead conversions.
                        </p>
                        <ul class="space-y-2 text-xs text-slate-200 border-t border-slate-700/80 pt-4">
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> 95+ Google Lighthouse Speed Scores</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> Custom CRM &amp; Database Pipelines</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> Zero AI-template look — bespoke UI</li>
                        </ul>
                    </div>

                    <!-- Capability Card 3 -->
                    <div class="p-7 rounded-3xl bg-[#082852]/90 border border-slate-700/80 hover:border-[#14B8C4] transition-all hover:-translate-y-1 shadow-xl group">
                        <div class="w-12 h-12 rounded-2xl bg-[#14B8C4]/15 border border-[#14B8C4]/30 flex items-center justify-center text-[#14B8C4] text-xl mb-5 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 class="font-display text-xl font-bold text-white mb-2 group-hover:text-[#14B8C4] transition-colors">
                            Funnel CRO &amp; Analytics
                        </h3>
                        <p class="text-xs text-slate-300 leading-relaxed mb-4">
                            Eliminating lead leakage across landing pages with heatmap analysis, behavioral tracking, and instant WhatsApp routing.
                        </p>
                        <ul class="space-y-2 text-xs text-slate-200 border-t border-slate-700/80 pt-4">
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> GA4, GTM &amp; Server-Side Pixels</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> +54% Average Registration Lift</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-[#14B8C4]"></i> Automated WhatsApp Lead Engines</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>

        <!-- ==========================================
             6. DIRECT STRATEGY CONSULTATION & FORM
             ========================================== -->
        <section id="contact" class="py-20 bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint border-b border-slate-800 font-sans">
            <div class="max-w-7xl mx-auto px-4 sm:px-8">
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    <!-- Left Briefing -->
                    <div class="lg:col-span-5 space-y-6">
                        <span class="badge-teal">
                            <span class="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse"></span>
                            Direct Advisory Access
                        </span>

                        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
                            Schedule Your 1-on-1<br />
                            <span class="text-gradient-teal">Growth Strategy Session.</span>
                        </h2>

                        <div class="teal-divider-line"></div>

                        <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                            Connect directly with Naveed Showkat Malik to audit your current acquisition bottlenecks, review campaign metrics, and formulate a high-ROAS execution plan.
                        </p>

                        <div class="p-5 rounded-2xl bg-[#041E42] border border-slate-700/80 space-y-3">
                            <div class="flex items-center gap-3 text-xs text-slate-200">
                                <i class="fa-solid fa-shield-halved text-[#14B8C4] text-base"></i>
                                <span>100% Confidential — NDA signed upon request</span>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-200">
                                <i class="fa-solid fa-clock text-[#14B8C4] text-base"></i>
                                <span>Guaranteed reply within 24 business hours</span>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-200">
                                <i class="fa-solid fa-phone text-emerald-400 text-base"></i>
                                <span>Direct phone: +91 7006113317</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Form Card -->
                    <div class="lg:col-span-7 p-8 sm:p-10 rounded-[32px] bg-[#05244C]/95 border border-slate-700/80 shadow-2xl">
                        <form method="POST" action="#contact" class="space-y-5">
                            <input type="hidden" name="action" value="contact_submit">

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input type="text" name="name" required placeholder="e.g. Vikram Sharma" class="w-full bg-[#031730] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#14B8C4] focus:outline-none transition-colors">
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input type="email" name="email" required placeholder="e.g. vikram@company.com" class="w-full bg-[#031730] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#14B8C4] focus:outline-none transition-colors">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Phone / WhatsApp Number
                                    </label>
                                    <input type="text" name="phone" placeholder="+91 98765 43210" class="w-full bg-[#031730] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#14B8C4] focus:outline-none transition-colors">
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                                        Primary Service Required
                                    </label>
                                    <select name="service" class="w-full bg-[#031730] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#14B8C4] focus:outline-none transition-colors">
                                        <option value="Paid Social & Performance Ads">Paid Social &amp; Performance Ads</option>
                                        <option value="Next.js Web Engineering">Next.js Web Engineering</option>
                                        <option value="Funnel CRO & Audit">Funnel CRO &amp; Audit</option>
                                        <option value="Complete Growth Retainer">Complete Growth Retainer</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                                    Project Brief &amp; Business Objectives *
                                </label>
                                <textarea name="message" rows="4" required placeholder="Tell me about your business goals, target timeline, or current ad spend bottlenecks..." class="w-full bg-[#031730] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-[#14B8C4] focus:outline-none transition-colors resize-none"></textarea>
                            </div>

                            <div class="flex items-center justify-between pt-2">
                                <span class="text-xs text-slate-400 flex items-center gap-1.5">
                                    <i class="fa-solid fa-lock text-[#14B8C4]"></i> Encrypted Transmission
                                </span>

                                <button type="submit" class="btn-orange text-sm cursor-pointer">
                                    <span>Transmit Consultation Request</span>
                                    <i class="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>

    </main>

    <!-- 7. FOOTER -->
    <footer class="bg-[#031730] text-slate-400 py-12 border-t border-slate-800 font-sans no-print">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-[#041E42] border border-[#14B8C4]/40 flex items-center justify-center text-[#14B8C4] font-bold font-display">
                    NM
                </div>
                <div>
                    <p class="text-xs font-bold text-white">Naveed Showkat Malik</p>
                    <p class="text-[10px] text-slate-400">© <?= date('Y') ?> All Rights Reserved · Performance Marketing Leader</p>
                </div>
            </div>

            <div class="flex items-center gap-6 text-xs text-slate-300">
                <a href="tel:+917006113317" class="hover:text-[#14B8C4] transition-colors"><i class="fa-solid fa-phone text-[#14B8C4] mr-1"></i> +91 7006113317</a>
                <a href="mailto:naveedshowkatmalik@gmail.com" class="hover:text-[#14B8C4] transition-colors"><i class="fa-solid fa-envelope text-[#14B8C4] mr-1"></i> naveedshowkatmalik@gmail.com</a>
                <a href="#hero" class="w-8 h-8 rounded-lg bg-[#041E42] flex items-center justify-center text-slate-300 hover:text-[#14B8C4] transition-colors"><i class="fa-solid fa-arrow-up"></i></a>
            </div>
        </div>
    </footer>

    <!-- Interactive Resume Modal -->
    <div id="resumeModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-4">
        <div class="bg-[#041E42] text-white w-full max-w-2xl rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto space-y-6">
            <div class="flex items-start justify-between">
                <div>
                    <span class="text-[10px] font-bold text-[#14B8C4] uppercase tracking-widest">Executive Profile</span>
                    <h3 class="font-display text-2xl font-extrabold text-white">Naveed Showkat Malik</h3>
                    <p class="text-xs text-slate-300 mt-0.5">MBA + B.Tech (CS) · Performance Marketing Leader</p>
                </div>
                <button onclick="closeResumeModal()" class="p-2 rounded-xl bg-[#031730] text-slate-300 hover:text-white cursor-pointer">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <div class="space-y-4 text-xs text-slate-200">
                <div class="p-4 rounded-xl bg-[#031730] border border-slate-700">
                    <h4 class="font-bold text-[#14B8C4] text-sm mb-1">Executive Summary</h4>
                    <p class="leading-relaxed">10+ years experience bridging paid social advertising (Meta &amp; Google Ads), custom software architecture (Next.js, PHP, MySQL), and enterprise revenue scaling across Education, Healthcare, and Tech sectors.</p>
                </div>

                <div class="p-4 rounded-xl bg-[#031730] border border-slate-700">
                    <h4 class="font-bold text-[#14B8C4] text-sm mb-1">Academics &amp; Credentials</h4>
                    <ul class="space-y-1">
                        <li>• MBA (Marketing &amp; Management)</li>
                        <li>• B.Tech (Computer Science &amp; Engineering)</li>
                        <li>• Oracle Certified Associate</li>
                    </ul>
                </div>
            </div>

            <div class="flex items-center justify-end gap-3 pt-2">
                <button onclick="window.print()" class="btn-white text-xs py-2.5 px-4 rounded-xl cursor-pointer">
                    <i class="fa-solid fa-print"></i> Print CV
                </button>
                <a href="#contact" onclick="closeResumeModal()" class="btn-orange text-xs py-2.5 px-4 rounded-xl">
                    <span>Contact Directly</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }

        function openResumeModal() {
            document.getElementById('resumeModal').classList.remove('hidden');
        }

        function closeResumeModal() {
            document.getElementById('resumeModal').classList.add('hidden');
        }

        function copyToClipboard(text, alertMsg) {
            navigator.clipboard.writeText(text).then(() => {
                alert(alertMsg);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        }
    </script>
</body>
</html>
