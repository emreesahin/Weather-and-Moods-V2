import { Key, useEffect, useState } from "react";
import dataServices from "./dataServices";

function FetchingData ()  {
  const [times, setTimes] = useState<any>([]);

  let DataServices = new dataServices();

  useEffect(() => {
    DataServices.getData().then((response) => {
      setTimes(response.data.hourly);
    });
  }, [DataServices]);

  function getWeather() {
    const d = new Date();
    let hours: number  = d.getHours();
    let minutes: number = d.getMinutes();
    let dateDay: number  = d.getDate();
    let dateMonth: number = d.getMonth();
    let dateYear: number  = d.getFullYear();

    return times.time
      ? times.time.map((t : string , index: Key | null | undefined) =>
          index === hours ? (
            <ul key={index} id="dataFromAPI">
              {"Date: " +
                dateDay +
                " / " +
                dateMonth +
                " / " +
                dateYear +
                "\n" +
                "Hour: " +
                hours +
                "." +
                minutes +
                "\n" +
                "Temperature: " +
                times.temperature_2m[hours] +
                "°C" +
                "\n " +
                "Mood " +
                "\n" +
                DataServices.moods(times.temperature_2m[hours])}
            </ul>
          ) : null
        )
      : null;
  }
  return (
      <div>
          {getWeather()}
      </div>
  )
}
export default FetchingData;


