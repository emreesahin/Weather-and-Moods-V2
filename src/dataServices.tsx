import customAxios from "./utilities/AxiosInterceptor";

export default class dataServices {
  getData = () => {
    return customAxios.get(
      "api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m"
    );
  };

    moods = (degree: number) => {
    if (degree < 10) {
      return "Sick ";
    } else if (degree < 25) {
      return "Cheerful";
    } else if (degree < 35) {
      return "Bored";
    } else {
      return "Angry";
    }
  };
}
