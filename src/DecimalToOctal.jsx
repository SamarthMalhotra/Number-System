import InputBox from "./InputBox";
function DecimalToOctal() {
  return (
    <>
      <div className="d-flex  flex-column justify-content-center align-items-center gap-5 p-3 m-lg-3 mt-5">
        {" "}
        <h2 className="mt-5"> Decimal to Octal Conversion</h2>
        <InputBox ans="Octal" />
      </div>
    </>
  );
}
export default DecimalToOctal;
