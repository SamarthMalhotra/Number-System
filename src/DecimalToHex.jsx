import InputBox from "./InputBox";
function DecimalToHex() {
  return (
    <>
      {" "}
      <div className="d-flex  flex-column justify-content-center align-items-center gap-5 p-2 m-lg-3 mt-5">
        {" "}
        <h2 className="mt-5"> Decimal to Hexadecimal Conversion</h2>
        <InputBox ans="Hexadecimal" />
      </div>
    </>
  );
}
export default DecimalToHex;
