import React, { useState, useEffect } from 'react';
import {
  X,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  AlertTriangle,
  Lightbulb,
  Wrench,
  CheckCheck,
  Calendar,
  Layers
} from 'lucide-react';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { BUSINESS_INFO } from '../data/roofingData';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

type PhotoStage = 'slider' | 'after' | 'inProgress' | 'before';

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onOpenQuoteModal
}) => {
  const hasSlider = Boolean(project?.images?.before && project?.images?.after);
  const [activeStage, setActiveStage] = useState<PhotoStage>(hasSlider ? 'slider' : 'after');

  // Reset stage to 'slider' or 'after' when opening a different project
  useEffect(() => {
    if (project?.id === 'project-01' || (project?.images?.before && project?.images?.after)) {
      setActiveStage('slider');
    } else {
      setActiveStage('after');
    }
  }, [project?.id, project?.images?.before, project?.images?.after]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Determine current display photo and caption
  let currentPhoto = project.image;
  let currentCaption = project.images?.afterCaption || 'Completed project finish.';
  let stageLabel = 'Completed Result';

  if (activeStage === 'before' && project.images?.before) {
    currentPhoto = project.images.before;
    currentCaption = project.images.beforeCaption || 'Condition of the roof prior to works commencing.';
    stageLabel = 'Before Works Commenced';
  } else if (activeStage === 'inProgress' && project.images?.inProgress) {
    currentPhoto = project.images.inProgress;
    currentCaption = project.images.inProgressCaption || 'Work in progress showing craftsmanship and preparation.';
    stageLabel = 'Work In Progress';
  } else if (project.images?.after) {
    currentPhoto = project.images.after;
    currentCaption = project.images.afterCaption || 'Completed project finish.';
    stageLabel = 'Completed Finished Result';
  }

  return (
    <div
      id="project-lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B1028]/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-lightbox-card"
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="bg-[#040205] text-white px-5 sm:px-7 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            {project.projectNumber ? (
              <span className="w-7 h-7 rounded-md bg-[#C80103] font-mono text-xs font-bold flex items-center justify-center text-white">
                {project.projectNumber}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-md bg-[#C80103] font-heading text-xs font-bold text-white uppercase tracking-wider">
                Roof Replacement
              </span>
            )}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-red-300">
                CASE STUDY PROOF OF WORK
              </p>
              <h2 className="text-sm sm:text-base font-heading font-bold text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            id="lightbox-close-header-btn"
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C80103] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 divide-y divide-gray-100">
          {/* SECTION 01 — Project Overview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-[#040205] text-white font-heading font-bold text-xs tracking-wider uppercase">
                  {project.projectType}
                </span>
                <span className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  <MapPin className="w-3.5 h-3.5 text-[#C80103]" />
                  {project.location}
                </span>
              </div>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Verified A T Roofing Case Study
              </span>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 leading-snug">
                {project.heading}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* VISUAL PROOF: BEFORE → WORK IN PROGRESS → AFTER SWITCHER */}
          <div className="pt-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C80103] font-semibold">
                  Visual Documentation
                </span>
                <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900">
                  Proof of Work: Before, In-Progress & Result
                </h3>
              </div>

              {/* Photo Stage Selector Tabs */}
              <div className="inline-flex rounded-lg bg-gray-100 p-1 border border-gray-200 shrink-0 self-start sm:self-auto flex-wrap gap-1">
                {hasSlider && (
                  <button
                    type="button"
                    onClick={() => setActiveStage('slider')}
                    className={`px-3 py-1.5 rounded-md text-xs font-heading font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      activeStage === 'slider'
                        ? 'bg-[#C80103] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Interactive Slider
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setActiveStage('before')}
                  className={`px-3 py-1.5 rounded-md text-xs font-heading font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeStage === 'before'
                      ? 'bg-[#C80103] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  01. Before
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStage('inProgress')}
                  className={`px-3 py-1.5 rounded-md text-xs font-heading font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeStage === 'inProgress'
                      ? 'bg-[#040205] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  02. In-Progress
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStage('after')}
                  className={`px-3 py-1.5 rounded-md text-xs font-heading font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeStage === 'after'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  03. After Result
                </button>
              </div>
            </div>

            {/* Photo Stage Viewer Card or Slider */}
            {activeStage === 'slider' && hasSlider ? (
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-gray-200 shadow-md">
                <BeforeAfterSlider
                  beforeImage={project.images!.before!}
                  afterImage={project.images!.after!}
                  beforeAlt={`Before roof works - ${project.title}`}
                  afterAlt={`After roof works - ${project.title}`}
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden bg-gray-950 border border-gray-200 relative group">
                <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden">
                  <img
                    src={currentPhoto}
                    alt={`${project.title} - ${stageLabel}`}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Stage Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-heading font-bold uppercase tracking-wider text-white shadow-md ${
                        activeStage === 'before'
                          ? 'bg-[#C80103]'
                          : activeStage === 'inProgress'
                          ? 'bg-[#040205]'
                          : 'bg-emerald-700'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      {stageLabel}
                    </span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
                    <p className="text-xs sm:text-sm font-medium text-gray-100">
                      {currentCaption}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 02 & 03 — The Challenge & Our Approach */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Challenge */}
            <div className="p-5 rounded-lg bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-heading font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>02 — The Challenge</span>
              </div>
              <h4 className="font-heading font-bold text-base text-gray-900">
                The Property Problem
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Our Approach */}
            <div className="p-5 rounded-lg bg-red-50/60 border border-red-200/80 space-y-2">
              <div className="flex items-center gap-2 text-[#040205] font-heading font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#C80103] shrink-0" />
                <span>03 — Our Approach</span>
              </div>
              <h4 className="font-heading font-bold text-base text-gray-900">
                A T Roofing&apos;s Solution
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* SECTION 04 — The Work: Numbered Process & Checklist */}
          <div className="pt-6 space-y-5">
            <div className="flex items-center gap-2 text-[#C80103] font-heading font-bold text-xs uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-[#C80103] shrink-0" />
              <span>04 — The Work Undertaken</span>
            </div>

            {/* Numbered Process Row */}
            {project.processSteps && project.processSteps.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {project.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-[#C80103] block mb-1">
                        STEP {step.step}
                      </span>
                      <h5 className="font-heading font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                        {step.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-2 leading-normal">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Bulleted checklist */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-xs font-heading font-bold uppercase tracking-wider text-gray-600 mb-3">
                Key Deliverables & Specifications
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.workCarriedOut.map((work, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{work}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 05 — The Result */}
          <div className="pt-6">
            <div className="p-5 rounded-lg bg-emerald-50/70 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-heading font-bold text-xs uppercase tracking-wider">
                <CheckCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>05 — The Finished Result</span>
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-emerald-950">
                Lasting Weather Protection & Complete Peace of Mind
              </h4>
              <p className="text-emerald-900 text-xs sm:text-sm leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* SECTION 06 — Ready to Discuss Your Property? CTA */}
          <div className="pt-6 bg-[#040205] text-white p-6 sm:p-8 rounded-xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold">
              06 — Next Step
            </span>
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Ready to Discuss Your Property?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
                Your roof doesn&apos;t have to wait until there&apos;s a problem. Talk to A T Roofing Birmingham about your next project in Birmingham, Solihull, Sutton Coldfield, or across the West Midlands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                id="case-study-quote-btn"
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(`${project.title} (${project.projectType})`);
                }}
                className="px-6 py-3.5 rounded-lg bg-[#C80103] hover:bg-[#a50102] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.telLink}
                id="case-study-call-btn"
                className="px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
