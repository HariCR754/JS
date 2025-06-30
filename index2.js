function showSelections() {
  // Get selected interests
  const checkboxes = document.querySelectorAll(
    'input[name="interest"]:checked'
  );
  const interests = Array.from(checkboxes).map((cb) => cb.value);

  // Get selected gender
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Get selected programming language
  const language = document.getElementById("programmingLanguage").value;

  // Display results
  document.getElementById(
    "resultInterests"
  ).innerHTML = `Your interests: ${interests.join(", ")}`;
  document.getElementById("resultGender").innerHTML = `Your gender: ${gender}`;
  document.getElementById(
    "resultLanguage"
  ).innerHTML = `Preferred programming language: ${language}`;
}
