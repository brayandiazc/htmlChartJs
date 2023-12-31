document.addEventListener("DOMContentLoaded", () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    values: [10, 20, 15, 25, 30, 18],
  };

  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "# of Month",
          data: data.values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",

            "rgba(54, 162, 235, 0.5)",

            "rgba(255, 206, 86, 0.5)",

            "rgba(75, 192, 192, 0.5)",

            "rgba(153, 102, 255, 0.5)",

            "rgba(255, 159, 64, 0.5)",
          ],

          borderColor: [
            "rgba(255, 99, 132, 1)",

            "rgba(54, 162, 235, 1)",

            "rgba(255, 206, 86, 1)",

            "rgba(75, 192, 192, 1)",

            "rgba(153, 102, 255, 1)",

            "rgba(255, 159, 64, 1)",
          ],

          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
