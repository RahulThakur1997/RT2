export interface RoofMaterial {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  benefits: string;
}

export interface NewRoofFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export const NEW_ROOF_BENEFITS: BenefitItem[] = [
  {
    title: 'Protect your property from weather damage',
    description: 'Modern roofing membranes and precision-laid tiles defend against driving rain, gale-force winds, and winter frost.'
  },
  {
    title: 'Reduce the risk of leaks',
    description: 'Eliminate chronic water ingress, failing mortar, and deteriorating underlays with a brand-new, watertight installation.'
  },
  {
    title: 'Improve energy efficiency',
    description: 'Modern breathable felt and upgraded insulation reduce thermal loss through the roof space, lowering household heating bills.'
  },
  {
    title: 'Improve the appearance of your home',
    description: 'A newly tiled or slated roof significantly elevates exterior kerb appeal and complements the architectural style of your home.'
  },
  {
    title: 'Strengthen the roof structure',
    description: 'We inspect, reinforce, and replace deteriorated rafters, wall plates, and timber battens during the installation process.'
  },
  {
    title: 'Increase long-term property value',
    description: 'A certified, newly installed roof provides prospective buyers with total confidence and protects your capital investment.'
  },
  {
    title: 'Improve weather resistance',
    description: 'Modern dry ridge, dry verge, and lead flashing systems eliminate cracked mortar bedding permanently.'
  },
  {
    title: 'Reduce ongoing repair requirements',
    description: 'Save substantial money and hassle by replacing a tired roof rather than paying for recurrent, piecemeal emergency repairs.'
  }
];

export const SERVICE_LOCATIONS: string[] = [
  'Reading',
  'Arborfield',
  'Wokingham',
  'Woodley',
  'Earley',
  'Shinfield',
  'Caversham',
  'Tilehurst',
  'Pangbourne',
  'Theale',
  'Twyford',
  'Sonning',
  'Bracknell',
  'Finchampstead',
  'Warfield',
  'Maidenhead',
  'Basingstoke',
  'Newbury',
  '+ surrounding areas'
];

export const ROOF_MATERIALS: RoofMaterial[] = [
  {
    id: 'concrete-tiles',
    name: 'Concrete Roof Tiles',
    description: 'Exceptionally durable and cost-effective, offering outstanding weather resistance in diverse profiles.',
    imageUrl: 'https://images.unsplash.com/photo-1584463699039-4d6408222956?auto=format&fit=crop&w=600&q=80',
    benefits: '50+ year lifespan • High impact resistance'
  },
  {
    id: 'clay-tiles',
    name: 'Clay Roof Tiles',
    description: 'Timeless British architectural character with rich natural colouration that matures beautifully with age.',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80',
    benefits: 'Authentic heritage finish • Colourfast natural clay'
  },
  {
    id: 'slate-roofing',
    name: 'Slate Roofing',
    description: 'Premium natural Welsh, Spanish, and man-made slates known for unmatched elegance and longevity.',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80',
    benefits: 'Over 80–100 year lifespan • Fire & rot impervious'
  },
  {
    id: 'interlocking-tiles',
    name: 'Interlocking Tiles',
    description: 'Fast, secure installation with precision side and head locks ideal for modern pitched roof geometries.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    benefits: 'Superior water runoff • Clean contemporary lines'
  },
  {
    id: 'plain-tiles',
    name: 'Plain Tiles',
    description: 'Double-lap traditional small tiles creating delicate texture, ideal for steep pitches, hips, and dormers.',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=600&q=80',
    benefits: 'Classic British profile • Superb versatility on complex roofs'
  },
  {
    id: 'metal-roofing',
    name: 'Metal Roofing',
    description: 'Modern standing-seam zinc, copper, and coated aluminium providing lightweight, architectural aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=600&q=80',
    benefits: 'Ultra-lightweight • Ideal for contemporary designs & low pitches'
  }
];

export const NEW_ROOF_FAQS: NewRoofFAQ[] = [
  {
    id: 'why-new-roof',
    question: 'Why would I need a new roof?',
    answer: 'A roof replacement is typically required when your existing covering has reached the end of its serviceable life (typically 40–70+ years depending on materials), has sustained severe storm or frost damage, or suffers from porous tiles, rotted battens, and failing underlay. Replacing the entire roof is often far more cost-effective than continuous patch repairs.'
  },
  {
    id: 'how-to-know',
    question: 'How do I know if my roof needs replacing?',
    answer: 'Common warning signs include daylight visible in the loft, persistent internal ceiling damp, recurring loose or cracked slates, sagging roof lines, deteriorated mortar along the ridge and verges, and heavy moss accumulation trapping moisture against aged tiles. Keystone provides thorough inspections with photographic reports to advise you honestly.'
  },
  {
    id: 'how-long-install',
    question: 'How long does a new roof installation take?',
    answer: 'An average semi-detached or detached residential roof replacement takes between 3 to 7 working days, subject to weather conditions and property complexity. We ensure scaffolding is erected safely beforehand and that the roof structure remains completely waterproof and sheeted down at the end of every working day.'
  },
  {
    id: 'how-long-last',
    question: 'How long should a new roof last?',
    answer: 'When installed by our experienced team using high-grade treated timber battens, breathable underlays, and quality coverings, concrete tile roofs typically last 50–60 years, while natural slate and clay tile roofs can easily exceed 80 to 100 years of reliable service.'
  },
  {
    id: 'what-materials',
    question: 'What types of roofing materials can you install?',
    answer: 'Keystone installs all primary UK roofing materials, including natural slate, interlocking concrete tiles, traditional plain clay tiles, pantiles, fibre-cement slates, and architectural metal roofing. We also integrate dry ridge, dry verge, lead valleys, and new UPVC rainwater systems.'
  },
  {
    id: 'commercial-properties',
    question: 'Do you provide new roofs for commercial properties?',
    answer: 'Yes. In addition to private residential homeowners, we regularly install new pitched and flat roofs for commercial premises, residential landlords, property management companies, schools, community buildings, and agricultural conversions across Berkshire.'
  },
  {
    id: 'cost-new-roof',
    question: 'How much does a new roof cost?',
    answer: 'The cost of a new roof depends on the property dimensions, pitch, choice of covering (such as concrete tile versus natural Welsh slate), access requirements, scaffolding, and whether timber repairs or chimney works are needed. Keystone provides transparent, fixed-price itemised quotations without any hidden charges or high-pressure sales tactics.'
  }
];

export const SERVICE_REVIEWS_NEW_ROOF = [
  {
    id: 'rev-nr-1',
    customerName: 'David Morrison',
    location: 'Caversham, Reading',
    timeAgo: '2 months ago',
    rating: 5,
    projectType: 'Full Roof Replacement',
    review: 'Keystone replaced our entire slate roof following winter storms. The team arrived promptly each morning, worked cleanly, and left the scaffolding area tidy every night. The finished roof looks superb and has stood up brilliantly to heavy rainfall.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-nr-2',
    customerName: 'Sarah Jenkins',
    location: 'Earley, Reading',
    timeAgo: '3 months ago',
    rating: 5,
    projectType: 'Clay Tile New Roof',
    review: 'From initial quotation to the final tile, Keystone delivered outstanding workmanship. They replaced old battens, installed high-spec breathable membrane, and fitted beautiful clay tiles that matched our 1930s property perfectly.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-nr-3',
    customerName: 'Mark Butterworth',
    location: 'Arborfield Cross',
    timeAgo: '4 months ago',
    rating: 5,
    projectType: 'Concrete Tile Installation',
    review: 'Delighted with our new roof. Honest pricing, clear daily updates, and completed ahead of schedule. The dry ridge system looks very smart and gives us complete peace of mind for decades to come.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-nr-4',
    customerName: 'Emma & Richard Collins',
    location: 'Wokingham Area',
    timeAgo: '5 months ago',
    rating: 5,
    projectType: 'Pitched Roof Renewal & Leadwork',
    review: 'Keystone handled our complete pitched roof renewal including new chimney lead flashings and guttering. Professional, polite, and very respectful of our family home. Would recommend them without hesitation.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
];
