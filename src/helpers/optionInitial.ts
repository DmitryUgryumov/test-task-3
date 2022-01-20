import { IRequests } from "./interfaces";

const optionsInitial: any[] = [
  { id: 1, title: "Все заявки", selected: true },
  {
    id: 2,
    title: "Заявки с комментариями",
    selected: false,
    sortedFunc: function (requests: IRequests[]) {
      return requests.filter((request) => request.comment.length);
    },
  },
  {
    id: 3,
    title: "Заявки без комменатриев",
    selected: false,
    sortedFunc: function (requests: IRequests[]) {
      return requests.filter((request) => !request.comment.length);
    },
  },
  {
    id: 4,
    title: "Заявки за сегодня",
    selected: false,
    sortedFunc: function (requests: IRequests[]) {
      const [currentDate, currentMonth, currentYear] = [
        new Date().getDate(),
        new Date().getMonth(),
        new Date().getFullYear(),
      ];

      return requests.filter((request) => {
        const [date, month, year] = [
          new Date(request.date).getDate(),
          new Date(request.date).getMonth(),
          new Date(request.date).getFullYear(),
        ];

        return (
          date === currentDate && month === currentMonth && year === currentYear
        );
      });
    },
  },
  {
    id: 5,
    title: "Заявки за текущий месяц",
    selected: false,
    sortedFunc: function (requests: IRequests[]) {
      const [currentMonth, currentYear] = [
        new Date().getMonth(),
        new Date().getFullYear(),
      ];

      return requests.filter((request) => {
        const [month, year] = [
          new Date(request.date).getMonth(),
          new Date(request.date).getFullYear(),
        ];

        return month === currentMonth && year === currentYear;
      });
    },
  },
];

export default optionsInitial;
