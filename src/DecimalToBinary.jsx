import InputBox from "./InputBox.jsx";

function DecimalToBinary() {
  return (
    <>
      <div className="d-flex  flex-column justify-content-center align-items-center gap-5 p-2 mt-lg-3 mt-5">
        {" "}
        <h2 className="mt-5"> Decimal to Binary Conversion</h2>
        <InputBox ans="Binary" />
      </div>
    </>
  );
}
export default DecimalToBinary;
