import { useState } from "react";
import "./InputBox.css";
import { DtoB, DtoO, DtoH } from "./Algorithm";

export default function InputBox({ ans }) {
  const [query, setQuery] = useState();
  const [result, setResult] = useState("");

  function calculate(choice) {
    let res = "";
    switch (choice) {
      case "Binary":
        res = DtoB(query);
        break;
      case "Octal":
        res = DtoO(query);
        break;

      case "Hexadecimal":
        res = DtoH(query);
        break;
      default:
        res = "?Invalid Input";
    }
    setQuery("");
    setResult(res);
  }

  return (
    <div className="d-flex flex-column gap-lg-5 justify-content-center align-items-center formBox">
      <div
        className="mb-1 d-flex flex-column justify-content-center"
        style={{ width: "100%" }}
      >
        <label htmlFor="que" className="form-label ms-lg-5 ms-2">
          <h4>Decimal Number</h4>
        </label>
        <input
          type="text"
          id="que"
          className="form-control question align-self-center"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <button
        type="button"
        class="btn btn-primary inputbtn"
        onClick={() => calculate(ans)}
      >
        Cover Decimal to {ans}
      </button>
      <div
        className="mb-1 d-flex flex-column justify-content-center"
        style={{ width: "100%" }}
      >
        <label htmlFor="ans" className="ms-lg-5 ms-2">
          <h4>{ans} Number</h4>
        </label>
        <p type="number" id="ans" className="answer align-self-center">
          {result}
        </p>
      </div>
    </div>
  );
}
