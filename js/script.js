const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnqME00Upohwhs-mONoAh4j_HBOSlWaT96kwUqs9E-6WpK90ZwveIODqEi0ukg9x_pJlpmOq40vJVh/pub?gid=0&single=true&output=csv";

// Live component data — loaded from Google Sheets
let components = [];

// Parse CSV text into array of component objects
function parseCSV(text) {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
    return lines.slice(1).map(line => {
        // Handle commas inside quoted fields
        const cols = [];
        let current = "";
        let inQuotes = false;
        for (let ch of line) {
            if (ch === '"') { inQuotes = !inQuotes; }
            else if (ch === "," && !inQuotes) { cols.push(current.trim()); current = ""; }
            else { current += ch; }
        }
        cols.push(current.trim());
        const obj = {};
        headers.forEach((h, i) => obj[h] = cols[i] || "");
        return {
            id:        obj["id"],
            name:      obj["name"],
            category:  obj["category"],
            stock:     obj["stock"] || "available",
            imagePath: obj["imagepath"] || obj["imagePath"] || ""
        };
    }).filter(c => c.id); // skip empty rows
}

// Fetch components from Google Sheets and initialise the page
async function loadComponents() {
    const grid = document.getElementById("componentGrid");
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:4rem 0;font-size:var(--font-sm);text-transform:uppercase;letter-spacing:0.1em;">Loading components...</p>';

    try {
        const res  = await fetch(SHEET_CSV_URL);
        const text = await res.text();
        components = parseCSV(text);
        filterAndSort();
    } catch (err) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:4rem 0;font-size:var(--font-sm);text-transform:uppercase;letter-spacing:0.1em;">Failed to load components. Check your connection.</p>';
        console.error("Failed to load Google Sheet:", err);
    }
}

// Track which component is currently open in the modal
let activeComponentId = null;




// ===================================
// Render Archive (accepts a subset)
// ===================================
function renderArchive(items) {
    const grid = document.getElementById("componentGrid");

    if (!items || items.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:4rem 0;font-size:var(--font-sm);text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-muted);">No components found</p>';
        return;
    }

    grid.innerHTML = items.map(component => `
        <div class="component-card" onclick="openModal('${component.id}')">
            <div class="component-image-wrapper">
                <img
                    class="component-image"
                    src="${component.imagePath}"
                    alt="${component.name}"
                    onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22800%22><rect width=%22800%22 height=%22800%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2250%25%22 font-family=%22Arial%22 font-size=%2228%22 fill=%22%23555%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>No Image</text></svg>'"
                >
            </div>
            <div class="component-info">
                <div class="component-id">${component.id}</div>
                <h3 class="component-name">${component.name}</h3>
                <p class="component-category">${component.category}</p>
            </div>
        </div>
    `).join('');
}

// ===================================
// Filter + Sort
// ===================================
function filterAndSort() {
    const search   = document.getElementById("searchInput").value.trim().toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const sort     = document.getElementById("sortSelect").value;

    // Filter
    let result = components.filter(c => {
        const matchesCategory = category === "all" || c.category === category;
        const matchesSearch   = !search ||
            c.name.toLowerCase().includes(search) ||
            c.id.toLowerCase().includes(search) ||
            c.category.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });

    // Sort
    result = [...result].sort((a, b) => {
        switch (sort) {
            case "id-asc":       return a.id.localeCompare(b.id);
            case "id-desc":      return b.id.localeCompare(a.id);
            case "name-asc":     return a.name.localeCompare(b.name);
            case "name-desc":    return b.name.localeCompare(a.name);
            case "category-asc": return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
            default:             return 0;
        }
    });

    // Update count
    const countEl = document.getElementById("controlsCount");
    countEl.textContent = `${result.length} / ${components.length} items`;

    renderArchive(result);
}

// ===================================
// Modal Functions
// ===================================
function openModal(id) {
    const component = components.find(c => c.id === id);
    if (!component) return;

    activeComponentId = id;

    document.getElementById("modalImage").src = component.imagePath;
    document.getElementById("modalImage").alt = component.name;
    document.getElementById("modalTitle").textContent = component.name;
    document.getElementById("modalCategory").textContent = component.category;

    // Availability indicator
    const dot   = document.getElementById("availDot");
    const label = document.getElementById("availLabel");
    const btn   = document.getElementById("bookBtn");

    dot.className = "avail-dot avail-" + component.stock;
    const labels = { available: "Available", limited: "Limited Stock", unavailable: "Unavailable" };
    label.textContent = labels[component.stock] || "Unknown";

    // Disable booking if unavailable
    btn.disabled = component.stock === "unavailable";
    btn.textContent = component.stock === "unavailable" ? "Currently Unavailable" : "Book Component";

    document.getElementById("modal").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
    activeComponentId = null;
}

// ===================================
// Booking Form Functions
// ===================================
function openBookingForm() {
    const component = components.find(c => c.id === activeComponentId);
    if (!component || component.stock === "unavailable") return;

    // Populate the booking popup with component ID
    document.getElementById("bookingComponentId").textContent = component.id + " — " + component.name;

    // Clear previous inputs
    document.getElementById("fieldName").value = "";
    document.getElementById("fieldClass").value = "";
    document.getElementById("fieldPurpose").value = "";

    document.getElementById("bookingOverlay").classList.add("active");
}

function closeBookingForm() {
    document.getElementById("bookingOverlay").classList.remove("active");
}

function submitBooking() {
    const name    = document.getElementById("fieldName").value.trim();
    const cls     = document.getElementById("fieldClass").value.trim();
    const purpose = document.getElementById("fieldPurpose").value.trim();

    // Basic validation
    if (!name || !cls || !purpose) {
        ["fieldName", "fieldClass", "fieldPurpose"].forEach(fid => {
            const el = document.getElementById(fid);
            if (!el.value.trim()) {
                el.classList.add("field-error");
                setTimeout(() => el.classList.remove("field-error"), 600);
            }
        });
        return;
    }

    const component = components.find(c => c.id === activeComponentId);

    // Close both overlays
    closeBookingForm();
    closeModal();

    // Show toast confirmation
    showToast(`Booking confirmed — ${component.name} reserved for ${name}`);

    // Send Telegram notification
    sendTelegramNotification(component, name, cls, purpose);
}

function sendTelegramNotification(component, name, cls, purpose) {
    const TELEGRAM_TOKEN = "8382935369:AAHGrP6721taTpEc9M8x3R_mJcs6kvkPJp4";
    const CHAT_ID        = "-1003601841724";

    const now = new Date();
    const timestamp = now.toLocaleString("en-IN", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: true
    });

    const message =
`📦 <b>New Booking — Idea Lab</b>

<b>Component:</b> ${component.name} <code>(${component.id})</code>
<b>Category:</b> ${component.category}

<b>Name:</b> ${name}
<b>Class:</b> ${cls}
<b>Purpose:</b> ${purpose}

🕐 ${timestamp}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML"
        })
    }).catch(err => console.warn("Telegram notification failed:", err));
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("toast-visible");
    setTimeout(() => toast.classList.remove("toast-visible"), 4000);
}

// ===================================
// Initialize
// ===================================
document.addEventListener("DOMContentLoaded", function() {
    loadComponents(); // Fetch from Google Sheets and render

    // Filter & sort listeners
    document.getElementById("searchInput").addEventListener("input", filterAndSort);
    document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
    document.getElementById("sortSelect").addEventListener("change", filterAndSort);

    // Modal close handlers
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", function(e) {
        if (e.target === this) closeModal();
    });

    // Booking form close handler
    document.getElementById("bookingClose").addEventListener("click", closeBookingForm);

    // ESC closes whichever overlay is open
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            if (document.getElementById("bookingOverlay").classList.contains("active")) {
                closeBookingForm();
            } else {
                closeModal();
            }
        }
    });
});
