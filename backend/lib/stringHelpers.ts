// eslint-disable-next-line @typescript-eslint/no-var-requires
const uniqueSlug = require('unique-slug')

export function getSlug(text: string): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions
  const uniqueString = `-${uniqueSlug()}`
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .concat(uniqueString)
}

export const getHandle = (text: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions
  const uniqueString = `_${uniqueSlug()}`
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_')
    .concat(uniqueString)
}
