export const capitalize = (word: string ) => {
    return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()
}

export const humanize = (text: string) => {
    const [firstWord, ...words] = text.split(' ');

    return capitalize(firstWord) + ' ' + words.join(' ');
}   

export function compare(a: string, b: string, sensitive?: boolean  ) {
    [a,b] = sensitive ? [a,b] : [a.toLowerCase(), b.toLowerCase()];

    return a.includes(b);
  }