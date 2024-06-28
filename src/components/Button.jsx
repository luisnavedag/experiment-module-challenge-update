import classNames from "classnames";

const Button = ({ children, className, highlight = false, ...props }) => {
  return (
    <button
      className={classNames(
        "px-2 py-1 font-bold hover:opacity-50",
        { "text-gray-600": !highlight },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
