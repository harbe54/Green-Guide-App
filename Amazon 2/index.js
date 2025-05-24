// Responsive Navbar Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Handle Search Button Click
document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  if (query === "") {
    alert("Please enter your location or soil type.");
    return;
  }

  // You would replace this with an actual API call
  console.log("Searching for:", query);

  // Example output simulation
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = <p>Searching soil type in: <strong>${query}</strong>... (API simulation)</p>;
});

// Icon Navigation Handlers
const iconSections = {
  "icon-nutrition": "Personalized nutrition section",
  "icon-impact": "Your environmental impact",
  "icon-community": "Green community space",
  "icon-climate": "Live climate data",
  "icon-qa": "Q&A Section - Ask our AI",
  "icon-local": "Local Action Hub",
  "icon-collab": "Collaborative Goals",
  "icon-game": "Green Game Zone"
};

Object.keys(iconSections).forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = <p>${iconSections[id]}</p>;
  });
});

// Amazon Bedrock Integration (Pseudo Example)
async function askAI(promptText) {
  const response = await fetch("/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: promptText })
  });

  const data = await response.json();
  document.getElementById("result").innerHTML = <p>AI Says: ${data.answer}</p>;
}

// Example: Hook to the Q&A button
document.getElementById("icon-qa").addEventListener("dblclick", () => {
  askAI("What can I plant in Lagos?");
});