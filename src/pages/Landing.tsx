import React from "react";
import TopBar from "../components/molecules/Topbar.tsx";
import SearchBar from "../components/molecules/SearchBar.tsx";
import HeroSection from "../components/organisms/HeroSection.tsx";
import PopularSection from "../components/organisms/PopularSection.tsx";
import Footer from "../components/molecules/Footer.tsx";

export default function Landing() {
    return (
        <div className="flex flex-col items-center w-screen">
            <TopBar />
            <SearchBar />
            <main className="flex flex-col self-stretch">
                <HeroSection />
                <PopularSection />
            </main>
            <Footer />
        </div>
    );
}