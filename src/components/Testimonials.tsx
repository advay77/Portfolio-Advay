import { useEffect, useRef } from "react";
import "./styles/Testimonials.css";
import { config } from "../config";
import { FaQuoteLeft } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".section-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".testimonial-card",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="testimonials-section section-container" id="testimonials" ref={containerRef}>
      <h3 className="section-title">Client Reviews</h3>
      <div className="testimonials-grid">
        {config.testimonials?.map((t, index) => (
          <div className="testimonial-card" key={index} data-cursor="hover">
            <div className="quote-icon"><FaQuoteLeft /></div>
            <p className="testimonial-content">"{t.content}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
