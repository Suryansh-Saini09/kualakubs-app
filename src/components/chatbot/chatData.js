const chatData = {
    start: {
        message: "👋 Hello! Welcome to Kualakubs World School\nA CBSE-affiliated School\nClasses: Pre-Nursery to Grade 8\n\nHow may I assist you today?",
        options: [
            { label: "1️⃣ Admission Enquiry", next: "admission" },
            { label: "2️⃣ Fee Details", next: "fees" },
            { label: "3️⃣ Curriculum & Activities", next: "curriculum" },
            { label: "4️⃣ School Timings", next: "timings" },
            { label: "5️⃣ Contact & Address", next: "contact" },
            { label: "6️⃣ Schedule a Visit", next: "visit" }
        ]
    },

    admission: {
        message:
            "🎓 Admissions are open for Session 2026–27\n\nPlease select the class you are interested in:\n• Pre-Nursery\n• Nursery\n• KG\n• Grade 1–8\n\nKindly share your child’s name and age to proceed.",
        showForm: true
    },

    fees: {
        message:
            "💰 Our fee structure is transparent and parent-friendly.\n\nFor detailed class-wise fee information, please share your contact number, and our admission team will connect with you shortly.",
        options: [{ label: "⬅ Back to Menu", next: "start" }]
    },

    curriculum: {
        message:
            "📚 At Kualakubs World School, we focus on:\n✔ CBSE-aligned curriculum\n✔ Activity-based learning\n✔ Life skills & value education\n✔ Sports, arts & co-curricular activities\n✔ Safe and nurturing environment",
        options: [{ label: "⬅ Back to Menu", next: "start" }]
    },

    timings: {
        message:
            "⏰ School Timings:\n\n• Pre-Primary: 8:30 AM – 12:30 PM\n• Grade 1–8: 8:30 AM – 2:30 PM",
        options: [{ label: "⬅ Back to Menu", next: "start" }]
    },

    contact: {
        message:
            "📍 Address:\nDLF New Town Heights, Sector 86\n\n📞 Contact: 9996648317",
        whatsapp: "https://wa.me/919996648317",
        options: [{ label: "⬅ Back to Menu", next: "start" }]
    },

    visit: {
        message:
            "🏫 We would love to welcome you!\n\nPlease share your preferred visit date and contact number, and our team will confirm your visit.",
        options: [{ label: "⬅ Back to Menu", next: "start" }]
    }
};

export default chatData;
