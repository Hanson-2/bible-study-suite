const summaries = {
  "grace": "Grace is the unmerited favor of God. Key verses: Ephesians 2:8-9, Titus 2:11.",
  "atonement": "Atonement refers to the reconciliation between God and humanity through Christ's sacrifice. See Leviticus 16, Romans 3:25.",
  "john 3:16": "John 3:16 reveals God's love through the giving of His Son, offering eternal life to all who believe."
};

function runAI() {
  const query = document.getElementById('aiQuery').value.toLowerCase();
  const output = document.getElementById('aiOutput');
  output.innerHTML = summaries[query] || "No insight available for this topic yet.";
}