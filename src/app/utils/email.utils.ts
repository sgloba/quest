export function checkMail (str: string): boolean {
   const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

   return !!str.match(mailRegex);
}
