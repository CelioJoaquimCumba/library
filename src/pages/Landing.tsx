import React from "react";
import TopBar from "../components/molecules/Topbar.tsx";
import SearchBar from "../components/molecules/SearchBar.tsx";
import HeroSection from "../components/organisms/HeroSection.tsx";
import PopularSection from "../components/organisms/PopularSection.tsx";
import Footer from "../components/molecules/Footer.tsx";

export default function Landing() {
    return (
        <div className="w-screen h-dvh">
            <TopBar />
            <SearchBar />
            <main className="max-w-4xl">
                <HeroSection />
                <PopularSection />
            </main>
            <Footer />
        </div>
    );
}