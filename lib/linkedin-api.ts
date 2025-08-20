// function isValidLinkedInUrl(url: string): boolean {
//   return /^https:\/\/(www\.)?linkedin\.com\/in\/[^\/\s]+\/?$/.test(url);
// }

// export async function fetchLinkedInData(linkedinUrl: string): Promise<any> {
//   const apiKey = process.env.SCRAPINGDOG_API_KEY;

//   if (!isValidLinkedInUrl(linkedinUrl)) {
//     throw new Error("Invalid LinkedIn URL");
//   }

//   const response = await fetch(
//     `https://api.scrapingdog.com/linkedin?api_key=${apiKey}&link=${encodeURIComponent(linkedinUrl)}&profile=true`
//   );

//   if (!response.ok) {
//     const errorText = await response.text();
//     console.error("Scrapingdog error:", errorText);
//     throw new Error("Failed to fetch LinkedIn profile");
//   }

//   const data = await response.json();
//   return data;
// }




// ./lib/linkedin-api.ts
interface LinkedInProfile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  experiences: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    duration: string;
  }>;
  skills: string[];
  certifications: string[];
  languages: string[];
  projects?: Array<{
    name: string;
    description: string;
    duration: string;
  }>;
}

function isValidLinkedInUrl(url: string): boolean {
  return /^https:\/\/(www\.)?linkedin\.com\/in\/[^\/\s]+\/?$/.test(url);
}

export async function fetchLinkedInData(linkedinUrl: string): Promise<LinkedInProfile> {
  const apiKey = process.env.SCRAPINGDOG_API_KEY;

  if (!isValidLinkedInUrl(linkedinUrl)) {
    throw new Error("Invalid LinkedIn URL");
  }

  const response = await fetch(
    `https://api.scrapingdog.com/linkedin?api_key=${apiKey}&link=${encodeURIComponent(linkedinUrl)}&profile=true`
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Scrapingdog error:", errorText);
    throw new Error("Failed to fetch LinkedIn profile");
  }

  const data = await response.json();
  return data as LinkedInProfile;
}