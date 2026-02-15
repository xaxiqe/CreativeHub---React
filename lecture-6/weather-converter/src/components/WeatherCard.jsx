import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

const cToF = (c) => c * (9 / 5) + 32;
const fToC = (f) => (f - 32) * (5 / 9);

function WeatherCard({ from, to, fromUnit, toUnit }) {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [history, setHistory] = useState([]);

  const convert = (num) => {
    if (from === "C" && to === "F") return cToF(num);
    if (from === "F" && to === "C") return fToC(num);
    return num;
  };

  const handleChange = (e) => setFromValue(e.target.value);

  const handleConvert = () => {
    const num = Number(fromValue);
    if (fromValue === "") return;

    const result = convert(num).toFixed(1);

    setHistory((prev) => [`${num} ${fromUnit} → ${result} ${toUnit}`, ...prev]);
  };

  const handleReset = () => {
    setFromValue("");
    setToValue("");
    setHistory([]);
  };

  return (
    <section className="max-w-md border border-gray-900 p-5 rounded space-y-4">
      <div className="flex items-center gap-2">
        <Input unit={fromUnit} value={fromValue} onChange={handleChange} />
      </div>

      <Button onClick={handleConvert} btn="Convert" />

      <div className="flex items-center gap-2">
        <Input unit={toUnit} value={toValue} />
      </div>

      {history.length > 0 && (
        <div className="border-t pt-3 space-y-2">
          <p className="font-semibold">History</p>
          <ul className="space-y-1">
            {history.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button onClick={handleReset} btn="Reset" />
    </section>
  );
}

export default WeatherCard;
