export type AssessmentBlock =
  | {
      type: 'subheading';
      text: string;
    }
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      ordered: boolean;
      items: string[];
    };

export type AssessmentSection = {
  id: string;
  title: string;
  blocks: AssessmentBlock[];
};

export type AssessmentDocumentData = {
  title: string;
  subtitle: string;
  sections: AssessmentSection[];
};

function countWordsInText(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function countAssessmentWords(document: AssessmentDocumentData) {
  let total = countWordsInText(document.title) + countWordsInText(document.subtitle);

  for (const section of document.sections) {
    if (section.id === 'references') {
      continue;
    }

    total += countWordsInText(section.title);

    for (const block of section.blocks) {
      if (block.type === 'list') {
        total += block.items.reduce((sum, item) => sum + countWordsInText(item), 0);
        continue;
      }

      total += countWordsInText(block.text);
    }
  }

  return total;
}
