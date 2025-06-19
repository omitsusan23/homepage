const solutions = [
  '広告業界向けソリューション',
  'デザイン業界向けソリューション',
]

export default function Solutions() {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold border-l-4 border-primary pl-2">ソリューション</h2>
      <ul className="list-disc list-inside space-y-2">
        {solutions.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
