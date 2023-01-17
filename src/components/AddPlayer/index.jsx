function AddPlayer() {
  return (
    <div className="ml-24 mt-10 p-auto w-5/6 shadow-2xl rounded-xl">
      <h4 className="font-semibold text-2xl pt-5 pl-5 text-gray-600">Add New Player</h4>

      <form>
        <input
          className="p-3 m-5 w-5/6 hover:rounded-3xl rounded-xl transition-all duration-300 ease-linear shadow-2xl"
          placeholder="Player name..."
        ></input>
      </form>

      <button className="md-button orange-btn">Add</button>
    </div>
  );
}

export default AddPlayer;
