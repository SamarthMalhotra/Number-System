import { Link } from "react-router-dom";
import "./Head.css";
import { motion } from "motion/react";
export default function Head() {
  return (
    <div
      className=" d-flex
  flex-column
  flex-lg-row
  align-items-lg-center
  justify-content-center
  gap-lg-5
  gap-3
  mainBox
  "
    >
      {""}
      <motion.div
        initial={{
          x: -600,
          y: [0, 0, -10, 0, 10],
        }}
        transition={{
          x: { duration: 0.25, ease: "easeIn" },
          opacity: { duration: 0.4 },
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          },
        }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -20, 0, 20, 0],
        }}
        className="card cards ml-lg-3 p-lg-2"
      >
        <img
          src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765533646/Decimal_to_Binary_hksndd.png"
          className="card-img-top"
          alt="Decimal to Binary"
        />
        <div className="card-body">
          <h5 className="card-title text-dark">Decimal to Binary Conversion</h5>
          <div className="mt-2 p-2">
            <Link to="/binary" className="btn btn-primary cardBtn">
              Try it
            </Link>
            <Link to="/docs" className="btn btn-primary cardBtn">
              Documentation
            </Link>
          </div>
        </div>
      </motion.div>
      {""}
      <motion.div
        initial={{
          y: [-800, 0, -20, 0, 20],
        }}
        transition={{
          x: { duration: 0.25, ease: "easeIn" },
          opacity: { duration: 0.4 },
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          },
        }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -20, 0, 20, 0],
        }}
        className="card ml-lg-3 p-lg-2 cards"
      >
        <img
          src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765533647/D-O-_hnioul.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-dark">Decimal to Octol Conversion</h5>
          <div className="mt-2 p-2">
            <Link to="/octal" className="btn btn-primary cardBtn">
              Try it
            </Link>
            <Link to="/docs" className="btn btn-primary cardBtn">
              Documentation
            </Link>
          </div>
        </div>
      </motion.div>
      {""}
      <motion.div
        initial={{
          x: 800,
          y: [0, 0, -20, 0, 20],
        }}
        transition={{
          x: { duration: 0.25, ease: "easeIn" },
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          },
          opacity: { duration: 0.4 },
        }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -20, 0, 20, 0],
        }}
        className="card cards ml-lg-3 p-lg-2"
      >
        <img
          src="https://res.cloudinary.com/duryxhwcp/image/upload/v1765533647/D-H-_ij5cyd.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-light" style={{ borderRadius: "10px" }}>
          <h5 className="card-title text-text">
            Decimal to Hexadecimal Conversion
          </h5>
          <div className="ml-lg-3 p-lg-2 ">
            {" "}
            <Link to="/hexadecimal" className="btn btn-primary cardBtn">
              Try it
            </Link>
            <Link to="/docs" className="btn btn-primary cardBtn">
              Documentation
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
