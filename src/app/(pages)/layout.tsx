import NFCHeader from '@/components/NFCHeader/NFCHeader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
            <div className="absolute top-0 w-screen h-16 bg-nblg-500 dark:bg-nblg-700"></div>
            <NFCHeader />
            {children}
        </>
  )
}
