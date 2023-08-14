document.addEventListener("DOMContentLoaded", () => {
    const passwordRecoveryForm = document.getElementById("passwordRecoveryForm");
    const resetPasswordForm = document.getElementById("resetPasswordForm");
    const resetPasswordButton = document.getElementById("resetPasswordButton");

    passwordRecoveryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        passwordRecoveryForm.classList.add("hidden");
        resetPasswordForm.classList.remove("hidden");
    });

    resetPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Perform password reset logic here
        alert("Password reset successful!");
    });
});
