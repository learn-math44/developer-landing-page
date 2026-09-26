export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <label className="search-field" aria-label={placeholder}>
      <span className="sr-only">{placeholder}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}
