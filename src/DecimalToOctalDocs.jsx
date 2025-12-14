export default function DecimalToOctalDocs() {
  return (
    <div className="container mt-4 border-bottom border-2 border-dark pb-5">
      <h2 className="text-center mb-3">Decimal to Octal Conversion</h2>

      {/* Decimal Number */}
      <div className="card mb-3 p-3">
        <h4>What is a Decimal Number?</h4>
        <p>
          A <b>decimal number</b> is a number in the base-10 system. It uses
          digits from <b>0 to 9</b>. Example: <b>8, 45, 129, 202</b>.
        </p>
      </div>

      {/* Octal Number */}
      <div className="card mb-3 p-3">
        <h4>What is an Octal Number?</h4>
        <p>
          An <b>octal number</b> is a number in the base-8 system. It uses
          digits from <b>0 to 7</b>.
        </p>
        <p>
          Octal is commonly used in computer systems because it is closely
          related to binary.
        </p>
      </div>

      {/* Rules */}
      <div className="card mb-3 p-3">
        <h4>Rules for Decimal to Octal Conversion</h4>
        <ol>
          <li>
            Divide the decimal number by <b>8</b>.
          </li>
          <li>
            Write the <b>remainder</b> (0–7).
          </li>
          <li>
            Divide the quotient again by <b>8</b>.
          </li>
          <li>
            Repeat until the quotient becomes <b>0</b>.
          </li>
          <li>
            Write the remainders from <b>bottom to top</b> → final octal number.
          </li>
        </ol>
      </div>

      {/* Example */}
      <div className="card p-lg-3 p-1 fs-6">
        <h4>Solved Example</h4>
        <h5>
          Convert <b>65</b> to Octal:
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
              <td>65 ÷ 8</td>
              <td>8</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>8 ÷ 8</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1 ÷ 8</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-2">
          Write remainders from <b>bottom to top</b>:
          <span className="fw-bold"> 101</span>
        </p>

        <h5>
          ✔ Final Answer: <b>65 (decimal) = 101 (octal)</b>
        </h5>
      </div>
    </div>
  );
}
