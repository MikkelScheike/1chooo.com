import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/page-header";
import { Icons } from "@/components/icons";
import config from "@/config";
import DownloadCV from "@/components/resume/download-cv";
import ResumeSection from "@/components/section/resume";
import { IoSchoolOutline } from "react-icons/io5";

const { title } = config;

const educations = {
  icon: IoSchoolOutline,
  title: "Education",
  sectionType: "education",
  timeLines: [
    {
      company: "University of Southern California",
      companyImage: "/images/logo/usc.png",
      title: "Master of Science in Computer Science",
      employmentType: "Viterbi School of Engineering",
      location: "Los Angeles, CA 🇺🇸",
      timePeriod: "Aug. 2025 - Present",
      details: [

      ],
      detailsShowOrHide: false,
    },
    {
      company: "National Central University",
      companyImage: "/images/logo/ncu.png",
      title: "Bachelors of Science in Atmospheric Science",
      employmentType: "College of Earth Sciences",
      location: "Taoyuan, Taiwan 🇹🇼",
      timePeriod: "Sep. 2020 - Jun. 2024",
      details: [
        "Minor Specialty: Computer Science & Information Engineering", "Graduate-level Courses: The Attack and Defense of Computers, Object-Oriented Analysis and Design.",
        "B.S.-level Courses: Software Engineering, Principles of Programming Languages, Assembly Language and System Programming, Operating System, Computer Network, Algorithmics, Data Structures, Digital Design, Numerical Analysis",
        "TA: Linux and Edge Computing, Programming Python, Weather and Artificial Intelligence, Freshman English, Student Service-Learning",
      ],
      detailsShowOrHide: false,
    }
  ]
}

const experiences = {
  icon: Icons.Devices,
  title: "Professional Experiences",
  sectionType: "experience",
  timeLines: [
    {
      company: "eCloudvalley Digital Technology",
      companyImage: "/images/logo/ecv.png",
      title: "Cloud Engineer",
      employmentType: "Intern",
      location: "New Taipei, Taiwan 🇹🇼",
      timePeriod: "Mar. 2024 - May. 2024",
      details: [
        "Led a team of 5 to enhance issue pools with AWS Bedrock, boosting cloud support efficiency by 80% through multi-language support and 95% accurate image recognition. Honored as the top-achieving internship team.",
        "Utilized a serverless architecture on AWS Lambda, performing troubleshooting with CloudWatch, deployed via AWS CDK, and integrated with DynamoDB and Bedrock services.",
        "Documented issues in 10+ mock cases, such as VPC entry failures, EC2 Apache server restarts, and S3 photo access problems, and provided detailed solutions for interns. Refer [here](https://github.com/1chooo/ecv-training-materials/tree/main/msp/aws_challenge) for a comprehensive list.",
      ],
      detailsShowOrHide: false,
    },
    {
      company: "AWS",
      companyImage: "/images/logo/aws.svg",
      title: "Campus Ambassador",
      employmentType: "Contract",
      location: "Taipei, Taiwan 🇹🇼",
      timePeriod: "Aug. 2023 - Feb. 2024",
      details: [
        "Educated 700+ cloud developers and achieved 96% user satisfaction by conducting 2 technical workshops, developing an open-source project, and 1 UAD with AWS cloud services. Refer [here](https://github.com/aws-educate-tw/aws-line-business-card-workshop) for the source code.",
        "Conducted a comprehensive 35+ page market research study on cloud suppliers as part of an 11-member team.",
      ],
      detailsShowOrHide: false,
    },
    {
      company: "PEGATRON",
      companyImage: "/images/logo/pegatron.png",
      title: "AI Engineer",
      employmentType: "Intern",
      location: "Taipei, Taiwan 🇹🇼",
      timePeriod: "Jul. 2023 - Aug. 2023",
      details: [
        "Executed a POC, adapting an LLM model for Smart Manufacturing, and was awarded Silver internship team.",
        "Collaborated with a team of 5, utilized Git, a CI/CD pipeline, and followed an agile Scrum workflow.",
        "Implemented Prompt Engineering and LangChain for the NVIDIA Ominerve visual robot, enabling seamless speech/text operation, boosting test support by 83% across 6-11 scenarios with 85% stability.",
      ],
      detailsShowOrHide: false,
    },
    {
      company: "National Central University",
      companyImage: "/images/logo/ncu.png",
      title: "Website Developer",
      employmentType: "Part-time",
      location: "Taoyuan, Taiwan 🇹🇼",
      timePeriod: "Jul. 2022 - Jan. 2023",
      details: [
        "Partnered with a team of 2 to develop a multi-user score management system for the Center for Teacher Education, reducing credit exemption processing time by 80% and remotely maintaining the server via SSH.",
      ],
      detailsShowOrHide: false,
    },
  ],
};

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

export default function Resume() {
  return (
    <article>
      <PageHeader header="Hugo's Resume" />
      <DownloadCV />
      <ResumeSection
        icon={educations.icon}
        title={educations.title}
        timeLines={educations.timeLines}
        sectionType={educations.sectionType}
      />
      <ResumeSection
        icon={experiences.icon}
        title={experiences.title}
        timeLines={experiences.timeLines}
        sectionType={experiences.sectionType}
      />
    </article>
  );
}
