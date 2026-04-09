export function countWordsInText(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function countWords(values: Array<string | undefined | null>) {
  return values.reduce((sum, value) => sum + countWordsInText(value ?? ''), 0);
}
