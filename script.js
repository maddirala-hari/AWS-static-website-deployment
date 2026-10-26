
document.addEventListener("DOMContentLoaded", () => {
    const projectSection = document.querySelector("#architecture");

    if (projectSection) {
        const button = document.querySelector(".hero a");

        if (button) {
            button.addEventListener("click", () => {
                projectSection.classList.add("highlight");

                const heading = projectSection.querySelector("h2");

                if (heading) {
                    heading.textContent = "AWS Deployment Project Overview";
                }
            });
        }
    }

    console.log("AWS Static Website Deployment page loaded successfully.");
});
