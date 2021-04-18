import React, {useEffect, useCallback, useState} from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import Weather from "./Weather";
import { cityAtom } from "./Atoms";
import debounce from "lodash.debounce";

function useDebounce(callback, delay) {
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
}

export default function App() {
  const [value, setValue] = useState("");
  const [currentCity, setCurrentCity] = useRecoilState(cityAtom);

  const debouncedSave = useDebounce((nextValue) => setCurrentCity(nextValue), 1000);

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  useEffect(() => {
    setValue(currentCity)
    return () => {
      //
    }
  }, [])

  return (
    <div className="App">
      <p>
        Enter City:
        <input
          value={value}
          onChange={handleChange}
        />
      </p>
      <React.Suspense fallback="Loading weather...">
        <Weather />
      </React.Suspense>
    </div>
  );
}
