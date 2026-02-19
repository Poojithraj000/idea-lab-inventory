// ===================================
// VISUAL COMPONENT ARCHIVE
// Image-First Editorial Display
// ===================================

// Generate SVG placeholder
function generatePlaceholder(text, color = "#2c3e50") {
    const svg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="800" fill="${color}"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}

const components = [
    { id: "IL001", name: "Arduino UNO",                        category: "Processing Units",        stock: "available",   imagePath: "images/components/arduino-uno.jpg" },
    { id: "IL002", name: "Arduino Mega",                       category: "Processing Units",        stock: "available",   imagePath: "images/components/arduino-mega.jpg" },
    { id: "IL003", name: "STM32 Development Board",            category: "Processing Units",        stock: "limited",     imagePath: "images/components/stm32.jpg" },
    { id: "IL004", name: "ESP8266 Development Board",          category: "Processing Units",        stock: "available",   imagePath: "images/components/esp8266-dev.jpg" },
    { id: "IL005", name: "Jetson Orin Nano",                   category: "Processing Units",        stock: "unavailable", imagePath: "images/components/jetson-orin-nano.jpg" },
    { id: "IL006", name: "Raspberry Pi",                       category: "Processing Units",        stock: "limited",     imagePath: "images/components/raspberry-pi.jpg" },
    { id: "IL007", name: "Raspberry Pi Camera V2",             category: "Vision System",           stock: "available",   imagePath: "images/components/Raspberry Pi Camera V2.jpg" },
    { id: "IL008", name: "433 MHz RF Transmitter and Receiver",category: "Wireless Communication",  stock: "available",   imagePath: "images/components/433 MHz RF Transmitter and Receiver.jpg" },
    { id: "IL009", name: "XBee Pro S2C",                       category: "Wireless Communication",  stock: "unavailable", imagePath: "images/components/XBee Pro S2C.jpg" },
    { id: "IL010", name: "ESP32",                              category: "Wireless Communication",  stock: "available",   imagePath: "images/components/ESP32.jpg" },
    { id: "IL011", name: "LTE GNSS Module",                    category: "Wireless Communication",  stock: "limited",     imagePath: "images/components/LTE GNSS Module.jpg" },
    { id: "IL012", name: "Nextion HMI Display",                category: "Human Machine Interface", stock: "available",   imagePath: "images/components/Nextion HMI Display.jpg" },
    { id: "IL013", name: "16x2 LCD",                           category: "Human Machine Interface", stock: "available",   imagePath: "images/components/16x2 LCD.jpg" },
    { id: "IL014", name: "I2C LCD Backpack",                   category: "Human Machine Interface", stock: "available",   imagePath: "images/components/I2C LCD Backpack.jpg" },
    { id: "IL015", name: "Push Buttons",                       category: "Human Machine Interface", stock: "available",   imagePath: "images/components/Push Buttons.jpg" },
    { id: "IL016", name: "Matrix Keypad",                      category: "Human Machine Interface", stock: "limited",     imagePath: "images/components/Matrix Keypad.jpg" },
    { id: "IL017", name: "Rotary Encoder",                     category: "Human Machine Interface", stock: "available",   imagePath: "images/components/Rotary Encoder.jpg" },
    { id: "IL018", name: "Joystick",                           category: "Human Machine Interface", stock: "available",   imagePath: "images/components/Joystick.jpg" },
    { id: "IL019", name: "DC Motor",                           category: "Actuation",               stock: "available",   imagePath: "images/components/DC Motor.jpg" },
    { id: "IL020", name: "L293D Motor Driver",                 category: "Actuation",               stock: "available",   imagePath: "images/components/L293D Motor Driver.jpg" },
    { id: "IL021", name: "28BYJ-48 Stepper Motor",             category: "Actuation",               stock: "limited",     imagePath: "images/components/28BYJ-48 Stepper Motor.jpg" },
    { id: "IL022", name: "ULN2003 Stepper Driver Board",       category: "Actuation",               stock: "available",   imagePath: "images/components/ULN2003 Stepper Driver Board.jpg" },
    { id: "IL023", name: "Relay Module",                       category: "Actuation",               stock: "available",   imagePath: "images/components/Relay Module.jpg" },
    { id: "IL024", name: "Buzzers",                            category: "Actuation",               stock: "available",   imagePath: "images/components/Buzzers.jpg" },
    { id: "IL025", name: "DHT11",                              category: "Sensors",                 stock: "available",   imagePath: "images/components/DHT11.jpg" },
    { id: "IL026", name: "HC-SR04 Ultrasonic",                 category: "Sensors",                 stock: "available",   imagePath: "images/components/HC-SR04 Ultrasonic.jpg" },
    { id: "IL027", name: "Hall Effect Sensor",                 category: "Sensors",                 stock: "limited",     imagePath: "images/components/Hall Effect Sensor.jpg" },
    { id: "IL028", name: "Reed Switch",                        category: "Sensors",                 stock: "available",   imagePath: "images/components/Reed Switch.jpg" },
    { id: "IL029", name: "Tilt Switch",                        category: "Sensors",                 stock: "available",   imagePath: "images/components/Tilt Switch.jpg" },
    { id: "IL030", name: "LDR Module",                         category: "Sensors",                 stock: "available",   imagePath: "images/components/LDR Module.jpg" },
    { id: "IL031", name: "Laser Module",                       category: "Sensors",                 stock: "unavailable", imagePath: "images/components/Laser Module.jpg" },
    { id: "IL032", name: "IR Transmitter",                     category: "Sensors",                 stock: "available",   imagePath: "images/components/IR Transmitter.jpg" },
    { id: "IL033", name: "IR Receiver",                        category: "Sensors",                 stock: "available",   imagePath: "images/components/IR Receiver.jpg" },
    { id: "IL034", name: "Microphone Sensor",                  category: "Sensors",                 stock: "available",   imagePath: "images/components/Microphone Sensor.jpg" },
    { id: "IL035", name: "Digital Temperature Module",         category: "Sensors",                 stock: "limited",     imagePath: "images/components/Digital Temperature Module.jpg" },
    { id: "IL036", name: "Flame Sensor",                       category: "Sensors",                 stock: "available",   imagePath: "images/components/Flame Sensor.jpg" },
    { id: "IL037", name: "Tracking Module",                    category: "Sensors",                 stock: "available",   imagePath: "images/components/Tracking Module.jpg" },
    { id: "IL038", name: "Comparator Modules",                 category: "Sensors",                 stock: "available",   imagePath: "images/components/Comparator Modules.jpg" },
    { id: "IL039", name: "TP4056 Lithium Charger",             category: "Power Management",        stock: "available",   imagePath: "images/components/TP4056 Lithium Charger.jpg" },
    { id: "IL040", name: "LM2596 Buck Converter",              category: "Power Management",        stock: "available",   imagePath: "images/components/LM2596 Buck Converter.jpg" },
    { id: "IL041", name: "XL6009 Boost Converter",             category: "Power Management",        stock: "limited",     imagePath: "images/components/XL6009 Boost Converter.jpg" },
    { id: "IL042", name: "Pi USB Power Adapter",               category: "Power Management",        stock: "available",   imagePath: "images/components/Pi USB Power Adapter.jpg" },
    { id: "IL043", name: "5V Adapters",                        category: "Power Management",        stock: "available",   imagePath: "images/components/5V Adapters.jpg" },
    { id: "IL044", name: "Resistor Kit",                       category: "Passive Components",      stock: "available",   imagePath: "images/components/Resistor Kit.jpg" },
    { id: "IL045", name: "Electrolytic Capacitor Kit",         category: "Passive Components",      stock: "available",   imagePath: "images/components/Electrolytic Capacitor Kit.jpg" },
    { id: "IL046", name: "Header Pins",                        category: "Passive Components",      stock: "available",   imagePath: "images/components/Header Pins.jpg" },
    { id: "IL047", name: "Multimeter",                         category: "Tools",                   stock: "limited",     imagePath: "images/components/Multimeter.jpg" },
    { id: "IL048", name: "Tweezers",                           category: "Tools",                   stock: "available",   imagePath: "images/components/Tweezers.jpg" },
    { id: "IL049", name: "Battery Holder",                     category: "Tools",                   stock: "available",   imagePath: generatePlaceholder("Battery Holder", "#2c3e50") },
    { id: "IL050", name: "Wire Stripper and Cutter",           category: "Tools",                   stock: "available",   imagePath: generatePlaceholder("Wire Stripper", "#34495e") },
    { id: "IL051", name: "Switches",                           category: "Tools",                   stock: "available",   imagePath: generatePlaceholder("Switches", "#7f8c8d") },
    { id: "IL052", name: "Magnifying Glass",                   category: "Tools",                   stock: "available",   imagePath: generatePlaceholder("Magnifying Glass", "#95a5a6") },
    { id: "IL053", name: "USB Cables",                         category: "Connectivity",            stock: "available",   imagePath: "images/components/USB Cables.jpg" },
    { id: "IL054", name: "Jumper Wires",                       category: "Connectivity",            stock: "available",   imagePath: "images/components/Jumper Wires.jpg" },
    { id: "IL055", name: "Audio Video Cables and Connectors",  category: "Connectivity",            stock: "unavailable", imagePath: "images/components/Audio Video Cables and Connectors.jpg" }
];


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
                    onerror="this.src='images/components/placeholder.jpg'"
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
    const TELEGRAM_TOKEN = "8341436284:AAHAVDUAfDSS-VAHk4Z4ntggDzfIUYFFVNU";
    const CHAT_ID        = "-1003893371930";

    const now = new Date();
    const timestamp = now.toLocaleString("en-IN", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: true
    });

    const message =
`📦 *New Booking — Idea Lab*

*Component:* ${component.name} \`(${component.id})\`
*Category:* ${component.category}

*Name:* ${name}
*Class:* ${cls}
*Purpose:* ${purpose}

🕐 ${timestamp}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
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
    filterAndSort(); // Initial render with default state

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
