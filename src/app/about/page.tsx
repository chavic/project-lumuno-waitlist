"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { LinkButton } from "@/ui/components/LinkButton";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherHeart, FeatherSend } from "@subframe/core";

function FounderProfilesPage() {
  return (
    <DefaultPageLayout>
      <div className="flex w-full cursor-pointer flex-col items-center bg-default-background">
        <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-32 bg-gradient-to-b via-transparent to-transparent mobile:px-6 mobile:py-20">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[56px] font-[700] leading-[62px] text-brand-700 text-center -tracking-[0.04em] mobile:font-['Afacad_Flux'] mobile:text-[40px] mobile:font-[400] mobile:leading-[48px] mobile:tracking-normal">
              {"Meet the Founders"}
            </span>
            <span className="w-full font-['Inter'] text-[20px] font-[500] leading-[28px] text-default-font text-center -tracking-[0.02em]">
              Built from inside the classroom, not from a distance.
            </span>
            <span className="w-full max-w-[576px] font-['Inter'] text-[18px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em]">
              Two systems thinkers who grew up inside the very classrooms Lumuno cares about, committed to redesigning how attention and feedback flow through learning systems.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <div className="flex h-px w-full max-w-[1024px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16 px-6 py-24 bg-gradient-to-b from-transparent to-transparent mobile:px-6 mobile:py-20">
          <div className="flex w-full max-w-[1024px] flex-col items-center gap-12">
            <span className="w-full font-['Inter'] text-[40px] font-[700] leading-[48px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
              The Team
            </span>
            <div className="flex w-full flex-wrap items-start justify-center gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-neutral-200 bg-white px-8 py-8 shadow-lg">
                <img
                  className="h-64 w-full flex-none rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                  alt="Portrait of Victor C. Chabunda"
                />
                <div className="flex w-full flex-col items-start gap-3">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[28px] font-[700] leading-[36px] text-default-font -tracking-[0.025em]">
                      Victor C. Chabunda
                    </span>
                    <span className="w-full font-['Inter'] text-[18px] font-[600] leading-[24px] text-brand-600 -tracking-[0.01em]">
                      Founder &amp; Lead Developer
                    </span>
                    <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                      23 • Lusaka, Zambia
                    </span>
                  </div>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                    Computer Science student at the University of Zambia and systems thinker focused on education technology.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <span className="w-full font-['Inter'] text-[18px] font-[600] leading-[24px] text-default-font -tracking-[0.01em]">
                    The Pattern He Saw:
                  </span>
                  <div className="flex w-full flex-col items-start gap-3 rounded-lg border-l-4 border-solid border-brand-600 bg-brand-50 px-6 py-4">
                    <span className="w-full font-['Inter'] text-[16px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
                      &quot;Students weren&#39;t failing because they were not smart enough. They were failing because they didn&#39;t get timely feedback, didn&#39;t know what to focus on, or only discovered their gaps the night before an exam.&quot;
                    </span>
                  </div>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                    Victor turned this frustration into a question: What if every learner—from Lusaka to smaller towns across Africa—could have the kind of guidance you&#39;d expect at a top university, not just more notes?
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                    Connect with Victor:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <LinkButton
                      variant="brand"
                      size="small"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                    >
                      LinkedIn
                    </LinkButton>
                    <LinkButton
                      variant="brand"
                      size="small"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                    >
                      chavic.github.io
                    </LinkButton>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-neutral-200 bg-white px-8 py-8 shadow-lg">
                <img
                  className="h-64 w-full flex-none rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                  alt="Portrait of Sarah Mwanza"
                />
                <div className="flex w-full flex-col items-start gap-3">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="w-full font-['Inter'] text-[28px] font-[700] leading-[36px] text-default-font -tracking-[0.025em]">
                      Sarah Mwanza
                    </span>
                    <span className="w-full font-['Inter'] text-[18px] font-[600] leading-[24px] text-brand-600 -tracking-[0.01em]">
                      Co-founder &amp; Systems Designer
                    </span>
                    <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                      24 • Kitwe, Zambia
                    </span>
                  </div>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                    Education systems designer and advocate for learning equity, bringing human-centered design to educational technology.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <span className="w-full font-['Inter'] text-[18px] font-[600] leading-[24px] text-default-font -tracking-[0.01em]">
                    The Gap She Bridges:
                  </span>
                  <div className="flex w-full flex-col items-start gap-3 rounded-lg border-l-4 border-solid border-brand-600 bg-brand-50 px-6 py-4">
                    <span className="w-full font-['Inter'] text-[16px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
                      &quot;We build tools for learners, but rarely ask them what actually helps. The best learning systems aren&#39;t just smart—they&#39;re designed with deep empathy for the people using them.&quot;
                    </span>
                  </div>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                    Sarah spent years working with teachers and students in under-resourced schools, understanding that the right design can make powerful learning experiences accessible to everyone, not just the privileged few.
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-3">
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                    Connect with Sarah:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <LinkButton
                      variant="brand"
                      size="small"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                    >
                      LinkedIn
                    </LinkButton>
                    <LinkButton
                      variant="brand"
                      size="small"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                    >
                      Portfolio
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <div className="flex h-px w-full max-w-[1024px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-32 bg-gradient-to-b from-transparent to-transparent mobile:px-6 mobile:py-20">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-8">
            <span className="w-full font-['Inter'] text-[40px] font-[700] leading-[48px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
              Our Shared Mission
            </span>
            <div className="flex w-full flex-col items-center gap-6 rounded-2xl px-12 py-12 shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 mobile:px-8 mobile:py-8">
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center gap-2 rounded-full backdrop-blur-sm">
                <FeatherHeart className="text-body font-body text-white" />
              </div>
              <span className="w-full max-w-[576px] font-['Inter'] text-[24px] font-[600] leading-[32px] text-white text-center -tracking-[0.02em] mobile:font-['Afacad_Flux'] mobile:text-[20px] mobile:font-[400] mobile:leading-[28px] mobile:tracking-normal">
                We believe capable learners shouldn&#39;t be lost because nobody saw them in time. Lumuno is our answer—not as a silver bullet, but as a serious attempt to redesign how attention and feedback flow through learning systems.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-32 bg-gradient-to-b mobile:px-6 mobile:py-20">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-8">
            <div className="flex w-full flex-col items-center gap-4">
              <span className="w-full font-['Inter'] text-[40px] font-[700] leading-[48px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
                Why We&#39;re Building This
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                We both grew up in Zambian classrooms. We&#39;ve seen firsthand how effort without visibility becomes wasted potential. We&#39;ve watched talented peers drop out not because they couldn&#39;t learn, but because they didn&#39;t get the right attention at the right time.
              </span>
              <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                Lumuno is personal. It&#39;s our way of ensuring that the next generation of learners—from Lusaka to Kitwe to smaller towns across Africa—has access to the kind of guidance that makes all the difference.
              </span>
              <div className="flex w-full flex-col items-start gap-4 rounded-lg border-l-4 border-solid border-brand-600 bg-neutral-50 px-6 py-6">
                <span className="w-full font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                  Not as outsiders trying to fix education. As insiders trying to redesign it.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-32 bg-gradient-to-b from-transparent to-transparent mobile:px-6 mobile:py-20">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-8">
            <span className="w-full font-['Inter'] text-[40px] font-[700] leading-[48px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
              Join Us in Building Lumuno
            </span>
            <div className="flex w-full flex-col items-center gap-6 rounded-2xl px-12 py-12 shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 mobile:px-8 mobile:py-8">
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center gap-2 rounded-full">
                <FeatherSend className="text-body font-body text-white" />
              </div>
              <span className="w-full max-w-[576px] font-['Inter'] text-[22px] font-[600] leading-[32px] text-white text-center -tracking-[0.02em] mobile:font-['Afacad_Flux'] mobile:text-[20px] mobile:font-[400] mobile:leading-[28px] mobile:tracking-normal">
                Whether you&#39;re a learner, teacher, school, parent, or funder—your voice matters in shaping what Lumuno becomes.
              </span>
              <div className="flex items-center justify-center gap-4 pt-2">
                <Button variant="inverse" size="large" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                  Join the waitlist
                </Button>
                <Button
                  variant="neutral-primary"
                  size="large"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Become a Funder
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12">
          <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
              <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[18px] font-[600] leading-[24px] text-brand-700 -tracking-[0.01em]">
                  Lumuno
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Making sure no learner has to fail quietly for lack of the right attention.
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Get Started
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Join Waitlist
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  For Funders
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Connect
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  LinkedIn
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Personal Site
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default FounderProfilesPage;
