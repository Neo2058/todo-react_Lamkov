import './Field.scss'

const Field = (props) => {

  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    error,
    onInput,
    ref,
  } = props

  return (
    <div className={`field ${className}`}>
      <label
        htmlFor={id}
        className="field__label"
      >
        {label}
      </label>
      <input
        className={`field__input ${error ? 'is-invalid' : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
      {error && (
        <span className="field__error" title={error}>{error}</span>
      )}
    </div>
  )
}

export default Field