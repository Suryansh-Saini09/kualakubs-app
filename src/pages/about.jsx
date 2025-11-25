
import PageHeader from "../components/PageHeader";

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                backgroundImage="https://www.westminster.org.uk/wp-content/uploads/2025/02/IMG_1086-v2-scaled.jpg"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "About Us", active: true },
                ]}
            />
        </>
    );
}