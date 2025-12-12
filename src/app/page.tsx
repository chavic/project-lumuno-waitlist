"use client";

import React from "react";
import { Accordion } from "@/ui/components/Accordion";
import { Button } from "@/ui/components/Button";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import {
  FeatherAlertCircle,
  FeatherBookOpen,
  FeatherBriefcase,
  FeatherCheckCircle,
  FeatherCompass,
  FeatherEye,
  FeatherHeart,
  FeatherHome,
  FeatherMap,
  FeatherTarget,
  FeatherUser,
  FeatherUsers,
  FeatherX,
  FeatherZap,
} from "@subframe/core";

function LearningInsightsLanding() {
  const openWaitlist = () => window.open("https://tally.so/r/pbr9XB", "_blank", "noopener,noreferrer");
  const openFunders = () => window.open("https://tally.so/r/q4Lz7g", "_blank", "noopener,noreferrer");

  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex w-full cursor-pointer flex-col items-center bg-default-background py-2">
        <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-32 bg-gradient-to-b via-transparent to-transparent mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[62px] font-[700] leading-[68px] text-brand-700 text-center -tracking-[0.04em] mobile:font-['Afacad_Flux'] mobile:text-[36px] mobile:font-[400] mobile:leading-[42px] mobile:tracking-normal">
              {"Learn Smarter. Learn Faster."}
            </span>
            <span className="w-full font-['Inter'] text-[24px] font-[500] leading-[32px] text-default-font text-center -tracking-[0.02em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
              Most students aren&#39;t failing for lack of content—they&#39;re failing for lack of attention.
            </span>
            <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[24px] mobile:tracking-normal">
              Lumuno is a new kind of learning system for learners. Instead of drowning you in more notes and links, it&#39;s focused on the one thing that changes outcomes: the right kind of attention—timely guidance, clear priorities, and honest feedback on where you stand.
            </span>
            <div className="flex items-center justify-center gap-4 pt-4 mobile:h-auto mobile:w-full mobile:flex-none mobile:flex-col mobile:flex-nowrap mobile:gap-3 mobile:px-0 mobile:pt-2 mobile:pb-0">
              <Button className="mobile:w-full" size="large" onClick={openWaitlist}>
                Join the Waitlist
              </Button>
              <Button
                className="mobile:w-full"
                variant="neutral-primary"
                size="large"
                onClick={openFunders}
              >
                Become a Funder
              </Button>
            </div>
            <span className="w-full max-w-[576px] font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color text-center">
              We&#39;re building Lumuno, You can join the waitlist and help us build it right for you.
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24 mobile:px-0 mobile:py-8">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16 px-6 py-32 bg-gradient-to-b from-transparent to-transparent mobile:flex-col mobile:flex-nowrap mobile:gap-8 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[1024px] flex-col items-center gap-12 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
            <div className="flex w-full flex-col items-center gap-4">
              <span className="w-full font-['Inter'] text-[48px] font-[700] leading-[56px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
                What is Lumuno trying to do?
              </span>
              <span className="w-full max-w-[576px] font-['Inter'] text-[20px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[24px] mobile:tracking-normal">
                Most learning tools track content. We track who is actually being seen.
              </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border-2 border-solid border-brand-300 bg-white px-8 py-8 transition-all mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-6 mobile:py-6">
                <div className="flex h-14 w-14 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-100 mobile:h-12 mobile:w-12 mobile:flex-none">
                  <FeatherEye className="text-body font-body text-brand-600" />
                </div>
                <div className="flex w-full flex-col items-start gap-3 mobile:flex-col mobile:flex-nowrap mobile:gap-2">
                  <span className="w-full font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                    For learners
                  </span>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[15px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    See what you truly understand and where you&#39;re slipping—before it&#39;s exam week.
                  </span>
                </div>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border-2 border-solid border-brand-300 bg-white px-8 py-8 transition-all mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-6 mobile:py-6">
                <div className="flex h-14 w-14 flex-none flex-col items-center justify-center gap-2 rounded-full bg-success-100 mobile:h-12 mobile:w-12 mobile:flex-none">
                  <FeatherUsers className="text-body font-body text-success-600" />
                </div>
                <div className="flex w-full flex-col items-start gap-3 mobile:flex-col mobile:flex-nowrap mobile:gap-2">
                  <span className="w-full font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                    For teachers
                  </span>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[15px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    Know who needs attention before it&#39;s too late—simple signals, not more dashboards.
                  </span>
                </div>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border-2 border-solid border-brand-300 bg-white px-8 py-8 transition-all mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-6 mobile:py-6">
                <div className="flex h-14 w-14 flex-none flex-col items-center justify-center gap-2 rounded-full bg-warning-100 mobile:h-12 mobile:w-12 mobile:flex-none">
                  <FeatherHeart className="text-body font-body text-warning-600" />
                </div>
                <div className="flex w-full flex-col items-start gap-3 mobile:flex-col mobile:flex-nowrap mobile:gap-2">
                  <span className="w-full font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                    For parents
                  </span>
                  <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[15px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    See whether effort is turning into real progress, not just more study time.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 rounded-xl px-10 py-10 shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-6 mobile:py-6">
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center gap-2 rounded-full backdrop-blur-sm mobile:h-12 mobile:w-12 mobile:flex-none">
                <FeatherTarget className="text-body font-body text-white" />
              </div>
              <span className="w-full max-w-[768px] font-['Inter'] text-[24px] font-[600] leading-[32px] text-white text-center -tracking-[0.02em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                Make sure no learner has to fail quietly for lack of the right attention.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24 mobile:px-0 mobile:py-8">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24 bg-gradient-to-b mobile:flex-col mobile:flex-nowrap mobile:gap-8 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col items-start gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <span className="w-full font-['Inter'] text-[48px] font-[700] leading-[56px] text-default-font -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
              The system doesn&#39;t show you the truth about learning.
            </span>
            <span className="w-full max-w-[576px] font-['Inter'] text-[20px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[24px] mobile:tracking-normal mobile:text-left">
              Across primary, secondary, university, and even adult learning, the pattern is the same: effort without visibility.
            </span>
            <div className="flex w-full flex-wrap items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-neutral-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-brand-100">
                    <FeatherUsers className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    For learners
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      No honest map of what you truly understand
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      Gaps discovered too late—in report cards or exam halls
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      Working hard on the wrong things with no way to course-correct
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-neutral-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-success-100">
                    <FeatherBookOpen className="text-body font-body text-success-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    For teachers
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      See results, not the slow build-up of confusion
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      No simple, live signals about who needs attention
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      Personalized feedback practically impossible at scale
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-neutral-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-warning-100">
                    <FeatherHome className="text-body font-body text-warning-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    For parents
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      See hours of &quot;studying&quot; but not if anything is sticking
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FeatherAlertCircle className="text-body font-body text-neutral-400 mt-1" />
                    <span className="grow shrink-0 basis-0 font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                      Problems appear suddenly—failing grades, disengagement, dropout
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <span className="w-full max-w-[576px] font-['Inter'] text-[20px] font-[500] leading-[28px] text-default-font text-center -tracking-[0.015em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                The result? A system perfectly designed to produce:
              </span>
              <div className="flex w-full flex-wrap items-center justify-center gap-4 mobile:flex-row mobile:flex-wrap mobile:gap-3">
                <div className="flex items-center gap-2 rounded-full border-2 border-solid border-error-200 bg-error-50 px-6 py-3 mobile:px-4 mobile:py-2">
                  <FeatherX className="text-body font-body text-error-600" />
                  <span className="font-['Inter'] text-[18px] font-[600] leading-[24px] text-error-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    Misaligned effort
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border-2 border-solid border-error-200 bg-error-50 px-6 py-3 mobile:px-4 mobile:py-2">
                  <FeatherX className="text-body font-body text-error-600" />
                  <span className="font-['Inter'] text-[18px] font-[600] leading-[24px] text-error-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    Late feedback
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border-2 border-solid border-error-200 bg-error-50 px-6 py-3 mobile:px-4 mobile:py-2">
                  <FeatherX className="text-body font-body text-error-600" />
                  <span className="font-['Inter'] text-[18px] font-[600] leading-[24px] text-error-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[22px] mobile:tracking-normal">
                    Quiet failure
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 rounded-2xl px-12 py-12 shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-6 mobile:py-6">
              <div className="flex h-16 w-16 flex-none flex-col items-center justify-center gap-2 rounded-full mobile:h-12 mobile:w-12 mobile:flex-none">
                <FeatherEye className="text-body font-body text-white" />
              </div>
              <span className="w-full max-w-[576px] font-['Inter'] text-[24px] font-[600] leading-[32px] text-white text-center -tracking-[0.02em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                Lumuno starts from a different assumption: Capable learners shouldn&#39;t be lost because nobody saw them in time.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24 mobile:px-0 mobile:py-8">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16 px-6 py-32 bg-gradient-to-b mobile:flex-col mobile:flex-nowrap mobile:gap-8 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-12 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
            <div className="flex w-full flex-col items-center gap-4">
              <span className="w-full font-['Inter'] text-[48px] font-[700] leading-[56px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
                A systems view of learning, not just more content.
              </span>
              <span className="w-full max-w-[576px] font-['Inter'] text-[20px] font-[400] leading-[28px] text-subtext-color text-center -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[16px] mobile:font-[400] mobile:leading-[24px] mobile:tracking-normal">
                Lumuno treats learning like a system, not a pile of notes.
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-solid border-brand-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-brand-100">
                    <FeatherZap className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    Early, honest signals
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                  Tiny indicators that a learner is struggling long before the final mark, so there&#39;s time to act.
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-solid border-brand-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-brand-100">
                    <FeatherCompass className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    Clear priorities, not vague advice
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                  Instead of &quot;work harder&quot; or &quot;revise everything&quot;, Lumuno is about:
                </span>
                <div className="flex w-full flex-col items-start gap-3 rounded-lg border-l-4 border-solid border-brand-600 bg-brand-50 px-6 py-4">
                  <span className="w-full font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                    &quot;These are the topics that will hurt you most if you ignore them. Start here.&quot;
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-solid border-brand-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-brand-100">
                    <FeatherMap className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    Context-aware, not one-size-fits-all
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                  Different grades, subjects, and schools have different realities—curricula, connectivity, devices, home situations. Lumuno is being built from inside that context, not imported from elsewhere.
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-6 rounded-xl border border-solid border-brand-200 bg-white px-8 py-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-none flex-col items-center justify-center gap-2 rounded-lg bg-brand-100">
                    <FeatherUsers className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[24px] font-[700] leading-[32px] text-default-font -tracking-[0.02em]">
                    Supportive of teachers, not a replacement
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[24px] text-subtext-color -tracking-[0.01em]">
                  The goal is to give teachers and schools better signals, not to automate them away.
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <span className="w-full font-['Inter'] text-[20px] font-[500] leading-[28px] text-default-font text-center -tracking-[0.015em] mobile:font-['Afacad_Flux'] mobile:text-[18px] mobile:font-[400] mobile:leading-[26px] mobile:tracking-normal">
                As we test, some of this may look like:
              </span>
              <div className="flex w-full flex-wrap items-center justify-center gap-3 mobile:flex-row mobile:flex-wrap mobile:gap-2">
                <div className="flex items-center gap-2 rounded-full border border-solid border-brand-300 bg-brand-50 px-5 py-2 mobile:px-4 mobile:py-2">
                  <FeatherCheckCircle className="text-body font-body text-brand-600" />
                  <span className="font-['Inter'] text-[16px] font-[500] leading-[24px] text-brand-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[14px] mobile:font-[400] mobile:leading-[20px] mobile:tracking-normal">
                    Visual understanding trackers
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-solid border-brand-300 bg-brand-50 px-5 py-2 mobile:px-4 mobile:py-2">
                  <FeatherCheckCircle className="text-body font-body text-brand-600" />
                  <span className="font-['Inter'] text-[16px] font-[500] leading-[24px] text-brand-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[14px] mobile:font-[400] mobile:leading-[20px] mobile:tracking-normal">
                    Weekly attention signals
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-solid border-brand-300 bg-brand-50 px-5 py-2 mobile:px-4 mobile:py-2">
                  <FeatherCheckCircle className="text-body font-body text-brand-600" />
                  <span className="font-['Inter'] text-[16px] font-[500] leading-[24px] text-brand-700 -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[14px] mobile:font-[400] mobile:leading-[20px] mobile:tracking-normal">
                    Real learning reports
                  </span>
                </div>
              </div>
              <span className="w-full max-w-[576px] font-['Inter'] text-[16px] font-[400] leading-[24px] text-subtext-color text-center -tracking-[0.01em] mobile:font-['Afacad_Flux'] mobile:text-[14px] mobile:font-[400] mobile:leading-[20px] mobile:tracking-normal">
                But we&#39;re letting the people who use it tell us which forms are actually useful.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24 mobile:px-0 mobile:py-8">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-32 bg-gradient-to-b from-transparent to-transparent mobile:flex-col mobile:flex-nowrap mobile:gap-8 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col items-center gap-10 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <div className="flex w-full flex-col items-center gap-4">
              <span className="w-full font-['Inter'] text-[48px] font-[700] leading-[56px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
                Who we&#39;re listening to right now
              </span>
            </div>
            <div className="flex w-full flex-wrap gap-6 items-stretch mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-2 rounded-full bg-brand-100">
                    <FeatherUser className="text-body font-body text-brand-600" />
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em]">
                    Learners
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  From Grade 9 to university and beyond—if you&#39;ve ever felt like you&#39;re working hard but still unsure where you stand, you&#39;re the person we&#39;re building for.
                </span>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-2 rounded-full bg-success-100">
                    <FeatherBookOpen className="text-body font-body text-success-600" />
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em]">
                    Teachers
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  If you&#39;ve ever wished for a simple way to see who&#39;s quietly falling behind, or which topics are silently confusing your class, we want your input.
                </span>
              </div>
              <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-2 rounded-full bg-warning-100">
                    <FeatherHome className="text-body font-body text-warning-600" />
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em]">
                    Schools
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  If you care about improving pass rates, reducing quiet dropout, and supporting teachers without burning them out, Lumuno is meant to work with you.
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-6 items-stretch mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-100">
                    <FeatherHeart className="text-body font-body text-neutral-600" />
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em]">
                    Parents &amp; guardians
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  If you want a clearer sense of whether your child&#39;s effort is turning into real understanding, your perspective matters here too.
                </span>
              </div>
              <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-2 rounded-full bg-neutral-100">
                    <FeatherBriefcase className="text-body font-body text-neutral-600" />
                  </div>
                  <span className="font-['Inter'] text-[20px] font-[700] leading-[28px] text-default-font -tracking-[0.015em]">
                    Partners &amp; funders
                  </span>
                </div>
                <span className="w-full font-['Inter'] text-[16px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  If you care about learning outcomes in Africa and are looking for grounded, testable approaches rather than hype, we&#39;re open to collaboration.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24 mobile:px-0 mobile:py-8">
          <div className="flex h-px w-full max-w-[768px] flex-none flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24 bg-gradient-to-b from-transparent to-transparent mobile:flex-col mobile:flex-nowrap mobile:gap-8 mobile:px-0 mobile:py-12">
          <div className="flex w-full max-w-[768px] flex-col items-center justify-center gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <span className="w-full font-['Inter'] text-[48px] font-[700] leading-[56px] text-default-font text-center -tracking-[0.03em] mobile:font-['Afacad_Flux'] mobile:text-[32px] mobile:font-[400] mobile:leading-[40px] mobile:tracking-normal">
              Questions you might have
            </span>
          </div>
          <div className="flex w-full max-w-[768px] flex-col items-center justify-center">
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                    Is Lumuno an app, a platform, or a program?
                  </span>
                  <Accordion.Chevron />
                </div>
              }
              defaultOpen={false}
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                  Right now, Lumuno is a set of ideas and early tools being tested with real learners, teachers, and schools. The exact form—apps, dashboards, reports, or a mix—will be shaped by what actually works on the ground.
                </span>
              </div>
            </Accordion>
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                    Who will Lumuno be for first?
                  </span>
                  <Accordion.Chevron />
                </div>
              }
              defaultOpen={false}
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                  We&#39;re still deciding. That&#39;s why the form asks whether you&#39;re a learner, teacher, school, parent, or partner—so we can see where the pull is strongest and start there.
                </span>
              </div>
            </Accordion>
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                    Is this just for university students?
                  </span>
                  <Accordion.Chevron />
                </div>
              }
              defaultOpen={false}
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                  No. We&#39;re deliberately listening across secondary, tertiary, and self-directed learning. The attention and feedback gaps show up at every level.
                </span>
              </div>
            </Accordion>
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                    Is Lumuno &quot;just AI&quot;?
                  </span>
                  <Accordion.Chevron />
                </div>
              }
              defaultOpen={false}
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                  Lumuno will use AI where it&#39;s genuinely helpful—especially in making sense of patterns and giving timely guidance. But the real work is in designing better feedback loops between humans, not replacing them.
                </span>
              </div>
            </Accordion>
            <Accordion
              trigger={
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <span className="grow shrink-0 basis-0 font-['Inter'] text-[20px] font-[600] leading-[28px] text-default-font -tracking-[0.015em]">
                    How can I be involved now?
                  </span>
                  <Accordion.Chevron />
                </div>
              }
              defaultOpen={false}
            >
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 px-4 py-4">
                <span className="w-full font-['Inter'] text-[18px] font-[400] leading-[28px] text-default-font -tracking-[0.01em]">
                  Start with the short form. If you&#39;d like, you can also opt in for a quick interview, early pilots, or future updates.
                </span>
              </div>
            </Accordion>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12 mobile:px-0 mobile:py-6">
          <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
            <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch mobile:w-auto mobile:min-w-[0px] mobile:grow mobile:shrink-0 mobile:basis-0">
              <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4 mobile:w-full mobile:min-w-[0px] mobile:grow mobile:shrink-0 mobile:basis-0">
                <span className="grow shrink-0 basis-0 font-['Inter'] text-[18px] font-[600] leading-[24px] text-brand-700 -tracking-[0.01em]">
                  Lumuno
                </span>
              </div>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Making sure no learner has to fail quietly for lack of the right attention.
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch mobile:flex-col mobile:flex-nowrap mobile:gap-6">
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4 mobile:h-auto mobile:w-full mobile:min-w-[0px] mobile:flex-none mobile:flex-col mobile:flex-nowrap mobile:gap-3">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Get Started
                </span>
                <a
                  className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em] hover:text-brand-700"
                  href="https://tally.so/r/pbr9XB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Waitlist
                </a>
                <a
                  className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em] hover:text-brand-700"
                  href="https://tally.so/r/q4Lz7g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Funders
                </a>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4 mobile:h-auto mobile:w-full mobile:min-w-[0px] mobile:flex-none mobile:flex-col mobile:flex-nowrap mobile:gap-3">
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

export default LearningInsightsLanding;
