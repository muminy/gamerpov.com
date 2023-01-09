import { FooterProps } from ".";

export default function Footer({ className, ...remainingProps }: FooterProps) {
  return (
    <div {...remainingProps} className="flex justify-center py-10 mt-auto">
      Footer
    </div>
  );
}
