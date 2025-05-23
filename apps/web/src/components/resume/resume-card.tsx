"use client";

import Image from "next/image";

import {
  CalendarIcon,
  BriefcaseIcon,
  BuildingIcon,
  MapPin,
  GraduationCap,
} from "lucide-react";

import type { TimeLine } from "@/types/resume";

interface ResumeCardProps {
  timeLine: TimeLine;
  sectionType: string;
}

import "@/styles/skills-bar.css";

export default function ResumeCard({ timeLine, sectionType }: ResumeCardProps) {
  const { company } = timeLine
  const { companyImage } = timeLine
  const { title } = timeLine
  const { employmentType } = timeLine
  const { location } = timeLine
  const { details } = timeLine
  const { detailsShowOrHide } = timeLine
  const { timePeriod } = timeLine

  return (
    <section className="skill">
      <div className="skills-list content-card">
        <div className="flex flex-row items-center gap-4 p-6 pb-4">
          <div className="h-12 w-12 overflow-hidden rounded-md">
            <Image
              src={companyImage || "/favicon.ico"}
              alt={company}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/favicon.ico?height=40&width=40";
                e.currentTarget.onerror = null;
              }}
              width={40}
              height={40}
            />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white-1">{company}</div>
            <div className="text-sm text-light-gray">{title}</div>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 pb-2">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium text-orange-yellow-crayola border-gray-700">
              <BriefcaseIcon className="h-3 w-3" />
              {employmentType}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium text-orange-yellow-crayola border-gray-700">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium text-orange-yellow-crayola border-gray-700">
              <CalendarIcon className="h-3 w-3" />
              {timePeriod}
            </span>
          </div>

          {detailsShowOrHide ? (
            <ul className="list-disc pl-5 space-y-1 text-sm text-white-1">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="px-6 py-4">
          <div className="resume-card-separator"></div>
          <div className="flex items-center text-xs text-light-gray-70 mt-2">
            {sectionType === "education" ? (
              <>
                <GraduationCap className="mr-1 h-3 w-3" />
                School Details
              </>
            ) : sectionType === "experience" ? (
              <>
                <BuildingIcon className="mr-1 h-3 w-3" />
                Company Details
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
