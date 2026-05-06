export default function PatternBand({ inset = false }) {
  return (
    <div
      className={inset ? 'pattern-band pattern-band--inset' : 'pattern-band'}
      aria-hidden="true"
    />
  );
}
