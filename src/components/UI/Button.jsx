function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {

  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles[variant]}
    >
      {children}
    </button>
  );
}

export default Button;