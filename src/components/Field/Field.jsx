import './Field.scss'

const Field = (props) => {

  const {
    className = '',
    id,
    label,
    type = 'text',
    onInput,
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
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  )
}

export default Field