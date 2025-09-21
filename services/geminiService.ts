import { GoogleGenAI, Type } from "@google/genai";
import { CVData, MatchResult, LanguageCode } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const getPrompt = (cvString: string, jobDescription: string, lang: LanguageCode) => {
  const prompts: Record<LanguageCode, string> = {
    fr: `
      En tant qu'expert en recrutement technique et RH, analyse le CV suivant et compare-le à la description de poste fournie.
      Fournis une analyse structurée en français.

      CV de Bruno Mineo:
      ---
      ${cvString}
      ---

      Description du poste:
      ---
      ${jobDescription}
      ---

      Produis un rapport JSON avec les clés suivantes :
      1. "strengths": Une liste de points (string[]) mettant en évidence les compétences et expériences du CV qui correspondent parfaitement aux exigences du poste.
      2. "weaknesses": Une liste de points (string[]) identifiant les éléments potentiellement manquants ou moins développés par rapport aux exigences du poste. Sois constructif.
      3. "summary": Une synthèse concise (string) de l'adéquation globale du profil pour le poste.
      4. "score": Une note de compatibilité (integer) sur 100.
    `,
    en: `
      As a technical recruiting and HR expert, analyze the following resume and compare it to the provided job description.
      Provide a structured analysis in English.

      Bruno Mineo's Resume:
      ---
      ${cvString}
      ---

      Job Description:
      ---
      ${jobDescription}
      ---

      Produce a JSON report with the following keys:
      1. "strengths": A list of points (string[]) highlighting the skills and experiences from the resume that perfectly match the job requirements.
      2. "weaknesses": A list of points (string[]) identifying potentially missing or less developed elements compared to the job requirements. Be constructive.
      3. "summary": A concise summary (string) of the overall suitability of the profile for the position.
      4. "score": A compatibility score (integer) out of 100.
    `,
    nl: `
      Analyseer als expert in technische rekrutering en HR het volgende cv en vergelijk het met de verstrekte functiebeschrijving.
      Geef een gestructureerde analyse in het Nederlands.

      CV van Bruno Mineo:
      ---
      ${cvString}
      ---

      Functiebeschrijving:
      ---
      ${jobDescription}
      ---

      Produceer een JSON-rapport met de volgende sleutels:
      1. "strengths": Een lijst met punten (string[]) die de vaardigheden en ervaringen uit het cv benadrukken die perfect overeenkomen met de functievereisten.
      2. "weaknesses": Een lijst met punten (string[]) die potentieel ontbrekende of minder ontwikkelde elementen identificeren in vergelijking met de functievereisten. Wees constructief.
      3. "summary": Een beknopte samenvatting (string) van de algehele geschiktheid van het profiel voor de functie.
      4. "score": Een compatibiliteitsscore (integer) op 100.
    `,
  };
  return prompts[lang];
}

export const analyzeJobCompatibility = async (
  cv: CVData,
  jobDescription: string,
  lang: LanguageCode
): Promise<MatchResult> => {
  const cvString = `
    Naam: ${cv.person.name}
    Titel: ${cv.person.title}
    Samenvatting: ${cv.summary}
    Ervaring: ${cv.experience.map(exp => `\n- ${exp.role} bij ${exp.company} (${exp.period}): ${exp.tasks.join(', ')}`).join('')}
    Vaardigheden: ${cv.skills.map(s => s.name).join(', ')}
    Talen: ${cv.languages.map(l => `${l.name} (${l.level})`).join(', ')}
    Opleiding: ${cv.education.map(e => `${e.degree} aan ${e.institution}`).join(', ')}
    Certificaten: ${cv.certifications.map(c => c.title).join(', ')}
  `;

  const prompt = getPrompt(cvString, jobDescription, lang);
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strengths: {
              type: Type.ARRAY,
              description: "Strengths of the profile that match the offer.",
              items: { type: Type.STRING },
            },
            weaknesses: {
              type: Type.ARRAY,
              description: "Points of caution or missing elements.",
              items: { type: Type.STRING },
            },
            summary: {
              type: Type.STRING,
              description: "Overall summary of compatibility.",
            },
            score: {
              type: Type.INTEGER,
              description: "Compatibility score out of 100.",
            },
          },
          required: ["strengths", "weaknesses", "summary", "score"],
        },
      },
    });

    const jsonString = response.text.trim();
    const result: MatchResult = JSON.parse(jsonString);
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Unable to analyze the job offer. Please check the console for more details.");
  }
};