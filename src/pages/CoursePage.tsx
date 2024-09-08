import {useRef, useState, useEffect} from "react";
import {Parallax} from "@react-spring/parallax";
import KoelnParallaxLayer from "../components/KoelnParallaxLayer.tsx";
import AccordionLayerCourses from "../components/AccordionLayerCourses.tsx";
import {useMediaQuery} from "@mui/material";

const CoursePage = () => {
  const isXs = useMediaQuery("(max-width: 600px)");
  const isSm = useMediaQuery("(max-width: 900px)");
  const isMd = useMediaQuery("(max-width: 1280px)");

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [pageCount, setPageCount] = useState(3); // Default page count

  useEffect(() => {
    if (contentRef.current) {

      const contentHeight = contentRef.current.offsetHeight;
      const windowHeight = window.innerHeight;


      const newPageCount = contentHeight / windowHeight + 0.5;
      setPageCount(newPageCount);
    }
  }, [isXs, isSm, isMd]);

  return (
      <div ref={contentRef}>
        <Parallax pages={pageCount} className='top-2 left-0'>
          <KoelnParallaxLayer/>
          <AccordionLayerCourses/>
        </Parallax>
      </div>
  );
};

export default CoursePage;
