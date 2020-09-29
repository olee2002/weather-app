export const capitalize = (str) => {
   console.log(str.includes(' '))
   if (str.includes(' ')) {
      return str.split(' ')
         .map((string) => {
            return string.charAt(0).toUpperCase() + string.slice(1)
         })
         .join(' ')
   }
   return str.charAt(0).toUpperCase() + str.slice(1)
}
