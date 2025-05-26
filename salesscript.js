  const datePicker = flatpickr("#datepicker", {
    dateFormat: "Y-m-d",
    defaultDate: new Date()
  });

  document.getElementById("todayBtn").addEventListener("click", () => {
    const today = new Date();
    datePicker.setDate(today, true); // true = trigger change event
  });
