export default function DecimalToHexDocs() {
  return (
    <div className="container m-5 border-bottom border-2 border-dark pb-5">
      <h2 className="text-center mb-3">Decimal to Hexadecimal Conversion</h2>

      {/* Decimal Number */}
      <div className="card mb-3 p-3">
        <h4>What is a Decimal Number?</h4>
        <p>
          A <b>decimal number</b> belongs to the base-10 system and uses digits
          from <b>0 to 9</b>. Examples include <b>14, 67, 255</b>.
        </p>
      </div>

      {/* Hexadecimal Number */}
      <div className="card mb-3 p-3">
        <h4>What is a Hexadecimal Number?</h4>
        <p>
          A <b>hexadecimal number</b> belongs to the base-16 system. It uses
          digits <b>0–9</b> and letters <b>A–F</b> where:
        </p>
        <ul>
          <li>A = 10</li>
          <li>B = 11</li>
          <li>C = 12</li>
          <li>D = 13</li>
          <li>E = 14</li>
          <li>F = 15</li>
        </ul>
      </div>

      {/* Rules */}
      <div className="card mb-3 p-3">
        <h4>Rules for Decimal to Hexadecimal Conversion</h4>
        <ol>
          <li>
            Divide the decimal number by <b>16</b>.
          </li>
          <li>
            Write the <b>remainder</b> (convert to A–F if 10–15).
          </li>
          <li>
            Divide the quotient again by <b>16</b>.
          </li>
          <li>
            Repeat until the quotient becomes <b>0</b>.
          </li>
          <li>
            Write the remainders from <b>bottom to top</b> → final hex value.
          </li>
        </ol>
      </div>

      {/* Example */}
      <div className="card p-3">
        <h4>Solved Example</h4>
        <h5>
          Convert <b>254</b> to Hexadecimal:
        </h5>

        <table
          className="table table-bordered mt-3"
          style={{ fontSize: "0.8rem" }}
        >
          <thead>
            <tr>
              <th>Step</th>
              <th>Operation</th>
              <th>Quotient</th>
              <th>Remainder</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>254 ÷ 16</td>
              <td>15</td>
              <td>14</td>
            </tr>
            <tr>
              <td>2</td>
              <td>15 ÷ 16</td>
              <td>0</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Write remainders from <b>bottom to top</b>:{" "}
          <span className="fw-bold">FE</span>
        </p>

        <h5>
          ✔ Final Answer: <b>254 (decimal) = FE (hexadecimal)</b>
        </h5>
      </div>
    </div>
  );
}
