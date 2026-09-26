export default function CopyButton({ value, label = 'Copy' }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  return (
    <button type="button" className="copy-button" onClick={handleCopy} aria-label={`Copy ${label}`}>
      {label}
    </button>
  )
}
