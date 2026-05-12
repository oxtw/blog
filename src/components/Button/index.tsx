type ButtonProps = {} & React.ComponentProps<"button">; // extends button do JSX

export function Button({...props }: ButtonProps) {
  return <button {...props}></button>;
}
