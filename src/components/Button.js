function Button({
    width,
    height,
    backgroundColor,
    color,
    border,
    borderColor,
    fontSize,
    fontWeight,
    buttonText, }) {
    return (
        <button style={{
            width,
            height,
            backgroundColor,
            color,
            border,
            borderColor,
            fontSize,
            fontWeight
        }}>
            {buttonText}
        </button>
    )
}

export default Button