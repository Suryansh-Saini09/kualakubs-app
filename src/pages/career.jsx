import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import CareerForm from "../components/forms/careerForms";
import newBuildingImg from "../assets/kualakubs_new_building_img.jpeg"
import SEO from "../components/SEO";

export default function Career() {
    const [loading, setLoading] = useState(false);

    const handleCareerSubmit = async (formData) => {
        setLoading(true);

        try {
            const response = await fetch(
                "https://kkws.gabis.in/API/tp/careers",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Submission failed");
            }

            alert("✅ Application submitted successfully!");
            return true;

        } catch (error) {
            console.error("Career API Error:", error);
            alert(`❌ ${error.message}`);
            return false;

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <SEO
            title="Careers at Kualakubs World School | Join Our Teaching & Staff Team"
            description="Explore career opportunities in teaching and administration. Join a dynamic environment focused on growth, learning, and professional development."
        />
            <PageHeader
                title="Career"
                backgroundImage={newBuildingImg}
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Career", active: true },
                ]}
            />

            <section className="py-5 bg-light">
                <div className="container">
                    <CareerForm
                        onSubmit={handleCareerSubmit}
                        loading={loading}
                    />
                </div>
            </section>
        </>
    );
}
