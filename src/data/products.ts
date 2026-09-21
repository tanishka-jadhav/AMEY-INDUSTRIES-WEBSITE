export interface Product {
  id: string;
  slug: string;
  name: string;
  modelNo?: string;
  category: "green-gym" | "playground" | "industrial-fabrication";
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  suitableLocations: string[];
  installationDetails?: string;
  image: string;
  primaryImage?: string;
  gallery: string[];
  specifications?: Record<string, string>;
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  // --- GREEN GYM PRODUCTS (MATCHED TO REAL AMEY INDUSTRIES PHOTOGRAPHS) ---
  {
    id: "gg-air-walker-twister-combo",
    slug: "outdoor-air-walker",
    name: "Combination Air Walker & Twister Station",
    modelNo: "Model No. GE02-Combo",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Multi-station outdoor fitness unit combining a dual swinging air walker, revolving sit-up stool, and standing waist twister disc.",
    fullDescription: "Engineered by AMEY INDUSTRIES in Nashik, the Combination Air Walker & Twister Station delivers smooth lower-body cardio exercise and core rotation in a single compact footprint. Constructed with heavy-walled steel tubing, dual vertical posts, and all-weather polyurethane powder coating.",
    features: [
      "Dual swinging air walker foot platforms for smooth leg movement",
      "Revolving sit-up twister stool with integrated circular footrest ring",
      "Standing waist twister disc for oblique and spinal flexibility",
      "Heavy-duty GI steel frame with anti-rust primer & powder coat finish",
      "Sealed industrial bearing pivot joints for zero-maintenance operation"
    ],
    applications: [
      "Leg mobility & hip flexibility",
      "Cardiovascular endurance",
      "Core abdominal & oblique rotation",
      "All-age community exercise"
    ],
    suitableLocations: [
      "Public Parks & Municipal Gardens",
      "Housing Societies & Apartments",
      "Senior Citizen Recreation Zones",
      "Educational & Institutional Campuses"
    ],
    installationDetails: "Surface foundation baseplate mounting with sub-surface concrete grouting and heavy anchor bolts.",
    image: "/images/green-gym/outdoor-air-walker.jpg",
    gallery: [
      "/images/green-gym/outdoor-air-walker.jpg",
      "/images/green-gym/outdoor-double-air-walker.jpg",
      "/images/green-gym/outdoor-air-walker-lawn.jpg",
      "/images/green-gym/outdoor-air-walker-paver-tiles.jpg",
      "/images/green-gym/outdoor-air-walker-garden.jpg",
      "/images/green-gym/air-walker-factory-floor.jpg",
      "/images/green-gym/air-walker-palm-trees.jpg",
      "/images/green-gym/outdoor-cross-trainer.jpg",
      "/images/green-gym/outdoor-air-walker-ground-site.jpg",
      "/images/green-gym/air-walker-factory-assembly-line.jpg",
      "/images/green-gym/outdoor-air-walker-paver-plaza.jpg",
      "/images/green-gym/outdoor-air-walker-purple-yellow.jpg"
    ],
    specifications: {
      "Model Number": "GE02-Combo",
      "Frame Material": "Heavy Duty MS / GI Steel Pipes",
      "Surface Coating": "Anti-UV Polyurethane Outdoor Powder Coat",
      "User Capacity": "3 Users Simultaneous",
      "Target Muscles": "Cardio, Legs, Hips, Waist & Core"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-horse-rider",
    slug: "outdoor-horse-rider",
    name: "Outdoor Horse Rider Station",
    modelNo: "Model No. GE09-HR",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Full-body outdoor exercise station providing low-impact bodyweight lever resistance to condition legs, arms, back, and core muscles.",
    fullDescription: "The Outdoor Horse Rider Station by AMEY INDUSTRIES delivers low-impact full-body cardiovascular exercise. Designed with an ergonomic seat, synchronized arm pull handles, and foot platforms, users engage their legs, arms, shoulders, and core in a smooth rhythmic motion.",
    features: [
      "Simultaneous upper and lower body lever movement",
      "High-durability powder-coated steel frame with weatherproof finish",
      "Textured anti-skid foot platforms with embossed logo detailing",
      "Ergonomic hand grip bars with rubberized end caps",
      "Heavy-duty pivot joints with sealed self-lubricating bearings"
    ],
    applications: [
      "Cardiovascular fitness & rhythmic full-body workout",
      "Quadriceps, calf, shoulder & latissimus strength",
      "Joint-friendly calorie burn for public parks & societies"
    ],
    suitableLocations: [
      "Public Parks & Municipal Gardens",
      "Residential Housing Complexes",
      "Senior Citizen Fitness Trails",
      "School & Sports Grounds"
    ],
    installationDetails: "Surface flange base mounting with sub-surface concrete grouting and heavy-duty anchor bolts.",
    image: "/images/green-gym/outdoor-horse-rider.jpg",
    gallery: [
      "/images/green-gym/outdoor-horse-rider.jpg",
      "/images/green-gym/horse-rider-studio-render.jpg"
    ],
    specifications: {
      "Model Number": "GE09-HR",
      "Frame Material": "Heavy Grade MS / GI Steel Pipes",
      "Surface Coating": "Anti-UV Polyurethane Powder Coat",
      "User Capacity": "1 User",
      "Target Muscles": "Quads, Glutes, Lats, Shoulders & Core"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-seated-rower",
    slug: "outdoor-seated-rower",
    name: "Outdoor Seated Rower Station",
    modelNo: "Model No. GE10-SR",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Seated outdoor exercise unit engineered for upper-body pulling strength and postural back muscle exercise.",
    fullDescription: "Engineered and manufactured by AMEY INDUSTRIES in Nashik, the Outdoor Seated Rower Station provides a smooth pulling motion that targets the upper back, latissimus dorsi, biceps, and core. Built with an all-weather steel base, comfortable contoured seat, and heavy pivot linkage.",
    features: [
      "Seated bodyweight lever rowing movement",
      "Bright dual-tone weatherproof polyurethane powder coating",
      "Reinforced tubular steel main frame with solid ground anchor base",
      "Ergonomic handle grips and contoured outdoor seating plate",
      "Maintenance-free sealed bearing pivot mechanism"
    ],
    applications: [
      "Upper back & shoulder blade stability",
      "Bicep & forearm strength",
      "Low-impact core & back endurance"
    ],
    suitableLocations: [
      "Municipal Open Gym Parks",
      "Residential Townships",
      "Corporate & University Campuses"
    ],
    installationDetails: "Deep concrete foundation grouting with baseplate anchor bolt fixing.",
    image: "/images/green-gym/outdoor-seated-rower.jpg",
    gallery: [
      "/images/green-gym/outdoor-seated-rower.jpg",
      "/images/green-gym/outdoor-seated-rower-field.jpg"
    ],
    specifications: {
      "Model Number": "GE10-SR",
      "Frame Material": "Heavy Duty Steel Pipes",
      "Surface Finish": "Outdoor Grade Powder Coat",
      "User Capacity": "1 User",
      "Target Muscles": "Latissimus Dorsi, Rhomboids, Biceps, Core"
    },
    isFeatured: true
  },

  {
    id: "gg-multi-gym-4in1",
    slug: "multi-gym-station",
    name: "4-in-1 Multi Activity Outdoor Gym Station",
    modelNo: "Model No. MGS01",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Comprehensive multi-user outdoor gym central pillar station integrating Chest Press, Lat Pull-Down, Air Walker, and Twister functions.",
    fullDescription: "The 4-in-1 Multi Activity Outdoor Gym Station by AMEY INDUSTRIES maximizes park utility by integrating four distinct workouts onto a single central column structure. Allows up to 4 users to exercise simultaneously with smooth bodyweight lever resistance.",
    features: [
      "Integrated Seated Chest Press & Overhead Lat Pull-Down handles",
      "Dual Air Walker swinging leg platforms",
      "Standing core waist twister disc",
      "Heavy-gauge central column support designed for heavy public usage",
      "Weather-resistant powder-coated frame with anti-tamper hardware"
    ],
    applications: [
      "Upper body push & pull strength",
      "Lower body cardio endurance",
      "Group workouts & community park fitness"
    ],
    suitableLocations: [
      "Municipal Open Gyms",
      "Residential Townships",
      "Sports Clubs & Athletic Grounds",
      "Institutional Campuses"
    ],
    installationDetails: "Deep concrete anchor foundation with heavy base plate bolting.",
    image: "/images/green-gym/multi-gym-station.jpg",
    gallery: [
      "/images/green-gym/multi-gym-station.jpg",
      "/images/green-gym/multi-gym-factory-assembly.jpg",
      "/images/green-gym/outdoor-gym-installation-grouting.jpg",
      "/images/green-gym/multi-gym-orange-workshop.jpg",
      "/images/green-gym/multi-gym-quad-station-paver-tiles.jpg"
    ],
    specifications: {
      "Model Number": "MGS01",
      "Frame Material": "Heavy Duty Steel Pipes",
      "Capacity": "4 Users Simultaneous",
      "Target Muscles": "Chest, Back, Arms, Legs, Core"
    },
    isFeatured: true
  },

  {
    id: "gg-double-seated-leg-press",
    slug: "outdoor-leg-press",
    name: "Double Seated Leg Press Station",
    modelNo: "Model No. GE04",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual-user bodyweight lever leg press unit equipped with contoured backrests, safety footplates, and heavy central pillar frame.",
    fullDescription: "Utilizing user bodyweight for natural, safe resistance, the Double Seated Leg Press by AMEY INDUSTRIES provides effective quad, hamstring, and glute strength conditioning. Built with bright green contoured seats and heavy grey tubular framing for long outdoor durability.",
    features: [
      "Dual opposing seat configuration for 2 simultaneous users",
      "Ergonomic angled backrests for lumbar support during leg extension",
      "Anti-skid textured footplates engineered for outdoor safety",
      "Heavy-duty pivot hinges with sealed lubrication bearings",
      "Multi-stage anti-corrosion coating"
    ],
    applications: [
      "Quadriceps, hamstring & glute strengthening",
      "Lower body resistance exercise",
      "Senior citizen gentle leg conditioning"
    ],
    suitableLocations: [
      "Housing Society Parks",
      "Public Municipal Gardens",
      "Health Resorts & Clubs"
    ],
    installationDetails: "Sub-surface concrete grouting with pre-drilled base plate anchor fixing.",
    image: "/images/green-gym/outdoor-leg-press.jpg",
    gallery: [
      "/images/green-gym/outdoor-leg-press.jpg",
      "/images/green-gym/leg-press-og07-catalog.jpg",
      "/images/green-gym/leg-press-orange-teal-field.jpg",
      "/images/green-gym/outdoor-leg-press-building-garden.jpg"
    ],
    specifications: {
      "Model Number": "GE04",
      "Material": "Heavy Grade GI Steel",
      "Capacity": "2 Users",
      "Target Muscles": "Quads, Hamstrings, Glutes & Calves"
    },
    isFeatured: true
  },

  {
    id: "gg-chest-press-twister-combo",
    slug: "outdoor-cross-trainer",
    name: "Seated Chest Press & Twister Combo",
    modelNo: "Model No. GE08-Combo",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Versatile outdoor fitness station incorporating a seated chest press unit, revolving twister stool, and standing twister disc.",
    fullDescription: "The Seated Chest Press & Twister Combo manufactured by AMEY INDUSTRIES combines upper body strength training with core abdominal rotation. Designed with high-durability yellow & green seats, ergonomic hand grips, and heavy central steel uprights.",
    features: [
      "Seated Chest Press & Lat Pull overhead motion handles",
      "Revolving sit-up twister stool with sturdy foot support",
      "Standing waist twister disc platform",
      "All-weather high gloss powder coat finish",
      "Low friction pivot mechanisms"
    ],
    applications: [
      "Upper body chest & shoulder conditioning",
      "Waist & oblique flexibility",
      "Community wellness grounds"
    ],
    suitableLocations: [
      "Public Gardens",
      "Residential Complexes",
      "Sports Centers"
    ],
    image: "/images/green-gym/outdoor-shoulder-wheel.jpg",
    gallery: [
      "/images/green-gym/outdoor-shoulder-wheel.jpg"
    ],
    specifications: {
      "Model Number": "GE08-Combo",
      "Material": "Corrosion-resistant steel",
      "Capacity": "2-3 Users",
      "Target Muscles": "Chest, Shoulders, Abs & Obliques"
    },
    isFeatured: true
  },

  {
    id: "gg-dual-waist-twister-stool",
    slug: "outdoor-waist-twister",
    name: "Dual Seated & Standing Waist Twister",
    modelNo: "Model No. GE05",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Multi-user waist twister equipment featuring a seated revolving twister stool on one side and standing twister disc on the other.",
    fullDescription: "Designed specifically for waist toning and core flexibility, the Dual Seated & Standing Waist Twister by AMEY INDUSTRIES features a central vertical post with balance handrails, a revolving stool with circular footrest ring, and a standing rotating disc.",
    features: [
      "Seated revolving twister stool with balance handrail",
      "Standing textured twister platform for waist rotation",
      "Solid central upright post with floor mounting flange",
      "Heavy-duty ball bearing rotation joint",
      "Weatherproof outdoor finish"
    ],
    applications: [
      "Abdominal oblique conditioning",
      "Spinal rotation & core balance",
      "Warm-up and gentle stretching"
    ],
    suitableLocations: [
      "Societies & Apartments",
      "Senior Citizen Parks",
      "School Recreation Grounds"
    ],
    image: "/images/green-gym/outdoor-waist-twister.jpg",
    gallery: [
      "/images/green-gym/outdoor-waist-twister.jpg",
      "/images/green-gym/outdoor-waist-twister-park.jpg",
      "/images/green-gym/rural-park-installation-site.jpg",
      "/images/green-gym/waist-twister-revolving-stool-site.jpg",
      "/images/green-gym/outdoor-waist-twister-paver-tiles.jpg",
      "/images/green-gym/waist-twister-palm-tree-park.jpg"
    ],
    specifications: {
      "Model Number": "GE05",
      "Material": "Heavy Gauge Steel Pipe",
      "Capacity": "2 Users",
      "Target Muscles": "Obliques, Abs, Lower Back"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-lat-pull-down",
    slug: "outdoor-lat-pull-down",
    name: "Outdoor Double Lat Pull Down Station",
    modelNo: "Model No. GE11-LPD",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual-station outdoor upper-body fitness unit designed for latissimus dorsi strength, shoulder mobilization, and posture correction.",
    fullDescription: "The Outdoor Double Lat Pull Down Station by AMEY INDUSTRIES is engineered for effective upper-body pulling strength. Featuring dual opposing contoured seats and overhead lever arms, two users can perform bodyweight pull-downs simultaneously.",
    features: [
      "Dual opposing seat configuration for 2 simultaneous users",
      "Overhead ergonomic pull-down handles with bodyweight leverage resistance",
      "Heavy-gauge central support pillar with floor anchor base",
      "Weatherproof polyurethane powder coating in custom colors",
      "Heavy-duty pivot joints with sealed low-friction bearings"
    ],
    applications: [
      "Latissimus dorsi, upper back & rhomboid strengthening",
      "Shoulder girdle stabilization & posture improvement",
      "Bicep and forearm conditioning for outdoor fitness parks"
    ],
    suitableLocations: [
      "Public Parks & Municipal Open Gyms",
      "Housing Societies & Gated Townships",
      "School & College Athletic Grounds",
      "Senior Citizen Wellness Zones"
    ],
    installationDetails: "Sub-surface concrete grouting with pre-drilled baseplate anchor fixing.",
    image: "/images/green-gym/outdoor-lat-pull-down.jpg",
    gallery: [
      "/images/green-gym/outdoor-lat-pull-down.jpg",
      "/images/green-gym/outdoor-lat-pull-down-yard.jpg",
      "/images/green-gym/outdoor-lat-pull-down-gravel-park.jpg"
    ],
    specifications: {
      "Model Number": "GE11-LPD",
      "Frame Material": "Heavy Duty MS / GI Steel Pipes",
      "Coating": "Outdoor Polyurethane Powder Coating",
      "User Capacity": "2 Users Simultaneous",
      "Target Muscles": "Latissimus Dorsi, Rhomboids, Rear Deltoids, Biceps"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-shoulder-wheel",
    slug: "outdoor-shoulder-wheel",
    name: "Outdoor Dual Shoulder Wheel Station",
    modelNo: "Model No. GE12-SW",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual-wheel rotational exercise station designed to improve shoulder joint mobility, flexibility, and upper arm circulation.",
    fullDescription: "Manufactured by AMEY INDUSTRIES, the Outdoor Dual Shoulder Wheel Station (also known as Tai Chi Spinner Wheel) features two large circular wheels mounted on a sturdy central post. Users hold the rotating handles to perform 360-degree arm rotations, enhancing rotator cuff flexibility.",
    features: [
      "Dual independent 360-degree rotating wheels for two users",
      "Smooth rotation mechanism with sealed maintenance-free bearings",
      "Heavy tubular vertical main post with heavy flange mounting base",
      "Comfortable textured hand grips for easy rotation",
      "All-weather powder coat finish resistant to UV and rain"
    ],
    applications: [
      "Shoulder joint flexibility & rotator cuff rehabilitation",
      "Upper extremity mobility & blood circulation",
      "Gentle stretching for senior citizens and park visitors"
    ],
    suitableLocations: [
      "Senior Citizen Recreation Parks",
      "Public Municipal Gardens",
      "Residential Housing Complexes",
      "Health Resorts & Rehabilitation Centers"
    ],
    installationDetails: "Surface flange base mounting with sub-surface concrete grouting and anchor bolts.",
    image: "/images/green-gym/outdoor-shoulder-wheel.jpg",
    gallery: [
      "/images/green-gym/outdoor-shoulder-wheel.jpg",
      "/images/green-gym/outdoor-shoulder-builder-users.jpg",
      "/images/green-gym/outdoor-shoulder-wheel-fence.jpg",
      "/images/green-gym/shoulder-wheel-factory-worker.jpg"
    ],
    specifications: {
      "Model Number": "GE12-SW",
      "Frame Material": "Heavy Grade GI Steel",
      "Coating": "Anti-Corrosion UV Powder Coat",
      "User Capacity": "2 Users",
      "Target Muscles": "Rotator Cuff, Deltoids, Shoulder Joint & Wrist"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-seated-chest-press",
    slug: "outdoor-seated-chest-press",
    name: "Outdoor Double Seated Chest Press Station",
    modelNo: "Model No. GE13-CP",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual-station outdoor pushing fitness unit using bodyweight leverage to target chest, front deltoid, and tricep muscles.",
    fullDescription: "The Outdoor Double Seated Chest Press Station by AMEY INDUSTRIES offers smooth upper-body pushing exercise. Constructed with a heavy central steel upright, two opposing seats, and dual press handles, users push forward against their own bodyweight for effective strength building.",
    features: [
      "Dual opposing seat design allowing simultaneous workouts for 2 users",
      "Natural bodyweight leverage resistance system requiring no free weights",
      "Ergonomic angled backrest and seat plates for comfortable support",
      "Heavy-duty structural steel frame with anti-rust outdoor primer",
      "Precision bearing pivot joints for noise-free movement"
    ],
    applications: [
      "Pectoral (chest) muscle building & toning",
      "Anterior deltoid and tricep strength",
      "Functional pushing power for general fitness"
    ],
    suitableLocations: [
      "Public Open Gym Parks",
      "Residential Housing Societies",
      "Sports Clubs & University Campuses"
    ],
    installationDetails: "Sub-surface concrete foundation grouting with heavy baseplate anchor bolts.",
    image: "/images/green-gym/outdoor-seated-chest-press.jpg",
    gallery: [
      "/images/green-gym/outdoor-seated-chest-press.jpg",
      "/images/green-gym/outdoor-chest-press-factory.jpg",
      "/images/green-gym/outdoor-chest-press-rooftop.jpg",
      "/images/green-gym/outdoor-chest-press-factory-blue.jpg"
    ],
    specifications: {
      "Model Number": "GE13-CP",
      "Frame Material": "Heavy Grade MS Steel Pipes",
      "Surface Finish": "High-Gloss Outdoor Powder Coating",
      "User Capacity": "2 Users",
      "Target Muscles": "Pectoralis Major, Anterior Deltoids, Triceps"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-sit-up-board",
    slug: "outdoor-sit-up-board",
    name: "Outdoor Sit-Up Board & Abdominal Bench",
    modelNo: "Model No. GE14-SUB",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Ergonomic outdoor abdominal bench equipped with leg retention bars for sit-ups, crunches, and core strength training.",
    fullDescription: "Designed and manufactured by AMEY INDUSTRIES, the Outdoor Sit-Up Board provides a dedicated park station for core strength conditioning. Features a smooth curved weather-resistant board surface and comfortable padded leg anchorage bars to enable safe sit-ups, trunk flexions, and abdominal crunches.",
    features: [
      "Ergonomic inclined board contour for optimal abdominal isolation",
      "Padded foot restraint bar for comfortable leg lock during sit-ups",
      "Heavy-duty galvanized steel support frame built for public park environments",
      "Weatherproof UV-resistant surface finish",
      "All-steel construction with anti-tamper mounting points"
    ],
    applications: [
      "Abdominal rectus & core strength conditioning",
      "Trunk flexion & hip flexor endurance",
      "Calisthenics & bodyweight workouts"
    ],
    suitableLocations: [
      "Public Fitness Trails & Parks",
      "Residential Housing Complexes",
      "Sports Grounds & Fitness Centers"
    ],
    installationDetails: "Sub-surface concrete grouting of support legs into ground.",
    image: "/images/green-gym/outdoor-sit-up-board.jpg",
    gallery: [
      "/images/green-gym/outdoor-sit-up-board.jpg",
      "/images/green-gym/outdoor-sit-up-board-park-fence.jpg",
      "/images/green-gym/double-sit-up-board-yellow.jpg"
    ],
    specifications: {
      "Model Number": "GE14-SUB",
      "Frame Material": "Galvanized Mild Steel Structure",
      "Surface Finish": "Anti-Corrosion Powder Coating",
      "User Capacity": "1 User",
      "Target Muscles": "Rectus Abdominis, Obliques, Hip Flexors"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-upright-cycle",
    slug: "outdoor-upright-cycle",
    name: "Outdoor Upright Stationary Fitness Cycle",
    modelNo: "Model No. GE15-UC",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Heavy-duty outdoor stationary exercise cycle designed for low-impact cardiovascular leg conditioning and joint mobility.",
    fullDescription: "The Outdoor Upright Stationary Fitness Cycle by AMEY INDUSTRIES offers smooth pedaling exercise for public parks and fitness trails. Built with a heavy tubular curved steel post, ergonomic weather-resistant seat, non-slip pedals with safety straps, and internal enclosed flywheel mechanism.",
    features: [
      "Enclosed internal flywheel mechanism for weather protection and child safety",
      "Heavy-wall curved tubular steel post with ground anchor flange",
      "Ergonomic molded seat plate designed for outdoor endurance",
      "Anti-skid foot pedals with weighted balance design",
      "Multi-stage anti-rust primer and UV-stabilized powder coat finish"
    ],
    applications: [
      "Cardiovascular health & aerobic endurance",
      "Quadricep, hamstring & calf muscle pedaling exercise",
      "Low-impact knee joint mobilization for all age groups"
    ],
    suitableLocations: [
      "Public Municipal Parks & Fitness Trails",
      "Residential Housing Complexes",
      "Senior Citizen Wellness Grounds",
      "School & Sports Campuses"
    ],
    installationDetails: "Surface flange baseplate bolting with sub-surface concrete grouting.",
    image: "/images/green-gym/outdoor-upright-cycle.jpg",
    gallery: [
      "/images/green-gym/outdoor-upright-cycle.jpg",
      "/images/green-gym/outdoor-fitness-cycle-concrete-grouting.jpg"
    ],
    specifications: {
      "Model Number": "GE15-UC",
      "Frame Material": "Heavy Grade GI / MS Steel",
      "Drive System": "Internal Sealed Bearing Crank & Flywheel Assembly",
      "User Capacity": "1 User",
      "Target Muscles": "Quads, Hamstrings, Calves, Cardiovascular System"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-parallel-bars",
    slug: "outdoor-parallel-bars",
    name: "Outdoor Parallel Bars Dip Station",
    modelNo: "Model No. GE16-PB",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual parallel horizontal bars engineered for bodyweight dips, leg raises, arm support, and upper-body calisthenics.",
    fullDescription: "Manufactured by AMEY INDUSTRIES in Nashik, the Outdoor Parallel Bars Dip Station is a fundamental calisthenics installation. Constructed with four heavy vertical support posts and two parallel top handrails, it provides an ideal platform for tricep dips, chest presses, and core leg raises.",
    features: [
      "Four heavy-gauge vertical upright posts for maximum structural rigidity",
      "Smooth parallel horizontal handrails optimized for comfortable palm grip",
      "Weather-resistant outdoor polyurethane powder coat finish",
      "Heavy concrete ground anchor design built for public fitness zones",
      "Vandal-resistant construction with no moving parts"
    ],
    applications: [
      "Tricep, chest & front shoulder bodyweight dips",
      "Abdominal core vertical leg & knee raises",
      "Calisthenics, gymnastics & upper-body endurance"
    ],
    suitableLocations: [
      "Public Open Gyms & Sports Grounds",
      "Residential Townships & Housing Societies",
      "Police & Defense Training Academies",
      "University Fitness Centers"
    ],
    installationDetails: "Deep sub-surface concrete anchor grouting for all 4 vertical posts.",
    image: "/images/green-gym/outdoor-parallel-bars.jpg",
    gallery: [
      "/images/green-gym/outdoor-parallel-bars.jpg",
      "/images/green-gym/outdoor-parallel-bars-red-dirt.jpg",
      "/images/green-gym/parallel-bars-installation-wrapped.jpg",
      "/images/green-gym/outdoor-parallel-bars-isolated.jpg"
    ],
    specifications: {
      "Model Number": "GE16-PB",
      "Frame Material": "Heavy Duty MS Structural Pipes",
      "Finish": "Outdoor Grade Anti-Corrosion Powder Coating",
      "User Capacity": "1-2 Users",
      "Target Muscles": "Triceps, Pectorals, Anterior Deltoids, Core Abs"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-pommel-horse",
    slug: "outdoor-pommel-horse",
    name: "Outdoor Pommel Horse & Vaulting Bench Station",
    modelNo: "Model No. GE17-PH",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Ground-mounted triple handle gymnastics pommel horse station for vaulting, arm balance, and core agility training.",
    fullDescription: "The Outdoor Pommel Horse Station by AMEY INDUSTRIES is designed for gymnastic vaulting, arm push-ups, leg swings, and core balance exercises. Built with a heavy steel base tube, weatherproof seating surface, and three ergonomic loop handles for multi-user athletic conditioning.",
    features: [
      "Three sturdy steel loop handles for vaulting grips and balance support",
      "Heavy-wall horizontal base beam with anchored end posts",
      "Weatherproof all-season powder coat finish",
      "Multi-user design for simultaneous athletic conditioning",
      "Vandal-resistant construction with no maintenance pivot parts"
    ],
    applications: [
      "Gymnastic vaulting, leg swings & arm strength",
      "Core abdominal stabilization & shoulder balance",
      "Outdoor calisthenics & athletic agility drills"
    ],
    suitableLocations: [
      "Sports Academies & Athletic Grounds",
      "Public Open Gyms & Municipal Parks",
      "Residential Housing Complexes",
      "School & College Recreation Zones"
    ],
    installationDetails: "Sub-surface concrete foundation grouting for both end posts.",
    image: "/images/green-gym/outdoor-pommel-horse.jpg",
    gallery: [
      "/images/green-gym/outdoor-pommel-horse.jpg"
    ],
    specifications: {
      "Model Number": "GE17-PH",
      "Frame Material": "Heavy Grade MS Structural Steel",
      "Finish": "Outdoor Anti-UV Powder Coating",
      "User Capacity": "1-3 Users",
      "Target Muscles": "Triceps, Shoulders, Core Abs, Hip Flexors"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-surf-board",
    slug: "outdoor-surf-board",
    name: "Outdoor Surf Board & Standing Balance Swinger",
    modelNo: "Model No. GE18-SB",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Dual standing pendulum balance swinger designed for waist flexibility, hip rotation, and core stability.",
    fullDescription: "The Outdoor Surf Board & Standing Balance Swinger manufactured by AMEY INDUSTRIES offers fun and dynamic waist swinging exercise for outdoor parks. Featuring dual standing footplates suspended on pendulum arms and balance grip handlebars, users swing side-to-side to strengthen core obliques and improve lower body balance.",
    features: [
      "Dual independent standing pendulum surf platforms for simultaneous users",
      "High-tensile steel pivot links for smooth, low-friction side swinging",
      "Ergonomic horizontal balance handrails for firm upper-body support",
      "Heavy tubular main upright post with pre-drilled base mounting flange",
      "All-weather polyurethane powder coat finish resistant to rust and UV"
    ],
    applications: [
      "Waist toning & abdominal oblique rotation",
      "Hip joint mobility & lateral balance coordination",
      "Low-impact rhythmic cardio exercise for all ages"
    ],
    suitableLocations: [
      "Public Municipal Parks & Fitness Trails",
      "Housing Societies & Gated Residential Complexes",
      "Senior Citizen Fitness Grounds",
      "Health Resorts & Recreational Centers"
    ],
    installationDetails: "Surface flange base mounting with sub-surface concrete anchor grouting.",
    image: "/images/green-gym/outdoor-surf-board.jpg",
    gallery: [
      "/images/green-gym/outdoor-surf-board.jpg"
    ],
    specifications: {
      "Model Number": "GE18-SB",
      "Frame Material": "Heavy Grade MS Structural Steel",
      "Finish": "Outdoor Polyurethane Powder Coating",
      "User Capacity": "2 Users Simultaneous",
      "Target Muscles": "Obliques, Lower Back, Hip Abductors, Core"
    },
    isFeatured: true
  },

  {
    id: "gg-outdoor-uneven-pull-up-bars",
    slug: "outdoor-uneven-pull-up-bars",
    name: "Outdoor Uneven Multi-Level Pull-Up Bars Station",
    modelNo: "Model No. GE19-UB",
    category: "green-gym",
    categoryName: "Green Gym / Outdoor Fitness",
    shortDescription: "Multi-height horizontal pull-up and chin-up bar station for bodyweight upper-body strength and calisthenics training.",
    fullDescription: "The Outdoor Uneven Multi-Level Pull-Up Bars Station by AMEY INDUSTRIES features three horizontal pull-up bars set at staggered heights. Designed for multi-user calisthenics, it accommodates users of different heights and fitness levels for chin-ups, pull-ups, muscle-ups, and arm hang exercises.",
    features: [
      "Three staggered horizontal pull-up bars accommodating various user heights",
      "Heavy tubular steel vertical upright posts with reinforced base plates",
      "High-durability all-weather polyurethane powder coat finish",
      "Smooth non-slip bar grip surface for upper-body training",
      "Simultaneous multi-user calisthenics capability"
    ],
    applications: [
      "Latissimus dorsi, bicep, and forearm chin-ups & pull-ups",
      "Core abdominal leg raises and hanging exercises",
      "Calisthenics, cross-training & military fitness conditioning"
    ],
    suitableLocations: [
      "Public Open Gym Parks & Fitness Trails",
      "Sports Academies & Athletic Complexes",
      "Residential Housing Societies",
      "University & Defense Physical Training Grounds"
    ],
    installationDetails: "Sub-surface concrete foundation grouting for all vertical posts.",
    image: "/images/green-gym/outdoor-uneven-pull-up-bars.jpg",
    gallery: [
      "/images/green-gym/outdoor-uneven-pull-up-bars.jpg",
      "/images/green-gym/outdoor-calisthenics-station-park.jpg",
      "/images/green-gym/pull-up-dip-station-notecam-pimpri.jpg"
    ],
    specifications: {
      "Model Number": "GE19-UB",
      "Frame Material": "Heavy Grade MS Structural Steel",
      "Finish": "Outdoor Anti-Corrosion Powder Coating",
      "User Capacity": "3 Users Simultaneous",
      "Target Muscles": "Latissimus Dorsi, Biceps, Rhomboids, Forearms, Core"
    },
    isFeatured: true
  },

  // --- PLAYGROUND EQUIPMENT ---
  {
    id: "pg-spiral-slide",
    slug: "children-spiral-slide",
    name: "Children Spiral & Wave Slide System",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Vibrant, heavy-duty outdoor slide system engineered with smooth safety edges and sturdy metal steps.",
    fullDescription: "AMEY INDUSTRIES supplies and fabricates durable outdoor playground slides designed for maximum safety, joyful play, and outdoor longevity. Featuring reinforced metal staircases, safety handrails, and smooth chute finishes.",
    features: [
      "High-grade weather-resistant metal chute / LLDPE option",
      "Sturdy anti-slip stair steps with full safety guardrails",
      "Smooth rounded edge finishing for child safety",
      "Vibrant non-toxic outdoor color coating"
    ],
    applications: [
      "Physical activity & recreation for children",
      "Balance and confidence development"
    ],
    suitableLocations: [
      "School Grounds & Pre-schools",
      "Public Children Parks",
      "Housing Society Play Area"
    ],
    installationDetails: "Direct ground concreting with reinforced base anchoring.",
    image: "/images/playground/straight-frp-slide-economy.jpg",
    gallery: [
      "/images/playground/straight-frp-slide-economy.jpg",
      "/images/playground/children-straight-slide-installation.jpg",
      "/images/playground/yellow-straight-slide-installation.jpg",
      "/images/playground/rooftop-playground-installation.jpg",
      "/images/playground/red-frp-wave-slide.jpg",
      "/images/playground/playground-sand-combination-station.jpg"
    ],
    isFeatured: true
  },
  {
    id: "pg-circular-revolving-swing",
    slug: "circular-revolving-swing",
    name: "Circular Arch Revolving Double Swing Set",
    modelNo: "Model No. PG03-CRS",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Vibrant circular arch superstructure holding dual back-to-back bench seats for smooth multi-child outdoor swinging.",
    fullDescription: "The Circular Arch Revolving Double Swing Set manufactured by AMEY INDUSTRIES is an eye-catching playground centerpiece. Designed with a heavy yellow circular ring frame suspended inside an A-frame support structure, it accommodates dual bench seats in red all-weather steel for group swinging.",
    features: [
      "Unique circular ring superstructure design with heavy A-frame supports",
      "Dual multi-child bench seating with comfortable back support",
      "High-tensile suspension links for smooth pendulum motion",
      "All-weather high gloss powder coat finish in vibrant yellow & red",
      "Child safety rounded edges and smooth welds"
    ],
    applications: [
      "Outdoor group play and social interaction for children",
      "Balance and motion coordination",
      "Decorative highlight for modern parks and housing societies"
    ],
    suitableLocations: [
      "Residential Housing Societies",
      "Public Children Parks & Municipal Gardens",
      "Primary Schools & Daycare Playgrounds"
    ],
    installationDetails: "Ground excavation with reinforced concrete foundation grouting.",
    image: "/images/playground/circular-revolving-swing.jpg",
    gallery: [
      "/images/playground/circular-revolving-swing.jpg"
    ],
    specifications: {
      "Model Number": "PG03-CRS",
      "Structure Material": "Heavy Gauge Steel Pipe Frame",
      "Seat Type": "Dual Bench Seating",
      "Surface Finish": "Anti-Rust Primer & Outdoor Powder Coating",
      "Capacity": "4 Children Simultaneous"
    },
    isFeatured: true
  },
  {
    id: "pg-double-swing",
    slug: "outdoor-swing-set",
    name: "Outdoor Double Swing Set",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Classic outdoor swing set constructed with heavy metal A-frame and heavy-duty swing chains.",
    fullDescription: "Built with structural stability in mind, the AMEY INDUSTRIES Outdoor Double Swing Set features heavy-gauge A-frame supports and tested load chains for reliable play in schools and housing parks.",
    features: [
      "Heavy A-frame steel pipe construction",
      "High-tensile zinc-coated swing chains",
      "Ergonomic molded swing seats with safety edges",
      "All-weather powder coated frame"
    ],
    applications: [
      "Outdoor play and recreation",
      "Motion coordination and sensory stimulation"
    ],
    suitableLocations: [
      "Housing Societies",
      "Primary Schools",
      "Public Gardens"
    ],
    image: "/images/playground/children-double-swing-active.jpg",
    gallery: [
      "/images/playground/children-double-swing-active.jpg",
      "/images/playground/children-double-swing-grouting.jpg"
    ],
    isFeatured: true
  },
  {
    id: "pg-multi-play-station",
    slug: "multi-play-combination-station",
    name: "Multi-Activity Playground Combination Station",
    modelNo: "Model No. PG04-MPS",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Integrated multi-play outdoor structure combining a wave slide, step ladder entry, chain swing, and climbing arch into a single fun station.",
    fullDescription: "The Multi-Activity Playground Combination Station manufactured by AMEY INDUSTRIES combines multiple play elements onto one heavy-duty steel structure. Designed with a bright green main frame, blue top arch ladder, red straight wave slide, and yellow chain swing, it offers endless outdoor play for school children.",
    features: [
      "Multi-play integration combining slide, swing, and ladder climber",
      "Heavy-duty tubular steel superstructure with bright multi-color powder coating",
      "Smooth rounded wave slide chute for child safety",
      "Heavy-duty zinc-plated swing chains with molded swing seat",
      "Deep ground anchor footings for high stability"
    ],
    applications: [
      "Comprehensive outdoor play & physical activity for children",
      "Social play, balance, climbing, and coordination development"
    ],
    suitableLocations: [
      "Public Children Parks & Municipal Gardens",
      "Primary Schools & Kindergarten Campuses",
      "Housing Societies & Gated Communities"
    ],
    installationDetails: "Excavated ground foundation with circular concrete grouting on main upright posts.",
    image: "/images/playground/multi-play-combination-station.jpg",
    gallery: [
      "/images/playground/multi-play-combination-station.jpg",
      "/images/playground/blue-modular-multi-play-system.jpg",
      "/images/playground/mini-play-combo-lawn-installation.jpg"
    ],
    specifications: {
      "Model Number": "PG04-MPS",
      "Structure Material": "Heavy Duty Steel Tubular Frame",
      "Components Included": "Wave Slide, Step Ladder, Chain Swing, Overhead Arch",
      "Coating": "Non-Toxic Outdoor Powder Coating",
      "User Capacity": "4-6 Children Simultaneous"
    },
    isFeatured: true
  },
  {
    id: "pg-straight-frp-playground-slide",
    slug: "straight-frp-playground-slide",
    name: "Straight FRP Playground Slide (Economy 10 Ft Model)",
    modelNo: "Model No. PG05-SL10",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Heavy-duty 10-foot straight FRP playground slide with reinforced metallic ladder frame and safety handrails.",
    fullDescription: "Manufactured by AMEY INDUSTRIES in Nashik, the Straight FRP Playground Slide features a premium fiber-reinforced plastic (FRP) chute paired with a heavy-gauge tubular steel ladder frame. Engineered with safety side walls, anti-slip ladder rungs, and top handrails, it provides smooth and secure sliding fun for school yards and public play parks.",
    features: [
      "High-density molded FRP (Fiber-Reinforced Plastic) chute with smooth gel-coat finish",
      "Heavy-duty tubular steel ladder frame with anti-corrosion yellow powder coating",
      "Ergonomic safety handrails and top step platform",
      "UV-stabilized slide surface resistant to fading and heat absorption",
      "Anchored concrete footings for maximum operational stability"
    ],
    applications: [
      "Children's motor skill development & balance",
      "Fun outdoor physical recreation",
      "Multi-user playground activity"
    ],
    suitableLocations: [
      "School & Kindergarten Playgrounds",
      "Gram Panchayat & Municipal Parks",
      "Housing Society Children's Play Areas",
      "Resorts & Commercial Daycare Centers"
    ],
    installationDetails: "In-ground concrete footings for ladder posts and chute end supports.",
    image: "/images/playground/straight-frp-slide-economy.jpg",
    gallery: [
      "/images/playground/straight-frp-slide-economy.jpg",
      "/images/playground/straight-frp-slide-installation.jpg",
      "/images/playground/frp-dual-slides-yellow-red.jpg"
    ],
    specifications: {
      "Model Number": "PG05-SL10",
      "Chute Material": "Fiber Reinforced Plastic (FRP)",
      "Structure Material": "Heavy Grade MS Tubular Pipes",
      "Slide Length": "10 Feet",
      "Safety Features": "Raised Chute Sidewalls & Anti-Slip Ladder Rungs"
    },
    isFeatured: true
  },
  {
    id: "pg-children-two-seater-seesaw",
    slug: "children-two-seater-seesaw",
    name: "Children's Heavy-Duty Two-Seater Playground Seesaw",
    modelNo: "Model No. PG06-SS02",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Heavy-duty outdoor two-seater seesaw with ergonomic backrest seats, safety hand grips, and reinforced central pivot fulcrum.",
    fullDescription: "Manufactured by AMEY INDUSTRIES in Nashik, the Children's Heavy-Duty Two-Seater Playground Seesaw offers classic teeter-totter fun engineered for maximum safety and durability. Constructed with heavy tubular steel, molded plastic backrest seats, and dual grab handles, it is anchored securely in concrete for smooth, balanced play.",
    features: [
      "Heavy-duty curved tubular steel main lever beam",
      "Ergonomic molded seats with safety backrest supports",
      "Twin upright safety grab handles for firm grip during motion",
      "Heavy-gauge central pivot axle with rubber impact buffers",
      "Vibrant weatherproof powder coating resistant to rust and UV exposure"
    ],
    applications: [
      "Children's balance, coordination & teamwork play",
      "Teeter-totter motion physical exercise",
      "Multi-child interactive fun"
    ],
    suitableLocations: [
      "School & Kindergarten Playgrounds",
      "Gram Panchayat & Public Community Parks",
      "Residential Housing Society Play Zones",
      "Resorts & Children's Play Parks"
    ],
    installationDetails: "Central pivot post anchored into deep concrete sub-surface footing.",
    image: "/images/playground/children-two-seater-seesaw-installation.jpg",
    gallery: [
      "/images/playground/children-two-seater-seesaw-installation.jpg"
    ],
    specifications: {
      "Model Number": "PG06-SS02",
      "Structure Material": "Heavy Duty Tubular Steel Pipes",
      "Seat Material": "Ergonomic Molded FRP / Steel Plates",
      "Capacity": "2 Children",
      "Finish": "All-Weather UV Polyurethane Powder Coating"
    },
    isFeatured: true
  },
  {
    id: "pg-children-monkey-bars-climber",
    slug: "children-monkey-bars-climber",
    name: "Children's Horizontal Monkey Bars & Overhead Ladder Climber",
    modelNo: "Model No. PG07-MB01",
    category: "playground",
    categoryName: "Playground Equipment",
    shortDescription: "Heavy-duty outdoor overhead horizontal ladder monkey bars for children's upper-body strength and climbing play.",
    fullDescription: "Manufactured by AMEY INDUSTRIES in Nashik, the Children's Horizontal Monkey Bars & Overhead Ladder Climber develops upper-body strength, grip endurance, and spatial coordination. Engineered with heavy tubular steel A-frame end ladders and horizontal overhead rungs coated in bright all-weather powder coating.",
    features: [
      "Heavy-duty tubular steel A-frame side support ladders",
      "Horizontal overhead rung ladder for brachiating and hanging movement",
      "Smooth rounded rung surfaces for safe child hand grip",
      "High-durability anti-rust UV polyurethane powder coating",
      "In-ground concrete footings for maximum operational safety"
    ],
    applications: [
      "Children's upper-body strength, arm & shoulder development",
      "Grip endurance & spatial coordination play",
      "School & public park physical fitness activity"
    ],
    suitableLocations: [
      "School & Kindergarten Playgrounds",
      "Gram Panchayat & Municipal Parks",
      "Housing Society Children's Play Areas",
      "Sports Academies & Recreation Centers"
    ],
    installationDetails: "Sub-surface concrete grouting for all vertical support legs.",
    image: "/images/playground/children-monkey-bars-climber-installation.jpg",
    gallery: [
      "/images/playground/children-monkey-bars-climber-installation.jpg"
    ],
    specifications: {
      "Model Number": "PG07-MB01",
      "Structure Material": "Heavy Grade MS Structural Pipes",
      "Finish": "All-Weather Outdoor Powder Coating",
      "User Capacity": "3-4 Children Simultaneous",
      "Target Area": "Upper Body, Arms, Shoulders & Core"
    },
    isFeatured: true
  },

  // --- INDUSTRIAL FABRICATION ---
  {
    id: "fab-custom-metalwork",
    slug: "custom-metal-structures",
    name: "Custom Metal Fabrication & Shed Structures",
    category: "industrial-fabrication",
    categoryName: "Industrial Fabrication",
    shortDescription: "Tailored steel structure fabrication, industrial sheds, frame assemblies, and architectural metalwork.",
    fullDescription: "AMEY INDUSTRIES in Nashik offers specialized industrial fabrication services according to client drawings and technical specifications. We manufacture structural frames, metal enclosures, protective sheds, and heavy equipment supports.",
    features: [
      "Precision structural steel fabrication",
      "Custom MIG/TIG welding & quality assembly",
      "Surface treatment including primer, galvanizing & industrial coating",
      "Project-specific fabrication as per engineering specifications"
    ],
    applications: [
      "Industrial facility structures",
      "Custom park structures & gazebos",
      "Equipment frames and enclosures",
      "Commercial metal installations"
    ],
    suitableLocations: [
      "Industrial Parks & Factories in Nashik & MH",
      "Infrastructure Projects",
      "Commercial Complexes"
    ],
    installationDetails: "On-site installation and field welding/bolting support where required.",
    image: "/images/fabrication/factory-yard-components.jpg",
    gallery: [
      "/images/fabrication/factory-yard-components.jpg",
      "/images/fabrication/equipment-truck-loading.jpg",
      "/images/fabrication/metal-dual-bench-fabrication.jpg",
      "/images/fabrication/bubble-wrapped-equipment-frame.jpg",
      "/images/fabrication/factory-dispatch-packaging.jpg",
      "/images/fabrication/factory-metal-components-rack.jpg",
      "/images/fabrication/teal-metal-bench-powder-coating.jpg"
    ],
    isFeatured: true
  }
];

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}
