import { useState, useEffect } from "react";
import "./dateSelector.css";
import dataServices from "./dataServices";
import { DataTypes } from "./types";

function DateSelector() {
  const [time, setTime] = useState<any>();
  const [date, setDate] = useState<any>();
  const [times, setTimes] = useState<any>();

  const fullTime = () => {
    return date + "T" + time;
  };

  let DataServices = new dataServices();

  useEffect(() => {
    DataServices.getData().then((response: any) => {
      setTimes(response.data.hourly);
    });
  }, [dataServices]);

  let degree: number = 0;
  const getWeather = () => {
    let index =
      times && time
        ? times.time.findIndex((time: any) => time === fullTime())
        : null;
    console.log(times.temperature_2m[index]);

    return index ? times.temperature_2m[index] : null;
  };
  const getMood = () => {
    if (degree < 10) {
      return alert("Sick");
    } else if (degree < 15) {
      return alert("Bored");
    } else if (degree < 25) {
      return alert("Cheerfull");
    } else {
      return alert("Angry");
    }
  };

  return (
    <div className="mainContainer">
      <label className="dateSection" htmlFor="Date">
        DATE
        <input
          className="dateSectionBox"
          id="date"
          placeholder="yyyy-mm-dd"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label htmlFor="time" className="timeSection">
        TIME
        <select
          className="timeSelectBox"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="00:00">00.00</option>
          <option value="01:00">01.00</option>
          <option value="02:00">02.00</option>
          <option value="03:00">03.00</option>
          <option value="04:00">04.00</option>
          <option value="05:00">05.00</option>
          <option value="06:00">06.00</option>
          <option value="07:00">07.00</option>
          <option value="08:00">08.00</option>
          <option value="09:00">09.00</option>
          <option value="10:00">10.00</option>
          <option value="11:00">11.00</option>
          <option value="12:00">12.00</option>
          <option value="13:00">13.00</option>
          <option value="14:00">14.00</option>
          <option value="15:00">15.00</option>
          <option value="16:00">16.00</option>
          <option value="17:00">17.00</option>
          <option value="18:00">18.00</option>
          <option value="19:00">19.00</option>
          <option value="20:00">20.00</option>
          <option value="21:00">21.00</option>
          <option value="22:00">22.00</option>
          <option value="23:00">23.00</option>
        </select>
        <p className="dateValue">
          {date}T{time}
          <br />
          {getWeather}
        </p>
      </label>
      <button className="getMoodButton" onClick={getMood}>
        Get Mood
      </button>
    </div>
  );
}
export default DateSelector;
