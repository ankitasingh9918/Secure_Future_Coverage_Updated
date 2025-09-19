 const searchToggle = document.getElementById("searchToggle");
    const searchBox = document.getElementById("searchBox");

    searchToggle.addEventListener("click", () => {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        searchBox.focus(); // automatically focus input
      }
    });






    const data = {
      medicare: {
        cat2: [
          "<p class='fs-5' style='font-family: Cambria;'>Shop Medicare</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Shop Medicare Advantage plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Shop Medicare drug (Part D) plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Shop Medicare Supplement plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>View all plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Let us help you choose a plan</p>"
        ],
        // cat3: ["How much does it cost?", "What does it cover?", "More resources"]
      },
      individual: {
        cat2: [
          "<p class='fs-5' style='font-family: Cambria;'>Shop dental plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Shop vision plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Shop dental, vision, hearing bundles</p>"],
        // cat3: ["Compare Plans", "Find a Provider", "Member Benefits"]
      },
      medicaid: {
        cat2: [
          "<p class='fs-5' style='font-family: Cambria;'>Medicaid support</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Enrollment and eligibility</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Understanding Medicaid and Medicare</p>"
        ],
        // cat3: ["State Programs", "Support Options", "Resources"]
      }
    };

    document.querySelectorAll(".plan-option").forEach(option => {
      option.addEventListener("mouseenter", function () {
        let target = this.getAttribute("data-target");

        // Update Category 2
        let cat2 = document.querySelector("#category2 ul");
        cat2.innerHTML = "";
        data[target].cat2.forEach(item => {
          cat2.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
        });

        // // Update Category 3
        // let cat3 = document.querySelector("#category3 ul");
        // cat3.innerHTML = "";
        // data[target].cat3.forEach(item => {
        //   cat3.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
        // });
      });
    });








     const insuranceData = {
      medicare: {
        cat2: [
          "<p>What is Medicare?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Am I eligible for Medicare?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>How to sign up for Medicare</p>",
          "<p class='fs-5' style='font-family: Cambria;'>How much does Medicare cost?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>What does Medicare cover?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>View more Medicare resources</p>"
        ],
        cat3: [
          "<img src='images/tablet-checklist.png' class='img-fluid mb-2'/>",
          "<h4 style='color:green;font-family: Cambria;'>Medicare Advantage vs. Original Medicare: Which option should I choose?</h4>",
          "<p class='fs-5' style='font-family: Cambria;'>Explore the differences between Original Medicare and Medicare Advantage so you can choose the best Medicare plan for you.</p>",
          "<button style='font-family: Cambria;' class='fs-5 btn btn-success text-white'>Learn about Original Medicare vs. Medicare Advantage</button>"
        ]
      },
      individual: {
        cat2: [
          "<p class='fs-5' style='font-family: Cambria;'>What is Medicare Part C?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Compare Medicare Advantage plans</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Original Medicare vs. Medicare Advantage</p>",
          "<p class='fs-5' style='font-family: Cambria;'>What is Medicare Part D?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>What is Medicare Supplement?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>View more Medicare plan resources</p>"
        ],
        cat3: [
          "<img src='images/tablet-checklist.png' class='img-fluid mb-2'/>",
          "<h4 style='color:green;font-family: Cambria;'>Compare Medicare Advantage plans</h4>",
          "<p class='fs-5' style='font-family: Cambria;'>Decide which type of Medicare Advantage plan is right for you by comparing options side-by-side.</p>",
          "<button class='fs-5 btn btn-success text-white' style='font-family: Cambria;'>Compare Medicare Advantage plans</button>"
        ]
      },
      medicaid: {
        cat2: [
          "<p class='fs-5' style='font-family: Cambria;'>Understanding Medicare enrollment periods</p>",
          "<p class='fs-5' style='font-family: Cambria;'>Medicare open enrollment guide</p>",
          "<p class='fs-5' style='font-family: Cambria;'>How do I switch Medicare plans?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>How do I enroll in a Medicare Part D plan?</p>",
          "<p class='fs-5' style='font-family: Cambria;'>View more Medicare enrollment resources</p>"
        ],
        cat3: [
          "<img src='images/tablet-checklist.png' class='img-fluid mb-2'/>",
          "<h4 style='color:green;font-family: Cambria;'>Medicare’s Open Enrollment Period: What you need to know</h4>",
          "<p class='fs-5' style='font-family: Cambria;'>From Oct. 15—Dec. 7 each year, people with Medicare can make changes to their coverage for the following year.</p>",
          "<button class='btn btn-success text-white fs-5' style='font-family: Cambria;'>Learn more about Medicare's Open Enrollment Period</button>"
        ]
      }
    };

    document.querySelectorAll(".plan-option").forEach(option => {
      option.addEventListener("mouseenter", function () {
        let target = this.getAttribute("data-target");

        // Cat2 update
        let cat2 = document.querySelector("#insuranceCat2");
        cat2.innerHTML = "";
        insuranceData[target].cat2.forEach(item => {
          cat2.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
        });

        // Cat3 update
        let cat3 = document.querySelector("#insuranceCat3");
        cat3.innerHTML = insuranceData[target].cat3.join("");
      });
    });




      const insurance = {
      medicare: {
        cat2: ["<p class='fs-5' style='font-family: Cambria;'>Manage CenterWell Pharmacy® prescriptions</p>", "<p class='fs-5' style='font-family: Cambria;'>Humana Medicare drug list</p>", "<p class='fs-5' style='font-family: Cambria;'>Find a pharmacy</p>", "<p class='fs-5' style='font-family: Cambria;'>Prescription savings and tools</p>"],
        // cat3: ["<img src = 'images/tablet-checklist.png'/>", "<h4 style='color:green;'>Compare Medicare Advantage plans</h4>", "<p class=''>Decide which type of Medicare Advantage plan is right <br> for you by comparing options side-by-side.</p>","<button class='btn btn-success text-white'>Compare Medicare Advantage plans</button>"]
      },
      individual: {
        cat2: ["<p class='fs-5' style='font-family: Cambria;'>Find care</p>", "<p class='fs-5' style='font-family: Cambria;'>Preventive care screenings</p>", "<p class='fs-5' style='font-family: Cambria;'>Health and wellness programs</p>", "<p class='fs-5' style='font-family: Cambria;'>Care in the home</p>", "<p class='fs-5' style='font-family: Cambria;'>Member programs and benefits</p>", "<p class='fs-5' style='font-family: Cambria;'>Member support</p>"],
        // cat3: ["<img src = 'images/tablet-checklist.png'/>", "<h4 style='color:green;'>Compare Medicare Advantage plans</h4>", "<p class=''>Decide which type of Medicare Advantage plan is right <br> for you by comparing options side-by-side.</p>","<button class='btn btn-success text-white'>Compare Medicare Advantage plans</button>"]

      },
      medicaid: {
        cat2: ["<p class='fs-5' style='font-family: Cambria;'>Manage CenterWell Pharmacy® prescriptions</p>", "<p class='fs-5' style='font-family: Cambria;'>Humana Medicare drug list</p>", "<p class='fs-5' style='font-family: Cambria;'>Find a pharmacy</p>", "<p class='fs-5' style='font-family: Cambria;'>Prescription savings and tools</p>"],
        // cat3: ["State Programs", "Support Options", "Resources"]
      }
    };

    document.querySelectorAll(".plan-option").forEach(option => {
      option.addEventListener("mouseenter", function () {
        let target = this.getAttribute("data-target");

        // Update Category 2
        let cat2 = document.querySelector("#insuranceCat4 ul");
        cat2.innerHTML = "";
        insurance[target].cat2.forEach(item => {
          cat2.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
        });

        // Update Category 3
        let cat3 = document.querySelector("#insuranceCat5 ul");
        cat3.innerHTML = "";
        insurance[target].cat3.forEach(item => {
          cat3.innerHTML += `<li><a class="dropdown-item" href="#">${item}</a></li>`;
        });
      });
    });






    // Simple client-side validation + fake submit
(function(){
'use strict'
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
e.preventDefault();
e.stopPropagation();
if (!form.checkValidity()){
form.classList.add('was-validated');
return;
}


// Simulate sending (here you'd do fetch/ajax)
const btn = form.querySelector('button[type="submit"]');
btn.disabled = true;
btn.innerText = 'Sending...';


setTimeout(()=>{
btn.disabled = false;
btn.innerText = 'Send Message';
// show success
document.getElementById('successMsg').classList.remove('d-none');
form.reset();
form.classList.remove('was-validated');
// close modal after a short delay
const modalEl = document.getElementById('contactModal');
const modal = bootstrap.Modal.getInstance(modalEl);
setTimeout(()=>{
if(modal) modal.hide();
document.getElementById('successMsg').classList.add('d-none');
},1200);
},1200);
});
})();

// body ky onload

//Additional Service Hover
function toggleDetail(card) {
  card.classList.toggle("active");
}


