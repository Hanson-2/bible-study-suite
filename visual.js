document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("frequencyChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Love", "Faith", "Grace", "Judgment"],
      datasets: [{
        label: "Word Frequency",
        data: [42, 30, 25, 18]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Word Frequency in Selected Text" }
      }
    }
  });
});