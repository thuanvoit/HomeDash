const electricityChart = document.getElementById("electricityChart");

new Chart(electricityChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Last Month",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
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


const waterChart = document.getElementById("waterChart");

new Chart(waterChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Last Month",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
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