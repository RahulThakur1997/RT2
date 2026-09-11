import { ServiceItem, ProjectItem, ReviewItem, ProcessStep } from '../types';

export const BUSINESS_INFO = {
  name: 'Keystone Roofing & Building Ltd',
  phone: '07935 250505',
  phoneIntl: '+44 7935 250505',
  telLink: 'tel:+447935250505',
  freePhone: '0800 051 8429',
  freePhoneTelLink: 'tel:08000518429',
  email: 'info@Keystone-roofing-building.co.uk',
  address: {
    line1: '116 Ballards Lane',
    line2: 'Finchley',
    city: 'London',
    postcode: 'N3 2DN',
    country: 'United Kingdom',
    fullFormatted: '116 Ballards Lane, Finchley, London, N3 2DN, United Kingdom'
  },
  primaryColor: '#242f6b',
  secondaryColor: '#ac0e13',
  establishedNote: 'Professional Workmanship across Finchley, London and surrounding areas'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'new-roofs',
    title: 'New Roof Installations',
    category: 'ROOFING',
    shortDesc: 'Complete pitched slate and tile roof replacements built to British standards.',
    fullDesc: 'From traditional slate to modern interlocking concrete tiles, we install durable pitched roofing systems designed for weather resistance and long service life.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    features: ['Natural slate & clay tile options', 'Breathable membrane installation', 'Full timber batten replacement', 'Dry ridge and verge systems']
  },
  {
    id: 'flat-roofing',
    title: 'Flat Roofing',
    category: 'ROOFING',
    shortDesc: 'High-performance fiberglass GRP, EPDM rubber and felt flat roof solutions.',
    fullDesc: 'Seamless, watertight flat roofing solutions for extensions, dormers, garages and commercial properties using long-lasting modern membranes.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    features: ['GRP fiberglass roofing', 'EPDM single-ply rubber', 'Torch-on felt systems', 'Warm roof insulation upgrades']
  },
  {
    id: 'drone-inspection',
    title: 'Drone Roof Inspection',
    category: 'ROOFING',
    shortDesc: 'High-definition aerial surveys identifying hidden damage safely without scaffolding.',
    fullDesc: 'Detailed ultra-HD photographic roof surveys pinpointing tile slippage, chimney deterioration, and valley blockages safely and cost-effectively.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
    features: ['Safe non-intrusive survey', 'Comprehensive photographic report', 'Hard-to-reach area inspection', 'Transparent repair recommendations']
  },
  {
    id: 'garage-roofs',
    title: 'Garage Roofs',
    category: 'ROOFING',
    shortDesc: 'Durable flat and pitched garage roof repairs and full overlays.',
    fullDesc: 'Specialist garage roof replacements replacing decaying timber decking and degraded corrugated or felt coverings with waterproof systems.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    features: ['Decking board renewals', 'GRP and heavy-duty felt', 'Fascia & rainwater integration', 'Condensation prevention']
  },
  {
    id: 'lead-work',
    title: 'Lead Work',
    category: 'LEAD WORK',
    shortDesc: 'Traditional lead flashing, stepped abutments, box gutters and valleys.',
    fullDesc: 'Master leadwork fabricated and dressed to BS EN 12588 standards ensuring watertight junctions around chimneys, parapets and roof joins.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    features: ['Chimney aprons & step flashings', 'Lead valley installation', 'Box gutters & secret gutters', 'Code 4 & Code 5 milled lead']
  },
  {
    id: 'roof-valleys',
    title: 'Roof Valleys',
    category: 'ROOFING',
    shortDesc: 'Valley trough replacements, lead relining and mortar bedding.',
    fullDesc: 'Water channel repair and replacement using pre-formed GRP or dressed lead to ensure efficient rainwater diversion from intersecting roof pitches.',
    image: '/images/roof-valleys.jpg',
    features: ['Leak diagnosis and resealing', 'GRP dry valley units', 'Traditional lead valley linings', 'Surrounding tile re-bedding']
  },
  {
    id: 'roof-pointing',
    title: 'Roof Pointing',
    category: 'REPAIRS',
    shortDesc: 'Repointing ridge tiles, hips, verges and parapet stonework.',
    fullDesc: 'Professional removal of cracked or perished sand/cement mortar followed by strong weather-resistant repointing or conversion to mechanical dry-fix systems.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    features: ['Ridge and hip re-pointing', 'Dry ridge system conversion', 'Gable verge mortar repair', 'Deep bonding mortar mixes']
  },
  {
    id: 'roof-repairs',
    title: 'Roof Repairs',
    category: 'REPAIRS',
    shortDesc: 'Prompt repair of slipped tiles, emergency storm damage and water leaks.',
    fullDesc: 'Reliable fault-finding and repairs to restore your roof envelope, preventing moisture ingress and timber rot before minor leaks escalate.',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1000&q=80',
    features: ['Storm damage repair', 'Slipped or broken tile replacement', 'Underlay membrane patching', 'Flashing re-securing']
  },
  {
    id: 'chimney-repairs',
    title: 'Chimney Repairs',
    category: 'CHIMNEY WORK',
    shortDesc: 'Chimney repointing, stack re-building, pots, cowl fitting and lead aprons.',
    fullDesc: 'Comprehensive chimney breast and stack restoration from re-pointing crumbling masonry to structural capping, flaunching and flashing replacements.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
    features: ['Chimney stack re-pointing', 'New chimney pot & cowl installation', 'Flaunching repair & sealing', 'Chimney removal & safe capping']
  },
  {
    id: 'guttering-downpipes',
    title: 'Guttering & Downpipes',
    category: 'GUTTERING',
    shortDesc: 'UPVC and aluminium gutter installations, replacements and downpipes.',
    fullDesc: 'Heavy-duty rainwater management systems including half-round, deep-flow, and square-line guttering configured for maximum drainage capacity.',
    image: '/images/guttering-downpipes.jpg',
    features: ['High-capacity UPVC guttering', 'Cast-iron and aluminium profiles', 'Fascia & soffit integration', 'Leak-proof rubber joint seals']
  },
  {
    id: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    category: 'GUTTERING',
    shortDesc: 'Clearing leaves, moss and debris to prevent overflowing and damp ingress.',
    fullDesc: 'Thorough gutter unblocking, downpipe flushing and debris removal ensuring free rainwater flow away from your brickwork and foundations.',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80',
    features: ['Complete leaf & moss clearance', 'Downpipe clearing & unblocking', 'Water flow testing', 'Minor clip and union checks']
  },
  {
    id: 'skylight-installation',
    title: 'Skylight Installation',
    category: 'SKYLIGHTS',
    shortDesc: 'Precision roof window and skylight installations for pitched and flat roofs.',
    fullDesc: 'Professional fitting of pitched roof windows and flat roof lanterns with integrated weathertight flashings to flood interiors with natural daylight.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    features: ['Velux and flat roof lanterns', 'Insulated flashing kits', 'Timber rafter trimming', 'Leak-proof weather collar fitment']
  },
  {
    id: 'roof-insulation',
    title: 'Roof Insulation',
    category: 'INSULATION',
    shortDesc: 'Loft and pitched roof thermal insulation helping reduce domestic heat loss.',
    fullDesc: 'Mineral wool and rigid PIR insulation installations tailored to current UK thermal regulations, lowering energy bills and preventing condensation.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    features: ['Loft roll quilt installation', 'Rigid PIR board insulation', 'Airflow & eaves ventilation trays', 'Vapour barrier membranes']
  },
  {
    id: 'restec-systems',
    title: 'RESTEC Roofing Systems',
    category: 'ROOFING',
    shortDesc: 'Certified cold-applied polyurethane and liquid GRP roofing applications.',
    fullDesc: 'Advanced liquid-applied seamless waterproofing systems ideal for complex flat roof shapes, balconies, walkways, and commercial roofing structures.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    features: ['Flame-free cold applied resin', 'Seamless flexible membrane', 'Exceptional UV & weather resistance', 'Ideal for complex penetrations']
  }
];

export const SERVICE_CATEGORIES: { id: string; label: string }[] = [
  { id: 'ALL', label: 'ALL SERVICES' },
  { id: 'ROOFING', label: 'ROOFING' },
  { id: 'REPAIRS', label: 'REPAIRS' },
  { id: 'GUTTERING', label: 'GUTTERING' },
  { id: 'CHIMNEY WORK', label: 'CHIMNEY WORK' },
  { id: 'LEAD WORK', label: 'LEAD WORK' },
  { id: 'SKYLIGHTS', label: 'SKYLIGHTS' },
  { id: 'INSULATION', label: 'INSULATION' }
];

export const WHY_CHOOSE_BENEFITS = [
  {
    title: 'QUALITY WORKMANSHIP',
    description: 'Every project is approached with care, attention to detail and a focus on delivering lasting results.'
  },
  {
    title: 'CLEAR & HONEST ADVICE',
    description: 'We explain the condition of your roof and the work required, helping you make an informed decision without unnecessary pressure.'
  },
  {
    title: 'RELIABLE SERVICE',
    description: 'From initial enquiry through to completion, we aim to keep the process clear, professional and straightforward.'
  },
  {
    title: 'QUALITY MATERIALS',
    description: 'We use suitable, proven roofing materials and professional installation methods to help ensure long-lasting performance.'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'project-roof-replacement',
    projectNumber: '',
    title: 'Roof Replacement',
    projectType: 'Roof Replacement',
    category: 'ROOF REPLACEMENT',
    location: 'Reading, Berkshire',
    heading: 'A Complete Roof Renewal Built for Long-Term Protection',
    cardCopy: 'Full roof replacement focused on long-term weather protection and a clean, professional finish.',
    description:
      'When an ageing roof begins showing signs of deterioration, patch repairs can only go so far. For this property, Keystone Roofing & Building carried out a complete roof replacement, removing the existing roof and installing a new roofing system designed to provide dependable protection for years to come.',
    challenge:
      'The property had an aging tile structure with perished underlay, degraded timber battens, and recurring water ingress into the roof void during heavy rain. Patch repairs were no longer providing reliable protection.',
    approach:
      'Keystone Roofing & Building designed a complete strip and renewal strategy. We safely scaffolded the property, stripped the deteriorated tiles down to bare rafters, installed a modern breathable membrane, treated timber battens, and laid new durable tiles with dry-fix systems.',
    workCarriedOut: [
      'Existing roof removal',
      'Roof preparation',
      'Replacement roofing system',
      'New roofline detailing',
      'Weatherproofing',
      'Final finishing and clean-up'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Complete roof survey, structural timber evaluation, and specification.' },
      { step: '02', title: 'Preparation', detail: 'Safe scaffold erection and clean removal of old compromised tiles and battens.' },
      { step: '03', title: 'Installation', detail: 'High-grade breathable underlay membrane and pressure-treated timber battens.' },
      { step: '04', title: 'Finishing', detail: 'Precision tile alignment, dry verge systems, and weather-tight dry ridge fixings.' },
      { step: '05', title: 'Final Inspection', detail: 'Thorough water-shedding checks, site clean-up, and homeowner sign-off.' }
    ],
    result:
      'A refreshed roof with improved protection, a cleaner appearance and renewed confidence for the homeowner.',
    statsRow: [
      { number: '01', label: 'Roof Replacement' },
      { number: '02', label: 'Weatherproofing' },
      { number: '03', label: 'Roofline Works' }
    ],
    isFeatured: true,
    image: '/images/project-01-after.jpg',
    images: {
      after: '/images/project-01-after.jpg',
      before: '/images/project-01-before.jpg',
      inProgress: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Completed replacement roof with aligned verge and weather-tight dry ridge system.',
      beforeCaption: 'Original degraded tiles showing surface erosion and loose verge pointing.',
      inProgressCaption: 'Stripped timber structure with breathable membrane and treated battens installed.'
    }
  },
  {
    id: 'project-02',
    projectNumber: '02',
    title: 'Flat Roof Repair & Renewal',
    projectType: 'Flat Roofing',
    category: 'FLAT ROOFING',
    location: 'Wokingham, Berkshire',
    heading: 'Solving a Persistent Flat Roof Problem',
    cardCopy: 'Targeted repair and waterproofing work to restore a tired flat roof.',
    description:
      'Flat roofs can develop leaks and deterioration that aren\'t always immediately visible. Keystone Roofing & Building assessed the affected area, identified the source of the problem and carried out the necessary repair and renewal work to restore the roof\'s weather resistance.',
    challenge:
      'Hidden standing water and cracked mineral felt on a rear extension were causing interior damp patches after continuous rainfall.',
    approach:
      'We located the leak source, removed degraded layers, replaced softened deck boards with 18mm exterior-grade OSB3, and applied a modern multi-layer seamless waterproofing system with pre-formed perimeter trims.',
    workCarriedOut: [
      'Roof inspection',
      'Leak investigation',
      'Damaged area repair',
      'Waterproofing',
      'Flashing/detailing',
      'Final inspection'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Thermal leak investigation and deck condition testing.' },
      { step: '02', title: 'Preparation', detail: 'Stripping failed felt and replacing defective timber decking.' },
      { step: '03', title: 'Installation', detail: 'High-performance seamless waterproof membrane installation.' },
      { step: '04', title: 'Finishing', detail: 'Heavy-duty drip edge trims and neat lead flashing abutments.' },
      { step: '05', title: 'Final Inspection', detail: 'Water flow verification and drainage slope confirmation.' }
    ],
    result:
      'A properly repaired flat roof with improved weather protection and a clean, finished appearance.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Finished seamless flat roof with pristine drip trims and zero water retention.',
      beforeCaption: 'Failed roofing felt with surface cracking and water pooling.',
      inProgressCaption: 'Installation of fresh structural deck and priming for waterproof membrane.'
    }
  },
  {
    id: 'project-03',
    projectNumber: '03',
    title: 'Roof Repair & Restoration',
    projectType: 'Roof Repair',
    category: 'ROOF REPAIR',
    location: 'Reading, Berkshire',
    heading: 'Restoring a Roof Without Replacing What Didn\'t Need Replacing',
    cardCopy: 'Targeted repairs to restore an existing roof while avoiding unnecessary replacement.',
    description:
      'Not every roofing problem requires a complete replacement. For this property, Keystone Roofing & Building focused on the areas that needed attention, carrying out targeted repairs to restore the roof while avoiding unnecessary work.',
    challenge:
      'Broken tiles and perished valley mortar were permitting water to track into the cavity, while the rest of the roof structure remained in solid, salvageable condition.',
    approach:
      'Rather than advising a costly unnecessary reroof, Keystone performed an honest, focused repair: sourcing matched replacement tiles, fixing slipped slates, and replacing worn valley leadwork.',
    workCarriedOut: [
      'Roof inspection',
      'Damaged tile replacement',
      'Repair to affected areas',
      'Flashing repairs',
      'Weatherproofing',
      'Final roof inspection'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Precise tile condition map identifying defective units.' },
      { step: '02', title: 'Preparation', detail: 'Careful extraction of cracked units without disturbing neighbouring tiles.' },
      { step: '03', title: 'Repair', detail: 'Fitting matched replacement tiles and refixing loose battens.' },
      { step: '04', title: 'Weatherproofing', detail: 'Lead flashing realignment and mortar re-pointing where necessary.' },
      { step: '05', title: 'Final Inspection', detail: 'Integrity check across all valleys and verges.' }
    ],
    result:
      'A repaired and weather-resistant roof with the existing structure retained wherever possible.',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Restored roof pitch with seamless matching tiles and secure fixings.',
      beforeCaption: 'Damaged and slipped tiles causing water seepage into felt underlay.',
      inProgressCaption: 'Targeted tile replacement and local batten renewal.'
    }
  },
  {
    id: 'project-04',
    projectNumber: '04',
    title: 'Roofline & Guttering Upgrade',
    projectType: 'Roofline & Guttering',
    category: 'ROOFLINE & GUTTERING',
    location: 'Berkshire',
    heading: 'A Cleaner Roofline. Better Water Management.',
    cardCopy: 'Roofline and rainwater improvements for a cleaner, more functional exterior.',
    description:
      'Damaged or ageing roofline and guttering can affect more than the appearance of a property. This project focused on improving the roofline and rainwater management system while giving the exterior a cleaner, more finished appearance.',
    challenge:
      'Perished timber fascias and warped guttering caused overflowing during storms, soaking the brickwork and threatening damp ingress.',
    approach:
      'We dismantled the worn timber fascias, inspected rafter tails for rot, and installed low-maintenance uPVC fascias, soffits, and high-capacity deep-flow guttering.',
    workCarriedOut: [
      'Guttering replacement',
      'Roofline improvements',
      'Fascia/soffit work where required',
      'Downpipe improvements',
      'Sealing and finishing',
      'Final clean-up'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Roofline fall gradient and rafter tail rot check.' },
      { step: '02', title: 'Preparation', detail: 'Removal and disposal of rotten timber fascias and old guttering.' },
      { step: '03', title: 'Installation', detail: 'Fitting durable uPVC fascia boards, ventilated soffits, and brackets.' },
      { step: '04', title: 'Finishing', detail: 'High-capacity deep-flow gutters and aligned downpipes.' },
      { step: '05', title: 'Final Inspection', detail: 'Water flow testing ensuring rapid, uninterrupted drainage.' }
    ],
    result:
      'A sharper-looking roofline with improved rainwater management and a more complete exterior finish.',
    image: '/images/roofline-water-mgmt.jpg',
    images: {
      after: '/images/roofline-water-mgmt.jpg',
      before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Clean modern deep-flow guttering and crisp white fascias.',
      beforeCaption: 'Aged discoloured gutters pulling away from rotting timber boards.',
      inProgressCaption: 'Rafter tail reinforcement and ventilated soffit installation.'
    }
  },
  {
    id: 'project-05',
    projectNumber: '05',
    title: 'New Roof Installation',
    projectType: 'New Roofing',
    category: 'ROOF REPLACEMENT',
    location: 'Arborfield / Reading',
    heading: 'A New Roof From the Ground Up',
    cardCopy: 'A new roof delivered with correct preparation, precise installation and a clean final finish.',
    description:
      'For this property, Keystone Roofing & Building delivered a new roofing installation with a focus on correct preparation, precise installation and a clean final finish.',
    challenge:
      'A large property requiring a brand-new pitched roof assembly with strict ventilation compliance, intricate valley junctions, and architectural curb appeal.',
    approach:
      'Our team measured pitches meticulously, installed high-performance breathable felt, treated battens, precision-cut tiles, and integrated dry-verge capping for maintenance-free longevity.',
    workCarriedOut: [
      'Roof preparation',
      'Roofing installation',
      'Roofline detailing',
      'Weatherproofing',
      'Finishing work',
      'Site clean-up'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Architectural drawings review, rafter calculation, and tile matching.' },
      { step: '02', title: 'Preparation', detail: 'Precision batten spacing and breathable roofing underlay fixing.' },
      { step: '03', title: 'Installation', detail: 'Laying interlocking weather-resistant tiles across all elevations.' },
      { step: '04', title: 'Finishing', detail: 'Installing ventilated dry-ridge system and mechanical dry verges.' },
      { step: '05', title: 'Final Inspection', detail: 'Comprehensive structural check and site clearance.' }
    ],
    result:
      'A new, professionally finished roof that complements the property while providing dependable protection from the elements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'New pitched roof complete with premium tiles and clean architectural lines.',
      beforeCaption: 'Framework awaiting roof covering and weather-proofing installation.',
      inProgressCaption: 'Precision battening and vapor-permeable membrane installation.'
    }
  },
  {
    id: 'project-06',
    projectNumber: '06',
    title: 'Exterior Building Improvements',
    projectType: 'Building & Exterior Works',
    category: 'BUILDING & EXTERIOR',
    location: 'Berkshire',
    heading: 'Improving More Than What\'s Above Your Head',
    cardCopy: 'Combining roofing expertise with exterior building works for a consistent, high-quality finish.',
    description:
      'Keystone Roofing & Building combines roofing expertise with wider building capabilities, allowing homeowners to address related exterior works through one experienced team. For this project, the focus was on improving the property\'s exterior while maintaining a consistent, high-quality finish across the completed works.',
    challenge:
      'The property suffered from cracking exterior render, weathered chimney brickwork, and loose gable pointing that created vulnerabilities around the roof structure.',
    approach:
      'Keystone integrated building masonry repairs with roof perimeter sealing, repointing the chimney stack, renewing gable verge pointing, and weather-proofing vulnerable exterior surfaces.',
    workCarriedOut: [
      'Exterior building works',
      'Repairs and preparation',
      'Roofing-related improvements',
      'Finishing work',
      'Final inspection'
    ],
    processSteps: [
      { step: '01', title: 'Assessment', detail: 'Exterior masonry survey and thermal envelope inspection.' },
      { step: '02', title: 'Preparation', detail: 'Chipping back loose mortar and cleaning brick surfaces.' },
      { step: '03', title: 'Repairs', detail: 'Masonry repointing, brick replacement, and gable verge stabilization.' },
      { step: '04', title: 'Finishing', detail: 'Application of breathable weather-shield sealant and neat trim work.' },
      { step: '05', title: 'Final Inspection', detail: 'Handover inspection of all exterior walls and roof junctions.' }
    ],
    result:
      'A cleaner, more complete exterior with the necessary improvements handled by one team.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Repointed chimney stack and rejuvenated brickwork along roof abutments.',
      beforeCaption: 'Perished mortar joints and frost-damaged chimney brickwork.',
      inProgressCaption: 'Scaffolding access for chimney repointing and lead flashing fitting.'
    }
  },
  {
    id: 'project-07',
    projectNumber: '07',
    title: 'Storm Damage Repair',
    projectType: 'Emergency Roof Repair',
    category: 'ROOF REPAIR',
    location: 'Reading, Berkshire',
    heading: 'From Storm Damage to Secure Again',
    cardCopy: 'Fast response restoring weather resistance and safety following severe storm winds.',
    description:
      'When severe weather compromises a roof, the priority is to make the property secure and prevent further damage. Keystone Roofing & Building assessed the affected areas and carried out the necessary repair work to restore the roof\'s protection.',
    challenge:
      'High winds had torn off ridge tiles, displaced several courses of slate, and exposed the roof void to wind-driven rain, posing an immediate threat to ceilings below.',
    approach:
      'We deployed an emergency crew to make the roof water-tight on day one, sourced matching reclaimed slates, and re-secured the ridge line with mechanical dry-fix security.',
    workCarriedOut: [
      'Roof damage assessment',
      'Damaged tile replacement',
      'Roof repairs',
      'Weatherproofing',
      'Flashing/detail repairs',
      'Final inspection'
    ],
    processSteps: [
      { step: '01', title: 'Emergency Assessment', detail: 'Rapid on-site survey and immediate tarping to stop ingress.' },
      { step: '02', title: 'Preparation', detail: 'Removing debris and checking rafter and underlay integrity.' },
      { step: '03', title: 'Repair', detail: 'Re-nailing slipped slates with copper nails and replacing shattered units.' },
      { step: '04', title: 'Weatherproofing', detail: 'Refitting ridge tiles and checking adjacent flashing details.' },
      { step: '05', title: 'Final Inspection', detail: 'Full roof check to verify all tiles are firmly locked down.' }
    ],
    result:
      'The affected areas were repaired and the property was restored to a secure, weather-resistant condition.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Secured roof with restored ridge and all storm-damaged slates replaced.',
      beforeCaption: 'Wind-blown slates and exposed roof timbers immediately following the storm.',
      inProgressCaption: 'Emergency waterproof sheeting and selective timber batten repair.'
    }
  },
  {
    id: 'project-08',
    projectNumber: '08',
    title: 'Full Roof & Exterior Refresh',
    projectType: 'Roofing & Building',
    category: 'BUILDING & EXTERIOR',
    location: 'Berkshire',
    heading: 'A Complete Exterior Refresh',
    cardCopy: 'Whole-house approach combining roofing and exterior works for lasting performance.',
    description:
      'This project combined roofing and exterior improvements to give the property a more complete transformation. Rather than treating each issue individually, Keystone Roofing & Building approached the property as a whole to ensure the finished work looked cohesive and performed properly.',
    challenge:
      'Decades of disjointed patch repairs had left the property with mismatched roof tiles, failing lead flashings, and stained roofline fascias that spoiled the home\'s aesthetic and durability.',
    approach:
      'Keystone addressed the building holistically: overhauling the roof covering, renewing lead abutments, installing sleek new roofline systems, and giving exterior details a crisp, unified finish.',
    workCarriedOut: [
      'Whole-roof assessment',
      'Tile and batten restoration',
      'Chimney & leadwork repointing',
      'Guttering and fascia overhaul',
      'Exterior masonry weatherproofing',
      'Final handover & warranty check'
    ],
    processSteps: [
      { step: '01', title: 'Survey', detail: 'Complete property review of roofline, tile condition, and masonry.' },
      { step: '02', title: 'Preparation', detail: 'Comprehensive site staging and safe disposal of redundant materials.' },
      { step: '03', title: 'Roof Renewal', detail: 'Tile realignment, underlay repair, and lead flashing refit.' },
      { step: '04', title: 'Roofline & Exterior', detail: 'New uPVC fascias, soffits, gutters, and masonry protection.' },
      { step: '05', title: 'Final Handover', detail: 'Detailed property walk-through and long-term guarantee handover.' }
    ],
    result:
      'A refreshed exterior, improved protection and a finished result designed to stand the test of time.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    images: {
      after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      inProgress: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      afterCaption: 'Cohesive exterior with brand-new roofline, refreshed tiles, and weather-sealed finish.',
      beforeCaption: 'Uneven tile shades, leaking gutter joins, and weathered timber fascias.',
      inProgressCaption: 'Simultaneous roofline replacement and chimney repointing work.'
    }
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    customerName: 'David Morrison',
    location: 'Caversham, Reading',
    rating: 5,
    projectType: 'Roof Repair & Leak Fix',
    review: 'Keystone were professional from start to finish. The work was explained clearly and everything was left clean and tidy.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    customerName: 'Sarah Jenkins',
    location: 'Earley, Reading',
    rating: 5,
    projectType: 'Guttering Replacement',
    review: 'Very happy with the work. Communication was excellent and the roofing team were punctual and professional.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    customerName: 'Mark Butterworth',
    location: 'Arborfield Cross',
    rating: 5,
    projectType: 'Flat Roof Installation',
    review: 'The team arrived on time, completed the flat roof renewal within the agreed timeframe, and provided clear before-and-after photographs.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-4',
    customerName: 'Emma & Richard Collins',
    location: 'Wokingham Area',
    rating: 5,
    projectType: 'Chimney & Lead Work',
    review: 'Honest advice regarding our chimney leak. No hard sell, straightforward quotation, and the work stood up well during recent heavy rain.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-5',
    customerName: 'James Henderson',
    location: 'Woodley, Reading',
    rating: 5,
    projectType: 'Tile Replacement',
    review: 'Outstanding craftsmanship replacing broken tiles on our terrace roof. Punctual, polite, and great value for money.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-6',
    customerName: 'Claire Davies',
    location: 'Tilehurst, Reading',
    rating: 5,
    projectType: 'Fascias & Soffits',
    review: 'Replaced our worn wooden fascias with modern uPVC. The property looks completely refreshed and the finish is immaculate.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-7',
    customerName: 'Peter Walsh',
    location: 'Bracknell',
    rating: 5,
    projectType: 'Complete Re-roofing',
    review: 'Major roofing renewal carried out with minimal disruption to the family. Daily progress updates and meticulous cleanup each day.',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-8',
    customerName: 'Helen Thorne',
    location: 'Twyford',
    rating: 5,
    projectType: 'Emergency Leak Repair',
    review: 'Responded same-day during high winds to secure loose ridge tiles and stop water ingress. Thoroughly dependable and honest.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

export const SERVICE_AREAS = [
  'Reading',
  'Arborfield Cross',
  'Wokingham',
  'Shinfield',
  'Winnersh',
  'Earley',
  'Woodley',
  'Twyford',
  'Spencers Wood',
  'Finchampstead',
  'Barkham',
  'Sindlesham'
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'CONTACT US',
    description: 'Tell us what you need help with by phone or through our online enquiry form.',
    iconName: 'phone'
  },
  {
    stepNumber: '02',
    title: 'ARRANGE AN INSPECTION',
    description: "Where required, we'll arrange a convenient time to assess the roof and understand the work needed.",
    iconName: 'clipboard-check'
  },
  {
    stepNumber: '03',
    title: 'RECEIVE YOUR QUOTE',
    description: "We'll explain the recommended work and provide a clear quotation.",
    iconName: 'file-text'
  },
  {
    stepNumber: '04',
    title: 'BOOK YOUR WORK',
    description: "Once you're happy to proceed, we'll arrange a suitable time for the work.",
    iconName: 'calendar'
  },
  {
    stepNumber: '05',
    title: 'QUALITY COMPLETION',
    description: 'We complete the agreed work carefully and professionally.',
    iconName: 'shield-check'
  }
];
