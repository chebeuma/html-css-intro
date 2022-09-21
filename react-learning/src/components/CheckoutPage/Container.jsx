const Container = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col m-4 md:w-5/12">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <div className="text-xl p-1 ">Huzefa Bagwala</div>

            <button className="border border-green-100 text-xs p-1 text-green-400">
              <a href="#"> HOME</a>
            </button>
          </div>

          <div className="flex flex-row">
            <div className="text-black-300 text-xs text-end p-1 m-1">
              <a href="#">EDIT</a>
            </div>
            <div className="text-red-300 text-xs text-end p-1 m-1">
              <a href="#">Remove</a>
            </div>
          </div>
        </div>

        <div className="text-xs p-1">
          1131 Dusty Townline,Jacksonville,TX 40322
        </div>

        <div className="text-xs p-1">Contact : (936)361-0310</div>
      </div>

      <div>
        <div className="flex flex-col m-4 md:w-5/12">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div className="text-xl p-1 ">IndiaTech</div>

              <button className="border border-green-100 text-xs p-1 text-green-400">
                <a href="#">HOME</a>
              </button>
            </div>
            <div className="flex flex-row">
              <div className="text-black-300 text-xs text-end p-1 m-1">
                <a href="#">EDIT</a>
              </div>
              <div className="text-red-300 text-xs text-end p-1 m-1">
                <a href="#">Remove</a>
              </div>
            </div>
          </div>

          <div className="text-xs p-1">
            1219 Harvest Path,Jacksonville,TX 40322
          </div>

          <div className="text-xs p-1">Contact : (936)361-0310</div>
        </div>
      </div>
    </div>
  );
};
export default Container;
