import { useState, useEffect } from "react";
import dataServices from "./dataServices";

function DateSelector() {
  const d = new Date();
  let dateDay: number | string = d.getDate();
  dateDay = dateDay < 10 ? "0" + dateDay : dateDay;
  let dateMonth: number | string = d.getMonth();
  dateMonth = dateMonth < 10 ? "0" + dateMonth : dateMonth;
  let dateYear: number = d.getFullYear();
  let initialDate = dateYear + "-" + dateMonth + "-" + dateDay;

  const [time, setTime] = useState<any>();
  const [date, setDate] = useState<any>(initialDate);
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

  const getWeather2 = () => {
    let index = times.time.findIndex((time: any) => time === fullTime());
    console.log(times.temperature_2m[index]);
    degree = times.temperature_2m[index];
    return index ? times.temperature_2m[index] : null;
  };

  const getMood = () => {
    if (degree < 10) {
      return alert("Temperature is: " + getWeather2() + "\n" + "Mood: Sick");
    } else if (degree < 15) {
      return alert("Temperature is: " + getWeather2() + "\n" + "Mood: Bored");
    } else if (degree < 25) {
      return alert(
        "Temperature is: " + getWeather2() + "\n" + "Mood: Cheerfull"
      );
    } else {
      return alert("Temperature is: " + getWeather2() + "\n" + "Mood: Angry");
    }
  };

  return (
    <div className="mainContainer">
      <label className="dateSection" htmlFor="Date">
        Date
        <input
          className="dateSectionBox"
          id="date"
          placeholder="yyyy-mm-dd"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label className="timeSection" htmlFor="time">
        Time
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
      </label>
      <button className="getMoodButton" onClick={getMood}>
        Get Mood
      </button>
    </div>
  );
}
export default DateSelector;
