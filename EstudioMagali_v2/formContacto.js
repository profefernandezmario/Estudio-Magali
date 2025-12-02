 // Modal functionality
        const modal = document.getElementById("contactModal");
        const openModalBtn = document.getElementById("openModal");
        const closeModalBtn = document.querySelector(".close");
        const form = document.getElementById("whatsappForm");

        // Open modal
        openModalBtn.onclick = function() {
            modal.style.display = "block";
        }

        // Close modal
        closeModalBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close when clicking outside modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Form submission handler
        form.onsubmit = function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById("fullName").value;
            const phone = document.getElementById("phone").value.replace(/\D/g, ''); // Remove non-digits
            const message = document.getElementById("message").value;
            
            // Validate phone number
            if (phone.length < 10) {
                alert("Por favor ingresa un número de celular válido (mínimo 10 dígitos)");
                return;
            }
            
            // Format WhatsApp message
            let whatsappMessage = `Hola! Me llamo ${fullName}. `;
            whatsappMessage += message ? `\n${message}` : "";
            whatsappMessage += `\n\nQuisiera comprar stickers.`;
            
            // URL encode the message
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp API URL
            const whatsappURL = `https://wa.me/$+5493624003295?text=${encodedMessage}`;
            //    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
            
            // Close modal after sending
            modal.style.display = "none";
            
            // Reset form
            form.reset();
        }

        // Simple animation for buttons
        document.querySelectorAll('.btn-custom').forEach(button => {
            button.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-3px)';
            });
            button.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });