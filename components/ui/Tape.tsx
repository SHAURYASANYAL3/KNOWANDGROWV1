export default function Tape({ className = '' }: { className?: string }) {
  return (
    <div className={`tape-piece ${className}`}></div>
  );
}
