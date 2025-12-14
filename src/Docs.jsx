import DecimalToBinaryDocs from "./DecimalToBinaryDocs";
import DecimalToOctalDocs from "./DecimalToOctalDocs";
import DecimalToHexDocs from "./DecimalToHexDocs";
function Docs() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center m-2">
        <h4 className="text-primary pt-3 pt-xs-4 mt-xs-5 mt-5 text-center text-decoration-underline fs-xs-1">
          Detail information about Decimal to Binary , Octal , Hexadecimal
          Conversions :-
        </h4>
        <DecimalToBinaryDocs />
        <DecimalToOctalDocs />
        <DecimalToHexDocs />
      </div>
    </>
  );
}
export default Docs;
