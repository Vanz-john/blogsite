export interface Post {
  id: number
  week: string
  date: string
  title: string
  excerpt: string
  mood: string
  read: string
  lesson: string
  body: string[]
  /** Paths under /public, served from site root */
  images: string[]
}

export const author = {
  name: 'John Ivan A. Regaspi',
  role: 'BS Computer Science Intern · Practicum (CS331)',
  institution: 'North Eastern Mindanao State University (NEMSU)',
  company: 'Miles Computer Ventures Corp., Davao City',
  supervisor: 'Edison John Tayco (Store Manager)',
  coordinator: 'Virgilio F. Tuga Jr., MSCS (CAR)',
  period: 'June 15 – August 1, 2026',
  email: 'jiaregaspi@nemsu.edu.ph',
  portfolioUrl: 'https://portfolio20-ivory.vercel.app/',
  bio: 'Seven weeks and 324 hours of on-the-job training at Miles Computer Ventures in Davao City. Documenting hands-on hardware servicing, 40 bulk PC builds, printer diagnostics, and the transition from classroom theory to commercial IT operations.',
}

export const stats = [
  { label: 'Hours Rendered', value: '324' },
  { label: 'Weeks on Duty', value: '7' },
  { label: 'Bulk PCs Built', value: '40' },
  { label: 'Final Rating', value: '90%' },
]

export const posts: Post[] = [
  {
    id: 1,
    week: 'Week 1',
    date: 'Jun 15 – Jun 22',
    title: 'First steps, network crimping, and our first customer builds',
    excerpt: 'Orientation with Sir Ed, learning to trim UTP cables and crimp RJ45 connectors, and assembling our first customer PCs.',
    mood: 'Eager',
    read: '4 min',
    lesson: 'Ask the small questions on day one without hesitation. Solid cable termination and hardware care build client trust.',
    body: [
      'Stepping into Miles Computer Ventures on June 15, 2026 marked the shift from university lectures to the rhythm of a commercial IT shop. Our mentor, Store Manager Sir Edison John Tayco, welcomed us alongside interns from other universities, walking us through store protocols, customer volume handling, and product knowledge.',
      'Our first technical milestone was learning proper UTP network cable trimming and RJ45 crimping. Soon after, Sir Ed assigned us our first two customer PC builds and a printer calibration, reminding us not to be shy about asking questions when handling live customer hardware.'
    ],
    images: [
      '/images/weeks/week_1_orientation.jpg',
      '/images/weeks/week_1_crimping.jpg',
      '/images/weeks/week_1_build.jpg',
    ],
  },
  {
    id: 2,
    week: 'Week 2',
    date: 'Jun 23 – Jun 27',
    title: 'Solo shift, printer diagnostics, and desktop SSD upgrades',
    excerpt: 'When my colleague called in sick, I held down the workshop alone—tending to walk-in clients, calibrating printers, and assembling towers.',
    mood: 'Resilient',
    read: '4 min',
    lesson: 'Working solo tests your composure. Systematic troubleshooting and deliberate, careful steps prevent mistakes when orders stack up.',
    body: [
      'Week two pushed my independence. With my colleague out sick on Thursday, I managed the shop alone. What I expected to be an uneventful day turned into walk-in printer sales, setting up two customer laptops, and assembling a desktop tower from scratch with full defect checks.',
      'Beyond assembly, I assisted Grapixels advertising with tarpaulin installations, performed printer nozzle and printhead troubleshooting, and executed a full solid-state drive (SSD) upgrade on a client desktop with fresh OS configuration.'
    ],
    images: [
      '/images/weeks/week_2_solo_shift.jpg',
      '/images/weeks/week_2_printer_calibration.jpg',
    ],
  },
  {
    id: 3,
    week: 'Week 3',
    date: 'Jun 29 – Jul 4',
    title: 'Thermal paste teardown, rush builds, and a milestone allowance',
    excerpt: 'Disassembling an overheating laptop, balancing rush desktop orders on tight deadlines, and hitting our 128-hour milestone.',
    mood: 'Focused',
    read: '4 min',
    lesson: 'Hardware servicing requires patience. Juggling delicate teardowns while fielding rush desktop orders builds operational agility.',
    body: [
      'A fellow intern brought in their laptop that was severely overheating even under light loads. I disassembled the chassis, cleared the heatsink fins, and renewed the thermal interface compound. Mid-servicing, a client walked in with a rush order for two custom PCs, requiring me to quickly switch gears, finish the desktop builds, and resume the laptop overhaul.',
      'We also assisted with store administrative errands at the bank and received our training allowance. By Saturday, we officially logged 128 hours, steadily chipping away at our 324-hour goal.'
    ],
    images: [
      '/images/weeks/week_3_custom_pc_build.jpg',
      '/images/weeks/week_3_printer_maintenance.jpg',
    ],
  },
  {
    id: 4,
    week: 'Week 4',
    date: 'Jul 6 – Jul 11',
    title: 'The 40-PC Agusan project and browser redirect diagnostics',
    excerpt: 'Kicking off a mass 40-desktop deployment for a client in Agusan, training a new colleague, and diagnosing stubborn network redirect adware.',
    mood: 'Challenged',
    read: '5 min',
    lesson: 'Mass deployment demands consistent standardization. Software discipline matters just as much as hardware assembly.',
    body: [
      'We welcomed a new technician applicant, Soy-soy, and immediately dove into our biggest project of the summer: a 40-PC commercial bulk order for a client in Agusan. The cases arrived in the morning, and the moment RAM shipments came in, we pushed through the first five builds and began mass Windows installations.',
      'On Saturday, a customer brought in a machine that was connected to the internet but unable to browse. Guided by Sir Ed, I traced the issue to hidden background adware rerouting network traffic, successfully cleaning the unit and restoring full connectivity.'
    ],
    images: [
      '/images/weeks/week_4_chassis_assembly.jpg',
      '/images/weeks/week_4_gaming_pc.jpg',
      '/images/weeks/week_4_windows11_setup.jpg',
    ],
  },
  {
    id: 5,
    week: 'Week 5',
    date: 'Jul 13 – Jul 18',
    title: 'Four-person assembly sprints, deliveries, and retail market shifts',
    excerpt: 'Working as a unified 4-man line on bulk PCs, barcode intake for new components, and delivering UPS backups across Davao.',
    mood: 'Steady',
    read: '4 min',
    lesson: 'Team synchronization turns high volume into effortless work. Quiet sales days are an opportunity to organize inventory.',
    body: [
      'With four staff and interns working together, we tackled the 40-PC Agusan fleet with speed and ease. We unboxed newly arrived motherboards, mounted standoffs, and scanned barcodes into the store database. In between builds, I accompanied field deliveries of UPS units to Los Amigos and brought warranty printers to the service center.',
      'Later in the week, foot traffic quieted down as rising market component prices slowed consumer walk-ins. We used the downtime to prep Purchase Order (PO) laptops and organize our workshop benches.'
    ],
    images: [
      '/images/weeks/week_5_motherboard_build.jpg',
      '/images/weeks/week_5_barcode_intake.jpg',
      '/images/weeks/week_5_laptop_teardown.jpg',
    ],
  },
  {
    id: 6,
    week: 'Week 6',
    date: 'Jul 20 – Jul 25',
    title: 'Prepping 20 laptops by 3 PM and fixing exterior signage',
    excerpt: 'A single-day sprint provisioning twenty delivery laptops, recovering a corrupted drive, and repairing commercial restaurant lighting.',
    mood: 'Versatile',
    read: '4 min',
    lesson: 'A computer science trainee should embrace diverse tasks. Stepping beyond the workbench creates true, versatile dependability.',
    body: [
      'Monday was a sprint: our team configured, checked, and cleanly boxed 20 delivery laptops by 3:00 PM for scheduled distribution. The following day, I revived a client desktop with a damaged storage drive by installing a fresh Windows OS, Chrome, and Office suite with verified activation.',
      'On Wednesday, I joined our creative team on an on-site field task fixing the exterior illuminated signage for a restaurant client. Being willing to help wherever needed reinforced that real-world operations span both software and physical infrastructure.'
    ],
    images: [
      '/images/weeks/week_6_ssd_upgrades.jpg',
      '/images/weeks/week_6_motherboard_unboxing.jpg',
      '/images/weeks/week_6_signage_repair.jpg',
    ],
  },
  {
    id: 7,
    week: 'Week 7',
    date: 'Jul 27 – Aug 1',
    title: 'Dispatching 40 PCs, faculty sign-off, and celebrating at the resort',
    excerpt: 'Final Windows activations, loading the Agusan fleet, Sir Virgilio Tuga signing our reports, receiving our certificate, and a beach BBQ.',
    mood: 'Accomplished',
    read: '5 min',
    lesson: 'Growth does not always feel like progress while it is happening, but it adds up. Technical skill is only half the story; camaraderie is the other.',
    body: [
      'We activated Windows licenses on all 40 completed Agusan PCs, inspected each unit, and carried them down for truck transport—a true physical workout. On Wednesday, our NEMSU OJT Coordinator, Sir Virgilio F. Tuga Jr., visited the store to review and sign our accomplishment sheets.',
      'Friday marked our last official day in the store. Sir Edison John Tayco awarded us our Certificates of Training and exit clearance with a 90% evaluation rating. On Saturday, August 1, we celebrated completing our 324 hours with the entire Miles Computer Ventures family at a beach resort, grilling BBQ and celebrating our growth.'
    ],
    images: [
      '/images/weeks/week_7_coordinator_visit.jpg',
      '/images/weeks/week_7_certificate_award.jpg',
      '/images/weeks/week_7_team_celebration.jpg',
    ],
  },
]

export const evaluationSummary = {
  score: '88 / 100',
  average: '90%',
  verdict: 'PASSED',
  strengths: 'Hardware Servicing, Software Installation',
  growthArea: 'Self-Confidence, Communication Skills',
  mentorNote: 'Keep improving yourself.',
  evaluator: 'Edison John Tayco (Store & Operations Manager)',
}

export const certificateModules = [
  'Software Installation',
  'Technical Servicing & Desktop Assembly',
  'Printer Calibration & Installation',
  'Computer Graphics Designing',
]

export const reflectionQuote =
  'The dual nature of work—technical and customer-facing—required constant recalibration. Responsibilities shifted fluidly between diagnosing hardware issues and assembling units, to guiding customers toward suitable product decisions. Navigating this balance cultivated sound judgement, clear communication, and composure under pressure.'
