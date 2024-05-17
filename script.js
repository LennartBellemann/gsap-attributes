//text mask in stagger animation


  document.addEventListener('DOMContentLoaded', function() {
  const textLoadInElements = document.querySelectorAll("[ga-text-mask-in='text']");

  textLoadInElements.forEach(element => {
    const splitText = new SplitType(element, { types: 'lines, words' });

    splitText.lines.forEach(line => {
      const wrapper = document.createElement('div');
      wrapper.className = 'line-wrapper';
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const duration = element.getAttribute('ga-duration') || 0.7; 

    const tlTextLoadIn = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none restart none"
      }
    });

    const lines = element.querySelectorAll('.line');
    tlTextLoadIn.from(lines, {
      yPercent: 100,
      duration: parseFloat(duration), 
      ease: "circ.out",
      stagger: 0.1
    });
  });
});
 


//image parallax
const parallaxElements = document.querySelectorAll("[ga-parallax='image']");
  parallaxElements.forEach(element => {
    let gaParallax = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        scrub: 0,
      },
    });

    gaParallax.to(element, {
      duration: 1,
      yPercent: 25,
    });
  });


