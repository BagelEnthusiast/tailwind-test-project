const ProductTile = ({ img, content }) => (
  <div
    className="
    grid grid-rows-3
    p-[0px] gap-[8px]
    border-solid border-black border 2"
  >
    <img src={img} className="
    flex grow-2
    border-solid border-black border 2" />

    <div
      className="
        flex grow-1
        p-[0px] gap-[4px]
        border-solid border-black border 2
        "
    >
      <div>{content}</div>
    </div>
    <div
      className="
        flex grow-1
        p-[0px] gap-[4px]
        border-solid border-black border 2
        "
    ></div>
  </div>
);

export default ProductTile;
