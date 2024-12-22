interface FadeInProps {
  delay: number,
  className: string,
  children: React.ReactNode
}

// wrapper component to add css fade in animation with arbitrary delay
const FadeIn: React.FC<FadeInProps> = ({delay = 0, className="", children}) => {
  return (
    <div className={`opacity-0 animate-fade-up ${className}`} style={{animationDelay: `${delay}ms`}}>
      {children}
    </div>
  )
}

export default FadeIn;