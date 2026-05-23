"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ollywood Food Park"
      button={{
        text: "Call Now",
        href: "tel:+917750057498",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Taste the Magic at Ollywood Food Park"
      description="Experience rich flavors, warm ambiance, and excellent service in the heart of Khordha. Your favorite local spot for great food and memories."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2148006619.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006611.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517424.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-holding-glass_23-2148965394.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157781.jpg",
          alt: "Customer",
        },
      ]}
      avatarText="Loved by 200+ local foodies"
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Call to Order",
          href: "tel:+917750057498",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "100% Organic Ingredients",
        },
        {
          type: "text",
          text: "Authentic Local Flavors",
        },
        {
          type: "text",
          text: "Family-Friendly Atmosphere",
        },
        {
          type: "text",
          text: "Prompt & Polite Service",
        },
        {
          type: "text",
          text: "Open Daily until 11 PM",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="More Than Just a Restaurant"
      description="We believe in serving every dish with love. Our cozy atmosphere and polite staff ensure that every visit feels like a special occasion with family and friends."
      tag="Our Story"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-working-service-industry_23-2150722794.jpg"
      imageAlt="Our welcoming restaurant ambiance"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Polite Service",
          author: "Staff",
          description: "Our friendly staff is always ready to make your dining experience smooth and enjoyable.",
          tags: [
            "Service",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-service-industry_23-2150722790.jpg",
        },
        {
          id: "f2",
          title: "Rich Flavors",
          author: "Kitchen",
          description: "From Biryani to Chaat, every dish is crafted with rich, authentic flavors.",
          tags: [
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/meat-dish-with-vegetables-near-garnish_23-2148181570.jpg",
        },
        {
          id: "f3",
          title: "Great Ambience",
          author: "Setting",
          description: "A perfect environment to relax and enjoy quality time with friends and family.",
          tags: [
            "Vibe",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-having-good-time_23-2148395391.jpg",
        },
      ]}
      title="Why Ollywood Food Park?"
      description="Discover why we're the top-rated local choice for foodies."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Farm House Pizza",
          price: "₹350",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-cooked-rice-with-meatballs-inside-plate-dark-space_140725-95430.jpg",
        },
        {
          id: "p2",
          name: "Special Biryani",
          price: "₹280",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-dinner-horizontal-no-people-diet_1122-2448.jpg",
        },
        {
          id: "p3",
          name: "Crispy Chaat",
          price: "₹150",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-white-plate-with-tomatoes-salad-onion-chili-sauce_1150-21397.jpg",
        },
        {
          id: "p4",
          name: "Deluxe Sandwich",
          price: "₹200",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-roll-with-pate-sauce-side-view_141793-2341.jpg",
        },
        {
          id: "p5",
          name: "Starter Platter",
          price: "₹250",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-black-burger-fries-wooden-board_23-2148238462.jpg",
        },
        {
          id: "p6",
          name: "Veggie Pizza",
          price: "₹320",
          imageSrc: "http://img.b2bpic.net/free-photo/fruit-white-plate_1203-2817.jpg",
        },
      ]}
      title="Our Popular Menu Items"
      description="Taste our signature dishes loved by locals."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Foodies of Odisha",
        "Local Khordha Guides",
        "City Food Reviewers",
        "Best Eats Khordha",
        "Community Choice",
        "Top Rated Park",
        "Family Eats",
      ]}
      title="Trusted by Local Food Enthusiasts"
      description="Join hundreds of happy visitors who call us their go-to spot."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Rudra Narayan Panda",
          role: "Local Guide",
          company: "Khordha",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
        },
        {
          id: "t2",
          name: "Suraj Namdev",
          role: "Local Guide",
          company: "Khurda",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2712.jpg",
        },
        {
          id: "t3",
          name: "Soumyadarshini Sangita",
          role: "Diner",
          company: "Visitor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
        },
        {
          id: "t4",
          name: "Anita M.",
          role: "Foodie",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-friends-table_23-2149213365.jpg",
        },
        {
          id: "t5",
          name: "Raj K.",
          role: "Family",
          company: "Visitor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positve-african-american-woman-with-cheerful-look-being-glad-message-with-friends-uses-modern-cell-phone-sits-cafeteria-eats-delicious-desserts-drinks-cocktail-technology-rest-concept_273609-2382.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.2",
          label: "Avg Rating",
        },
        {
          value: "200+",
          label: "Reviews",
        },
        {
          value: "100%",
          label: "Satisfaction",
        },
      ]}
      title="What Our Guests Say"
      description="Real experiences from real food lovers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we offer no-contact delivery to your doorstep.",
        },
        {
          id: "q2",
          title: "Are you family-friendly?",
          content: "Absolutely! We provide a welcoming atmosphere for families and friends of all ages.",
        },
        {
          id: "q3",
          title: "What are your operating hours?",
          content: "We are open daily until 11 PM to serve you the best food in town.",
        },
      ]}
      title="Commonly Asked Questions"
      description="Have questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Visit Us?"
      description="Reserve a table or contact us for orders today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Any special requests or orders?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/backview-barman-writing-chalkboard-terrace_23-2147821251.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Information",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Call: 077500 57498",
              href: "tel:+917750057498",
            },
          ],
        },
      ]}
      logoText="Ollywood Food Park"
      copyrightText="© 2025 Ollywood Food Park. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
