function TextBox() {
  return (
    <div className="ml-24 mt-5 h-12 w-auto">
      <input
        className="p-3 w-5/6 hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear shadow-2xl"
        placeholder="Team name..."
      ></input>
    </div>
  );
}

export default TextBox;
