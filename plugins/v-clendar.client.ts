import Vcalendar from "v-calendar";
import "v-calendar/dist/style.css";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(Vcalendar, {
    datePickerTintColor: "#F00",
    datePickerShowDayPopover: false,
  });
});
