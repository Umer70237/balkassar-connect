// Sample data - Replace with your actual workers
      const workers = [
        {
          name: "Ahmed Khan",
          phone: "+923001234567",
          category: "plumber",
          location: "صوفی بیکرز کے قریب ایم سی بی بینک",
        },
        {
          name: "Hassan Ali",
          phone: "+923007654321",
          category: "plumber",
          location: "مین بازار چوک کے پاس",
        },
        {
          name: "Bilal Sheikh",
          phone: "+923009876543",
          category: "electrician",
          location: "سکول روڈ کے قریب",
        },
        {
          name: "Farhan Malik",
          phone: "+923005551234",
          category: "electrician",
          location: "مسجد کے سامنے",
        },
        {
          name: "Kashif Iqbal",
          phone: "+923008887777",
          category: "carpenter",
          location: "بس سٹاپ کے پاس",
        },
        {
          name: "Nadeem Abbas",
          phone: "+923006669999",
          category: "carpenter",
          location: "پوسٹ آفس کے قریب",
        },
        {
          name: "Wasim Akram",
          phone: "+923004445555",
          category: "mechanic",
          location: "پٹرول پمپ کے سامنے",
        },
        {
          name: "Imran Butt",
          phone: "+923002223333",
          category: "mechanic",
          location: "ہسپتال روڈ",
        },
        {
          name: "Salman Raza",
          phone: "+923001112222",
          category: "driver",
          location: "بازار میں",
        },
      ];

      // Urdu category names
      const categoryNamesUrdu = {
        plumber: "پلمبر",
        electrician: "الیکٹریشن",
        carpenter: "کارپینٹر(لکڑی کا کام)",
        mechanic: "موٹر وائنڈنگ / آلات کی مرمت",
        driver: "driver"
      };

      const categoryButtons = document.querySelectorAll(".category-btn");
      const workersList = document.getElementById("workers-list");
      const sectionTitle = document.getElementById("section-title");
      const scrollTopBtn = document.getElementById("scrollTopBtn");

      function renderWorkers(category) {
        const filtered =
          category === "all"
            ? workers
            : workers.filter((w) => w.category === category);

        if (filtered.length === 0) {
          workersList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <p style="font-family: 'Noto Nastaliq Urdu', serif; direction: rtl;">اس زمرے میں کوئی کاریگر نہیں ملا</p>
                    </div>
                `;
          return;
        }

        // Show category badge when viewing "all"
        const showCategory = category === "all";

        workersList.innerHTML = filtered
          .map(
            (worker) => `
                <div class="worker-card">
                    <div class="worker-info">
                        <div class="worker-name">
                            <span>${worker.name}</span>
                            ${showCategory ? `<span class="category-badge">${categoryNamesUrdu[worker.category]}</span>` : ""}
                        </div>
                        <div class="worker-location">${worker.location}</div>
                    </div>
                    <div class="worker-buttons">
                        <a href="https://wa.me/${worker.phone.replace(/\+/g, "")}" 
                           class="whatsapp-btn">
                            <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                        <a href="tel:${worker.phone}" class="call-btn">
                            <svg class="call-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                            </svg>
                            Call
                        </a>
                    </div>
                </div>
            `,
          )
          .join("");
      }

      function updateCategory(category) {
        // Update active button
        categoryButtons.forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.category === category);
        });

        // Update section title
        const titles = {
          all: "تمام سروسز",
          plumber: "پلمبر",
          electrician: "الیکٹریشن",
          carpenter: "کارپینٹر (لکڑی کا کام)",
          mechanic: "موٹر وائنڈنگ / آلات کی مرمت",
          driver: "دیگر خدمات",
        };
        sectionTitle.textContent = titles[category];

        // Render workers
        renderWorkers(category);

        // Smooth scroll to workers section
        setTimeout(() => {
          document.querySelector(".workers-section").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }

      // Event listeners for category buttons
      categoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          updateCategory(btn.dataset.category);
        });
      });

      // Scroll to top button functionality
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Show/hide scroll to top button based on scroll position
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollTopBtn.classList.add("visible");
        } else {
          scrollTopBtn.classList.remove("visible");
        }
      });

      // Initial render
      renderWorkers("all");
