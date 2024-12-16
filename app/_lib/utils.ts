export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

{
  /* 
  export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  */
}
