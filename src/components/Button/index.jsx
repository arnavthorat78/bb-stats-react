/**
 * Create a button using TailwindCSS styles. This button element gets the `lg-button` class defined in `index.css`, and appends the color information to it.
 *
 * Button style code without color (`@apply` removed):
 * ```css
 * .lg-button {
 *   h-12 w-60 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg;
 * }
 * ```
 *
 * Generic color code (key: _<color>_-btn) (`@apply` removed):
 * ```css
 * .color-btn {
 *   bg-color-500 text-color hover:bg-color-600 hover:text-color;
 * }
 * ```
 *
 * The text inside of the tags is the text used inside the button.
 *
 * The possible colors are:
 *
 * - `red`
 * - `orange`
 *
 * Example usage:
 *
 * ```jsx
 * <Button color="red">Text</Button>
 * ```
 *
 * @param {string} color Specify the color of the button.
 * @returns JSX code
 */
function Button({ children, color }) {
  let classBtn = "";

  switch (color) {
    case "red":
      classBtn = "red-btn";
      break;
    case "orange":
      classBtn = "orange-btn";
      break;
    default:
      classBtn = "red-btn";
      break;
  }

  return <button className={"lg-button " + classBtn}>{children}</button>;
}

export default Button;
