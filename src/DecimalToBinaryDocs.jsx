export default function DecimalToBinaryDocs() {
  return (
    <div className="container m-4 border-bottom border-2 border-dark pb-5">
      <h2 className="text-center mb-4">Decimal to Binary Conversion</h2>

      {/* Decimal Number */}
      <div className="card mb-3 p-3">
        <h4>What is a Decimal Number?</h4>
        <p>
          A <b>decimal number</b> is a number written in the base-10 number
          system. It uses digits from <b>0 to 9</b>. Example:{" "}
          <b>5, 18, 202, 999</b>.
        </p>
      </div>

      {/* Binary Number */}
      <div className="card mb-3 p-3">
        <h4>What is a Binary Number?</h4>
        <p>
          A <b>binary number</b> is a number written in the base-2 system. It
          uses only two digits: <b>0 and 1</b>.
        </p>
        <p>
          Binary is used by computers because they understand only ON (1) and
          OFF (0).
        </p>
      </div>

      {/* Rules */}
      <div className="card mb-3 p-3">
        <h4>Rules for Decimal to Binary Conversion</h4>
        <ol>
          <li>
            Divide the decimal number by <b>2</b>.
          </li>
          <li>
            Write the <b>remainder</b> (0 or 1).
          </li>
          <li>
            Divide the quotient again by <b>2</b>.
          </li>
          <li>
            Repeat until the quotient becomes <b>0</b>.
          </li>
          <li>
            Write the remainders from <b>bottom to top</b> → final binary
            number.
          </li>
        </ol>
      </div>

      {/* Example */}
      <div className="card  p-lg-3">
        <h4>Solved Example</h4>
        <h5>
          Convert <b>13</b> to Binary:
        </h5>

        <table className="table table-bordered mt-3">
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
              <td>13 ÷ 2</td>
              <td>6</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>6 ÷ 2</td>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3 ÷ 2</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1 ÷ 2</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Write remainders from <b>bottom to top</b>:
          <span className="fw-bold"> 1101</span>
        </p>

        <h5>
          ✔ Final Answer: <b>13 (decimal) = 1101 (binary)</b>
        </h5>
      </div>
    </div>
  );
}
