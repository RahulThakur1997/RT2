import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS_LIST } from '../data/roofingData';
import { ProjectItem } from '../types';
import { ProjectLightbox } from './ProjectLightbox';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectGalleryProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Single featured project with interactive before/after comparison slider
  const project = PROJECTS_LIST[0];

  return (
    <section id="projects" className="bg-[#F8F9FA] py-20 lg:py-28 xl:py-32 border-b border-gray-200 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
        {/* SECTION HEADER & EYEBROW */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#ac0e13] uppercase tracking-widest block mb-3">
            OUR RECENT WORK
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151D45] tracking-tight leading-tight">
            Built to Protect.
            <br />
            Finished to Impress.
          </h2>
        </div>

        {/* SINGLE FEATURED PROJECT WITH INTERACTIVE SLIDER */}
        {project && (
          <div
            id="featured-project-card"
            className="bg-white rounded-[18px] shadow-lg border border-gray-200/90 overflow-hidden group transition-all duration-300 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Interactive Before and After Comparison Slider */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
                <BeforeAfterSlider
                  beforeImage={project.images?.before || '/images/project-01-before.jpg'}
                  afterImage={project.images?.after || project.image}
                  beforeAlt="Before: Weathered, aged roof tiles and compromised verge pointing in Reading"
                  afterAlt="After: Precision complete roof replacement by Keystone Roofing & Building Ltd"
                  beforeLabel="Before"
                  afterLabel="After"
                  initialPosition={50}
                  showControls={false}
                />
              </div>

              {/* Copy & Details */}
              <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-heading font-bold text-[#ac0e13] uppercase tracking-widest">
                      ROOF REPLACEMENT
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#ac0e13]" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3.5">
                    {project.heading}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Small statistics / milestones row */}
                  {project.statsRow && (
                    <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-gray-100 mb-6">
                      {project.statsRow.map((stat) => (
                        <div key={stat.number} className="text-center p-2.5 rounded-[10px] bg-gray-50 border border-gray-100/80">
                          <span className="block font-mono text-sm sm:text-base font-bold text-[#ac0e13]">
                            {stat.number}
                          </span>
                          <span className="block text-[11px] font-heading font-semibold text-gray-700 uppercase tracking-tight mt-0.5">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    id="featured-view-case-study-btn"
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#151D45] hover:bg-[#ac0e13] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-md"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </section>
  );
};
