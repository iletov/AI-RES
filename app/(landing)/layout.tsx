const LandingLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className=" relative h-full over bg-gradient-to-b from-[#447991] to-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;