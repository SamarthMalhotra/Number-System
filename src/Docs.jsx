import DecimalToBinaryDocs from "./DecimalToBinaryDocs";
import DecimalToOctalDocs from "./DecimalToOctalDocs";
import DecimalToHexDocs from "./DecimalToHexDocs";
function Docs() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center m-2">
        <h3 className="text-primary pt-2 mt-5 text-center text-decoration-underline">
          Detail information about Decimal to Binary , Octal , Hexadecimal
          Conversions :-
        </h3>
        <DecimalToBinaryDocs />
        <DecimalToOctalDocs />
        <DecimalToHexDocs />
      </div>
    </>
  );
}
export default Docs;
