import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultProps = {
  menuBackgroundColor: "#000000",
  menuTextColor: "#FFFFFF",
  hoverLineColor: "#FFFFFF",
  btnClosedBg: "#000000",
  btnClosedColor: "#FFFFFF",
  btnOpenBg: "#FFFFFF",
  btnOpenColor: "#000000",
  navFontSizeDesktop: 46,
  navFontSizeMobile: 36,
  footerFontSizeDesktop: 20,
  footerFontSizeMobile: 18,
  btnFontSizeDesktop: 18,
  btnFontSizeMobile: 16,
  menuWidthDesktop: "440px",
  menuHeightDesktop: "460px",
  menuWidthMobile: "90vw",
  menuHeightMobile: "60vh",
  mobileBreakpoint: 768,
  springStiffness: 60,
  springDamping: 14,
  springMass: 1,
  linkStiffness: 80,
  linkDamping: 15,
  linkDelayOffset: 0.03,
  menuFont: { fontFamily: "Inter", fontWeight: 500 },
  navLinks: [
    { title: "Home", url: "#home" },
    { title: "AboutUs", url: "#about" },
    { title: "Skills", url: "#skills" },
    { title: "Projects", url: "#projects" },
    { title: "Certificates", url: "#certificates" },
    { title: "Experience", url: "#experience" },
    { title: "Contact", url: "#contact" },
  ],
  footerLinksData: [
    { title: "Facebook", url: "#" },
    { title: "LinkedIn", url: "#" },
    { title: "Instagram", url: "#" },
    { title: "Twitter", url: "#" },
  ],
};

function ButtonLabel({ children, bg, clr, fontSize }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        cursor: "pointer",
        fontSize: fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
        color: clr,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

function Menubutton({
  click,
  setClick,
  isMobile,
  btnClosedBg,
  btnClosedColor,
  btnOpenBg,
  btnOpenColor,
  btnFontSizeDesktop,
  btnFontSizeMobile,
  menuId,
  menuOpen,
  windowWidth,
}) {
  const [hovered, setHovered] = useState(false);
  const fontSize = isMobile
    ? `${Math.round(Math.max(btnFontSizeMobile - 4, 11) + (btnFontSizeMobile - Math.max(btnFontSizeMobile - 4, 11)) * Math.min(Math.max((windowWidth - 320) / (768 - 320), 0), 1))}px`
    : `${btnFontSizeDesktop}px`;

  return (
    <button
      onClick={() => setClick(!click)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-expanded={menuOpen}
      aria-haspopup="menu"
      aria-controls={menuId}
      aria-label={click ? "Close menu" : "Open menu"}
      style={{
        position: "absolute",
        top: isMobile ? "4px" : "8px",
        right: isMobile ? "4px" : "8px",
        cursor: "pointer",
        fontFamily: "inherit",
        zIndex: 2,
        width: isMobile ? `${Math.round(80 + (110 - 80) * Math.min(Math.max((windowWidth - 320) / (768 - 320), 0), 1))}px` : "110px",
        height: isMobile ? `${Math.round(34 + (46 - 34) * Math.min(Math.max((windowWidth - 320) / (768 - 320), 0), 1))}px` : "46px",
        borderRadius: "25px",
        overflow: "hidden",
        border: "none",
        padding: 0,
        backgroundColor: "transparent",
      }}
    >
      <motion.div
        style={{ position: "relative", width: "100%", height: "100%" }}
        animate={{ y: click ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            initial={false}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <ButtonLabel bg={btnClosedBg} clr={btnClosedColor} fontSize={fontSize}>
              MENU
            </ButtonLabel>
          </motion.div>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            initial={false}
          >
            <ButtonLabel bg={btnClosedBg} clr={btnClosedColor} fontSize={fontSize}>
              MENU
            </ButtonLabel>
          </motion.div>
        </div>
        <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <ButtonLabel bg={btnOpenBg} clr={btnOpenColor} fontSize={fontSize}>
              CLOSE
            </ButtonLabel>
          </motion.div>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            initial={false}
          >
            <ButtonLabel bg={btnOpenBg} clr={btnOpenColor} fontSize={fontSize}>
              CLOSE
            </ButtonLabel>
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
}

export default function MorphedMenu(props) {
  const {
    navLinks = defaultProps.navLinks,
    footerLinksData = defaultProps.footerLinksData,
    menuBackgroundColor = defaultProps.menuBackgroundColor,
    menuTextColor = defaultProps.menuTextColor,
    hoverLineColor = defaultProps.hoverLineColor,
    btnClosedBg = defaultProps.btnClosedBg,
    btnClosedColor = defaultProps.btnClosedColor,
    btnOpenBg = defaultProps.btnOpenBg,
    btnOpenColor = defaultProps.btnOpenColor,
    navFontSizeDesktop = defaultProps.navFontSizeDesktop,
    navFontSizeMobile = defaultProps.navFontSizeMobile,
    footerFontSizeDesktop = defaultProps.footerFontSizeDesktop,
    footerFontSizeMobile = defaultProps.footerFontSizeMobile,
    btnFontSizeDesktop = defaultProps.btnFontSizeDesktop,
    btnFontSizeMobile = defaultProps.btnFontSizeMobile,
    menuWidthDesktop = defaultProps.menuWidthDesktop,
    menuHeightDesktop = defaultProps.menuHeightDesktop,
    menuWidthMobile = defaultProps.menuWidthMobile,
    menuHeightMobile = defaultProps.menuHeightMobile,
    mobileBreakpoint = defaultProps.mobileBreakpoint,
    springStiffness = defaultProps.springStiffness,
    springDamping = defaultProps.springDamping,
    springMass = defaultProps.springMass,
    linkStiffness = defaultProps.linkStiffness,
    linkDamping = defaultProps.linkDamping,
    linkDelayOffset = defaultProps.linkDelayOffset,
    menuFont = defaultProps.menuFont,
  } = props;

  const [click, setClick] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHoveredIndex] = useState(null);
  const [hover2, setHoveredIndex2] = useState(null);
  const menuId = "as-animated-menu-box";
  const ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    let timeoutId;
    if (click) {
      timeoutId = window.setTimeout(() => setMenuOpen(true), 500);
    } else {
      setMenuOpen(false);
    }
    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [click]);

  const isMobile = windowWidth < mobileBreakpoint;
  const isTiny = windowWidth < 360;
  const isSmall = windowWidth < 480;
  const isMedSmall = windowWidth < 600;

  // Fluid sizing: scales linearly between min and max based on viewport width
  const fluid = (minSize, maxSize, minVw = 320, maxVw = 768) => {
    if (!isMobile) return maxSize;
    const scale = Math.min(Math.max((windowWidth - minVw) / (maxVw - minVw), 0), 1);
    return Math.round(minSize + (maxSize - minSize) * scale);
  };

  const buttonWidth = isMobile ? `${fluid(80, 110)}px` : "110px";
  const buttonHeight = isMobile ? `${fluid(34, 46)}px` : "46px";

  // Responsive sizes that auto-scale with screen width
  const mobileNavFontSize = fluid(20, navFontSizeMobile);
  const mobileFooterFontSize = fluid(12, footerFontSizeMobile);
  const mobileMenuWidth = isMobile ? `${fluid(88, 90)}vw` : menuWidthMobile;
  const mobileMenuHeight = isMobile ? "auto" : menuHeightMobile;
  const mobileContentMarginLeft = `${fluid(12, 20)}px`;
  const mobileContentMarginTop = `${fluid(44, 56)}px`;
  const mobileLinkSpacing = `${fluid(-10, -4)}px`;
  const mobileFooterMarginLeft = `${fluid(14, 28)}px`;
  const mobileFooterMarginTop = `${fluid(14, 28)}px`;

  const menuFontStyle = {
    fontFamily: menuFont?.fontFamily,
    fontWeight: menuFont?.fontWeight,
    fontStyle: menuFont?.fontStyle,
    letterSpacing: menuFont?.letterSpacing,
  };

  const perspectiveAnimation = {
    initial: { opacity: 0, rotateX: 90, translateY: 60 },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        delay: 0.15 + i * 0.05,
        type: "spring",
        stiffness: 50,
        damping: 18,
        mass: 0.6,
      },
    }),
  };

  const footerAnimation = {
    initial: { opacity: 0, y: 15 },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.45 + i * 0.08,
        type: "spring",
        stiffness: 50,
        damping: 18,
        mass: 0.6,
      },
    }),
  };

  const menuAnimation = {
    open: {
      width: isMobile ? mobileMenuWidth : menuWidthDesktop,
      height: isMobile ? mobileMenuHeight : menuHeightDesktop,
      top: "0px",
      right: "0px",
      transition: {
        type: "spring",
        stiffness: springStiffness,
        damping: springDamping,
        mass: springMass,
      },
    },
    closed: {
      width: buttonWidth,
      height: buttonHeight,
      top: isMobile ? "4px" : "8px",
      right: isMobile ? "4px" : "8px",
      transition: {
        type: "spring",
        stiffness: springStiffness,
        damping: springDamping,
        mass: springMass,
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
        width: buttonWidth,
        height: buttonHeight,
      }}
    >
      <motion.div
        id={menuId}
        role="menu"
        aria-label="Site navigation"
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-start" : "center",
          borderRadius: "24px",
          backgroundColor: menuBackgroundColor,
          ...menuFontStyle,
          overflow: "hidden",
          zIndex: 1,
        }}
        variants={menuAnimation}
        initial="closed"
        animate={click ? "open" : "closed"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: isMobile ? mobileContentMarginLeft : "40px",
            marginTop: isMobile ? mobileContentMarginTop : "16px",
          }}
        >
          <AnimatePresence>
            {menuOpen &&
              navLinks.map((link, i) => {
                const isHovered = hover === i;
                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: isMobile ? mobileLinkSpacing : "-4px",
                      perspective: "70px",
                      perspectiveOrigin: "bottom",
                    }}
                  >
                    <motion.div
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                      variants={perspectiveAnimation}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      custom={i}
                    >
                      <motion.svg
                        animate={isHovered ? { width: 48 } : { width: 0 }}
                        width="0"
                        height="31"
                        viewBox="0 0 105 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        aria-hidden="true"
                      >
                        <path
                          d="M0 31H103M103 31L73.5 1.5M103 31L73.5 60.5"
                          stroke={hoverLineColor}
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </motion.svg>
                      <motion.a
                        href={link.url}
                        role="menuitem"
                        onClick={(e) => {
                          setClick(false);
                          if (link.title === "Contact") {
                            e.preventDefault();
                            if (props.onContactClick) {
                              props.onContactClick();
                            }
                          }
                        }}
                        style={{
                          color: menuTextColor,
                          textDecoration: "none",
                          fontSize: isMobile
                            ? `${mobileNavFontSize}px`
                            : `${navFontSizeDesktop}px`,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        {link.title}
                      </motion.a>
                    </motion.div>
                  </div>
                );
              })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              aria-label="Social links"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                marginLeft: isMobile ? mobileFooterMarginLeft : "52px",
                marginTop: isMobile ? mobileFooterMarginTop : "32px",
              }}
            >
              {footerLinksData.map((link, i) => {
                const { title, url } = link;
                const isHovered2 = hover2 === i;
                return (
                  <motion.div
                    key={`f_${i}`}
                    style={{ position: "relative", width: "fit-content", marginBottom: "8px" }}
                    variants={footerAnimation}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    onMouseEnter={() => setHoveredIndex2(i)}
                    onMouseLeave={() => setHoveredIndex2(null)}
                  >
                    <motion.a
                      href={url}
                      role="menuitem"
                      style={{
                        color: menuTextColor,
                        textDecoration: "none",
                        fontSize: isMobile
                          ? `${mobileFooterFontSize}px`
                          : `${footerFontSizeDesktop}px`,
                      }}
                    >
                      {title}
                    </motion.a>
                    <motion.div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: "2px",
                        backgroundColor: hoverLineColor,
                      }}
                      animate={{ width: isHovered2 ? "100%" : "0%" }}
                      initial={{ width: "0%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hire Me Button */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              style={{
                marginLeft: isMobile ? mobileContentMarginLeft : "40px",
                marginRight: isMobile ? mobileContentMarginLeft : "40px",
                marginTop: isMobile ? `${fluid(10, 20)}px` : "24px",
                marginBottom: isMobile ? `${fluid(10, 16)}px` : "20px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, type: "spring", stiffness: 80, damping: 15 } }}
              exit={{ opacity: 0, y: 10 }}
            >
              <a
                href="#"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  setClick(false);
                  if (props.onHireClick) {
                    props.onHireClick();
                  }
                }}
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#FF5300",
                  color: "#FFF",
                  padding: isMobile ? `${fluid(8, 14)}px ${fluid(14, 24)}px` : "14px 24px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: isMobile ? `${fluid(13, 16)}px` : "16px",
                  letterSpacing: "0.5px",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#e04a00"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#FF5300"}
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Menubutton
        click={click}
        setClick={setClick}
        isMobile={isMobile}
        btnClosedBg={btnClosedBg}
        btnClosedColor={btnClosedColor}
        btnOpenBg={btnOpenBg}
        btnOpenColor={btnOpenColor}
        btnFontSizeDesktop={btnFontSizeDesktop}
        btnFontSizeMobile={btnFontSizeMobile}
        menuId={menuId}
        menuOpen={menuOpen}
        windowWidth={windowWidth}
      />
    </div>
  );
}

