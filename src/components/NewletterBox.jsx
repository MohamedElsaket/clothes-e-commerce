import BlackButton from "../common/BlackButton";

const NewletterBox = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now And Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="mail"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter Your Email"
        />
        <BlackButton>Subscribe</BlackButton>
      </form>
    </div>
  );
};

export default NewletterBox;
