import Image from "next/image"
import NFCButton from './NFCButton/NFCButton'

const AboutLindseyAndJamie = () => (
    <div className="flex flex-col sm:flex-row items-start content-center gap-20">
        <div id="lindsey-conway" className="flex flex-col items-center sm:items-end max-w-xs text-center sm:text-right text-nblg-500">
            <Image
                className='mb-4' 
                src="/images/lindsey-conway.jpg"
                width={320}
                height={320}
                alt="Lindsey Conway"
            />
            <h2 className="font-transat-bold text-balance uppercase text-2xl">FOOD STRATEGY & GUIDANCE WITH LINDSEY</h2>
            <p className="font-transat-light text-balance my-20 text-2xl h-48">&quot;I figure out the best steps to methodically take to move toward the health outcomes and visions you hold for yourself. And then provide encouragement to get there.&quot;</p>
            <NFCButton href='/about' variant='primary' classes='w-full'>
                ABOUT LINDSEY
            </NFCButton>
        </div>
        <div id="jamie-conway" className="flex flex-col items-center sm:items-start max-w-xs text-center sm:text-left text-ndag-500">
            <Image
                className='mb-4' 
                src="/images/jamie-conway.jpg"
                width={320}
                height={320}
                alt="Jamie Conway"
            />
            <h2 className="font-transat-bold text-balance uppercase text-2xl">FOOD ALCHEMY & RECIPES WITH JAMIE</h2>
            <p className="font-transat-light text-balance my-20 text-2xl h-48">&quot;I teach you everything you need to know (and nothing you don&apos;t) about how to create approachable, time-honored, and nutrient-dense food to bring to your table.&quot;</p>
            <NFCButton href='/about' variant='dark' classes='w-full'>
                ABOUT JAMIE
            </NFCButton>
        </div>
    </div>
)

export default AboutLindseyAndJamie