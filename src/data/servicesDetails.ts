// src/data/servicesDetails.ts

// data/servicesDetails.ts

export const servicesDetails: Record<
  string,
  {
    title: string;
    longDescription: string;
    seo?: {
      title: string;
      description: string;
      keywords: string | string[];
    };
  }
> = {
  "website-design": {
    title: "Website Design",
    longDescription: `
      A great website begins with great design — and we specialize in crafting modern, responsive, and visually compelling user interfaces that convert visitors into customers. Our Website Design service blends creativity with strategy to reflect your brand’s identity and meet your users’ needs.

      Whether you're launching a startup or revamping an existing brand, we focus on creating UI/UX designs that are not only visually impressive but also highly functional and user-centric. Our process includes detailed wireframing, intuitive navigation flows, and thoughtful layout planning — all tailored to deliver a seamless experience across all devices.

      We build our designs with modern front-end frameworks like React and Next.js, ensuring lightning-fast performance, excellent SEO compatibility, and scalability for future growth. From single-page applications to full business websites, our designs are optimized for performance and engagement.

      We also provide design foundations for full-stack MERN (MongoDB, Express.js, React, Node.js) web apps. This ensures that what we design doesn’t just look great — it works perfectly with the technology stack used to build high-performance websites and platforms.

      Key highlights of our Website Design service:
      - UI/UX focused design with React/Next.js best practices
      - Mobile-first layouts and responsive components
      - Branding integration: color, typography, and identity
      - SEO-aware structure for improved online visibility
      - Seamless handoff to development (or full implementation by us)

      Why it matters:
      - Users judge your business within 5 seconds of visiting your website
      - Good design increases trust, time-on-page, and conversions
      - Clean UI leads to lower bounce rates and improved SEO performance

      Whether you’re building a landing page, a corporate site, or a full MERN stack application, our design approach ensures your digital presence is sleek, strategic, and ready to grow.

      Let us help you design a website that’s not only beautiful but built for business success.
    `,
    seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },

  "website-redesign": {
    title: "Website Redesign",
    longDescription: `
    If your website looks outdated, loads slowly, or doesn’t engage users the way it should — it’s time for a redesign. Our Website Redesign service breathes new life into your digital presence with a modern, high-performance, and conversion-driven approach.

    We don't just update visuals — we rethink your entire user experience. Whether you're dealing with legacy code, poor navigation, or unresponsive layouts, our redesign process ensures your site becomes a powerful asset for your brand.

    Using modern frameworks like React and Next.js, we rebuild websites to be lightning-fast, mobile-responsive, and SEO-friendly from the ground up. These technologies ensure your redesigned website not only looks modern but also performs excellently across all devices and browsers.

    If you're transitioning from static HTML or an older CMS, we’ll migrate your content and architecture into a clean, scalable structure — ideal for future growth or full-stack applications built on the MERN (MongoDB, Express.js, React, Node.js) stack.

    What you can expect from our redesign service:
    - A modern UI/UX that aligns with current trends and your brand
    - Speed and performance optimization using Next.js features like server-side rendering and image optimization
    - Improved SEO through clean code, semantic HTML, and better structure
    - Fully mobile-responsive layouts for better engagement across all screen sizes
    - Migration strategy and scalability planning for future development, especially if you want to adopt MERN

    Benefits of redesigning your site with modern technologies:
    - Improved visitor retention and lower bounce rates
    - Higher rankings on Google thanks to faster load times and better structure
    - Easier integration with APIs and databases for dynamic functionality
    - Better support for eCommerce, landing pages, blogs, and dashboards

    Don’t let your outdated site hold your business back. With our expert-led redesign using React, Next.js, and full MERN stack capabilities, we transform your site into a performance-focused, user-friendly platform ready to grow with your goals.
  `,
     seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },
  "website-development": {
    title: "Website Development",
    longDescription: `
    Building a powerful online presence requires more than just design — it demands expert website development using cutting-edge technologies. Our Website Development service leverages the best of React, Next.js, and the full MERN stack (MongoDB, Express.js, React, Node.js) to create fast, secure, and scalable websites tailored to your business goals.

    From custom web apps and eCommerce platforms to marketing sites and dashboards, we build solutions that are not only visually stunning but also engineered for high performance and excellent SEO.

    Using React’s component-based architecture, we create interactive, maintainable frontends that deliver smooth user experiences. Next.js enhances this with server-side rendering, static site generation, and API routes — helping your site load quickly and rank higher on search engines.

    Our backend development with Node.js and Express.js ensures robust server logic, while MongoDB offers a flexible, scalable database solution for managing your data efficiently.

    Key features of our Website Development service:
    - Modern, reusable React components optimized for performance
    - SEO-friendly Next.js features like automatic code splitting and pre-rendering
    - Secure, scalable backend APIs with Express and Node.js
    - Flexible, document-oriented data storage with MongoDB
    - Full-stack integration for seamless frontend-backend communication
    - Optimized for speed, security, and responsiveness across devices

    Why choose MERN stack development?
    - Single-language JavaScript development across client and server
    - Rapid development and easier debugging with a unified stack
    - Flexibility to build anything from simple websites to complex applications
    - Strong community support and continuous updates

    Whether you need a new website or want to upgrade your current platform, our MERN-powered development delivers high-quality solutions built to scale, perform, and convert.

    Let us build your digital future with the power of React, Next.js, and the full MERN stack.
  `,
   seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },
  "seo": {
    title: "Search Engine Optimization",
    longDescription: `
    Ranking high on search engines like Google is critical for your website’s success. Our Search Engine Optimization (SEO) service combines proven strategies with modern web technologies like React, Next.js, and the MERN stack to maximize your site’s visibility and drive organic traffic.

    We understand that SEO is not just about keywords — it’s about creating a fast, user-friendly website with optimized content, technical excellence, and a solid foundation for search engines to crawl and index your pages.

    Leveraging Next.js’s server-side rendering and static site generation capabilities, we ensure your React-based websites load quickly and serve fully rendered HTML to search engines, improving crawlability and ranking potential.

    Our full MERN stack expertise enables us to optimize backend APIs, database queries, and server responses to further enhance your site’s performance — a key factor in SEO rankings.

    Core components of our SEO service include:
    - Comprehensive keyword research and competitive analysis tailored to your industry
    - On-page SEO optimization: meta tags, headings, structured data, and content strategy
    - Technical SEO: fast loading times, mobile responsiveness, and crawl error fixes
    - Performance tuning using Next.js features to improve Core Web Vitals metrics
    - Content optimization that balances user engagement and search engine algorithms
    - Link-building strategies and local SEO for better regional visibility

    Why SEO with React, Next.js, and MERN?
    - React delivers dynamic, interactive user experiences without sacrificing SEO
    - Next.js’s hybrid rendering methods improve both user experience and SEO indexing
    - MERN stack allows for scalable, maintainable code and fast API responses, enhancing overall site speed

    By integrating SEO best practices with modern development frameworks, we help your website not only rank higher but also provide a better experience that converts visitors into loyal customers.

    Invest in SEO that works with your technology stack — and watch your online presence grow organically and sustainably.
  `,
   seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },
  "mobile-responsive-designs": {
    title: "Mobile Responsive Designs",
    longDescription: `
    In today's digital age, over half of all web traffic comes from mobile devices. That’s why mobile-responsive design isn’t optional — it’s essential. Our Mobile Responsive Designs service ensures your website looks stunning and functions flawlessly on every screen size, from smartphones and tablets to desktops.

    We build mobile-first designs using React’s flexible component system and Next.js’s server-side rendering to deliver fast-loading, intuitive interfaces tailored for all devices. This approach guarantees a consistent and engaging user experience that keeps visitors longer and improves conversions.

    Whether you’re launching a new site or optimizing an existing one, our designs adapt fluidly across devices — eliminating frustrating zooming, scrolling, or broken layouts.

    Our full MERN stack development enables seamless integration between frontend responsiveness and backend efficiency, ensuring that APIs and data fetches remain fast regardless of device.

    Key benefits of our Mobile Responsive Design service include:
    - Fluid layouts and flexible grids built with React and CSS frameworks like Tailwind or styled-components
    - Adaptive images and media optimized for quick loading on mobile networks
    - Touch-friendly navigation and interactive elements designed for ease of use
    - Accessibility compliance to serve all users inclusively
    - SEO benefits as Google prioritizes mobile-friendly websites in search rankings
    - Backend optimizations in Node.js/Express and MongoDB to support responsive frontend demands

    By prioritizing mobile responsiveness, you ensure every visitor gets a flawless experience, whether browsing on a phone, tablet, or desktop — helping your site rank better and convert more.

    Let us make your website truly mobile-ready with modern React, Next.js, and full MERN stack expertise.
  `,
   seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },
  "performance-optimization": {
    title: "Performance Optimization",
    longDescription: `
    Website speed and performance are critical factors for user experience, search engine rankings, and conversion rates. Our Performance Optimization service focuses on making your site load faster, run smoother, and keep visitors engaged — using advanced techniques combined with the power of React, Next.js, and the full MERN stack.

    Slow websites frustrate users and increase bounce rates. We analyze and fine-tune every aspect of your website — from optimizing images and minifying code to improving server response times and caching strategies.

    Next.js’s built-in features like automatic code splitting, image optimization, and server-side rendering help us deliver lightning-fast pages that perform well on any device or network.

    On the backend, we optimize your MERN stack APIs, database queries, and server infrastructure to reduce latency and handle traffic efficiently, ensuring your site scales gracefully under load.

    Key components of our Performance Optimization service include:
    - Reducing initial load times through lazy loading and code splitting with React and Next.js
    - Optimizing images and media assets for faster downloads without sacrificing quality
    - Minimizing CSS and JavaScript bundles to improve rendering speed
    - Implementing caching and CDN strategies to serve content closer to users
    - Monitoring and improving Core Web Vitals to enhance Google rankings
    - Backend performance tuning in Node.js, Express, and MongoDB for responsive data delivery

    By combining frontend and backend optimization techniques, we ensure your website provides a seamless, fast experience that delights users and meets SEO best practices.

    Let us help you maximize your site’s potential with expert performance tuning using the latest web technologies.
  `,
   seo: {
  title: "Website Design Services | Task Force Interior",
  description:
    "Professional website design services using React, Next.js, and UI/UX best practices. Improve SEO, speed, and conversion.",
  keywords: [
    "website design",
    "UI UX design",
    "responsive web design",
    "React websites",
    "Next.js",
    "MERN stack design"
  ]
}
  },

  // ... similarly for all other services
};
