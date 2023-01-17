import className from "classnames";

function Button({ children, onclick, red, orange, yellow, green, blue, purple }) {
  const classes = className(
    "h-12 w-60 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg",
    {
      "bg-red-500 text-white hover:bg-red-600 hover:text-white": red,
      "bg-orange-500 text-black hover:bg-orange-600 hover:text-black": orange,
      "bg-yellow-500 text-black hover:bg-yellow-600 hover:text-black": yellow,
      "bg-green-500 text-black hover:bg-green-600 hover:text-black": green,
      "bg-blue-500 text-white hover:bg-blue-600 hover:text-white": blue,
      "bg-purple-500 text-white hover:bg-purple-600 hover:text-white": purple,
    }
  );

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ red, orange, yellow, green, blue, purple }) => {
    const count =
      Number(!!red) +
      Number(!!orange) +
      Number(!!yellow) +
      Number(!!green) +
      Number(!!blue) +
      Number(!!purple);

    if (count > 1) {
      return new Error(
        "Invalid props; only one of 'red', 'orange', 'yellow', 'green', 'blue' or 'purple' can be used."
      );
    }
  },
};

export default Button;
