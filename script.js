const examData = {
  upsc: [
    "Civil Services Exam",
    "Engineering Service Exam",
    "Forest Service Examination",
    "Exam 4",
    "Exam 5"
  ],
  ssc: [
    "SSC - CGL",
    "SSC - CHSL",
    "SSC JE",
    "SSC MTS",
    "Exam 5",
    "Exam 6"
  ],
  banking: [
    "IBPS PO",
    "SBI Clerk",
    "RBI Grade B",
    "Exam 4",
    "Exam 5"
  ],
  railways: [
    "RRB NTPC",
    "RRB Group D",
    "RRB ALP",
    "Exam 4",
    "Exam 5"
  ]
};

function showCategory(category) {
  const panel = document.getElementById("category-panel");
  panel.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";

  const title = document.createElement("div");
  title.className = "category-title";
  title.innerText = category.toUpperCase();

  const examsContainer = document.createElement("div");
  examsContainer.className = "exam-boxes";

  examData[category].forEach(exam => {
    const examDiv = document.createElement("div");
    examDiv.className = "exam";
    examDiv.innerText = exam;
    examsContainer.appendChild(examDiv);
  });

  wrapper.appendChild(title);
  wrapper.appendChild(examsContainer);
  panel.appendChild(wrapper);
  panel.style.display = "block";
}
