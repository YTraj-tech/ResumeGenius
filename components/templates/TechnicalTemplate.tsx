import React from 'react';
import { ResumeData } from '@/lib/types/resume.type';

export default function TechnicalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      {data.summary && <p className="mt-2 text-gray-600">{data.summary}</p>}

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc ml-5">
          {data.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="list-disc ml-5">
          {data.experience.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
