document
  .getElementById("resume-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const photo = document.getElementById("photo").files[0];

    const resumePreview = document.getElementById("resume-preview");
    resumePreview.innerHTML = `
      <center><p><h1>${name}</h1>
      <img src="${URL.createObjectURL(
        photo
      )}" alt="Profile Photo" style="width:150px;height:auto;">
      <h4>Email:</h4> ${email}
      <h4>Phone:</h4> ${phone}
      <h4>LinkedIn:</h4> <a href="${linkedin}" target="_blank">${linkedin}</a>
      <h4>GitHub:</h4> <a href="${github}" target="_blank">${github}</a>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p><center>
    `;

    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-section").style.display = "block";
    document
      .getElementById("download-pdf")
      .addEventListener("click", function () {
        const resumePreview = document.getElementById("resume-preview");
        html2pdf().from(resumePreview).save("resume.pdf");
      });
  });
