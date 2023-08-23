import CTAFeelNourished from "@/components/CTAFeelNourished";
import CircleIconsSubMenu from "@/components/CircleIconsSubMenu";
import FullWidthColorBackground from "@/components/FullWidthColorBackground";
import FullWidthImageBehindGradient from "@/components/FullWidthImageBehindGradient";
import FxFoodCoaching from "@/components/FxFoodCoaching";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="top-0 w-screen flex min-h-screen flex-col items-center justify-start">
      <FullWidthImageBehindGradient variant="primary" align="right"><p className="w-screen text-center"></p></FullWidthImageBehindGradient>
      <Header />
      <FxFoodCoaching />
      <FullWidthColorBackground variant="dark">
        With our targeted guidance and perceptive insights, we help you focus on the actions and habits that will <em>create the health results you&apos;re seeking</em>.
      </FullWidthColorBackground>
      <CircleIconsSubMenu />
      <FullWidthColorBackground textColor="white" variant="secondary">
        We&apos;re going to walk alongside you until the changes you&apos;re seeking finally take root.
      </FullWidthColorBackground>
      <div className="w-full h-32"></div>
      <FullWidthImageBehindGradient variant="transparent" align="center" imageUrl="/images/we-are-not-perfectionists-or-impersonal.jpg">
      </FullWidthImageBehindGradient>
      <div className="w-full h-32"></div>
      <FullWidthColorBackground textColor="white" variant="primary">
        <CTAFeelNourished />
      </FullWidthColorBackground>
    </main>
  )
}
