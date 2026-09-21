export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "green-gym" | "playground" | "fabrication" | "installation";
  categoryLabel: string;
  location: string; // e.g. "Nashik, Maharashtra" or "[Location Placeholder]"
  description: string;
  equipmentSupplied: string[];
  image: string;
  gallery: string[];
  dateAdded?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "green-gym-installation-park",
    title: "Community Green Gym Installation",
    category: "green-gym",
    categoryLabel: "Green Gym",
    location: "Nashik, Maharashtra",
    description: "Supply and installation of a multi-station outdoor fitness setup designed for community health and daily exercise.",
    equipmentSupplied: [
      "Outdoor Cross Trainer",
      "Air Walker",
      "Leg Press Unit",
      "Waist Twister"
    ],
    image: "/images/projects/green-gym-installation-nashik.jpg",
    gallery: [
      "/images/projects/green-gym-installation-nashik.jpg",
      "/images/green-gym/outdoor-double-air-walker.jpg",
      "/images/green-gym/outdoor-gym-installation-grouting.jpg",
      "/images/green-gym/outdoor-parallel-bars-red-dirt.jpg",
      "/images/green-gym/parallel-bars-installation-wrapped.jpg",
      "/images/green-gym/outdoor-chest-press-rooftop.jpg",
      "/images/green-gym/outdoor-calisthenics-station-park.jpg",
      "/images/green-gym/waist-twister-revolving-stool-site.jpg",
      "/images/green-gym/multi-gym-quad-station-paver-tiles.jpg",
      "/images/green-gym/outdoor-leg-press-building-garden.jpg",
      "/images/green-gym/outdoor-air-walker-ground-site.jpg",
      "/images/green-gym/outdoor-lat-pull-down-gravel-park.jpg",
      "/images/green-gym/outdoor-sit-up-board-park-fence.jpg",
      "/images/green-gym/outdoor-air-walker-paver-plaza.jpg",
      "/images/green-gym/outdoor-waist-twister-paver-tiles.jpg",
      "/images/green-gym/waist-twister-palm-tree-park.jpg",
      "/images/green-gym/pull-up-dip-station-notecam-pimpri.jpg",
      "/images/green-gym/outdoor-air-walker-purple-yellow.jpg",
      "/images/green-gym/outdoor-fitness-cycle-concrete-grouting.jpg"
    ]
  },
  {
    id: "proj-2",
    slug: "residential-society-fitness-zone",
    title: "Residential Society Fitness & Play Zone",
    category: "installation",
    categoryLabel: "Installation",
    location: "Nashik, Maharashtra",
    description: "Complete outdoor fitness and playground equipment installation inside a residential housing society complex.",
    equipmentSupplied: [
      "Combination Outdoor Gym",
      "Children Double Swing",
      "Outdoor Benches"
    ],
    image: "/images/projects/residential-society-project.jpg",
    gallery: [
      "/images/projects/residential-society-project.jpg"
    ]
  },
  {
    id: "proj-3",
    slug: "children-playground-setup",
    title: "School & Community Playground Setup",
    category: "playground",
    categoryLabel: "Playground Equipment",
    location: "Nashik Region, MH",
    description: "Safety-tested children's playground equipment manufactured and anchored for school play areas.",
    equipmentSupplied: [
      "Multi-Play Slide Station",
      "Double Swing Set",
      "Seesaw"
    ],
    image: "/images/projects/playground-project-installation.jpg",
    gallery: [
      "/images/projects/playground-project-installation.jpg",
      "/images/playground/children-straight-slide-installation.jpg",
      "/images/playground/yellow-straight-slide-installation.jpg",
      "/images/playground/children-double-swing-active.jpg",
      "/images/playground/multi-play-combination-station.jpg",
      "/images/playground/rooftop-playground-installation.jpg",
      "/images/playground/straight-frp-slide-installation.jpg",
      "/images/playground/children-two-seater-seesaw-installation.jpg",
      "/images/playground/mini-play-combo-lawn-installation.jpg",
      "/images/playground/frp-dual-slides-yellow-red.jpg",
      "/images/playground/children-monkey-bars-climber-installation.jpg",
      "/images/playground/children-double-swing-grouting.jpg"
    ]
  },
  {
    id: "proj-4",
    slug: "custom-industrial-metalwork",
    title: "Industrial Metal Structure Fabrication",
    category: "fabrication",
    categoryLabel: "Industrial Fabrication",
    location: "Industrial Area, Nashik",
    description: "Custom heavy structural fabrication according to engineering requirements and technical drawings.",
    equipmentSupplied: [
      "Custom Metal Frames",
      "Structural Shed Supports",
      "Protective Enclosures"
    ],
    image: "/images/projects/industrial-fabrication-project.jpg",
    gallery: [
      "/images/projects/industrial-fabrication-project.jpg",
      "/images/fabrication/factory-yard-components.jpg",
      "/images/fabrication/equipment-truck-loading.jpg",
      "/images/fabrication/metal-dual-bench-fabrication.jpg",
      "/images/fabrication/factory-dispatch-packaging.jpg",
      "/images/fabrication/factory-metal-components-rack.jpg",
      "/images/fabrication/teal-metal-bench-powder-coating.jpg"
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
