 const modal = document.getElementById("contactModal");
        const openModalBtn = document.getElementById("openModal");
        const closeModalBtn = document.querySelector(".close");
        const form = document.getElementById("whatsappForm");

        openModalBtn.onclick = () => modal.style.display = "block";
        closeModalBtn.onclick = () => modal.style.display = "none";
        window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

        form.onsubmit = (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // Build message
            let msg = `Hola! Me llamo ${fullName}.`;
            if (phone) msg += ` Mi número es: ${phone}.`;
            if (message) msg += ` Mensaje: "${message}"`;
            msg += `\n\nQuisiera comprar stickers.`;

            const encodedMsg = encodeURIComponent(msg);
            const whatsappNumber = "5493624003295"; // Fixed destination number
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
            
            window.open(whatsappUrl, '_blank');
            modal.style.display = "none";
            form.reset();
        };

        // Existing animations
        document.querySelectorAll('.btn-custom').forEach(button => {
            button.addEventListener('mouseenter', () => button.style.transform = 'translateY(-3px)');
            button.addEventListener('mouseleave', () => button.style.transform = 'translateY(0)');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });