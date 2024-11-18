import Image from "next/image";
import form from "../../../public/formbackground.svg";
import formImg from "../../assets/formasimg.svg";
import arrowicon from "../../assets/formarrow2.svg";
import cancelBtn from "../../assets/xbtn.svg";

const Form = ({ onClose }) => {
   // Prevent event propagation when clicking inside the form
   const handleFormClick = (event) => {
    event.stopPropagation();
  };
  
  return (
    <section
      style={{ backgroundImage: `url(${form.src})` }}
      className="bg-cover text-white rounded-xl shadow-lg w-[692px] h-[423.22px] mx-auto max-sm:w-[80%] max-sm:h-[550px]"
    >
      <form className="bg-white/5 flex justify-center items-center gap-10 max-sm:block max-w-xl h-[324.41px] max-sm:h-[450px] mx-auto relative top-12 rounded-xl max-sm:w-[80%]">
        <div className="text-white pl-8 mt-2 max-sm:pl-0">
          <h1 className="font-tertiary font-semibold text-3xl max-sm:text-xl max-sm:text-center max-sm:pt-5">
            Join Us Today!
          </h1>
          <p className="text-xs font-secondary pt-4 pb-4 font-medium text-white/80 max-sm:text-center">
            Take the First Step Towards Your Future Join Our Community of
            Lifelong Learners!
          </p>
          <Image
            src={formImg}
            alt="formImg"
            className="object-cover max-w-fit max-sm:mx-auto max-sm:w-[70%]"
          />
        </div>

        <div className="mt-20 max-sm:mt-0 max-sm:relative bottom-10">
          <button
            type="button"
            onClick={onClose}
            className="relative bottom-20 left-48 max-sm:pt-8 max-sm:left-60 max-sm:bottom-72"
          >
            <Image src={cancelBtn} alt="cancelbtn" className="box-border" />
          </button>

          <input
            type="text"
            placeholder="Enter your name"
            className="font-secondary text-card bg-white/5 py-2 pr-24 pl-2 rounded-sm mb-5 border-2 border-white/5 max-sm:mx-auto max-sm:mt-14 mr-5 max-sm:relative sm-custom:left-4 sm-middle:left-0"
          />

          <input
            type="text"
            placeholder="Email"
            className="font-secondary text-card bg-white/5 py-2 pr-24 pl-2 rounded-sm mb-5 border-2 border-white/5  max-sm:mx-auto mr-8 max-sm:relative sm-custom:left-8 sm-middle:left-4"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="font-secondary text-card bg-white/5 py-2 pr-24 pl-2 rounded-sm mb-5 border-2 border-white/5 max-sm:mx-auto max-sm:relative sm-custom:left-8 sm-middle:left-4"
          />

          <button className="flex items-center justify-center space-x-36 px-2 py-1 rounded-full bg-white text-black max-sm:mx-auto">
            <span className="flex items-center justify-center">
              <Image src={arrowicon} alt="arrow" width={19} height={19} />
            </span>
            <span className="font-secondary text-card relative right-20 box-border">
              Enroll now
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

