import CTAFeelNourished from "@/components/CTAFeelNourished"
import FullWidthColorBackground from "@/components/FullWidthColorBackground"
import WhoWeWorkWithV2 from "@/components/WhoWeWorkWithV2"
import { NFCHeroImage } from "@nourishedco/ui"

export default function Home() {
    return (
        <main className="top-0 w-full flex min-h-screen flex-col items-center justify-start">
            <NFCHeroImage
                variant="tertiary"
                imageUrl="/images/headers/work-with-us-header-nourished-co.jpg"
                align="center"
                title="Work With Us"
            />
            <FullWidthColorBackground variant="white" textColor="secondary">
                <h1 className="font-transat-black text-balance text-3xl sm:text-5xl text-center">
                    <span className="text-lightgreen-500 uppercase">
                        Functional{" "}
                    </span>
                    <span className="text-brightgreen-500 uppercase">
                        Nutrition Counseling
                    </span>
                </h1>
            </FullWidthColorBackground>
            <WhoWeWorkWithV2 />
            <FullWidthColorBackground variant="primary">
                <CTAFeelNourished href="/call">BOOK NOW</CTAFeelNourished>
            </FullWidthColorBackground>
        </main>
    )
}
