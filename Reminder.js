document.getElementById("enableReminder").addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      localStorage.setItem("reminderEnabled", "true");
      document.getElementById("status").innerText = "Reminder is ON ✅";
      scheduleReminder();
    } else {
      document.getElementById("status").innerText = "Permission denied ❌";
    }
  });
});

document.getElementById("disableReminder").addEventListener("click", () => {
  localStorage.setItem("reminderEnabled", "false");
  document.getElementById("status").innerText = "Reminder is OFF 🚫";
});

function scheduleReminder() {
  const lastShown = localStorage.getItem("lastReminder");
  const today = new Date().toDateString();
  const reminderEnabled = localStorage.getItem("reminderEnabled");

  if (reminderEnabled === "true" && lastShown !== today) {
    setTimeout(() => {
      new Notification("🧠 It’s Brain Battle time!", {
        body: "Ready to challenge your brain today?",
        icon: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",
      });
      localStorage.setItem("lastReminder", today);
    }, 5000); // wait 5 seconds just for demo
  }
}

// Run when page loads
window.onload = () => {
  if (localStorage.getItem("reminderEnabled") === "true") {
    document.getElementById("status").innerText = "Reminder is ON ✅";
    scheduleReminder();
  } else {
    document.getElementById("status").innerText = "Reminder is OFF 🚫";
  }
};
